//import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NewsLetter from './components/Newsletter';
import Cards from './components/Cards';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <NewsLetter />
      <Cards />
    </>
  )
}

export default App
