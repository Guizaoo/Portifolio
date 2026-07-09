import { useEffect, useMemo, useRef } from "react";

function parseSettings(settings) {
  return new Map(
    settings.split(",").flatMap((setting) => {
      const [axis, value] = setting.trim().replaceAll("'", "").replaceAll('"', "").split(/\s+/);
      return axis && value ? [[axis, Number(value)]] : [];
    })
  );
}

function getFalloff(distance, radius, type) {
  const normalized = Math.min(Math.max(1 - distance / radius, 0), 1);
  if (type === "exponential") return normalized ** 2;
  if (type === "gaussian") return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
  return normalized;
}

export default function VariableProximity({
  label,
  fromFontVariationSettings = "'wght' 650, 'opsz' 12",
  toFontVariationSettings = "'wght' 1000, 'opsz' 40",
  radius = 120,
  falloff = "linear",
  className = "",
}) {
  const rootRef = useRef(null);
  const letterRefs = useRef([]);
  const words = useMemo(() => label.split(" "), [label]);
  const parsedSettings = useMemo(() => {
    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);
    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;

    const updateLetters = (event) => {
      const pointer = event.touches?.[0] ?? event;

      letterRefs.current.forEach((letter) => {
        if (!letter) return;

        const rect = letter.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(pointer.clientX - centerX, pointer.clientY - centerY);

        if (distance >= radius) {
          letter.style.fontVariationSettings = fromFontVariationSettings;
          letter.style.transform = "translateY(0) scale(1)";
          letter.style.color = "";
          return;
        }

        const falloffValue = getFalloff(distance, radius, falloff);
        const settings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const value = fromValue + (toValue - fromValue) * falloffValue;
            return `'${axis}' ${value}`;
          })
          .join(", ");

        letter.style.fontVariationSettings = settings;
        letter.style.transform = `translateY(${-2 * falloffValue}px) scale(${1 + falloffValue * 0.025})`;
        letter.style.color = falloffValue > 0.45 ? "#ffffff" : "";
      });
    };

    const resetLetters = () => {
      letterRefs.current.forEach((letter) => {
        if (!letter) return;
        letter.style.fontVariationSettings = fromFontVariationSettings;
        letter.style.transform = "translateY(0) scale(1)";
        letter.style.color = "";
      });
    };

    root.addEventListener("pointermove", updateLetters);
    root.addEventListener("touchmove", updateLetters, { passive: true });
    root.addEventListener("pointerleave", resetLetters);

    return () => {
      root.removeEventListener("pointermove", updateLetters);
      root.removeEventListener("touchmove", updateLetters);
      root.removeEventListener("pointerleave", resetLetters);
      resetLetters();
    };
  }, [falloff, fromFontVariationSettings, parsedSettings, radius]);

  let globalIndex = 0;

  return (
    <span ref={rootRef} className={`variable-proximity ${className}`} aria-label={label}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="variable-proximity-word">
          {Array.from(word).map((letter) => {
            const currentIndex = globalIndex;
            globalIndex += 1;

            return (
              <span
                key={`${letter}-${currentIndex}`}
                ref={(element) => {
                  letterRefs.current[currentIndex] = element;
                }}
                aria-hidden="true"
                className="variable-proximity-letter"
                style={{ fontVariationSettings: fromFontVariationSettings }}
              >
                {letter}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="variable-proximity-space" aria-hidden="true">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
