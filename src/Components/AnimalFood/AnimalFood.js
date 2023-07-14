import Food from "./Food";
import dataAnimalFood from "../../data/dataAnimalFood";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/foodSlice";

const AnimalFood = () =>{

    const seclectedCategory = useSelector(getSelectedCategory);

    return(<div>{dataAnimalFood
    .filter(food =>{
        if(seclectedCategory === 'ALL') return true;
        return seclectedCategory === food.category; // -выбранная категория равна категории из базы данных
})
    .map(food => <Food food={food}/>)}
    </div>)
}

export default AnimalFood;