import { useEffect, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import { useLocation, useNavigate } from "react-router-dom";

export default function TestList() {
  const [user, setUser] = useState(null);
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);

    let url = null;

    console.log("state", state);

    if (state && state.subject) {
      url = `http://localhost:3500/api/v1/test-details/${state.subject.name}`;
    } else {
      url = "http://localhost:3500/api/v1/test-details";
    }

    let token = localStorage.getItem("token");

    // Fetch tests
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setTests(data.data.testDetails ? data.data.testDetails : []);
          if (data.data.testDetails.length === 0) {
            setTests([
              {
                _id: 1,
                subject: "Quantitative Aptitude",
                difficulty: "Easy",
                score: 20,
                duration: "30 mins",
                createdAt: "2021-09-01",
              },
              {
                _id: 2,
                subject: "Quantitative Aptitude",
                difficulty: "Easy",
                score: 15,
                duration: "20 mins",
                createdAt: "2021-09-02",
              },
              {
                _id: 3,
                subject: "Quantitative Aptitude",
                difficulty: "Easy",
                score: 10,
                duration: "15 mins",
                createdAt: "2021-09-03",
              },
              {
                _id: 4,
                subject: "Quantitative Aptitude",
                difficulty: "Easy",
                score: 20,
                duration: "30 mins",
                createdAt: "2021-09-01",
              },
              {
                _id: 5,
                subject: "Quantitative Aptitude",
                difficulty: "Easy",
                score: 15,
                duration: "20 mins",
                createdAt: "2021-09-02",
              },
              {
                _id: 6,
                subject: "Quantitative Aptitude",
                difficulty: "Easy",
                score: 10,
                duration: "15 mins",
                createdAt: "2021-09-03",
              },
            ]);
          }
          setLoading(false);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        console.log("in error", error.message);

        setTests([
          {
            _id: 1,
            subject: "Quantitative Aptitude",
            difficulty: "Easy",
            score: 20,
            duration: "30 mins",
            createdAt: "2021-09-01",
          },
          {
            _id: 2,
            subject: "Quantitative Aptitude",
            difficulty: "Easy",
            score: 15,
            duration: "20 mins",
            createdAt: "2021-09-02",
          },
          {
            _id: 3,
            subject: "Quantitative Aptitude",
            difficulty: "Easy",
            score: 10,
            duration: "15 mins",
            createdAt: "2021-09-03",
          },
          {
            _id: 4,
            subject: "Quantitative Aptitude",
            difficulty: "Easy",
            score: 20,
            duration: "30 mins",
            createdAt: "2021-09-01",
          },
          {
            _id: 5,
            subject: "Quantitative Aptitude",
            difficulty: "Easy",
            score: 15,
            duration: "20 mins",
            createdAt: "2021-09-02",
          },
          {
            _id: 6,
            subject: "Quantitative Aptitude",
            difficulty: "Easy",
            score: 10,
            duration: "15 mins",
            createdAt: "2021-09-03",
          },
        ]);

        setLoading(false);
      });
  }, []);

  const openReport = (testId) => {
    navigate(`/report/${testId}`);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>{user && <NavbarAlt user={user} />}</div>

          <div className="flex justify-center py-16 flex-grow">
            <div className="px-8 py-6 shadow-lg rounded-xl border-2 border-primary flex flex-col item-center">
              <div className="text-3xl text-center mb-8 font-medium text-primary">
                Test List
              </div>
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
                    {tests.map((test) => (
                      <tr key={test._id}>
                        <td className="border px-4 py-2">{test.subject}</td>
                        <td className="border px-4 py-2">{test.difficulty}</td>
                        <td className="border px-4 py-2">{test.score}</td>
                        <td className="border px-4 py-2">{test.duration}</td>
                        <td className="border px-4 py-2">
                          {new Date(test.createdAt).toLocaleDateString()}
                        </td>
                        <td className="border px-4 py-2">
                          <button
                            onClick={() => openReport(test._id)}
                            className=" px-4 py-1 border-2 border-primary rounded-full hover:bg-primary hover:text-white"
                          >
                            Open
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <tfoot>
                    <tr>
                      <td colSpan="5" className="border px-4 py-2">
                        Total Tests: {tests.length}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
