import { useEffect, useMemo, useState } from "react";

const charset = " .:;+=*#%@";

export default function ASCIIText({
  text = "Guilherme Dias",
  enableWaves = true,
  asciiFontSize = 13,
  className = "",
}) {
  const originalChars = useMemo(() => Array.from(text), [text]);
  const [chars, setChars] = useState(originalChars);

  useEffect(() => {
    setChars(originalChars);

    if (!enableWaves || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let frame = 0;
    const interval = setInterval(() => {
      frame += 1;
      setChars(
        originalChars.map((char, index) => {
          if (char === " ") return char;
          const wave = Math.sin(frame * 0.42 + index * 0.9);
          if (wave > 0.72) {
            const next = Math.abs(Math.floor(wave * charset.length + index + frame)) % charset.length;
            return charset[next];
          }
          return char;
        })
      );

      setTimeout(() => setChars(originalChars), 120);
    }, 620);

    return () => clearInterval(interval);
  }, [enableWaves, originalChars]);

  return (
    <span
      className={`ascii-text ${className}`}
      aria-label={text}
      style={{ "--ascii-font-size": `${asciiFontSize}px` }}
    >
      {chars.map((char, index) => (
        <span
          key={`${index}-${originalChars[index]}`}
          aria-hidden="true"
          className={char === " " ? "ascii-space" : "ascii-char"}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
