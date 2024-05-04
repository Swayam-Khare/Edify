import { useEffect, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import SubjectCard from "../components/SubjectCard";
import TestCard from "../components/TestCard";

export default function Dashboard() {

  const [user, setUser] = useState(null);
  const subjects = [{
    name: 'Quantitative Aptitude',
    description: 'Practice quantitative aptitude questions',
  },
  {
    name: 'Verbal Reasoning',
    description: 'Practice verbal reasoning questions',
  },
  {
    name: 'Logical Reasoning',
    description: 'Practice logical reasoning questions',
  },
  {
    name: 'Operating System',
    description: 'Practice operating system questions',
  },
  {
    name: 'Data Structures and Algorithms',
    description: 'Practice data structures and algorithms questions',
  },
  {
    name: 'Database Management System',
    description: 'Practice database management system questions',
  }
  ];

  const pastSubjects = [{
    name: 'Quantitative Aptitude',
    description: 'See your previous quantitative aptitude test reports',
  },
  {
    name: 'Verbal Reasoning',
    description: 'See your previous verbal reasoning test reports',
  },
  {
    name: 'Logical Reasoning',
    description: 'See your previous logical reasoning test reports',
  },
  {
    name: 'Database Management System',
    description: 'See your previous database management system test reports',
  }
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <>
      <div>
        {user && (<NavbarAlt user={user} />)}
      </div>

      <div className="mx-32 mt-10">
        <div className="text-2xl mb-1">Ready Made Tests</div>
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} color='purple'/>
          ))}
        </div>
      </div>

      <div className="mx-32 mt-10 mb-6">
        <div className="text-2xl mb-1">Past Tests Report</div>
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
          {pastSubjects.map((subject, index) => (
            <TestCard key={index} subject={subject} color='blue' />
          ))}
        </div>
      </div>
    </>
  );
}