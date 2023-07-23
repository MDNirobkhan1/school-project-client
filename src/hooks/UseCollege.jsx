import { useEffect, useState } from "react"

const useCollege = () => {
    const [collegeCard, setCollegeCard] = useState([]);
    const [loding, setLoding]= useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/collegeBooking')
        .then(res => res.json())
        .then(data=> {
            setCollegeCard(data);
            setLoding(false)
        })
    }, [])
    return [collegeCard, loding]
}
export default useCollege;