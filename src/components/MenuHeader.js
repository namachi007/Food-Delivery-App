const menuHeader = (props) => {

    const {
    name: restaurantName,
    avgRatingString,
    sla,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
  } = props.info;


    return (
      <div className="menuHeader2">
        <div className="menuResName">
          <h2 className="font-extrabold text-2xl">{restaurantName}</h2>
        </div>
        <div className="menuResInfo  p-10">
          <h5 className="inline-flex items-center font-bold text-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-star-fill mb-1"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            {avgRatingString}({totalRatingsString}) ● {costForTwoMessage}
          </h5>
          <h5 className="my-6 text-md">{cuisines.join(", ")}</h5>
          <h5 className="text-md">{sla.slaString}</h5>
        </div>
      </div>
    );
};


export default menuHeader;