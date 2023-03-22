import {useState} from 'react';
import UiCard from "./ui/UiCard";

const Counter = () => {
    console.log('Counter mounted');
    // logic
    // paprastas kintamasis neveikia jei reikia kintamos reiksmes JSX
  
    // const [kintamojo pavadinimas, funkcija nustatyti nauja reiksme] = useState(pradine kintamojo reiksme)
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        console.log('handleIncrement')
        // kai naujas state priklauso nuo pries tai buvusio turetume atnaujinti su funkcija
        setCount(count + 1);
    }

    const handleDecrement = () => {
        // mazetu zemyn
        setCount(count - 1);
    }
    const handleChange = (howMuch) => {
        // 3 vienoje funkcijoje
        if (howMuch === 'reset') {
            setCount(0)
            return
        } 
        setCount(count + howMuch)
        

    }
    // reset
    // const handleReset = () => {
    //     // reset
    //     setCount(0)

    // }

    return (
     <UiCard>
        <h3 >Counter</h3>
        <h2>{count}</h2>
        <button onClick={handleIncrement}>Plus</button>
        <button onClick={handleDecrement}>Minus</button>
        <button onClick={() => handleChange(5)}>Add 5</button>
        <button onClick={() => handleChange(10)}>Add 10</button>
        <button onClick={() => handleChange('reset')}>Reset Counter</button>
     </UiCard>
    )
}
export default Counter;