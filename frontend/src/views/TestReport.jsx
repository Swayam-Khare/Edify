import NavbarAlt from "../components/NavbarAlt";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TestReport() {
  const { testId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  const prevTest = [{
    topic: 'Ratio and Proportion',
    strength: 'Weak',
    score: 4,
  },
  {
    topic: 'Percentage',
    strength: 'Strong',
    score: 8,
  },
  {
    topic: 'Profit and Loss',
    strength: 'Weak',
    score: 5,
  },
  {
    topic: 'Simple Interest',
    strength: 'Strong',
    score: 7,
  },
  {
    topic: 'Compound Interest',
    strength: 'Weak',
    score: 6,
  }
  ]

  const test = [{
    topic: 'Ratio and Proportion',
    strength: 'Strong',
    score: 8,
  },
  {
    topic: 'Percentage',
    strength: 'Weak',
    score: 3,
  },
  {
    topic: 'Profit and Loss',
    strength: 'Strong',
    score: 7,
  },
  {
    topic: 'Simple Interest',
    strength: 'Weak',
    score: 2,
  },
  {
    topic: 'Compound Interest',
    strength: 'Strong',
    score: 9,
  }
  ]

  return (
    <>
      <div>
        {user && (<NavbarAlt user={user} />)}
      </div>

      <div className="flex justify-center py-8">
        <div className="px-8 py-6 flex-grow mx-44 shadow-lg rounded-xl border-2 border-primary flex flex-col item-center">
          <div className="text-3xl text-center mb-8 font-medium text-primary">Test Report</div>

          <div>
            <div className="flex justify-evenly text-xl gap-4">
              <div className="flex-1 flex flex-col gap-2 border-2 border-gray-400 rounded-lg py-2 px-3 bg-pink-50 shadow-lg">
                <div className="flex justify-between">
                  <div className="font-medium">Subject</div>
                  <div className="font-light">Quantitative Aptitude</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Difficulty</div>
                  <div className="font-light">Easy</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Score</div>
                  <div className="font-light">90</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Duration</div>
                  <div className="font-light">30 mins</div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-2 border-2 border-gray-400 rounded-lg py-2 px-3 bg-yellow-50 shadow-lg">
                <div className="flex justify-between">
                  <div className="font-medium">Total Questions</div>
                  <div className="font-light">15</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Correct Answers</div>
                  <div className="font-light">9</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Incorrect Answers</div>
                  <div className="font-light">3</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Not Answered</div>
                  <div className="font-light">3</div>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 my-6"></div> {/*divider*/}

            <div className="flex justify-evenly gap-2">
            <div className="flex-1 shadow-lg overflow-hidden">
                <table className="table-auto w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border-t-2 border-l-2 border-primary px-4 py-2">Topic</th>
                      <th className="border-t-2 border-primary px-4 py-2">Score</th>
                      <th className="border-t-2 border-r-2 border-primary px-4 py-2">Strength</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prevTest.map(test => (
                      <tr key={test.topic} className="text-center">
                        <td className="border-b-2 border-r-2 border-l-2 border-gray-400 px-4 py-2">{test.topic}</td>
                        <td className="border-b-2 border-r-2 border-l-2 border-gray-400 px-4 py-2">{test.score}</td>
                        <td className="border-b-2 border-r-2 border-l-2 border-gray-400 px-4 py-2">{test.strength}</td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
              </div>

              <div className="flex-1 shadow-lg">
                <table className="table-auto w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border-t-2 border-l-2 border-primary px-4 py-2">Topic</th>
                      <th className="border-t-2 border-primary px-4 py-2">Score</th>
                      <th className="border-t-2 border-r-2 border-primary px-4 py-2">Strength</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prevTest.map(test => (
                      <tr key={test.topic} className="text-center">
                        <td className="border-b-2 border-r-2 border-l-2 border-gray-400 px-4 py-2">{test.topic}</td>
                        <td className="border-b-2 border-r-2 border-l-2 border-gray-400 px-4 py-2">{test.score}</td>
                        <td className="border-b-2 border-r-2 border-l-2 border-gray-400 px-4 py-2">{test.strength}</td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}