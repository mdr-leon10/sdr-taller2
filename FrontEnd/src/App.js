import './App.css';
import MainView from './MainView';
import RecomendationsView from './components/RecomendationsView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/svd/:userid">
          <RecomendationsView card1Title={"SVD model"} showCard2={true} card2Title={"User's top 10 reviews"} showContextButton={false}/>
        </Route>
        <Route path="/context/:userid">
          <RecomendationsView card1Title={"Context Aware model"} showCard2={true} card2Title={"User's top 10 reviews"} showContextButton={true}/>
        </Route>
        <Route path="/hybrid/:userid">
          <RecomendationsView card1Title={"Hybrid model"} showCard2={true} card2Title={"User's top 10 reviews"} showContextButton={false}/>
        </Route>
        <Route path="/online/:userid">
          <RecomendationsView card1Title={"Online recomendations"} showCard2={false} card2Title={""} showContextButton={false}/>
        </Route>
        <Route path="/:page">
          <MainView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
