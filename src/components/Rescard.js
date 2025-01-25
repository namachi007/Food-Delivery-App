

const Rescard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, areaName, avgRating, sla } =
    resData?.info || {};
  // console.log(resData.info.id + " Nmae : " + name);



  const containerStyle = {
    width: "300px", 
    height: "180px", 
    overflow: "hidden",
    position: "relative",
    backgroundImage: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`,
    backgroundPosition: "center bottom",
    backgroundSize: "200%", 
    backgroundRepeat: "no-repeat",
  };

  const imageStyle = {
    position: 'absolute',
    bottom: '1%', 
    width: '100%',
  };


  return (
    <div className="rescardMain w-[]" data-testid="rescard">
      <div className="rescardImg" style={containerStyle}>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
          style={imageStyle}
        />
      </div>
      <div className="resContent">
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
        <div>
          <h4 className="contnt inline-flex items-center text-md font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>{" "}
            Rating: {avgRating} ● {sla.slaString}{" "}
          </h4>
        </div>
        <div className="contnt ">
          <p>{cuisines.join(", ")}</p>
        </div>
        <div className="contnt contnt1">
          <p>{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default Rescard