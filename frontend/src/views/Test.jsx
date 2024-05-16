import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const [user, setUser] = useState(null);
  const [index, setIndex] = useState(0);
  const [leave, setLeave] = useState(false);
  const navigate = useNavigate();
  let started = false;

  let questions = [
    {
      _id: "1",
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      difficulty: 1,
      topic: "Addition",
      subject: "Quantitative Aptitude",
    },
    {
      _id: "2",
      question: "What is 3 + 3?",
      options: ["3", "4", "5", "6"],
      answer: "6",
      difficulty: 1,
      topic: "Addition",
      subject: "Quantitative Aptitude",
    },
    {
      _id: "3",
      question: "What is 4 + 4?",
      options: ["3", "4", "5", "8"],
      answer: "8",
      difficulty: 1,
      topic: "Addition",
      subject: "Quantitative Aptitude",
    },
    {
      _id: "4",
      question: "What is 5 + 5?",
      options: ["3", "4", "5", "10"],
      answer: "10",
      difficulty: 1,
      topic: "Addition",
      subject: "Quantitative Aptitude",
    },
    {
      _id: "5",
      question: "What is 6 + 6?",
      options: ["3", "4", "5", "12"],
      answer: "12",
      difficulty: 1,
      topic: "Addition",
      subject: "Quantitative Aptitude",
    },
  ];

  // confirm before reloading or closing the window
  // window.onbeforeunload = (e) => {
  //   // setLeave(true);
  //   return "Are you sure you want to leave?";
  // };

  const selectedClass = [
    "border-2",
    "border-gray-700",
    "bg-gray-700",
    "cursor-pointer",
    "text-white",
  ];
  const normalClass = [
    "border-2",
    "border-gray-300",
    "hover:border-gray-700",
    "cursor-pointer",
  ];

  let chosen = JSON.parse(localStorage.getItem("chosen")) || [];

  const onChecked = (e, option) => {
    chosen.splice(index, 1, option);
    localStorage.setItem("chosen", JSON.stringify(chosen));

    console.log(chosen, index);

    setClasses();
  };

  const setClasses = () => {
    const options = document.querySelectorAll(".options");
    options.forEach((option) => {
      option.classList.remove(...selectedClass);
      option.classList.remove(...normalClass);

      if (option.children[0].innerHTML === chosen[index]) {
        option.classList.add(...selectedClass);
      } else {
        option.classList.add(...normalClass);
      }
    });
  };

  const resetOptions = () => {
    chosen.splice(index, 1, null);
    localStorage.setItem("chosen", JSON.stringify(chosen));
    setClasses();
  };

  const nextQuestion = (e) => {
    if (index === questions.length - 1) {
      e.target.innerHTML = "Loading...";

      // send a request to the server to save the test
      const res = fetch("http://localhost:3500/api/v1/test/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: subject,
          difficulty: difficulty,
          questions: questions,
          answers: chosen,
          duration: 1200,
        }),
      });
    } else {
      if (index < questions.length - 1) {
        setIndex((index) => index + 1);
      }
    }
  };

  const prevQuestion = () => {
    if (index > 0) {
      setIndex((index) => index - 1);
    }
  };

  let subject = "Quantitative Aptitude";
  let difficulty = "Easy";

  useEffect(() => {
    if (chosen != null) {
      setClasses();
    }
  }, [index]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);

    chosen = JSON.parse(localStorage.getItem("chosen"));
    console.log(chosen);

    if (chosen !== null) {
      localStorage.removeItem("chosen");
      navigate("/create");
      alert("You have to start a new test");
    } else {
      chosen = new Array(questions.length).fill(null);
      localStorage.setItem("chosen", JSON.stringify(chosen));
      setClasses();
    }
  }, []);

  return (
    <>
      <dialog open={leave}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-medium">
            Are you sure you want to leave?
          </h1>
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={() => setLeave(false)}
              className="border rounded-lg py-2 px-6 border-black hover:bg-yellow-100"
            >
              No
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="border rounded-lg py-2 px-6 border-black hover:bg-red-500 hover:text-white"
            >
              Yes
            </button>
          </div>
        </div>
      </dialog>
      <div id="container" className="h-screen flex justify-center py-8">
        <div className="px-8 py-6 flex-grow mx-44 shadow-lg rounded-xl border-2 border-primary flex flex-col item-center justify-between">
          <div className="w-full">
            <div className="flex justify-between text-xl font-medium w-full">
              <div className="flex-1">{subject}</div>
              <div className="text-primary flex-1 text-center">{`${index + 1}/${
                questions.length
              }`}</div>
              <div className="flex-1 text-right">12:00</div>
            </div>

            <div className="divider border border-gray-300 my-4"></div>

            <div className="border flex flex-col justify-between h-full border-red-200 rounded-xl px-8 py-6 mt-8 text-lg">
              <div>{questions[index].question}</div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <div
                    onClick={(e) => onChecked(e, questions[index].options[0])}
                    className="w-full mx-2 my-2 p-2 options"
                  >
                    <label htmlFor="optionA">
                      {questions[index].options[0]}
                    </label>
                  </div>
                  <div
                    onClick={(e) => onChecked(e, questions[index].options[1])}
                    className="w-full mx-2 my-2 p-2 options"
                  >
                    <label htmlFor="optionB">
                      {questions[index].options[1]}
                    </label>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div
                    onClick={(e) => onChecked(e, questions[index].options[2])}
                    className="w-full mx-2 my-2 p-2 options"
                  >
                    <label htmlFor="optionC">
                      {questions[index].options[2]}
                    </label>
                  </div>
                  <div
                    onClick={(e) => onChecked(e, questions[index].options[3])}
                    className="w-full mx-2 my-2 p-2 options"
                  >
                    <label htmlFor="optionD">
                      {questions[index].options[3]}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-lg">
              <button
                onClick={prevQuestion}
                className="border rounded-lg py-2 px-6 border-black hover:bg-yellow-100"
              >
                Prev
              </button>
              <button
                onClick={resetOptions}
                className="border rounded-lg py-2 px-6 border-black hover:bg-red-500 hover:text-white"
              >
                Clear
              </button>
              <button
                onClick={(e) => nextQuestion(e)}
                className="border rounded-lg py-2 px-6 border-black hover:bg-primary hover:text-white"
              >
                {index === questions.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
}
