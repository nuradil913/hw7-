import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const CategoryComponent = ({limit, category}) => {
    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        setData([])
        setIsLoading(true)
        axios(
            limit
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`

        ).then(({data})=> {
            setData (data ) 
        setIsLoading(false)}
     )

    }, [category, limit])
    return (
        <div className='container'>
            <h1>
                <Link to={`/category/${category}`}>{category}</Link> 
            </h1>
            {isLoading ? (
                <Preloader />
            ) : (
                <div className='row'>
                    {data.map(item => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CategoryComponent;
