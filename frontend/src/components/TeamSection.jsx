import ProfileCard from "./ProfileCard";


export default function TeamSection() {
  return (
    <>
      <div className="mx-32 pt-16 pb-10 ">
        <div className="text-5xl font-medium text-center">Our Team</div>

        <div className="flex flex-wrap justify-between mt-16">
          <ProfileCard name="Swayam Khare" role="Team Lead" imgSrc="./src/assets/sk2.jpg" />
          <ProfileCard name="Poorva Patidar" role="Backend Dev" imgSrc="./src/assets/pp.jpg" />
          <ProfileCard name="Amber S. Parihar" role="Frontend Dev" imgSrc="./src/assets/asp.jpg" />
        </div>
      </div>
    </>
  )
}  