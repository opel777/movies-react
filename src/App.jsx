import { MoviesGrtid } from "./MoviesGrid";
import style from "./App.module.css";

export function App() {
  return (
    <div>
      <header>
        <h1 className={style.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrtid />
      </main>
    </div>
  );
}
