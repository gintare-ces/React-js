import UiCard from "./ui/UiCard";
import {useState} from 'react';

const Person = (props) => {
    const [mode, setMode] = useState('')

    const [isClicked, setIsClicked] = useState(false)
    const handleMode = () => {
        if (mode === 'lightMode') {
            setMode('darkMode')
        } else {
            setMode('lightMode')
        }
        setIsClicked(isClicked => !isClicked)
    }
  const vyrasArbaMoteris = props.gender === 'female' ? 'Moteris' : 'Vyras'
  return (
    <li className={mode}>
      <UiCard>
        <h3>{props.name}</h3>
        <p>Age:{props.age}</p>
        <p>Gender: {vyrasArbaMoteris}</p>
        <h4>Hobby: {props.hobby}</h4>
        <button onClick={handleMode}>{isClicked ? 'dark mode' : 'light mode'}</button>
      </UiCard>
    </li>
  );
};
export default Person;
