import HomePage from './pages/homepage/homepage.component';
import Drinks from './components/drinks/drinks.component';
import {Route,Switch} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/drinks" component={Drinks} />
      </Switch>
     
    </div>
  );
}

export default App;
