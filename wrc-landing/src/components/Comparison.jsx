import { formatEra } from "../utils/formatEra";

export function Comparison({ carA, carB }) {
  const metrics = [
    ["Motor", carA.engine, carB.engine],
    ["Cilindrada", `${carA.displacement} cm³`, `${carB.displacement} cm³`],
    ["Potencia aproximada", `~${carA.power} CV`, `~${carB.power} CV`],
    ["Tracción", carA.drivetrain, carB.drivetrain],
    ["Transmisión", carA.transmission, carB.transmission],
    ["Generación", carA.generation, carB.generation],
    ["Era", formatEra(carA), formatEra(carB)]
  ];

  return (
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <caption className="sr-only">Comparación técnica entre {carA.manufacturer} {carA.model} y {carB.manufacturer} {carB.model}</caption>
        <thead><tr><th scope="col">Característica</th><th scope="col">{carA.manufacturer} {carA.model}</th><th scope="col">{carB.manufacturer} {carB.model}</th></tr></thead>
        <tbody>{metrics.map(([label, valueA, valueB]) => <tr key={label}><th scope="row">{label}</th><td>{valueA}</td><td>{valueB}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
