import './App.css';
import Header from "./Header";
import Home from './Home';
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import Login from "./Login";

function App() {
  return (
      <div className="App">
        <Header />
        <Home />
{/*
        <switch>
          <Route path="/login">

            <Login />
          </Route>
        </switch>
  */}
      </div>
  );
}

export default App;
