import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="about-us-container bg-gray-50 min-h-screen flex flex-col items-center px-6 py-10">
      <div className="hero-section w-full max-w-5xl text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to <span className="text-orange-500">YumRun</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your favorite food delivered at lightning speed. Experience the joy of
          delicious meals from the comfort of your home.
        </p>
      </div>

      <div className="story-section w-full max-w-5xl mb-10 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600">
          YumRun started with a simple idea: to bring people closer to their
          favorite dishes. We understand the love for good food and the
          convenience of having it delivered. Since our launch, we’ve partnered
          with top restaurants and home chefs to provide an unforgettable food
          delivery experience.
        </p>
      </div>

      <div className="mission-vision-section w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="mission bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To connect food lovers with the best culinary experiences,
            delivering happiness in every bite.
          </p>
        </div>

        <div className="vision bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the go-to platform for food delivery, offering quality, speed,
            and variety to our customers.
          </p>
        </div>
      </div>

      <div className="features-section w-full max-w-5xl mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Why Choose YumRun?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Wide Variety
            </h3>
            <p className="text-gray-600">
              Explore cuisines from local favorites to international delights.
            </p>
          </div>
          <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Enjoy quick delivery to your doorstep with live tracking.
            </p>
          </div>
          <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              Get great deals and offers every day.
            </p>
          </div>
          <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Easy Cart
            </h3>
            <p className="text-gray-600">
              Add, remove, and view your total cost effortlessly.
            </p>
          </div>
          <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Top-Rated Restaurants
            </h3>
            <p className="text-gray-600">
              Partnered with 4+ rated restaurants to ensure quality.
            </p>
          </div>
          <div className="feature bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              User-Friendly
            </h3>
            <p className="text-gray-600">
              A seamless interface designed for your convenience.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section w-full max-w-5xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Savor Your Next Meal?
        </h2>
        <p className="text-gray-600 mb-6">
          Join the YumRun family and start exploring the best food around you!
        </p>
        <Link to={"/"} className="text-orange-500 hover:underline">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
