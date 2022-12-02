import "./App.css";
import Nav from "./NavComponent/Nav";
import Form from "./FormComponent/Form";
import Maine from "./MaineComponent/Maine";
import About from "./AboutComponent/About";
import Register from "./RegisterComponent/Register";
import Login from "./LoginComponent/Login";
import Footer from "./FooterComponent/Footer";
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element = {<Maine/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/form" element = {<Form/>}></Route>
        <Route path="/register" element = {<Register/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
