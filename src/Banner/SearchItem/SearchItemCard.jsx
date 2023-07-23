/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SearchItemCard = ({ item }) => {
    const { image, name, date, rating, details, _id} = item;
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Admission Date:  {date}</p>
                <p>Rating:  {rating}</p>
                <p>Details:  {details}</p>
                <div className="card-actions justify-end">
                <Link to={`/details/${_id}`}><button className="btn btn-primary">See More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItemCard;