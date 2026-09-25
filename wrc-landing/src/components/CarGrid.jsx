import { CarCard } from "./CarCard";

export function CarGrid({ cars, onCompare }) {
  if (!cars.length) return <div className="car-grid-empty" role="status"><h3>No hay coches con estos filtros</h3><p>Prueba con otra generación.</p></div>;
  return <div className="car-grid">{cars.map((car) => <CarCard key={car.id} car={car} onCompare={onCompare} />)}</div>;
}
