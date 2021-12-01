import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import BlogPost from './BlogPost';

function App() {
  return (
    <Router>
      <NavLinkbar/>
      <Switch>
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/blog/:postSlug" component={BlogPost}/>
        <Route  exact path="/" component={Home}/>
        <Route path="/home" render={()=> <Home/>} />
        <Route path="/about" component={About}/>
        <Route path="*" component={NotFound}/>
        <Route path="/noauth" component={NoAuth} />
      </Switch>
    </Router>
  );
}
function Home(){
  console.log('rendered Home');

  return(
    <div>Home page</div>
  )
}
function About(){
  console.log('rendered About');
  const history = useHistory();
  return (
  <div>
    <h1>About Us Page</h1>
    <p>The about us page is on {history.location.pathname}</p>
    <button onClick={()=>history.push('/admin')}>Go to Admin Page</button>
  </div>
  )
};

function NotFound(){
  console.log('rendered NotFound');
  const history = useHistory();
  console.log('history', history);
  return (
  <div>Not Found page</div>
  )
};

// function Navbar(){
//   return (
//     <div>
//       <nav>
//         <Link to="/home" >Home</Link>
//         <br></br>
//         <Link to="/about">About</Link>
//       </nav>
//     </div>
//     )
// }

function NavLinkbar(){
  return (
    <div>
      <nav>
        <NavLink activeStyle={{fontWeight:"bold", color:"red"}} to="/home" >Home</NavLink>
        <br></br>
        <NavLink to="/about" activeClassName="active" >About</NavLink>
      </nav>
    </div>
    )
}

function Admin(){
  console.log('rendered Admin');
  const location = useLocation();
  return (
    <div>
      <h1>Admin page</h1>
      <p>Location with useLocation Hook:  {location.pathname} </p>
    </div>

  )
};

function NoAuth(){
  console.log('rendered NoAuth');
  return (
  <div>No Auth</div>
  )
};

export default App;
