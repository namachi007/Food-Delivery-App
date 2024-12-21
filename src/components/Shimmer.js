const ShimmerDiv = () => {
    return (
      <div>
        <div className="mainSearch">
          <div className="serachBox">
            <input placeholder="Search for restaurant and food"></input>
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
            <button
              className="sortbtn"
              onClick={() => {
                const filteredrestaurant = resList.filter(
                  (resElement) => resElement.info.avgRating > 4.5
                );
                filteredList(filteredrestaurant);
              }}
            >
              restaurant above 4 rating
            </button>
          </div>
        </div>

        <div className="shimmerInner">
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          <div className="shimmerdiv">
            <div className="shimmerImg"></div>
            <div className="shimmerName"></div>
            <div className="shimmerContent"></div>
          </div>
          
        </div>
      </div>
    );
};

export default ShimmerDiv