import AddForm from "./components/AddForm";
import AnimalsGrid from "./components/AnimalsGrid";
import { changeModalState } from './features/animalSlice';
import { useAppSelector, useAppDispatch } from "./hooks/hooks";

function App() {
  const dispatch = useAppDispatch()
  const { animals, modalState } = useAppSelector((state) => state.animals);

  return (
    <div className="App">
      <div className="content">
        <div className="about">
          <h1 className="about__heading">Animals list</h1>
          <p className="about__text">
            This is a simple exercise on React Redux combined with Local Storage
          </p>
          <button 
            className="button"
            onClick={() => {
              dispatch(changeModalState())
            }}
          >
            Add new animal
          </button>
        </div>

        {
          animals.length ? 
            <AnimalsGrid animals={ animals } /> :
            <p>There are no animals to show</p>
        }
      </div>

      {modalState && (
        <div className="modal">
          <AddForm />
        </div>
      )}
      
    </div>
  );
}

export default App;
