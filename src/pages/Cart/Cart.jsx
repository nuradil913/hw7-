import { useSelector, useDispatch } from 'react-redux';
import { addCart, decrementCart, deleteCart} from '../../redux/reducer';
import './cart.scss';

const Cart = () => {
    const cart = useSelector(s => s.reducer.cart);
    const dispatch = useDispatch();
    return (
        <div className='cart'>
               <div className="container">
                {
                    cart.map(item =>{
                       return <div key={item.id} className="cart-item">
                        <div className="cart-item-left">
                            <img src={item.image} alt="" />
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>

                            <div className="cart-item-right">
                                <div className="cart-count">
                                    <button
                                    onClick={()=>{
                                        dispatch(addCart(item))
                                    }}
                                    className="cart-count-btn">+</button>
                                    <span>{item.count}</span>
                                    <button
                                    onClick={()=>{
                                        if(item.count > 1)
                                        dispatch(decrementCart(item))
                                    }}
                                    className="cart-count-btn">-</button>
                                </div>
                                <p className="cart-item-price">${(item.price * item.count).toFixed(2)}</p>
                                <button
                                onClick={()=>{
                                    dispatch(deleteCart(item))
                                }}
                                className="cart-delete-btn">delete</button>
                            </div>
                    </div>
                    })
                }

                <p>Total: ${
                    cart.reduce((acc,rec)=>{
                        return acc + rec.price * rec.count
                    }, 0).toFixed(2)
                    }</p>
            </div>

        </div>
    );
}

export default Cart;

