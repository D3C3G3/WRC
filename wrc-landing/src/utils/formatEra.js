export function formatEra(car) {
  if (!car) return "";
  return car.endYear ? `${car.startYear}–${car.endYear}` : `${car.startYear}–actualidad`;
}
