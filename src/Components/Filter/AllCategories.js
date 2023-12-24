import Filter from "./Filter";

const AllCategories = () => {
    return (<div>
        <h1>What does your heart & soul desires today?</h1>
        {['SALADS', 'BREAKFAST', 'BURGERS', 'SPECIALS', 'ALL'].map(category => <Filter category={category}/>
        )}

    </div>)
}

export default AllCategories;