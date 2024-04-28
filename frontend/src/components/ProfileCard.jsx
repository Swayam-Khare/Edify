

export default function ProfileCard({ name, role, imgSrc }) {
  return (
    <>
      <div className="shadow-lg w-fit rounded-xl bg-red-100 py-8">
        <img src={imgSrc} alt="profile" className="w-28 h-28 mx-auto rounded-full" />

        <div className="text-2xl font-medium text-center mt-2">{name}</div>
        <div className="text-xl text-center">{role}</div>
        <div className="text-center mt-6 mx-6">Final Year B. Tech. Student at <br />
          Samrat Ashok Technological Institute <br />
          Vidisha. Branch - Computer Science <br />
          and Engineering</div>
      </div>
    </>
  )
}