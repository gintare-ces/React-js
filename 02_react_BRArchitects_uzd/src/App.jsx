
import './styles/App.css'
import './styles/reset.css'

import Header from './components/layout/Header';
import Hero from './components/Hero';
import Projects from './components/projects/Projects';
import About from './components/about/About';

const prArr = [
  { id: 1, title: 'Sunflower Cottage', img: 'house1.jpeg' },
  { id: 2, title: 'Brick House', img: 'house2.jpg' },
  { id: 3, title: 'Blue House', img: 'house3.jpg' },
  { id: 4, title: 'Straw House', img: 'house4.jpg' },
  { id: 'h1', title: 'Brick House', img: 'bg' },
  { id: 'h2', title: 'Blue House', img: 'bg' },
  { id: 'h3', title: 'Red House', img: 'bg' },
  { id: 'h4', title: 'Straw House', img: 'bg' },
]

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects list={prArr}/>
      <About />
    </div>
  )
}

export default App
