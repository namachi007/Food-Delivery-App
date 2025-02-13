import VegOrNonveg from "./VegOrNonveg";
import {useDispatch} from "react-redux";
import {addItems} from "../utils/cartSlice";
import { useEffect, useState } from "react";
import resList from "../utils/resList";

const ResBody = (params) => {
  const { resMenu } = params;

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

  const dispatch = useDispatch();

   const handleAddItems = (item) => {
     const itemWithPriceAndQuantity = {
       ...item,
       displayPrice: finalPrice || price || fixedPrice || 200,
       quantity,
     };
     dispatch(addItems(itemWithPriceAndQuantity));
   };
    const [quantity, setQuantity] = useState(1);
    
    const increaseQuantity = () => setQuantity(quantity + 1);

   
    const decreaseQuantity = () => {
      if (quantity > 1) setQuantity(quantity - 1); 
    };

const [fixedPrice, setFixedPrice] = useState(null);

useEffect(() => {
  if (!finalPrice && !price) {
    const randomPrice = Math.floor(Math.random() * (500 - 201 + 1)) + 201;
    setFixedPrice(randomPrice * 100);
  }
}, [finalPrice, price]);


const displayPrice = finalPrice || price || fixedPrice || 200;

  return (
    <div className="menuRes3">
      <div className="thin-line1"></div>
      <div className="menuItems ">
        <div className="menuDetails">
          <VegOrNonveg isVeg={isVeg} />
          <h3 className="menuitemName my-3 text-lg">{menuItemName}</h3>
          <h4 className="menuPrice text-md font-bold">
            ₹ {displayPrice / 100}
          </h4>
          {rating != null && (
            <h4 className="menuRating inline-flex items-center mt-2 text-md/[10px] font-semibold">
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
              {"   " + rating} <span> ({ratingCountV2})</span>
            </h4>
          )}
          <p className="menuDes my-8 text-sm font-semibold">{description}</p>
        </div>
        <div className="">
          <div className="menuImg">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                imageId
              }
            ></img>
          </div>
          <div className="absolute">
            <div className="flex items-center justify-center space-x-2 mt-4 ml-9">
              <button
                className="bg-slate-200 hover:bg-slate-300 w-8 h-8 rounded-lg shadow-lg text-lg font-semibold text-green-500"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="bg-slate-200 hover:bg-slate-300 w-8 h-8 rounded-lg shadow-lg text-lg font-semibold text-green-500"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-200 hover:bg-slate-300 w-24 h-10 ml-10 rounded-lg shadow-lg text-lg font-semibold text-green-500 mt-4"
              onClick={() => handleAddItems(resMenu.card?.info)}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResBody;
