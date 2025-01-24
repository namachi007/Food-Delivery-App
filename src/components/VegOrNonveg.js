const VegOrNonveg = (params) => {
    const {isVeg} = params;
        // console.log(params);
    
        return (
          <div>
            {isVeg == 1 ? (
              <div data-testid="veg" className="veg">
                <div className="circle green"></div>
              </div>
            ) : (
              <div data-testid="non-veg" className="non-veg">
                <div className="square">
                  <div className="triangle"></div>
                </div>
              </div>
            )}
          </div>
        );
};


export default VegOrNonveg;