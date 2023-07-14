import { useSelector } from 'react-redux';
import image from '../../src/bowl.gif';  // - изображение пустой корзины
import image2 from '../../src/bowl2.gif'; // - изображение корзниы с товаром

import { getCartItems, getTotalPrice} from '../redux/cartSlice';
import CartItem from './CartItem';



const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const hasItemsInCart = cartItems.length > 0; // проверка, есть ли товары в корзине

    return (
        <div>
   
            <img src={hasItemsInCart ? image2 : image} className='cart' alt="My"/> {/* изменение изображения в зависимости от наличия товаров в корзине */}
            <h3>TOTAL:{totalPrice} $</h3>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.foodId}/>)}
        </div>
    );
};

export default Cart;