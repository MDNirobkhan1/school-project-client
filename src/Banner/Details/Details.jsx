import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const router = useParams();
  const id = router.id;
  const [collegeCard, setCollegeCard] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://school-project-server-eight.vercel.app/collegeBooking")
      .then((res) => res.json())
      .then((data) => {
        setCollegeCard(data.find((college) => college._id === id));
        setLoading(false);
      });
  }, [id]);
  // console.log(collegeCard);

  const { research, rating, name, image, details, date } = collegeCard;
  console.log(research, rating, name, image, details, date);
  return (
    <div>
      {loading ? (
        <>loading....</>
      ) : (
        <>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className="py-6">Details: {details}</p>
                <p className="py-6">Date: {date}</p>
                <p className="py-6">Rating: {rating}</p>
                <p className="py-6"> Research: {research}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
