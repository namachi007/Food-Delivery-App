import ResBody from "./RestaurantBody";
import { useState } from "react";

const RestaurantItems = (props) => {
  const { data, dataTitle, showItems, setShowIndex } = props;
//   console.log(data);
//   console.log(dataTitle);

    

    const handleOnClick = () => {
      setShowIndex();
    }



  return (
    <div className="resItemIn">
      <div className="menuRes2 shadow-slate-100 shadow-[rgba(0,0,15,0.5)_0px_20px_0px_0px]  p-10 ">
        <div
          className="titleMenu mt-10  cursor-pointer no-select "
          onClick={handleOnClick}
        >
          <div className="  ">
            <h3 className="font-extrabold text-lg ">
              {dataTitle} ({data.length})
            </h3>
          </div>
          <div>
            <p>▼</p>
          </div>
        </div>

        {showItems && data.map((item) => <ResBody 
        key={item.card.info.id}
        resMenu={item} />)}
      </div>
    </div>
  );
};

export default RestaurantItems;
