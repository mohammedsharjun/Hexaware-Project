import {React, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Pricing from "./pricing"
import Faq from './faq';
import Blogs from './blogs';

const home = () => {
    const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [difficulty, setDifficulty] = useState('');
  const [topic, setTopic] = useState('');
  const [showAnswers, setShowAnswers] = useState(false);
  const scrollRef = useRef(null);
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [answers]);

  const handleDifficultyChange = (e) => setDifficulty(e.target.value);
  const handleTopicChange = (e) => setTopic(e.target.value);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setShowAnswers(true);
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
        {
          contents: [{ parts: [{ text: topic }] }],
        }
      );
      const newAnswer = response.data.candidates[0].content.parts[0].text;
      const choices = response.data.candidates[0].content.parts[1]?.text || '';
      setAnswers((prevAnswers) => [...prevAnswers, { answer: newAnswer, choices }]);
      setQuestionNumber((prevNumber) => prevNumber + 1);
    } catch (error) {
      console.error(error);
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { answer: 'Sorry - Something went wrong. Please try again!', choices: '' },
      ]);
    }
    setGeneratingAnswer(false);
  }

  const closeAnswerContainer = () => setShowAnswers(false);
  return (
    <>
      
      <section className="question-generator">
        <div className="container">
          <h1>
            Free Question Generator - <span className="highlight">Q<span style={{ textTransform: 'uppercase', fontSize: '2.2rem' }}>uestify</span></span>
          </h1>
          <p>Ask your audience interesting questions to maximize engagement</p>
          <form onSubmit={generateAnswer}>
            <div className="input-box">
              <div className="input-group">
                <label className="label" htmlFor="topic">
                  <img src="/img/image.jpg" className="flex justify-center items-center lg:ml-[210%]" alt="Topic Image" />
                </label>
                <select id="difficulty" value={difficulty} onChange={handleDifficultyChange} required>
                  <option value="" disabled selected hidden>Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="difficult">Difficult</option>
                </select>
              </div>
              <label className="topic">
                Topic<span style={{ color: 'red' }}>*</span>
              </label>
              <textarea
                className="p-[10px]"
                id="topic"
                placeholder="Enter your topic here, for example - Time Management"
                maxLength={200}
                value={topic}
                onChange={handleTopicChange}
                required
              ></textarea>
              <br />
              <p className="char-limit" style={{ fontSize: '14px' }}>{topic.length}/200</p>
              <button className="generate-btn bg-[#47a16e]" type="submit" disabled={generatingAnswer}>
                {generatingAnswer ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </form>
        <div className='anscon'>
          <div className={`answer-container  lg:w-[70vw] ${showAnswers ? 'active' : ''}`} ref={scrollRef}>
            <button className="close-btn" onClick={closeAnswerContainer}>X</button>
            {generatingAnswer ? (
              <div className="loading-spinner"></div>
            ) : (
              <div className="scroll-container">
                {answers.map((item, index) => (
                  <div className="answer-box" key={index}>
                    <p className="question">Q{index + 1}: {topic}</p>
                    {item.choices && (
                      <ul className="choices">
                        {item.choices.split('\n').map((choice, i) => (
                          <li className="choice" key={i}>{choice}</li>
                        ))}
                      </ul>
                    )}
                    <ReactMarkdown>{item.answer}</ReactMarkdown>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div></div>
      </section>
      <section><Blogs /></section>
      <section><Faq /></section>
      <section><Pricing  id="pricing"/></section>
      
      <footer>
      <div className="footer-container">
          <div className="newsletter">
            <h2>Join our newsletter to keep up to date with us!</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer">
            <div className="footer-left">
              <h3>Questify</h3>
              <p>Free Question Generator for all purposes...</p>
            </div>
            <div className="footer-columns">
              <div className="footer-column">
                <h4>Products</h4>
                <a href="#">Plans & Pricing</a>
                <a href="#">Personal AI Manager</a>
                <a href="#">AI Business Writer</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">Admin</a>
                <a href="#">Trainee</a>
                <a href="#">Employees</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#">Documentation</a>
                <a href="#">Papers</a>
                <a href="#">Press Conferences</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2023 Questify Inc.</span>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default home
