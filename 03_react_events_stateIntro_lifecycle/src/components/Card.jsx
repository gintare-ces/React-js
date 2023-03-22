import UiCard from "./ui/UiCard";

import {useState} from 'react';

const Card = (props) => {
    console.log('Card ivyko');

    // sukurti state kintamaji su useState, 'currentClass'
    // pradine reiksme ''
    // sukurti funkcija kuria iskviesim mygtuko paspaudimu
    // fn 
    // jsx dalyje panaudoti 'currentClass' kintamaji klase reiksmes vietoje
    const [currentClass, setCurrentClass] = useState('')
    const [title, setTitle] = useState('Title')

    const handleClass = () => {
        setCurrentClass('special')
    }

    const handleChangeTitle = () => {
        setTitle('Changed Title')
    }
    return (
     <UiCard>
        <h2  onClick={handleChangeTitle} className={currentClass}>{title}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <button onClick={handleClass}>Make special</button>
        <button onClick={handleChangeTitle}>Change Title</button>
     </UiCard>
    )
  };
  export default Card;