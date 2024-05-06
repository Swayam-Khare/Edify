import { useEffect, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import Account from "../components/Account";

export default function EditProfile() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState('account');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
    console.log(user);
  }, []);

  function showComponent(id) {
    setShow(id);
  }

  return (
    <>
      <div>
        {user && (<NavbarAlt user={user} />)}
      </div>

      <div className="flex mx-32 mt-16 rounded-xl shadow-lg border-gray-300 border-2">
        <div className="text-xl text-gray-700 mt-8" >
          <div onClick={() => showComponent('account')} className="ml-10 mr-4 mb-6  hover:bg-gray-100 cursor-pointer p-2 pr-16 rounded-lg">Account</div>
          <div onClick={() => showComponent('data')} className="ml-10 mr-4 mb-6 text-xl text-gray-700 hover:bg-gray-100 cursor-pointer p-2 pr-16 rounded-lg">Data</div>
        </div>

        <div className="border-2 border-gray-300 my-6 h-96"></div>

        <div className="flex flex-grow mt-8">
          {user && (show == 'account' ? <Account username={user.username} email={user.email} /> : <Data />)}
        </div>
      </div>
    </>
  );
}

function Data() {
  return (
    <div className="w-96 mx-28 mt-4">
      <div className="flex justify-between items-center text-xl">Test Data</div>
      <hr />
      <button className="bg-red-500 text-sm hover:bg-red-700 text-white py-1 px-4 rounded mt-3 mb-8">Delete All Test Data</button>
      <div className="flex justify-between items-center text-xl">Account</div>
      <hr />
      <button className="bg-red-500 text-sm hover:bg-red-700 text-white py-1 px-4 rounded mt-3 mb-8">Delete Your Account</button>

    </div>
  );
}