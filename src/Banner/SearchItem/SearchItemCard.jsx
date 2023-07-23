/* eslint-disable react/prop-types */


const SearchItemCard = ({ item }) => {
    const { image, name, date, rating, details} = item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Admission Date:  {date}</p>
                <p>Rating:  {rating}</p>
                <p>Details:  {details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItemCard;