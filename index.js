const text = `7
lobo guara
do mato
robson

cachorro
schnauzer
schnepps schnitzel

cachorro
vira latas
valdecir

cachorro
vira latas
wanderson luiz

gato
siames
soraia maria

cachorro
pastor alemao
luan paulo

cachorro
bulldog
luciano fabio romario mateus astrogildo bruno bianca

7
lobo guara
do mato
robson

cachorro
schnauzer
schnepps schnitzel

cachorro
vira latas
valdecir

cachorro
vira latas
wanderson luiz

gato
siames
soraia maria

cachorro
pastor alemao
luan paulo

cachorro
bulldog
luciano fabio romario mateus astrogildo bruno bianca
`;

const lines = text.split('\n');

while (true) {
  const animals = [];
  const numberOfAnimals = lines.shift();

  if (!numberOfAnimals) break;

  for (let i = 0; i < numberOfAnimals; i++) {
    const animal = {
      type: lines.shift(),
      breed: lines.shift(),
      name: lines.shift(),
    };

    animals.push(animal);

    lines.shift();
  }

  console.log(
    animals
      .filter(animal => animal.type === 'cachorro')
      .map(animal => ({
        ...animal,
        names: animal.name.split(' '),
      }))
      .filter(animal => animal.names.length >= 2)
      .map(animal => ({
        ...animal,
        firstBreedChar: animal.breed[0],
        firstNameChars: animal.names.map(name => name[0]),
      }))
      .filter(animal => animal.firstNameChars.includes(animal.firstBreedChar))
      .length
  );
}
