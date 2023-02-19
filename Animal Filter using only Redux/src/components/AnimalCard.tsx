import { AnimalType } from "./AnimalsGrid";
import { updateAnimals } from "../features/animalSlice";
import { useAppDispatch } from "../hooks/hooks";

const AnimalCard = ({ name, image, specie }: AnimalType) => {
  const dispatch = useAppDispatch();

  const deleteAnimal = (nameS: string, imageS: string, specieS: string) => {
    const animals = JSON.parse(localStorage.getItem("animals") || '[]')

    const filtered = animals.filter(({name, image, specie}: AnimalType) => {      
      return name !== nameS && image !== imageS && specie !== specieS
    })

    dispatch(updateAnimals(filtered))
    localStorage.setItem('animals', JSON.stringify(filtered))
  }

  return (
    <div 
        className="animals__item">
        <img
            src={ image }
            alt={ name }
            className="animals__img"
        />
        <div className="animals__desc">
            <span>{ name }</span>
            <span>{ specie }</span>
        </div>
        <button
          className="animals__delete"
          onClick={() => {
            deleteAnimal(name, image, specie)
          }}
        >x</button>
    </div>
  )
};

export default AnimalCard;
