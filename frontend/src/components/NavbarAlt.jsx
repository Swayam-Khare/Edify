import React, { useState } from 'react';
import Logo from "./Logo";
import Button from "./Button";
import ProfileMenu from './ProfileMenu';
import { useNavigate } from 'react-router-dom';

export default function NavbarAlt({ user }) {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(`/${path}`);
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
            <span onClick={() => goTo('dashboard')} className="hover:text-primary border-white border-b-4 hover:border-primary  h-full py-6 px-4 cursor-pointer">Dashboard</span>

            <span onClick={() => goTo('tests')} className="hover:text-primary border-white border-b-4 hover:border-primary  h-full py-6 px-4 cursor-pointer">Tests</span>

            <span onClick={() => goTo('create')} className="bg-primary text-white rounded-3xl font-medium px-5 py-2.5 hover:bg-green-900 cursor-pointer">Start Test</span>
          </div>

          <div className="border-2 my-4"></div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <button className='flex justify-center items-center mr-4' onClick={() => setIsOpen(!isOpen)}>
                <div className="bg-red-100 flex w-4 h-4 p-5 border-gray-300 border-2 hover:border-black justify-center items-center mr-2 rounded-full ">{user.username.charAt(0).toUpperCase()}</div>
              </button>
              {isOpen && (<ProfileMenu user={user} onClick={goTo} />)}
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
}