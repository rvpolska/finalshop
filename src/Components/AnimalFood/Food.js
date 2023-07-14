import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangrQuantity from "../../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import mur from '../../Cart/mur.mp3'

const Food = ({food}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const playSound = () => {
        // создание нового объекта звукового файла
        const sound = new Audio(mur);
        sound.play(); // воспроизведение звука
    };

    return (
        <div>
            <h3>{food.name}</h3>
            <img alt="img" src={`./${food.img}.jpeg`}/>
            <p>${food.price}</p>
            <ChangrQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => {
                dispatch(addItemToCart({food,quantity}));
                playSound(); // проигрывание звука при добавлении товара в корзину
            }}>Add to cart</button>
        </div>
    );
};

export default Food;
 