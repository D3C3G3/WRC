import { useEffect, useState } from "react";

export function CarImage({ src, alt = "", eager = false, className = "" }) {
  const [status, setStatus] = useState(src ? "loading" : "error");

  useEffect(() => {
    setStatus(src ? "loading" : "error");
  }, [src]);

  const classes = ["car-image", className].filter(Boolean).join(" ");

  return (
    <div className={classes} data-status={status} aria-busy={status === "loading" || undefined}>
      {status === "loading" && <div className="car-image__skeleton" aria-hidden="true" />}

      {src && status !== "error" && (
        <img
          key={src}
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}

      {status === "error" && (
        <div
          className="car-image__error"
          role="img"
          aria-label={alt ? `${alt}. Imagen no disponible.` : "Imagen del coche no disponible."}
        >
          <CarPlaceholder />
          <span aria-hidden="true">IMAGEN NO DISPONIBLE</span>
        </div>
      )}
    </div>
  );
}

function CarPlaceholder() {
  return (
    <svg className="car-placeholder" viewBox="0 0 320 180" aria-hidden="true" focusable="false">
      <path d="M54 116 76 79c5-9 14-14 25-14h109c10 0 20 5 25 14l21 37" fill="none" stroke="currentColor" strokeWidth="5" />
      <path d="M42 116h226v35H42z" fill="none" stroke="currentColor" strokeWidth="5" />
      <circle cx="90" cy="151" r="19" fill="#111" stroke="currentColor" strokeWidth="5" />
      <circle cx="220" cy="151" r="19" fill="#111" stroke="currentColor" strokeWidth="5" />
    </svg>
  );
}
