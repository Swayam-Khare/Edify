import { ReactTyped } from "react-typed";
import Logo from "../components/Logo"
import Lottie from 'react-lottie';
import animationData from '../assets/Hero.json';
import Button from "../components/Button";

export default function HeroSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function goToAbout() {
    document.getElementById('about-team').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="mx-32 py-10 flex flex-wrap justify-between">
      <div style={{ width: "600px" }} className="mt-14">
        <Logo />
        <div className="text-xl mt-14 font-medium mb-2">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="text-7xl text-primary font-bold">
        Welcome <br />
        {" "} 
          <ReactTyped
            strings={["to Edify!", "to Success!", "to Growth!"]}
            typeSpeed={130}
            loop
            backSpeed={30}
            cursorChar="|"
            showCursor={true}
          />
        </div>
        <div className="text-xl font-medium mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet incidunt quasi at enim error animi sint dolore nihil quas itaque.</div>
        <div className="w-40 mt-4">
          <Button label={"Sign Up"} onClick={goToAbout} />
        </div>
      </div>

      <div className="mr-10">
        <Lottie options={defaultOptions} width={570} className="cursor-none" />
      </div>
    </div>
  )
}