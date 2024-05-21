import { useEffect, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import SubjectCard from "../components/SubjectCard";
import TestCard from "../components/TestCard";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pastSubjects, setPastSubjects] = useState([]);

  const subjects = [
    {
      name: "Quantitative Aptitude",
      description: "Practice quantitative aptitude questions",
    },
    {
      name: "Verbal Reasoning",
      description: "Practice verbal reasoning questions",
    },
    {
      name: "Logical Reasoning",
      description: "Practice logical reasoning questions",
    },
    {
      name: "Operating System",
      description: "Practice operating system questions",
    },
    {
      name: "Data Structures and Algorithms",
      description: "Practice data structures and algorithms questions",
    },
    {
      name: "Database Management System",
      description: "Practice database management system questions",
    },
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);

    let url = "http://localhost:3500/api/v1/test-details";
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
          
          // console.log("data", data);

          for (let i = 0; i < data.data.testDetails.length; i++) {
            let subject = data.data.testDetails[i].subject;
            let desc = `See your performance in ${subject} test`
            let testSubject = {
              name: subject,
              description: desc
            }
            setPastSubjects((prev) => [...prev, testSubject]);
          }

        } else {
          throw new Error(data.message);
        } 
      })
      .catch((error) => {
        console.log("in error", error.message);
      });

    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>{user && <NavbarAlt user={user} />}</div>

          <div className="mx-32 mt-10">
            <div className="text-2xl mb-1">Ready Made Tests</div>
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
              {subjects.map((subject, index) => (
                <SubjectCard key={index} subject={subject} color="purple" />
              ))}
            </div>
          </div>

          <div className="mx-32 mt-10 mb-6">
            <div className="text-2xl mb-1">Past Tests Report</div>
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
              {pastSubjects.length > 0 ? (pastSubjects.map((subject, index) => (
                <TestCard key={index} subject={subject} color="blue" />
              ))) : (<div> No Past tests found</div>) }
            </div>
          </div>
        </>
      )}
    </>
  );
}
