import './card.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/reducer';

const Card = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div className="col-3">
            <div className="card">
            <Link to={`/product/${item.id}`} >
            <img src={item.image} alt="" className="card-img" />
            <h3 className="card-title">{
            item.title.length > 30
                ? item.title.substr(0 ,27).trim() + '...'
                : item.title
                }

            </h3>
            <p className="card-text">{
            item.description.length > 30
            ? item.description.substr( 0, 27).trim() + '...'
            : item.description
            }</p>
            </Link>
            <p className="card-text">${item.price}</p>
            <button className="card-btn" onClick={()=>{
                dispatch(addCart(item))
            }}>buy</button>

            </div>
            <h1>{item.title}</h1>
        </div>
    );
}

export default Card;
