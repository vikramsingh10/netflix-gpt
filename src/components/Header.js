import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="relative w-full px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      {/* Netflix Logo */}
      <img
        className="w-32"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {/* Profile Dropdown */}
      <div className="relative">
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={toggleDropdown}>
          <img
            className="w-9 h-9 rounded-md"
            src="https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="User Icon"
          />
          {/* Dropdown Icon (optional) */}
          <span className="text-white text-xl">&#9662;</span>
        </div>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-600 shadow-lg cursor-pointer">
            <ul className="text-white text-sm">
              <li className="px-4 py-2 hover:underline flex items-center">
                <img
                  className="w-6 h-6 mr-2 rounded-sm"
                  src="https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                  alt="profile"
                />
                Unknown
              </li>
              <li className="px-4 py-2 hover:underline flex items-center">
                <img
                  className="w-6 h-6 mr-2 rounded-sm"
                  src="https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                  alt="profile"
                />
                Children
              </li>
              <hr className="border-gray-600" />
              <li className="px-4 py-2 hover:underline">Manage Profiles</li>
              <li className="px-4 py-2 hover:underline">Transfer Profile</li>
              <li className="px-4 py-2 hover:underline">Account</li>
              <li className="px-4 py-2 hover:underline">Help Centre</li>
              <hr className="border-gray-600" />
              <li className="px-4 py-2 hover:underline">
                <button className="hover:underline" onClick={handleSignOut}>
                  Sign out of Netflix
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
