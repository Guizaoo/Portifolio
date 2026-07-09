import { useEffect, useMemo, useRef, useState } from "react";

export default function TextType({
  text,
  as: Component = "span",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  cursorCharacter = "|",
  cursorClassName = "",
  startOnVisible = false,
}) {
  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible) return undefined;

    const currentText = texts[textIndex] || "";
    let timeout;

    if (!isDeleting && charIndex === 0 && displayedText === "") {
      timeout = setTimeout(() => setCharIndex(1), initialDelay);
    } else if (!isDeleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex));
        setCharIndex((current) => current + 1);
      }, typingSpeed);
    } else if (!isDeleting && texts.length > 1) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((current) => current.slice(0, -1));
      }, deletingSpeed);
    } else if (isDeleting) {
      if (textIndex === texts.length - 1 && !loop) return undefined;
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((current) => (current + 1) % texts.length);
        setCharIndex(0);
      }, 180);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    deletingSpeed,
    displayedText,
    initialDelay,
    isDeleting,
    isVisible,
    loop,
    pauseDuration,
    textIndex,
    texts,
    typingSpeed,
  ]);

  return (
    <Component ref={containerRef} className={`inline whitespace-pre-wrap ${className}`}>
      <span>{displayedText}</span>
      {showCursor && (
        <span className={`text-type-cursor ml-1 inline-block ${cursorClassName}`}>
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
}
