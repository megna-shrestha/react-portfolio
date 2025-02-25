import logo from './logo.svg';
import './App.css';
import { NavBar } from './Component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './Component/Banner';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
    </div>
  );
}

export default App;
