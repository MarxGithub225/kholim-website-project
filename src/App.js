import './App.scss';
import Footer from './common/components/Footer';
import Header from './common/components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './modules/Home';
import LearningPage from './modules/Learning';
import ServicesPage from './modules/Services';

function App() {

  return (
    
    <Router>
      
      <Header/>

      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/formations' component={LearningPage}></Route>
        <Route path='/techniques' component={ServicesPage}></Route>
      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
