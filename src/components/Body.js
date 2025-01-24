import Rescard from "./Rescard";
import resList from "../utils/resList";
import { useState } from "react";
import { useEffect } from "react";
import ShimmerDiv from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRes, filteredList] = useState([]);
  const [filterRes, setfilterRes] = useState([]);


  const [inputText , setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999"
    );

    const json = await data.json();
     const filterData = json.data.cards.filter(
       (cart) =>
         cart.card?.card?.gridElements?.infoWithStyle["@type"] ===
         "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
     );

    // console.log(json);
    filteredList(
      filterData[0].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterRes(
      filterData[0].card.card.gridElements.infoWithStyle.restaurants
    );
  };
console.log(inputText);
  const handleKeyDown = (event) => {
    console.log("Entered");
    if(event.key === "Enter") {
      setSubmittedText(inputText);
      const submitList = listOfRes.filter( (res) => res.info.name.toLowerCase().includes(inputText.toLowerCase()) );
      
      setfilterRes(submitList);
      setInputText("");
    }
  };


    if (listOfRes.length == 0) {
    return  < ShimmerDiv />;
    }
  return (
    <div className="mainBody">
      <div className="mainSearch">
        <div className="serachBox">
          <input
            data-testid="searchInput"
            type="text"
            placeholder="  Search for restaurant and food"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="p-3 text-lg"
          ></input>
          <div className="logoSearchsvg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>

          <div className="sortBy">
            <div className="innerSortby">Sort By</div>
            <div className="innersortSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="banner flex justify-center mt-12 mb-16 w-11.5/12 ">
        <div className="bannerImg">
          <img
            className=" h-[380px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png"
          />
        </div>
        <div className="absolute text-white font-bold text-[30px] mt-[200px] mr-[820px] mb-32">
          <p className="shadow-white justify-start text-red-50">
            Order Food Online in
            <br /> Chennai
          </p>
        </div>
      </div>
      <div className="flex justify-center w-11.5/12 ">
        <div className="thin-line"></div>
      </div>
      <div>
        <div className="flex space-x-4 justify-center mt-6">
          <div className="flex space-x-4 justify-center mt-6">
            <button
              className="border border-black text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
              onClick={() => {
                const filteredrestaurant = listOfRes.filter(
                  (resElement) => resElement.info.avgRating > 4.5
                );
                setfilterRes(filteredrestaurant);
              }}
            >
              Sort 4+ Rating
            </button>
            <button className="border border-black text-black px-3 py-1 rounded-full font-semibold hover:bg-gray-200">
              Book a Table
            </button>
            <button className="border border-black text-black px-3 py-1 rounded-full  font-medium hover:bg-gray-200">
              Within 5km 4+ Rating
            </button>
            <button className="border border-black text-black px-3 py-1 rounded-full  font-medium hover:bg-gray-200">
              Sort by Price
            </button>
            <button className="border border-black text-black px-3 py-1 rounded-full  font-medium hover:bg-gray-200">
              Show Nearby
            </button>
            <button className="border border-black text-black px-3 py-1 rounded-full  font-medium hover:bg-gray-200">
              Popular Choices
            </button>
            <button className="border border-black text-black px-3 py-1 rounded-full  font-medium hover:bg-gray-200">
              New Arrivals
            </button>
          </div>
        </div>
      </div>
      <div className="resCard">
        {/* {console.log(filterRes)} */}
        {filterRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <Rescard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
