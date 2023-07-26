import { Routes,Route } from 'react-router-dom';
import './App.css';
import Registration from './Registration';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
