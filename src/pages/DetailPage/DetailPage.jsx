import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './derail.scss';
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducer";

const DetailPage = () => {
    const params = useParams();
    const [data, setData] = useState({})
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() =>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data}) => setData(data))

    },[params.id])
    return (
        <div className="detail">
            <div className="container">
                <div className="row">

                <div className="col-6">
                    <img className="detail-img" src={data.image} alt="" />
                </div>

                <div className="col-6">
                    <h1 className="detail-title">{data.title}</h1>
                    <p className="detail-text">{data.description}</p>
                    <br />
                    <p className="detail-text">{data.category} </p>

                    <p className="detail-text">${data.price} </p>
                    <button className="detail-btn" onClick={()=>{
                        dispatch(addCart(data))
                    }}> buy</button>
                    <button className="detail-btn" onClick={()=>{
                        navigate(-1)
                    }}> go back</button>
                </div>


                </div>
            </div>

        </div>
    );
}

export default DetailPage;
