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
    filteredList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
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
            type="text"
            placeholder="  Search for restaurant and food"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
          <div className="logoSearchsvg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>

          <div class="sortBy">
            <div class="innerSortby">Sort By</div>
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
        <div className="sortbtnDiv">
          {/* <button
            className="sortbtn"
            onClick={() => {
              const filteredrestaurant = listOfRes.filter(
                (resElement) => resElement.info.avgRating > 4.5
              );
              setfilterRes(filteredrestaurant);
            }}
          >
            restaurant above 4 rating
          </button> */}
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
