import Logo from "./Logo";
import Button from "./Button";

export default function Navbar() {
  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  function handleSignup() {
    window.location.href = "/signup";
  }

  function handleSignin() {
    window.location.href = "/signin";
  }

  return (
    <nav>
      <div className="flex shadow-md justify-between items-center">
        <div className="ml-32 cursor-pointer">
          <a href="/"><Logo width={40} /></a>
        </div>
        <div className="flex w- gap-10 mr-2 font-medium">
          <div className="flex items-center gap-5">
            <span onClick={() => goTo('hero')} className="hover:text-primary border-white border-b-4 hover:border-primary  h-full py-6 px-4 cursor-pointer">Home</span>

            <span onClick={() => goTo('about-project')} className="hover:text-primary border-white border-b-4 hover:border-primary  h-full py-6 px-4 cursor-pointer">About</span>

            <span onClick={() => goTo('about-team')} className="hover:text-primary border-white border-b-4 hover:border-primary  h-full py-6 px-4 cursor-pointer">Team</span>
          </div>

          <div className="border-2 my-4"></div>

          <div className="flex items-center gap-5">
            <span onClick={handleSignin} className="border-white border-b-4 cursor-pointer hover:text-primary">Sign in</span>
            <div className="flex items-center border-white border-b-4">
              <Button label={"Sign Up"} onClick={handleSignup} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}