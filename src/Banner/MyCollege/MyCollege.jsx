import { useEffect, useState } from "react";

const MyCollege = () => {
  const [collages, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/student")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  console.log(collages, "collages");

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl mb-4">
        Student Form List
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="bg-lime-500 text-white">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Date Of Birth</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
          {
                            collages.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.subject}</td>
                                <td>{user.date}</td>
                                <td>{user.number}</td>
                               
                            </tr>)
                        }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCollege;
