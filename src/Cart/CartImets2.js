import dataAnimalFood from "../data/dataAnimalFood";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cartSlice";
import sh from '../Cart/sh.mp3'


const CartItems2 = ({cartItems2}) => {
    const animalfood = dataAnimalFood.find(item => item.id === cartItems2.foodId);
    const dispatch = useDispatch();

    const playSound = () => {
        // создание нового объекта звукового файла
        const sound = new Audio(sh);
        sound.play(); // воспроизведение звука
    };

    return (
        <div>
            <p>{animalfood.name}</p>
            <p>{cartItems2.quantity} item(s)</p>
            <p>Price: ${animalfood.price * cartItems2.quantity}</p>

            <button onClick={() => {
                dispatch(removeItemFromCart({cartItems2Id: cartItems2.id}));
                playSound(); // проигрывание звука при удалении товара из корзины
            }}>
                <img className="delete-icon" alt="delete-icon" src="https://e7.pngegg.com/pngimages/366/89/png-clipart-scalable-graphics-computer-icons-computer-file-delete-cdr-text.png"/>
            </button>
        </div>
    );
};

export default CartItems2;
