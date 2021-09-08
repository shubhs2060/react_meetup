import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import NewMeet from './pages/NewMeet'
import Header from './components/Header'
import "semantic-ui-css/semantic.min.css";
import {
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/home"><Home heading="You are at homes" /></Route>
        <Route path="/new"><NewMeet/></Route>
      </Switch>
    </div>
  );
}

export default App;
