import './App.css';
import CardList from './components/CardList';
import Counter from './components/Counter';
import Header from './components/Header';
import PeopleList from './components/PeopleList';

const arr = ['red', 'green', 'blue']

const App = () => {
  console.log('App ivyko');

  const handleClick = () => {
    // alert('paspaudei');
    console.count('paspaudei')
  }

  // toks pat kaip virsuj
  // function handleClick() {
  //   console.count('paspaudei')
  // }

  return (
    <div>
      <Header />
      <h1>App</h1>
      <PeopleList list={arr} />
      {/* <CardList list={arr} />
      <button onClick={handleClick} >Show alert</button> */}
      {/* <Counter />
      <Counter />
      <Counter /> */}
    </div>
  );
};
export default App;