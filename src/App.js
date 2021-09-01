import './App.scss';
import Footer from './common/components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './modules/Home';
import Learning from './modules/Learning';
import Assitance from './modules/Assitance';
import Technique from './modules/Technique';
import LearningDetails from './modules/LearningDetails';

function App() {

  return (
    
    <Router>

      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/formations' component={Learning}></Route>
        <Route exact path='/formations/:title' component={LearningDetails}></Route>
        <Route exact path='/audit&assistance' component={Assitance}></Route>
        <Route exact path='/techniques' component={Technique}></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
