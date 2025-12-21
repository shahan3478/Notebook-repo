import Home from './Components/Home';
import './App.css';
import Navbar from './Components/Navbar'
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <>
    <NoteState>
   <Router>
    <Navbar/>
    <Alert message="This is amazing react Note app"/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/Signup" element={<Signup />} /> */}
      </Routes>
      </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
