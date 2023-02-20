import AnimalCard from "./AnimalCard";

export type AnimalType = {
  name: string;
  image: string;
  specie: string;
};

type AnimalsProps = {
    animals: AnimalType[]
}

const AnimalsGrid = (animals: AnimalsProps) => {
  const animalsArray = animals.animals

  return (
    <main className="animals">
      {animalsArray.map(({ name, image, specie }, key) => (
        <AnimalCard 
            key={key} 
            name={name} 
            image={image} 
            specie={specie} 
        />
      ))}
    </main>
  );
};

export default AnimalsGrid;
