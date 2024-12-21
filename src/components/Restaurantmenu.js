import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import MenuHeader from "./MenuHeader";
import RestaurantItems from "./RestaurantItems";

const Restaurantmenu = () => {
  const [resMenu, setResmenu] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  let { resId } = useParams();
  // console.log(resId);

  // resId = "435682";
  // console.log(resId);
  useEffect(() => {
    fetchCall();
  }, []);

  const fetchCall = async () => {
    const fdata = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
        resId
    );

    const json = await fdata.json();
    // console.log(json);
    setResmenu(json.data);
  };

  if (resMenu === null) return <ShimmerMenu />;
  //  console.log(resMenu?.data?.cards[2].card?.card?.info);
  

  const newResitem =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards || [];

  const itemTitle =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.title || [];
  const val =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards || [];

  const ResData = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const typeOfHeading =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  return (
    <div className="menu">
      <div className="menuHeader">
        <MenuHeader info={resMenu?.cards[2].card?.card?.info}/>
      </div>
      <div className="menuBody">
        <div className="menuBody2">
          <div className="menuBodyHead">
            <h4>-- M E N U --</h4>
          </div>
        </div>
      </div>
      <div className="menuserachBox">
        <input type="text" placeholder="Search for dishes"></input>
      </div>
      <div class="thin-line"></div>
      <div className="menuRes">
        <div className="menuRes1 flex flex-wrap">
          {ResData.filter(
            (item) => item?.card?.card?.["@type"] == typeOfHeading
          ).map((item) => (
            <RestaurantItems
              data={item.card.card.itemCards}
              dataTitle={item.card.card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurantmenu;
