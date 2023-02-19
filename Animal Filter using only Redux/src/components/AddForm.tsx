import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  changeModalState,
  addAnimal,
  updateSpecies,
  Animal,
} from "../features/animalSlice";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Input from "./Input";
import Select from "./Select";

type FormDataType = Animal & {
  specieSelect: string;
};

const initAnimalData = {
  name: "",
  image: "",
  specie: "",
  specieSelect: "",
};

const AddForm = () => {
  const [animalData, setAnimalData] = useState<FormDataType>(initAnimalData);
  //   const [animalsLocal, setAnimalsLocal] = useLocalStorage<Animal[]>('animals', [])
  //   const [speciesLocal, setSpeciesLocal] = useLocalStorage<string[]>('species', [])
  const { species } = useAppSelector((state) => state.animals);
  const dispatch = useAppDispatch();

  const pushNewAnimal = () => {
    const { name, image, specie, specieSelect } = animalData;
    const newSpecie = specieSelect ? specieSelect : specie;
    const newAnimal = { name, image, specie: newSpecie };

    if (!species.includes(newSpecie)) {
      dispatch(updateSpecies(newSpecie));
      // setSpeciesLocal([...speciesLocal, newSpecie])
      let specielsLocal = localStorage.getItem("species");
      if (specielsLocal === null) {
        specielsLocal = "[]";
      }

      localStorage.setItem(
        "species",
        JSON.stringify([...JSON.parse(specielsLocal), newSpecie.toLowerCase()])
      );
    }

    let animalsLocal = localStorage.getItem("animals");
    if (animalsLocal === null) {
      animalsLocal = "[]";
    }

    localStorage.setItem(
      "animals",
      JSON.stringify([...JSON.parse(animalsLocal), newAnimal])
    );

    // setAnimalsLocal([...animalsLocal, newAnimal])
    dispatch(addAnimal(newAnimal));
    dispatch(changeModalState());
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        pushNewAnimal();
      }}
    >
      <h3 className="form__heading">Add new animal</h3>
      <Input
        label="Name"
        placeholder="Enter animal name ..."
        required={true}
        onChange={(e) => {
          setAnimalData({ ...animalData, name: e.currentTarget.value });
        }}
      />

      <Input
        label="Image"
        placeholder="Enter image url ..."
        required={true}
        onChange={(e) => {
          setAnimalData({ ...animalData, image: e.currentTarget.value });
        }}
      />

      {species.length ? (
        <Select
          label="Select specie"
          options={species}
          onChange={(e) => {
            setAnimalData({
              ...animalData,
              specieSelect: e.currentTarget.value,
            });
          }}
        />
      ) : (
        ""
      )}

      <Input
        label={!species.length ? "Specie" : ""}
        placeholder="Enter animal specie ..."
        required={species.length ? false : true}
        separator={species.length ? "or enter new one" : ""}
        onChange={(e) => {
          setAnimalData({ ...animalData, specie: e.currentTarget.value });
        }}
      />

      <div className="form__footer">
        <button className="form__btn form__btn">Submit</button>
        <button
          type="button"
          className="form__btn form__btn--close"
          onClick={() => {
            dispatch(changeModalState());
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddForm;
