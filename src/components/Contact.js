const Contact = () => {
  return (
    <div className="contact-us-container bg-gray-50 min-h-screen flex flex-col items-center px-6 py-10">
      
      <div className="header-section w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Get in <span className="text-orange-500">Touch</span> with Us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions, feedback, or just want to say hello? We’re here to
          help!
        </p>
      </div>


      <div className="contact-form w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="contact-details w-full max-w-4xl mt-10 bg-gray-100 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="40"
              fill="currentColor"
              class="bi bi-telephone-inbound"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">+91 123456789</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/144411164?v=4"
              className="rounded-full w-16 h-16"
            />
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">iamnamachu31@gmail.com</p>
          </div>

          <div className="flex flex-col items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="40"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            <p className="text-gray-600">India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
