import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero'
import Service from './components/Section/Service'
import Choice from './components/Section/Choice'
import Section1 from './components/Hero/Section1'

function App() {
  return (
    <>
      <Hero/>
      {/* <Section/> */}
      <Choice/>
      <Section1 />
      <Service />
    </>
  );
}

export default App;
