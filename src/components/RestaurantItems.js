import ResBody from "./RestaurantBody";
import { useState } from "react";

const RestaurantItems = (props) => {
  const { data, dataTitle } = props;
//   console.log(data);
//   console.log(dataTitle);

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleOnClick = () => {
        setIsMenuVisible(!isMenuVisible);
    }



  return (
    <div className="resItemIn">
      <div
        className="menuRes2 shadow-slate-100 shadow-[rgba(0,0,15,0.5)_0px_20px_0px_0px] cursor-pointer p-10 "
        onClick={handleOnClick}
      >
        <div className="titleMenu mt-24 ">
          <div >
            <h3 className="font-bold text-xl">
              {dataTitle} ({data.length})
            </h3>
          </div>
          <div>
            <p>▼</p>
          </div>
        </div>

        {isMenuVisible && data.map((item) => <ResBody resMenu={item} />)}
      </div>
    </div>
  );
};

export default RestaurantItems;
