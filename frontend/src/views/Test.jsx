import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const [user, setUser] = useState(null);
  const [index, setIndex] = useState(0);
  const [leave, setLeave] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  let started = false;

  let dummyQuestions = [
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

  const [questions, setQuestions] = useState(dummyQuestions);

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
      try {

        let token = localStorage.getItem("token");

        const res = fetch("http://localhost:3500/api/v1/test/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            subject: subject,
            difficulty: difficulty,
            questions: questions,
            answers: chosen,
            duration: timer,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "fail") {
              alert(data.message);
            } else {
              localStorage.removeItem("chosen");
              navigate(`/report/${data.data.testDetails._id}`);
              alert("Test submitted successfully");
            }
          });
      } catch (error) {
        console.log(error);
      }
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

  let subject = localStorage.getItem("subject");
  let difficulty = localStorage.getItem("difficulty");

  useEffect(() => {
    if (chosen != null) {
      setClasses();
    }
  }, [index, loading]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);

    let token  = localStorage.getItem("token");

    let url = null;
    if (difficulty == null) {
      url = `http://localhost:3500/api/v1/test/mock/${subject}`;
    } else {
      url = "http://localhost:3500/api/v1/test/start";
    }

    // fetch questions
    try {
      const res = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          subject: subject,
          difficulty: difficulty,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "fail") {
            alert(data.message);
          } else if (data.data.questions.length === 0) {
            setQuestions(dummyQuestions);
          }
          else {
            setQuestions(data.data.questions);
            setLoading(false);
          }
        });

        setInterval(() => {
          setTimer(prev => prev + 1);
          // get seconds
          const seconds = timer % 60;
          // get minutes
          const minutes = Math.floor(timer / 60);
        }, 1000)
    } catch (error) {
      console.log(error);
    }

    setLoading(false);

    chosen = JSON.parse(localStorage.getItem("chosen"));

    if (chosen !== null) {
      localStorage.removeItem("chosen");
      navigate("/dashboard");
      alert("You have to start a new test");
    } else {
      chosen = new Array(questions.length).fill(null);
      localStorage.setItem("chosen", JSON.stringify(chosen));
      setClasses();
    }
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div id="container" className="h-screen flex justify-center py-8">
            <div className="px-8 py-6 flex-grow mx-44 shadow-lg rounded-xl border-2 border-primary flex flex-col item-center justify-between">
              <div className="w-full">
                <div className="flex justify-between text-xl font-medium w-full">
                  <div className="flex-1">{subject }</div>
                  <div className="text-primary flex-1 text-center">{`${
                    index + 1
                  }/${questions.length}`}</div>
                  <div className="flex-1 text-right">{Math.floor(timer / 60)}:{timer % 60}</div>
                </div>

                <div className="divider border border-gray-300 my-4"></div>

                <div className="border flex flex-col justify-between h-full border-red-200 rounded-xl px-8 py-6 mt-8 text-lg">
                  <div>{questions[index].question}</div>

                  <div className="mt-4">
                    <div className="flex justify-between">
                      <div
                        onClick={(e) =>
                          onChecked(e, questions[index].options[0])
                        }
                        className="w-full mx-2 my-2 p-2 options"
                      >
                        <label htmlFor="optionA">
                          {questions[index].options[0]}
                        </label>
                      </div>
                      <div
                        onClick={(e) =>
                          onChecked(e, questions[index].options[1])
                        }
                        className="w-full mx-2 my-2 p-2 options"
                      >
                        <label htmlFor="optionB">
                          {questions[index].options[1]}
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div
                        onClick={(e) =>
                          onChecked(e, questions[index].options[2])
                        }
                        className="w-full mx-2 my-2 p-2 options"
                      >
                        <label htmlFor="optionC">
                          {questions[index].options[2]}
                        </label>
                      </div>
                      <div
                        onClick={(e) =>
                          onChecked(e, questions[index].options[3])
                        }
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
        </>
      )}
    </>
  );
}
