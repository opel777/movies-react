import { MoviesGrid } from "./components/MoviesGrid";
import style from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export function App() {
  return (
    <Router>
        <header>
          {/* <h1 className={style.title}>Movies</h1>         */}
          <Link to="/">Home</Link>
          <Link to="/movie">Movie</Link>
        </header>
        <main>
           <Switch>
             <Route path="/movie"> Movies </Route>
             <Route path="/"> Home </Route>
           </Switch>
        </main>
    </Router>
  );
}
