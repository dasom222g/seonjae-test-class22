import React, { useCallback, useEffect, useState } from "react";
import Progess from "../components/Progess";
import Question from "../components/Question";
import Answer from "../components/Answer";
import { initialMbtiAnswer, initialMbtiQuestion } from "../data/initialState";
import { mbtiAnswerList, mbtiQuestionList } from "../data/response";
import { useNavigate } from "react-router-dom";

const Test = ({ onMovePage }) => {
  // logic
  const history = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [mbtiQuestion, setMbtiQuestion] = useState(initialMbtiQuestion);
  const [mbtiAnswer, setMbtiAnswer] = useState(initialMbtiAnswer);

  const { step, questionText } = mbtiQuestion;

  // 추가
  const [mbtiResultList, setMbtiResultList] = useState([]);

  const handleAnswerClick = (selectedItem) => {
    // 12까지만 증가하고 12일때는 증가 안함
    // 수정
    setCurrentStep(currentStep + 1);

    // 추가
    // mbtiResult에 결과값 더하기 (4가지 유형으로 배열 최대값 4)

    const { type } = selectedItem;
    // 이미 타입이 존재하는 경우
    const existItem = mbtiResultList.find(
      (mbtiResult) => mbtiResult.questionType === mbtiAnswer.questionType
    );
    if (existItem) {
      const { firstType, questionType, resultValue } = existItem;
      // answerType에 따라 1 더해준 아이템 만들기
      const existItemResult = {
        ...existItem,
        resultValue: {
          [firstType]:
            firstType === type
              ? resultValue[firstType] + 1
              : resultValue[firstType],
        },
      };
      setMbtiResultList((prev) =>
        prev.map((mbtiResult) =>
          mbtiResult.questionType === questionType
            ? existItemResult
            : mbtiResult
        )
      );
    } else {
      // 타입이 존재하지 않는경우 경우
      setMbtiResultList((prev) => [...prev, initMbtiResult(type)]);
    }
  };

  const initMbtiResult = (answerMbtiType) => {
    const { firstType, lastType, questionType } = mbtiQuestion;
    return {
      firstType,
      lastType,
      questionType, // EI or NS ..
      resultValue: {
        [firstType]: firstType === answerMbtiType ? 1 : 0,
      },
    };
  };

  const goResult = useCallback(() => {
    history("/result");
    // 추가
    onMovePage(mbtiResultList);
  }, [history, mbtiResultList, onMovePage]);

  // 추가
  useEffect(() => {
    currentStep > 12 && goResult();
  }, [currentStep, goResult]);

  // 1. 원하는 state 감시
  useEffect(() => {
    console.log("current", currentStep);
    // state 변경시 실행될 실행문
    const nextQuestion = mbtiQuestionList.find(
      (item) => item.step === currentStep
    ); // undefined

    // question데이터 변경
    nextQuestion && setMbtiQuestion(nextQuestion);

    // answerData 변경
    const nextAnswer = mbtiAnswerList.find(
      (answer) => answer.questionStep === currentStep
    );
    nextAnswer && setMbtiAnswer(nextAnswer);
  }, [currentStep]);

  // 2. 진입 시 딱 한번만 실행
  useEffect(() => {
    // 진입 시 실행될 실행문
  }, []);

  // 3. 모든 state가 변경될때 실행
  useEffect(() => {
    // 페이지에서 하나의 state라도 변경될때 실행될 실행문
  });

  // view
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      {/* START: Progress 컴포넌트 */}
      <Progess />
      {/* END: Progress 컴포넌트 */}
      {/* START: Question 컴포넌트 */}
      <Question text={questionText} step={step} />
      {/* END: Question 컴포넌트 */}
      {/* START: Answer 컴포넌트 */}
      <Answer data={mbtiAnswer} onAnswerClick={handleAnswerClick} />
      {/* END: Answer 컴포넌트 */}
    </section>
  );
};

export default Test;
