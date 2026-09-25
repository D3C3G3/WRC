import { useState } from "react";
import { CompareCar } from "./CompareCar";
import { Comparison } from "./Comparison";

export function CarComparator({ cars, carAId, carBId, setCarAId, setCarBId, headingRef }) {
  const [announcement, setAnnouncement] = useState("");
  const carA = cars.find((car) => car.id === carAId);
  const carB = cars.find((car) => car.id === carBId);

  if (!carA || !carB) {
    return <section className="compare" aria-labelledby="compare-title"><h2 ref={headingRef} id="compare-title" tabIndex={-1}>Compara las máquinas</h2><p role="status">No se pueden cargar los coches seleccionados.</p></section>;
  }

  function changeCarA(id) {
    if (id === carBId) return;
    const next = cars.find((car) => car.id === id);
    if (!next) return;
    setCarAId(id);
    setAnnouncement(`Primer coche cambiado a ${next.manufacturer} ${next.model}.`);
  }

  function changeCarB(id) {
    if (id === carAId) return;
    const next = cars.find((car) => car.id === id);
    if (!next) return;
    setCarBId(id);
    setAnnouncement(`Segundo coche cambiado a ${next.manufacturer} ${next.model}.`);
  }

  return (
    <section className="compare" aria-labelledby="compare-title">
      <header className="compare__header"><p>DOS GENERACIONES. UN OBJETIVO.</p><h2 ref={headingRef} id="compare-title" tabIndex={-1}>Compara las máquinas</h2></header>
      <div className="compare__cars">
        <CompareCar position="A" car={carA} cars={cars} excludedId={carBId} onChange={changeCarA} />
        <div className="compare__vs" aria-hidden="true">VS</div>
        <CompareCar position="B" car={carB} cars={cars} excludedId={carAId} onChange={changeCarB} />
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
      <Comparison carA={carA} carB={carB} />
      <p className="compare__note">Las especificaciones mostradas son representativas y pueden variar según temporada y homologación.</p>
    </section>
  );
}
