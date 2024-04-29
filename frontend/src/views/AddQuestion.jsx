import React, { useState } from 'react';

export default function AddQuestion() {

  // Set default value here for each state
  const [question, setQuestion] = useState('');  //String
  const [optionA, setOptionA] = useState([]);  // String
  const [optionB, setOptionB] = useState([]);  // String
  const [optionC, setOptionC] = useState([]);  // String
  const [optionD, setOptionD] = useState([]);  // String
  const [answer, setAnswer] = useState('');  // String
  const [difficulty, setDifficulty] = useState(3);  // Number between 1 to 5
  const [topic, setTopic] = useState('');  // String
  const [subject, setSubject] = useState('Numeric Aptitude');  // String

  const [loading, setLoading] = useState(false);  
  const [message, setMessage] = useState('');  

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      answer,
      difficulty,
      topic,
      subject
    }
    try {
      const response = await fetch('http://localhost:3500/api/v1/test/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setMessage(result.message);
      setLoading(false);
    } catch (error) {
      setMessage(error.message);
      setLoading(false);
    }
  }

  return (
    <div className="container p-8 text-center text-xl">
      <h1 className='text-3xl mb-4'>Add Question</h1>
      <form onSubmit={handleAddQuestion}>
        <div className="form-group my-2">
          <label htmlFor="question">Question: </label>
          <input type="text" className="form-control border-2 ml-4" id="question" placeholder="Enter question" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="optionA">Option A: </label>
          <input type="text" className="form-control border-2 ml-4" id="optionA" placeholder="Enter option A" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="optionB">Option B: </label>
          <input type="text" className="form-control border-2 ml-4" id="optionB" placeholder="Enter option B" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="optionC">Option C: </label>
          <input type="text" className="form-control border-2 ml-4" id="optionC" placeholder="Enter option C" value={optionC} onChange={(e) => setOptionC(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="optionD">Option D: </label>
          <input type="text" className="form-control border-2 ml-4" id="optionD" placeholder="Enter option D" value={optionD} onChange={(e) => setOptionD(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="answer">Answer: </label>
          <input type="text" className="form-control border-2 ml-4" id="answer" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="subject">Subject: </label>
          <input type="text" className="form-control border-2 ml-4" id="subject" placeholder="Enter subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="topic">Topic: </label>
          <input type="text" className="form-control border-2 ml-4" id="topic" placeholder="Enter topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="difficulty">Difficulty: </label>
          <input type="number" min={1} max={5} className="form-control border-2 ml-4" id="difficulty" placeholder="Enter difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
        </div>
        <button type="submit" className="mt-4 bg-blue-900 text-white p-2 rounded-lg shadow-lg" disabled={loading}>{loading ? 'Loading...' : 'Add Question'}</button>
        <div className='my-4'>message: {message}</div>
      </form>
    </div>
  )
}