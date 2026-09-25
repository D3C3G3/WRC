import { CarImage } from "./CarImage";
import { formatEra } from "../utils/formatEra";

export function CarCard({ car, onCompare }) {
  return (
    <article className="car-card" id={`car-${car.id}`}>
      <CarImage src={car.image} alt={car.alt} className="car-card__image" />
      <div className="car-card__content">
        <div className="car-card__meta"><span>{car.generation}</span><span>{formatEra(car)}</span></div>
        <h3 className="car-card__title"><span>{car.manufacturer}</span><strong>{car.model}</strong></h3>
        <p className="car-card__description">{car.description}</p>
        <dl className="car-card__specs">
          <div><dt>Potencia aprox.</dt><dd>~{car.power} CV</dd></div>
          <div><dt>Motor</dt><dd>{car.engine}</dd></div>
          <div><dt>Tracción</dt><dd>{car.drivetrain}</dd></div>
        </dl>
        {onCompare && <button type="button" className="car-card__action" onClick={() => onCompare(car.id)}>Comparar coche <span aria-hidden="true">→</span></button>}
      </div>
    </article>
  );
}
