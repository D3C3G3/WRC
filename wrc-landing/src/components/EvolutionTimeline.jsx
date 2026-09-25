import { useEffect, useRef, useState } from "react";
import { CarImage } from "./CarImage";

export function EvolutionTimeline({ entries = [], onCompare }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef([]);

  useEffect(() => {
    if (entries.length > 0 && activeIndex >= entries.length) setActiveIndex(0);
  }, [activeIndex, entries.length]);

  if (!entries.length) return null;
  const active = entries[activeIndex] ?? entries[0];

  function select(index, moveFocus = false) {
    setActiveIndex(index);
    if (moveFocus) requestAnimationFrame(() => tabsRef.current[index]?.focus());
  }

  function handleKeyDown(event, index) {
    let nextIndex;
    switch (event.key) {
      case "ArrowRight": case "ArrowDown": nextIndex = (index + 1) % entries.length; break;
      case "ArrowLeft": case "ArrowUp": nextIndex = (index - 1 + entries.length) % entries.length; break;
      case "Home": nextIndex = 0; break;
      case "End": nextIndex = entries.length - 1; break;
      default: return;
    }
    event.preventDefault();
    select(nextIndex, true);
  }

  return (
    <section className="timeline" aria-labelledby="timeline-title">
      <header className="timeline__header"><p>25+ AÑOS DE EVOLUCIÓN</p><h2 id="timeline-title">De World Rally Car a Rally1</h2></header>
      <div className="timeline__tabs" role="tablist" aria-label="Evolución de los coches WRC">
        {entries.map((entry, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={entry.id}
              ref={(element) => { tabsRef.current[index] = element; }}
              id={`timeline-tab-${entry.id}`}
              type="button"
              role="tab"
              tabIndex={selected ? 0 : -1}
              aria-selected={selected}
              aria-controls="timeline-panel"
              aria-label={`${entry.startYear}: ${entry.manufacturer} ${entry.model}`}
              onClick={() => select(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span>{entry.startYear}</span><span className="timeline__dot" aria-hidden="true" /><span>{entry.shortName}</span>
            </button>
          );
        })}
      </div>
      <article id="timeline-panel" className="timeline__panel" role="tabpanel" aria-labelledby={`timeline-tab-${active.id}`} tabIndex={0}>
        <CarImage src={active.image} alt={active.alt} className="timeline__image" />
        <div className="timeline__content">
          <p className="timeline__year">{active.startYear}</p>
          <h3>{active.manufacturer} {active.model}</h3>
          <p>{active.description}</p>
          <dl className="timeline__specs">
            <div><dt>Motor</dt><dd>{active.engine}</dd></div>
            <div><dt>Potencia aprox.</dt><dd>~{active.power} CV</dd></div>
            <div><dt>Tracción</dt><dd>{active.drivetrain}</dd></div>
          </dl>
          {onCompare && <button type="button" onClick={() => onCompare(active.id)}>Comparar este coche</button>}
        </div>
      </article>
    </section>
  );
}
