import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/3">
        <img
          src="./images/signupimage.png"
          alt="Sign up banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="min-h-screen bg-white flex flex-col justify-center mx-4 py-8 sm:px-6 lg:px-8 md:w-1/2">
        <div className="flex justify-end">
          Already a member?{" "}
          <a href="#">
            <span className="text-indigo-500">Sign in</span>
          </a>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 py-4">
            Sign up to Dribble
          </h2>
          <p className="mt-2 text-center text-sm text-rose-600 py-3">
            Username has already been taken
          </p>
        </div>
        <form>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col mb-4 mx-2 sm:w-1/2 sm:pr-2">
              <label
                htmlFor="name"
                className="block text-sm sm:text-lg font-bold text-black py-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 text-base"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col mb-4 mx-2 sm:w-1/2 sm:pl-2">
              <label
                htmlFor="username"
                className="block text-sm sm:text-lg font-bold text-black py-2"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 text-base"
                placeholder="Johnson"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4 mx-2">
            <label
              htmlFor="email"
              className="block text-sm sm:text-lg font-bold text-black py-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 text-base"
              placeholder="john@example.com"
            />
          </div>

          <div className="flex flex-col mb-4 mx-2">
            <label
              htmlFor="password"
              className="block text-sm sm:text-lg font-bold text-black py-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 text-base"
              placeholder="6+ characters"
            />
          </div>
          <div className="mx-3 my-2">
            <input type="checkbox" id="myCheckbox" />
            <label htmlFor="myCheckbox" className="ml-2 text-sm">
              Creating an account means you're okay with our<br></br>
              <span className="text-indigo-500">
                Terms of Service, Privacy Policy,
              </span>{" "}
              and our default{" "}
              <span className="text-indigo-500">
                Notification <br></br> Settings.
              </span>
            </label>
          </div>
          <Link to="/profile">
            <div className="mx-3">
              <button
                type="submit"
                className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Create Account
              </button>
            </div>
          </Link>
          <p className="py-4 ">
            This site is protected by reCAPTCHA and the Google <br />
            <span className="text-indigo-500">Privacy Policy</span> and our{" "}
            default{" "}
            <span className="text-indigo-500">Notification Settings</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Help;
