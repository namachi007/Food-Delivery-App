import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(increment(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrement(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

 

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) =>
        acc +
        (item.displayPrice || item.price || item.finalPrice) * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold text-gray-700">
          Your Cart is Empty!
        </h1>
        <p className="text-gray-500 mt-4">
          Add some delicious items to your cart to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="w-3/4 bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="w-[80%]">
                <h2 className="font-semibold text-xl">{item.name}</h2>
                <p className="text-gray-500">{item.description}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-full"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="mx-4 font-bold text-lg">{item.quantity}</span>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-full"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="font-bold text-lg">
                ₹{" "}
                {((item.displayPrice || item.price || item.finalPrice) / 100) *
                  item.quantity}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-2xl font-bold">Total Amount</h2>
          <h2 className="text-2xl font-bold">₹ {calculateTotal() / 100}</h2>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
