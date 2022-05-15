import style from './Search.module.css';
import { FaSearch } from 'react-icons/fa'

export function Search() {
    return (
        <form className={style.searchContainer}>
            <div className={style.searchBox}>
                <input className={style.searchInput} type= "text" />
                <button className={style.searchButton} type= "submit">
                 <FaSearch  size = {20}/>
                </button>
            </div>
        </form>
    );
}
