export const cars = [
  { id: "gr-yaris-rally1", manufacturer: "Toyota", model: "GR Yaris Rally1", shortName: "GR Yaris", country: "Japón", generation: "Rally1", group: "rally1", startYear: 2022, endYear: null, engine: "1.6 Turbo", displacement: 1600, drivetrain: "AWD", transmission: "Secuencial, 5 velocidades", power: 370, fuel: "Combustible sostenible", description: "Compacto, radical y desarrollado para atacar cada superficie del calendario." },
  { id: "i20-n-rally1", manufacturer: "Hyundai", model: "i20 N Rally1", shortName: "i20 N", country: "Corea del Sur", generation: "Rally1", group: "rally1", startYear: 2022, endYear: null, engine: "1.6 Turbo", displacement: 1600, drivetrain: "AWD", transmission: "Secuencial, 5 velocidades", power: 370, fuel: "Combustible sostenible", description: "Una máquina desarrollada para combinar precisión, tracción y estabilidad a alta velocidad." },
  { id: "puma-rally1", manufacturer: "Ford / M-Sport", model: "Puma Rally1", shortName: "Puma", country: "Reino Unido", generation: "Rally1", group: "rally1", startYear: 2022, endYear: null, engine: "1.6 Turbo", displacement: 1600, drivetrain: "AWD", transmission: "Secuencial, 5 velocidades", power: 370, fuel: "Combustible sostenible", description: "La interpretación de M-Sport para la era Rally1, creada para asfalto, tierra y nieve." },
  { id: "toyota-yaris-wrc", manufacturer: "Toyota", model: "Yaris WRC", shortName: "Yaris WRC", country: "Japón", generation: "World Rally Car", group: "2017-21", startYear: 2017, endYear: 2021, engine: "1.6 Turbo", displacement: 1600, drivetrain: "AWD", transmission: "Secuencial, 6 velocidades", power: 380, fuel: "Gasolina de competición", description: "Una de las máquinas que definieron la espectacular generación WRC introducida en 2017." },
  { id: "citroen-c3-wrc", manufacturer: "Citroën", model: "C3 WRC", shortName: "C3 WRC", country: "Francia", generation: "World Rally Car", group: "2017-21", startYear: 2017, endYear: 2019, engine: "1.6 Turbo", displacement: 1600, drivetrain: "AWD", transmission: "Secuencial, 6 velocidades", power: 380, fuel: "Gasolina de competición", description: "Aletas gigantes, gran alerón trasero y una interpretación radical del reglamento de 2017." },
  { id: "ford-fiesta-wrc", manufacturer: "Ford / M-Sport", model: "Fiesta WRC", shortName: "Fiesta WRC", country: "Reino Unido", generation: "World Rally Car", group: "2017-21", startYear: 2017, endYear: 2021, engine: "1.6 Turbo", displacement: 1600, drivetrain: "AWD", transmission: "Secuencial, 6 velocidades", power: 380, fuel: "Gasolina de competición", description: "Un compacto transformado en una feroz máquina de rally y protagonista de su generación." },
  { id: "volkswagen-polo-r-wrc", manufacturer: "Volkswagen", model: "Polo R WRC", shortName: "Polo R", country: "Alemania", generation: "World Rally Car", group: "legends", startYear: 2013, endYear: 2016, engine: "1.6 Turbo", displacement: 1600, drivetrain: "AWD", transmission: "Secuencial, 6 velocidades", power: 315, fuel: "Gasolina de competición", description: "Compacto y extremadamente efectivo, una referencia competitiva de la década de 2010." },
  { id: "citroen-xsara-wrc", manufacturer: "Citroën", model: "Xsara WRC", shortName: "Xsara", country: "Francia", generation: "World Rally Car", group: "legends", startYear: 2001, endYear: 2006, engine: "2.0 Turbo", displacement: 1998, drivetrain: "AWD", transmission: "Secuencial, 6 velocidades", power: 315, fuel: "Gasolina de competición", description: "Una de las siluetas más reconocibles de los años 2000 y una máquina extraordinariamente eficaz." },
  { id: "peugeot-206-wrc", manufacturer: "Peugeot", model: "206 WRC", shortName: "206 WRC", country: "Francia", generation: "World Rally Car", group: "legends", startYear: 1999, endYear: 2003, engine: "2.0 Turbo", displacement: 1997, drivetrain: "AWD", transmission: "Secuencial, 6 velocidades", power: 300, fuel: "Gasolina de competición", description: "Pequeño por fuera, formidable en los tramos y convertido en un icono de su generación." },
  { id: "subaru-impreza-wrc", manufacturer: "Subaru", model: "Impreza WRC", shortName: "Impreza", country: "Japón", generation: "World Rally Car", group: "legends", startYear: 1997, endYear: 2008, engine: "2.0 Bóxer Turbo", displacement: 1994, drivetrain: "AWD", transmission: "Secuencial", power: 300, fuel: "Gasolina de competición", description: "Motor bóxer, tracción integral y una silueta inseparable de la historia moderna del rally." }
];

const media = {
  "gr-yaris-rally1": ["gr-yaris-rally1.webp", "Toyota GR Yaris Rally1 compitiendo en un tramo de rally"],
  "i20-n-rally1": ["i20-n-rally1.webp", "Hyundai i20 N Rally1 compitiendo en un tramo de rally"],
  "puma-rally1": ["puma-rally1.webp", "Ford Puma Rally1 de M-Sport compitiendo en un tramo de rally"],
  "toyota-yaris-wrc": ["toyota-yaris-wrc.webp", "Toyota Yaris WRC de la generación World Rally Car de 2017"],
  "citroen-c3-wrc": ["citroen-c3-wrc.webp", "Citroën C3 WRC con aerodinámica de competición"],
  "ford-fiesta-wrc": ["ford-fiesta-wrc.webp", "Ford Fiesta WRC de M-Sport compitiendo en rally"],
  "volkswagen-polo-r-wrc": ["volkswagen-polo-r-wrc.webp", "Volkswagen Polo R WRC de competición"],
  "citroen-xsara-wrc": ["citroen-xsara-wrc.webp", "Citroën Xsara WRC de principios de los años 2000"],
  "peugeot-206-wrc": ["peugeot-206-wrc.webp", "Peugeot 206 WRC con carrocería ensanchada de competición"],
  "subaru-impreza-wrc": ["subaru-impreza-wrc.webp", "Subaru Impreza WRC de la era World Rally Car"]
};

export const carsWithMedia = cars.map((car) => {
  const [fileName, alt] = media[car.id];
  return { ...car, image: `/images/cars/${fileName}`, alt };
});
