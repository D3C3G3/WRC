import { useMemo, useRef, useState } from "react";
import { carsWithMedia as cars } from "./data/cars";
import { CarFilters } from "./components/CarFilters";
import { CarGrid } from "./components/CarGrid";
import { EvolutionTimeline } from "./components/EvolutionTimeline";
import { CarComparator } from "./components/CarComparator";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [carAId, setCarAId] = useState("gr-yaris-rally1");
  const [carBId, setCarBId] = useState("peugeot-206-wrc");
  const compareHeadingRef = useRef(null);

  const visibleCars = useMemo(() => filter === "all" ? cars : cars.filter((car) => car.group === filter), [filter]);
  const timelineCars = useMemo(() => [...cars].sort((a, b) => a.startYear - b.startYear), []);

  function focusComparator() {
    requestAnimationFrame(() => {
      const heading = compareHeadingRef.current;
      if (!heading) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      heading.scrollIntoView({ block: "start", behavior: reducedMotion ? "auto" : "smooth" });
      heading.focus({ preventScroll: true });
    });
  }

  function sendToCompare(carId) {
    if (!cars.some((car) => car.id === carId)) return;
    if (carId === carAId) { focusComparator(); return; }
    if (carId === carBId) {
      setCarAId(carBId);
      setCarBId(carAId);
      focusComparator();
      return;
    }
    setCarAId(carId);
    focusComparator();
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
      <main id="main-content">
        <section className="machines" aria-labelledby="cars-title">
          <header className="machines__header"><p>10 COCHES · VARIAS GENERACIONES</p><h1 id="cars-title">The Machines</h1></header>
          <CarFilters cars={cars} value={filter} onChange={setFilter} />
          <CarGrid cars={visibleCars} onCompare={sendToCompare} />
        </section>
        <EvolutionTimeline entries={timelineCars} onCompare={sendToCompare} />
        <CarComparator cars={cars} carAId={carAId} carBId={carBId} setCarAId={setCarAId} setCarBId={setCarBId} headingRef={compareHeadingRef} />
      </main>
    </>
  );
}
