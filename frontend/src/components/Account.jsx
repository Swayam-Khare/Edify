

export default function Account({ username, email }) {
  return (
    <div className="w-96 mx-28 mt-4">
      <div className="flex justify-between items-center text-xl">
        <div>Username</div>
        <div className="cursor-pointer opacity-55 hover:opacity-100"><img src="./src/assets/edit.svg" width={23} /></div>
      </div>
      <hr />
      <div className="text-sm text-gray-700 mt-2 mb-6 ">{username}</div>
      <div className="flex justify-between items-center text-xl">
        <div>Email</div>
        <div className="cursor-pointer opacity-55 hover:opacity-100"><img src="./src/assets/edit.svg" width={23} /></div>
      </div>
      <hr />
      <div className="text-sm text-gray-700 mt-2 mb-6 ">{email}</div>
      <div className="flex justify-between items-center text-xl">
        <div>Password</div>
        <div className="cursor-pointer opacity-55 hover:opacity-100"><img src="./src/assets/edit.svg" width={23} /></div>
      </div>
      <hr />
      <div className="text-sm text-gray-700 mt-2 mb-6 ">********</div>
      
    </div>
  );
}