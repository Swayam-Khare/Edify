import { useEffect, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function TestList() {

  const [user, setUser] = useState(null);
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);

    // Fetch tests
    // fetch('http://localhost:3500/api/v1/test')
    //   .then(response => response.json())
    //   .then(data => {
    //     setTests(data);
    //   });

    setTests([
      {
        _id: 1,
        subject: 'Mathematics',
        difficulty: 'Easy',
        score: 20,
        duration: '30 mins',
        createdAt: '2021-09-01',
      },
      {
        _id: 2,
        subject: 'Physics',
        difficulty: 'Medium',
        score: 15,
        duration: '20 mins',
        createdAt: '2021-09-02',
      },
      {
        _id: 3,
        subject: 'Chemistry',
        difficulty: 'Hard',
        score: 10,
        duration: '15 mins',
        createdAt: '2021-09-03',
      },
      {
        _id: 4,
        subject: 'Mathematics',
        difficulty: 'Easy',
        score: 20,
        duration: '30 mins',
        createdAt: '2021-09-01',
      },
      {
        _id: 5,
        subject: 'Physics',
        difficulty: 'Medium',
        score: 15,
        duration: '20 mins',
        createdAt: '2021-09-02',
      },
      {
        _id: 6,
        subject: 'Chemistry',
        difficulty: 'Hard',
        score: 10,
        duration: '15 mins',
        createdAt: '2021-09-03',
      }
    ]);

  }, []);

  const openReport = (testId) => {
    navigate(`/report/${testId}`);
  }

  return (
    <>
      <div>
        {user && (<NavbarAlt user={user} />)}
      </div>

      <div className="flex justify-center py-16 flex-grow">
        <div className="px-8 py-6 shadow-lg rounded-xl border-2 border-primary flex flex-col item-center">

          <div className="text-3xl text-center mb-8 font-medium text-primary">Test List</div>
          <div className="rounded-xl shadow-lg overflow-hidden">
          <table className="table-auto">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Difficulty</th>
                <th className="px-4 py-2">Score</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tests.map(test => (
                <tr key={test._id}>
                  <td className="border px-4 py-2">{test.subject}</td>
                  <td className="border px-4 py-2">{test.difficulty}</td>
                  <td className="border px-4 py-2">{test.score}</td>
                  <td className="border px-4 py-2">{test.duration}</td>
                  <td className="border px-4 py-2">{new Date(test.createdAt).toLocaleDateString()}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => openReport(test._id)} className=" px-4 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white">Open</button>
                  </td>
                </tr>
              ))  
              }
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="5" className="border px-4 py-2">Total Tests: {tests.length}</td>
              </tr>
            </tfoot>
          </table>
          </div>
        </div>
      </div>
    </>
  );
}