import useCollege from "../../hooks/UseCollege";
import SearchItemCard from "./SearchItemCard";


const SearchItem = () => {
    const [collegeCard] = useCollege();
    const college = collegeCard.filter(item => item.category === 'collage')
    // console.log(collegeCard);
    return (
        <section>
            <div className="flex items-center justify-center mt-10 mb-10">
                <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
                <button className="btn bg-stone-00">Search</button>
            </div>
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