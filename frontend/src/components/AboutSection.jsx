export default function AboutSection() {
  return (
    <>
      <div className="mx-32 pt-16 pb-10">
        <div className="text-5xl font-medium text-center">
          About Our Platform{" "}
        </div>
        <div className="text-xl text-center mt-10">
          Our platform provides customizable tests, personalized feedback
          through data analytics, secure user profiles for privacy and progress
          tracking, enabling students to comprehensively assess knowledge,
          identify strengths and weaknesses, and develop targeted strategies for
          conquering exams and interviews with data-driven preparation.
        </div>

        <div className="flex gap-4 mt-24">
          <div className="flex-grow rounded-lg bg-white shadow-lg text-center py-8 px-8 ">
            <img
              src="./src/assets/target.svg"
              alt="target icon"
              className="w-16 mx-auto"
            />
            <div className="text-xl font-medium mb-1">Our Goals</div>
            <div className="justify-left">
              Offer customizable tests, data-driven personalized feedback,
              secure user profiles, and progress monitoring to empower students
              with insights for comprehensive knowledge assessment, identifying
              areas for improvement, and developing targeted strategies to excel
              in exams and interviews.
            </div>
          </div>
          <div className="flex-grow rounded-lg bg-white shadow-lg py-8 px-8 text-center">
            <img
              src="./src/assets/work.svg"
              alt="target icon"
              className="w-16 mx-auto"
            />
            <div className="text-xl font-medium mb-1">Our work so far</div>
            <div className="justify-left">
              Developed a robust web platform offering customizable tests across
              subjects, personalized analytics-driven feedback, secure user
              profiles for privacy, and progress tracking to enable
              comprehensive self-assessment and data-driven preparation for
              exams.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
