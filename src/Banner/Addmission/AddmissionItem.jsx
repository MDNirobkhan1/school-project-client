/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AddmissionItem = ({item}) => {
    const {name}=item;
    return (
        <div>
            <Link to='/secret' className="font-semibold text-1xl"><li>{name}</li></Link>
        </div>
    );
};

export default AddmissionItem;