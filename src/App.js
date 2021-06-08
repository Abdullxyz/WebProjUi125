import './App.css';
import Workspace from "./Workspace";
import Home from "./Home";
import AboutUs from "./AboutUs";
import WorkspaceDetails from './WorkspaceDetails';
import Profile from './Profile';
import Trainings from './Trainings';
import TrainingsDetials from './TrainingsDetails';
import Joinus from './Joinus';
import Location from './Location';
import Contact from './Contact';
import Feed from './Feed';
import Blog from './Blog';
import NosEntreprenuers from './NosEntreprenuers';
import LesInstitutiionnels from './LesInstitutiionnels';
import Reperatory from './Reperatory';
import ProfilePage from './ProfilePage';
import Payment from './Payment';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/aboutUs' component={AboutUs} />
          <Route path='/workspace' component={Workspace} />
          <Route path='/workspaceDetails' component={WorkspaceDetails} />
          <Route path='/trainings' component={Trainings} />
          <Route path='/trainingsDetails' component={TrainingsDetials} />
          <Route path='/joinus' component={Joinus} />
          <Route path='/location' component={Location} />
          <Route path='/contact' component={Contact} />
          <Route path='/home' component={Home} />
          <Route path='/feed' component={Feed} />
          <Route path='/blog' component={Blog} />
          <Route path='/nosEntreprenuers' component={NosEntreprenuers} />
          <Route path='/lesInstitutiionnels' component={LesInstitutiionnels} />
          <Route path='/reperatory' component={Reperatory} />
          <Route path='/profilePage' component={ProfilePage} />
          <Route path='/payment' component={Payment} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
