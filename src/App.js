//import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/functionalcomponents/PropsComponent';
//import StateComponent from './components/class_components/StateComponent';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/components/functionalcomponents/Home";
import About from "../src/components/functionalcomponents/About";
import Projects from "../src/components/functionalcomponents/Projects";
import AwardsAchievments from "../src/components/functionalcomponents/AwardsAchievments";
import Footer from '../src/components/functionalcomponents/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        {/* <PropsComponent Name = "NIKITA N" course = "MERN"/>  */}
        <NavBar/>
        
        <Routes>
          <Route path="/Home" element={<Home/>}> </Route>
          <Route path="/About" element={<About/>}> </Route>
          <Route path="/Projects" element={<Projects />}> </Route>
          <Route path="/AwardsAchievments" element={<AwardsAchievments />}> </Route>



        </Routes>
        <Footer/>
      </BrowserRouter>
      


      {/* <header className="App-header">
        <StateComponent></StateComponent>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
