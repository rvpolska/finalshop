import dataAnimalFood from "../data/dataAnimalFood";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cartSlice";
import sh from '../Cart/sh.mp3'


const CartItem = ({cartItem}) => {
    const animalfood = dataAnimalFood.find(item => item.id === cartItem.foodId);
    const dispatch = useDispatch();

    const playSound = () => {
        // создание нового объекта звукового файла
        const sound = new Audio(sh);
        sound.play(); // воспроизведение звука
    };

    return (
        <div>
            <p>{animalfood.name}</p>
            <p>{cartItem.quantity} item(s)</p>
            <p>Price: ${animalfood.price * cartItem.quantity}</p>

            <button onClick={() => {
                dispatch(removeItemFromCart({cartItemId: cartItem.id}));
                playSound(); // проигрывание звука при удалении товара из корзины
            }}>
                <img className="delete-icon" alt="delete-icon" src="https://e7.pngegg.com/pngimages/366/89/png-clipart-scalable-graphics-computer-icons-computer-file-delete-cdr-text.png"/>
            </button>
        </div>
    );
};

export default CartItem;
