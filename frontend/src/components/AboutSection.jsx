

export default function AboutSection() {
  return (
    <>
      <div className="mx-32 pt-16 pb-10">
        <div className="text-5xl font-medium text-center">About Our Platform </div>
        <div className="text-xl text-center mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores ea eos velit molestias quis deleniti cumque quasi expedita reiciendis nesciunt beatae corporis temporibus sapiente consectetur laudantium veritatis laborum assumenda, eius, nihil sunt maxime totam natus neque. Est assumenda dolorem sit mollitia, consectetur necessitatibus veniam dolore debitis reprehenderit repellendus quae.</div>

        <div className="flex gap-4 mt-8">
          <div className="flex-grow rounded-lg bg-white shadow-lg text-center py-8 px-8 ">
            <img src="./src/assets/target.svg" alt="target icon" className="w-16 mx-auto" />
            <div className="text-xl font-medium mb-1">Our Goals</div>
            <div className="justify-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam corporis omnis mollitia vel repellendus? Blanditiis animi reiciendis quae commodi, iure aliquam? Laborum pariatur eligendi cum numquam sint. Unde, expedita eaque cumque laudantium reprehenderit eum ducimus consequatur </div>officia,
          </div>
          <div className="flex-grow rounded-lg bg-white shadow-lg py-8 px-8 text-center">
            <img src="./src/assets/work.svg" alt="target icon" className="w-16 mx-auto" />
            <div className="text-xl font-medium mb-1">Our work so far</div>
            <div className="justify-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam corporis omnis mollitia vel repellendus? Blanditiis animi reiciendis quae commodi, iure aliquam? Laborum pariatur eligendi cum numquam sint. Unde, expedita eaque cumque laudantium reprehenderit eum ducimus consequatur officia, </div></div>
        </div>
      </div>
    </>
  )
}