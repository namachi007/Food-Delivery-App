import VegOrNonveg from "./VegOrNonveg";

const ResBody = (params) => {
  const { resMenu } = params;


  //  console.log(resMenu);
  
  //  console.log(val);
  

  const {
    name: menuItemName,
    isVeg,
    price,
    finalPrice,
    ratings,
    description,
    imageId,
  } = resMenu.card?.info;

  const { rating, ratingCountV2 } = ratings?.aggregatedRating;

  return (
    <div className="menuRes3">
      <div className="thin-line"></div>
      <div className="menuItems">
        <div className="menuDetails">
          <VegOrNonveg isVeg={isVeg} />
          <h3 className="menuitemName my-3 text-xl">{menuItemName}</h3>
          <h4 className="menuPrice text-lg font-bold">₹ {(finalPrice ?? price) / 100}</h4>
          {rating != null && (
            <h4 className="menuRating inline-flex items-center mt-2 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-star-fill"
                className="mr-1"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              {"   " + rating} <span>   ({ratingCountV2})</span>
            </h4>
          )}
          <p className="menuDes my-8 text-lg font-semibold">{description}</p>
        </div>
        <div
          className="menuImg"
        >
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              imageId
            }
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ResBody;
