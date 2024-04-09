import React from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const avatarImage = "./images/avatarcamera.png";
  const defaultAvatarImage = "./images/profile.jpeg";
  const logo = "./images/logo.png";
  const [avatar, setAvatar] = React.useState(avatarImage);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 lg:w-1/4">
        <img
          src={logo}
          alt="logo"
          className="mx-auto md:mx-0 w-20 md:w-32 lg:w-40"
        ></img>
      </div>
      <div className="flex flex-col items-center mt-28">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Welcome! Let's explore your profile
        </h1>
        <p className="py-4">
          Lets others get to know you better! You can do these later
        </p>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Add an avatar</h2>
          <div className="flex flex-row items-center mt-2">
            <img
              src={avatar || defaultAvatarImage}
              alt="Avatar"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full"
            />
            <div className="ml-4 mt-4 md:mt-1">
              <label className="bg-white border border-gray-300 hover:bg-gray-100 outline-1 text-black font-bold py-2 px-6 rounded-md cursor-pointer">
                Choose image
                <input
                  type="file"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </label>
              <br></br>
              <br></br>
              <label
                className="text-gray-500 "
                onClick={() => setAvatar(defaultAvatarImage)}
              >
                {">"}Or choose one of our defaults
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold py-4">Add your location</h2>
          <input
            type="text"
            placeholder="Enter a location"
            className="border border-gray-300 rounded px-12 py-2 "
          />
          <br></br>
          <Link to="/service">
            <button className="bg-pink-300 text-white px-12 py-2 mt-7 ">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
