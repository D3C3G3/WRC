import { CarImage } from "./CarImage";

export function CompareCar({ position, car, cars, excludedId, onChange }) {
  const selectId = `compare-car-${position.toLowerCase()}`;
  const ordinal = position === "A" ? "primer" : "segundo";

  return (
    <article className="compare-car">
      <CarImage src={car.image} alt={car.alt} className="compare-car__image" />
      <div className="compare-car__content">
        <p className="compare-car__generation">{car.generation}</p>
        <h3 className="compare-car__title"><span>{car.manufacturer}</span><strong>{car.model}</strong></h3>
        <div className="compare-car__field">
          <label htmlFor={selectId}>Cambiar {ordinal} coche</label>
          <select id={selectId} value={car.id} onChange={(event) => onChange(event.target.value)}>
            {cars.map((option) => {
              const excluded = option.id === excludedId;
              return <option key={option.id} value={option.id} disabled={excluded}>{option.manufacturer} {option.model}{excluded ? " (ya seleccionado)" : ""}</option>;
            })}
          </select>
        </div>
      </div>
    </article>
  );
}
