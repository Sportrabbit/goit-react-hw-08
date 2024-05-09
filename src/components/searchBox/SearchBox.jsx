import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const inputValue = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter({ inputValue: e.target.value}));
    };

    return (
        <div className={css["search-container"]}>
            <label htmlFor="nameInput">Find contacts by name</label>
            <input 
            type="text"
            value={inputValue}
            onChange={handleChange}
            className={css["search-input"]}
            id="nameInput"
            />
        </div>
    );
}