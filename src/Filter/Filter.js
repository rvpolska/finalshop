import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../redux/foodSlice";



const Filter = ({category}) =>{
    const dispatch = useDispatch();
    const seclectedCategory = useSelector(getSelectedCategory);
    return(
    <div>
        <p onClick={() => {dispatch(filterCategory(category))}} className={seclectedCategory === category ? 'categoryButtonSelected categoryButton': 'categoryButton'}>
            {category}</p>
        
    </div>)
}

export default Filter;