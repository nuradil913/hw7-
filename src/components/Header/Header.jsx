import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const categories = useSelector(s => s.reducer.categories);
    const cartItems = useSelector(s => s.reducer.cart)
    const total = cartItems.reduce((total, item) => total+item.count, 0)

    return (
        <header className='header'>
            <div className='header-container container'>

            
            <h1 className='header-logo'><Link to={'/'} >shop</Link></h1>

            <nav className="header-nav">
                {
                    categories.map(item =>{
                        return <Link
                        key={item}
                        to={`/category/${item}`}
                        className='header-nav-link'
                        >{item}</Link>
                    })
                }
                <Link to={'/'} className='header-nav-link'>home</Link>
                <Link to={'/cart'} className='header-nav-link'>cart</Link>

                {total>0 && ( 
                    <span className='dot' > {total > 9 ? "9+" :total} </span>

                )}
    
            </nav>
            </div>
        </header>
    );
}

export default Header;
