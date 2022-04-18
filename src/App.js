
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

var isRegistered=true;


function App() {

 
  return (
    <div className="App">
     { isRegistered? <Login /> : <Register />}
    </div>
  );
}

export default App;
