import { useEffect } from "react";

export default function UpdateProfile({ username, email }) {
  useEffect(() => {
    // set the input boxes values to username and email
  }, []);

  return (
    <>
      <div className="px-8 flex-1 py-6 w-full mx-auto mb-6 flex flex-col item-center text-lg">
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-400 rounded-md py-1 px-2 mb-8 mr-10"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md py-1 px-2 mb-8 mr-10"
        />
      </div>
    </>
  );
}
