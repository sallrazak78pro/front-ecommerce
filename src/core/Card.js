import React from 'react'
import {Link} from 'react-router-dom'
import ShowImage from './ShowImage'


const Card=({product})=>{
    return(
        <div className="col-4 mb-3">
            <div className="card">
             <div className="card-header">{product.name}</div>
             <div className="card-body">
                 <a href={`http://localhost:8000/api/product/photo/${product._id}`}><ShowImage item={product} url="product" /></a>
                <p>{product.description.substring(0,100)}</p>
                <p>{product.price} Fcfa</p>
                <Link to="/">
                    <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
                        Detail
                    </button>
                </Link>
                <button className="btn btn-outline-warning mt-2 mb-2 ">
                    Add to Card
                </button>
             </div>
            </div>
        </div>
    )
}
export default Card