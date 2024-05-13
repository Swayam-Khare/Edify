import { useEffect, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import Button from "../components/Button";

export default function CreateTest() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <>
      <div id="create-container" className="h-screen flex flex-col">
        <div>
          {user && (<NavbarAlt user={user} />)}
        </div>

        <div className="flex justify-center py-16 flex-grow">
          <div className="px-8 py-6 shadow-lg rounded-xl border-2 border-primary w-1/3 flex flex-col item-center">
            <div className="text-3xl text-center mb-8 font-medium text-primary">Start Test</div>
            <div className="w-full">
              <div className="mb-8">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <select
                  className="shadow appearance-none border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                >
                  <option>Quantitative Aptitude</option>
                  <option>Logical Reasoning</option>
                  <option>Verbal Reasoning</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="difficulty">
                  Difficulty
                </label>
                <select
                  className="shadow appearance-none border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="difficulty"
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>

            <div className="mt-16 w-3/4 mx-auto">
              <Button label="Start Test" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}