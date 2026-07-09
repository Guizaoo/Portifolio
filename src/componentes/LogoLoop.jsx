import React from "react";
import { Link } from "react-router-dom";

export default function LogoLoop({
  logos,
  speed = 90,
  logoHeight = 48,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = "#09090b",
  ariaLabel = "Links em destaque",
  className = "",
}) {
  const copies = logos;
  const duration = Math.max(12, Math.round(2600 / Math.max(speed, 1)));

  return (
    <div
      className={`logo-loop logo-loop-static relative overflow-hidden ${className}`}
      role="region"
      aria-label={ariaLabel}
      style={{
        "--logo-loop-duration": `${duration}s`,
        "--logo-loop-gap": `${gap}px`,
        "--logo-loop-height": `${logoHeight}px`,
        "--logo-loop-fade": fadeOutColor,
        "--logo-loop-play-state": hoverSpeed === 0 ? "running" : "running",
      }}
    >
      {fadeOut && (
        <>
          <span aria-hidden="true" className="logo-loop-fade logo-loop-fade-left" />
          <span aria-hidden="true" className="logo-loop-fade logo-loop-fade-right" />
        </>
      )}

      <ul className="logo-loop-track" aria-hidden={false}>
        {copies.map((item, index) => {
          const content = (
            <span className={`logo-loop-item ${scaleOnHover ? "logo-loop-item-scale" : ""}`}>
              <span className="logo-loop-icon" aria-hidden="true">
                {item.icon}
              </span>
            </span>
          );

          return (
            <li key={`${item.title}-${index}`} className="logo-loop-list-item">
              {item.to ? (
                <Link to={item.to} aria-label={item.title} className="logo-loop-link">
                  {content}
                </Link>
              ) : (
                <a
                  href={item.href}
                  aria-label={item.title}
                  className="logo-loop-link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
