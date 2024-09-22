"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import sal from "sal.js";
import sampleMcq from "../../data/sample_mcq.json";
import McqBox from "../Common/McqBox";
import WaitingForResponse from "../WaitingForResponse/WaitingForResponse";
import Popup from "../PopUp/Popup";
import { addQuestion, clearQPaper } from "@/app/store/Slices/questionSlice";
import API_CONFIG from "../API";
import LoadingAnimation from "@/app/loadingAnimation";

import Link from "next/link";
import Image from "next/image";
import AdvanceTab from "../TabStyles/AdvanceTab";
import bgShape from "../../public/images/bg/split-bg-shape.png";
import SplitImg from "../../public/images/split/split-1.png";
import SplitLogo from "../../public/images/split/split-2-logo.png";

const AGE = {
  question: "Could you please share your age range?",
  options: [
    "17-20",
    "21-25",
    "26-35",
    "36-49",
    "50+"
  ]
}

const Mcq = ({setLoadingState, setLoadingMessage}) => {
  const router = useRouter();
  const [userAnswers, setUserAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [popup, setPopup] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [questionsToShow, setQuestionsToShow] = useState([]);
  const [ageQuestionsToShow, setAgeQuestionsToShow] = useState([]);
  const [clickedButton, setClickedButton] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedUser);
  const qList = useSelector((state) => state.question.qHistory);

  useEffect(() => {
    sal();
  }, []);

  useEffect(() => {
    if (qList.length > 0) {
      setQuestionsToShow(qList);
    }
  }, [qList]);

  const handleNavigation = () => {
    router.push("/chatbot");
  };

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  const handleUserInput = (e) => {};

  const handleAnswerInput = (questionIndex, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleAgeInput = (option) => {
    setAgeQuestionsToShow(sampleMcq.response.find((item) => item.age_range === option));
  };

  const showGeneratedMcq = () => {
    setShowResult(false);
    setUserAnswers({});
    setStartTime(new Date());
    if (qList.length > 0){
      setQuestionsToShow([qList[qList.length - 1]]);  // display generated mcq test
    }else{
      console.log(sampleMcq)
      setQuestionsToShow([sampleMcq]); // display dummy if user didn't generate any mcqs
    }
    
  };

  const generateMcq = async (no_of_questions = 2) => {
    if (!user[0]) return;
    setIsLoading(true);

    try {
      const response = await fetch(     
        process.env.NEXT_PUBLIC_BASE_API_URL + API_CONFIG.quiz,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user[0].id,
            username: user[0].email,
            no_of_questions: no_of_questions,
            topic: "",
          }),
        }
      );

      const data = await response.json(); // !!!need to check 'Response not found. Try again later' error
      if (data.detail){
        setPopup({
          message: "An Error Occured. Server didn't send quations",
          type: 2,
          size: "large",
          position: "top-center",
          duration: 4000,
        });
      }else{
      clearQlist();
      dispatch(addQuestion(data));
      setQuestionsToShow([data]);
      setStartTime(new Date());
      }
    } catch (error) {
      setPopup({
        message: "Error generating MCQ. Please try again later!",
        type: 2,
        size: "large",
        position: "top-center",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // const addDummyData = () => {
  //   setQuestionsToShow([sampleMcq]); // Set the  data to local state
  //   setStartTime(new Date());
  // };

  const clearQlist = () => {
    dispatch(clearQPaper());
    setResults([]);
    setUserAnswers({});
    setStartTime(null);
    setEndTime(null);
    setQuestionsToShow([]); // Clear the demo data
  };

const handleAnswerSubmit = () => {
  const results = (questionsToShow || [])
    .map((item) => 
      item?.response?.questions?.map((question, qIndex) => ({
        question: question.question,
        correct: question.correct === userAnswers[qIndex],
        answer: question.correct,
      })) || [] // Return an empty array if item.response.questions is undefined
    )
    .flat();
  
  setResults(results);
  setEndTime(new Date());
};


  const calculateScore = () => {
    return results?.filter((result) => result?.correct).length;
  };

  const calculateTimeTaken = () => {
    if (!startTime || !endTime) return null;
    const timeDiff = Math.round((endTime - startTime) / 1000);
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    return `${minutes} min ${seconds} sec`;
  };

  // need to fix buttons
  return (
    <>
      {/* User inputs */}
      {/* {isLoading && <LoadingAnimation />} */}
      {/* <McqBox handleUserInput={handleUserInput} setLoadingState={setLoadingState} setLoadingMessage={setLoadingMessage}/> */}

      {/*  Generated MCQ Test button handle this now*/}
      {/* <button
        onClick={() => {
          addDummyData();
          handleButtonClick("dummy");
          setShowResult(false);
        }}
        className={`m-4 react-btn btn-default btn-small btn-border ${
          clickedButton === "dummy" ? "btn-primary" : "btn-outline-primary"
        }`}
      >
        Sample MCQ
      </button> */}
          
      <div className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big">
        <div className="container">
          <div className="html-tabs" data-tabs="true">
            <AdvanceTab />
          </div>
        </div>
        <div className="bg-shape">
          <Image src={bgShape} width={630} height={879} alt="Bg Shape" />
        </div>
        
      <div className="cover-section">
      
      <button
        onClick={() => {
          showGeneratedMcq();
          handleButtonClick("mcq");
          setShowResult(false);
        }}
        className={`m-4 react-btn btn-default btn-small btn-border ${
          clickedButton === "mcq" ? "bg-solid-primary" : "" // change butten color, only needed here
        }`}
      >
        Start Chat
      </button>

      <button
        onClick={() => {
          clearQlist();
          handleButtonClick("Delete");
        }}
        cl
        className="m-4 react-btn btn-default btn-small btn-border"
      >
        Clear Chat
      </button>
      
      {/* commented. remove it in production */}
      {/* {!isLoading ?
      <button
        className={`m-4 react-btn btn-default btn-small btn-border ${
          clickedButton === "generate" ? "filled-button" : ""
        }`}
      >
        Generate MCQ Test
      </button>
      :<div/>} */}
      

      <div className="chat-box-section-cus1">
        {/* MCQ area */}
        {questionsToShow.length > 0 &&
          questionsToShow.map((item, userIndex) => (
              <div
                  key={userIndex}
                  className="pb-10 chat-box-list"
                  id="chatContainer"
              >
                {isLoading && <WaitingForResponse/>}
                <div className="question-container">
                  <hr/>
                  <h6 className="question-text">
                    {AGE.question}
                  </h6>
                  <ul className="options-list">
                    {AGE.options?.map((option, optIndex) => (
                        <div key={optIndex} className="option-container">
                        <span className="option-span">
                          <div className="option-content">
                            <input
                                style={{
                                  opacity: "1",
                                  maxWidth: "fit-content",
                                  position: "initial",
                                }}
                                className="option-input"
                                type="radio"
                                name={`question-1`}
                                value={option}
                                onChange={() => handleAgeInput(option)}
                                // checked={userAnswers[qIndex] === option}
                            />
                            {option}
                          </div>
                        </span>
                        </div>
                    ))}
                  </ul>
                  {ageQuestionsToShow?.questions?.map((question, qIndex) => (
                      <div key={qIndex} className="question-container">
                        <hr />
                        <h6 className="question-text">
                          {qIndex + 1}. {question.question}
                        </h6>
                        <ul className="options-list">
                          {question.options.map((option, optIndex) => (
                              <div key={optIndex} className="option-container">
                        <span className="option-span">
                          <div className="option-content">
                            <input
                                style={{
                                  opacity: "1",
                                  maxWidth: "fit-content",
                                  position: "initial",
                                }} // move to css sheet
                                className="option-input"
                                type="radio"
                                name={`question-${qIndex}`}
                                value={option}
                                onChange={() => handleAnswerInput(qIndex, option)}
                                checked={userAnswers[qIndex] === option}
                            />
                            {option}
                          </div>
                        </span>
                              </div>
                          ))}
                        </ul>
                      </div>
                  ))}
                </div>
                <hr/>
                <div className="submit-cus">
                  <button
                      onClick={() => {
                        showGeneratedMcq();
                      }}
                      className="react-btn btn-default btn-small btn-border"
                  >
                    Clear
                  </button>
                  <button
                      onClick={() => {
                        handleAnswerSubmit();
                        setShowResult(true);
                        handleNavigation();
                      }}
                      className="react-btn btn-default btn-small btn-border"
                  >
                    Continue Chat
                  </button>
                </div>
              </div>
          ))}
      </div>

        {/* Results */}
        {questionsToShow.length > 0 && showResult && (
            <div className="chat-box-section-cus1" style={{marginTop: "50px"}}>
              {results.length > 0 && (
                  <div className="final-score">
                    <p>
                      <strong>Score:</strong> {calculateScore()}/
                      {questionsToShow[0]?.response?.questions.length}
                    </p>
                    <p>
                      <strong>Time Taken:</strong> {calculateTimeTaken()}
                    </p>
                  </div>
              )}
              {results.map((result, index) => (
                  <div key={index} className="result-container">
                    <hr/>
                    <p className="question-text">
                      <strong>Q {index + 1}:</strong> {result?.question}
                    </p>
                    <p
                        className={`result-status ${
                            result?.correct ? "correct" : "incorrect"
                        }`}
                    >
                      {" "}
                      {/* move to css sheet */}
                      {result?.correct ? "Correct" : "Incorrect"}
                    </p>
                    <p className="correct-answer">
                      Correct answer : {result?.answer}
                    </p>
                  </div>
              ))}
            </div>
        )}
      </div>
      </div>


      {/* Other */}
      {popup && (
          <Popup
              message={popup.message}
          type={popup.type}
          size={popup.size}
          position={popup.position}
          duration={popup.duration}
          results={popup.results}
          onClose={() => setPopup(null)}
        />
      )}
    </>
  );
};

export default Mcq;
