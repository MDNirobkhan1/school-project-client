import useCollege from "../../hooks/UseCollege";
import SearchItemCard from "../SearchItem/SearchItemCard";


const College = () => {
    const [collegeCard] = useCollege();
    const college = collegeCard.filter(item => item.category === 'collage')
    return (
        <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5">
                {
                    college.map(item => <SearchItemCard
                        key={item._id}
                        item={item}
                    ></SearchItemCard>)
                }
            </div>
        </section>
    );
};

export default College;