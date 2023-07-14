import Filter from "./Filter";

const AllCategories = () =>{
    return(<div>
        <h1>Make Your <img alt="minicat" className="cat-pet" src="http://68.media.tumblr.com/2bcd5f1584814fb90fb001cf5519a27f/tumblr_oqqshj6MUC1vjxr9zo1_500.gif"/> Happy</h1>
        {['Dry Cat Food', 'Wet Cat Food', 'Dry Dog Food', 'Dog Clothing', 'Cat Toys', 'ALL']
        .map(category => <Filter category={category}/>)}
        </div>)
}

export default AllCategories;