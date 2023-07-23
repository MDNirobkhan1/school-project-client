import useCollege from "../../hooks/UseCollege";
import SearchItemCard from "./SearchItemCard";


const SearchItem = () => {
    const [collegeCard]=useCollege();
    const college= collegeCard.filter(item => item.category === 'collage')
    // console.log(collegeCard);
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

export default SearchItem;