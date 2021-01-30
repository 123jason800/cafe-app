import {Route,Switch} from 'react-router-dom'; 
import HomePage from './pages/homepage/homepage.component';
import Drinks from './components/drinks/drinks.component';
import Categories from './components/categories/categories.component';
import LogSignPage from './pages/logsignpage/logsignpage.component';
import Navbar from './components/navbar/navbar.component';


function App() {
  return (
    <div 
     style={{
     

     }}
     className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/drinks" component={Drinks} />
        <Route path="/categories" component={Categories} />
        <Route path="/login" component={LogSignPage} />
      </Switch>
     
    </div>
  );
}

export default App;
