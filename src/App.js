import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import PieChart from "./pie-chart/index";
import SignUp from "./signup/index";
import ShowRedux, { Store } from "./signup/showSignUp";
import Api from "./bar-Chart/index";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/pie-chart">Pie Chart</Link>
      <Link to="/signUp">Sign Up</Link>
      <Link to="/reduxData">Show Redux</Link>
      <Link to="/bar-chart">show Api</Link>
      <Switch>
        <header className="App-header">
          <Route path="/pie-chart">
            <PieChart></PieChart>
          </Route>
          <Route path="/signUp">
            <Provider store={Store}>
              <SignUp />
            </Provider>
          </Route>
          <Route path="/reduxData">
            <Provider store={Store}>
              <ShowRedux />
            </Provider>
          </Route>
          <Route path="/bar-Chart">
            <Api></Api>
          </Route>
        </header>
      </Switch>
    </Router>
  );
}

export default App;
