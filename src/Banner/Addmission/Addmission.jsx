import useCollege from "../../hooks/UseCollege";
import AddmissionItem from "./AddmissionItem";


const Addmission = () => {
    const [collegeCard] = useCollege();
    return (
        <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5">
            {
                collegeCard.map(item => <AddmissionItem
                    key={item._id}
                    item={item}
                ></AddmissionItem>)
            }
        </div>
    </section>
    );
};

export default Addmission;