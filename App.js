import Createuser from "./components/userdetailes";
import Image from "./components/home";
import Chart from './components/daytraker';
import Tablediet from "./components/fooddiet";
import PersistentDrawerLeft from "./components/homepage"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DailyMenu from './components/Dailymenu';
import Getfooddata from './components/fooddiet';


 //This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
         <PersistentDrawerLeft/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddUser">AddUser</Link>
          </li>
          <li>
            <Link to="/DailyMenu">DailyMenu</Link>
          </li>
          <li>
            <Link to="/getfooddata">getfooddata</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
         
        </ul>
       
        <hr />


        <Switch>
          <Route exact path="/">
            <Image />
          </Route>
          <Route path="/Adduser">
            <Createuser/>
          </Route>
          <Route path="/dashboard">
            <Chart/>
          </Route>
          <Route path="/DailyMenu">
            <DailyMenu/>
          </Route>
          <Route  path="/getfooddata">
            <Getfooddata/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


  
