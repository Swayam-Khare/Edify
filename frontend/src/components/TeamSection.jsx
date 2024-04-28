import ProfileCard from "./ProfileCard";


export default function TeamSection() {
  return (
    <>
      <div className="mx-32 pt-16 pb-10">
        <div className="text-5xl font-medium text-center">Our Team</div>

        <ProfileCard name="Swayam Khare" role="Team Lead" imgSrc="./src/assets/sk.png" />
      </div>
    </>
  )
}  