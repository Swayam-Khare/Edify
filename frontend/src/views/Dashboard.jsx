import { useEffect, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";


export default function Dashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <>
    <div>
      {user && (<NavbarAlt user={user}/>)}
    </div>

    
    </>
  );
}