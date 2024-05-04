import React, { useState } from 'react';
import Logo from "./Logo";
import Button from "./Button";
import ProfileMenu from './ProfileMenu';

export default function NavbarAlt({ user }) {
  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex shadow-md justify-between items-center">
        <div className="ml-32 cursor-pointer">
          <a href="/"><Logo width={40} /></a>
        </div>
        <div className="flex gap-10 mr-2 font-medium">
          <div className="flex items-center gap-5">
            <span onClick={() => goTo('hero')} className="hover:text-primary border-white border-b-4 hover:border-primary  h-full py-6 px-4 cursor-pointer">Dashboard</span>

            <span onClick={() => goTo('about-project')} className="hover:text-primary border-white border-b-4 hover:border-primary  h-full py-6 px-4 cursor-pointer">Tests</span>

            <span onClick={() => goTo('about-team')} className="bg-primary text-white rounded-3xl font-medium px-5 py-2.5 hover:bg-green-900 cursor-pointer">Start Test</span>
          </div>

          <div className="border-2 my-4"></div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <button className='flex justify-center items-center mr-5' onClick={() => setIsOpen(!isOpen)}>
              <div className="bg-red-100 flex w-4 h-4 p-5 border-gray-300 border-2 justify-center items-center mr-4 rounded-full ">{user.username.charAt(0).toUpperCase()}</div>
                Profile
              </button>
              {isOpen && (<ProfileMenu user={user} />)}
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
}