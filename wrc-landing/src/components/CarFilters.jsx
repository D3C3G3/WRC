import { useMemo } from "react";

const FILTERS = [
  { id: "all", label: "Todos" },
  { id: "rally1", label: "Rally1" },
  { id: "2017-21", label: "2017–21" },
  { id: "legends", label: "Leyendas" }
];

export function CarFilters({ cars, value, onChange }) {
  const counts = useMemo(() => ({
    all: cars.length,
    rally1: cars.filter((car) => car.group === "rally1").length,
    "2017-21": cars.filter((car) => car.group === "2017-21").length,
    legends: cars.filter((car) => car.group === "legends").length
  }), [cars]);

  return (
    <div className="car-filters">
      <div className="filter-list" aria-label="Filtrar coches por generación">
        {FILTERS.map((filter) => (
          <button key={filter.id} type="button" className="filter-chip" aria-pressed={value === filter.id} onClick={() => onChange(filter.id)}>
            <span>{filter.label}</span><span aria-hidden="true">{counts[filter.id]}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">Mostrando {counts[value] ?? 0} coches.</p>
    </div>
  );
}
