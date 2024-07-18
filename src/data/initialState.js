export const initialMbtiQuestion = {
  id: 1,
  step: 1,
  nextStep: 2,
  questionType: "EI",
  firstType: "E",
  lastType: "I",
  questionText: "선재가 이클립스 공연에 당신을 초대한다면?",
};

export const initialMbtiAnswer = {
  id: 1,
  questionStep: 1,
  questionNextStep: 2,
  questionType: "EI",
  answerList: [
    {
      code: 0,
      type: "E",
      text: "꺄아! 당연히 가서 떼창도 하고 다른 팬들이랑 같이 즐겨야지!",
    },
    {
      code: 1,
      type: "I",
      text: "선재가 날 초대해 주다니..오로지 선재에게만 집중하고 싶어",
    },
  ],
};

export const initialMbtiResultData = {
  id: 1,
  type: "ENFP",
  score: 100,
  text: "선재와 당신은 완벽한 케미를 자랑하는 천생연분! 두 사람의 만남은 운명 그 자체예요. 선재의 로맨틱한 감성과 당신의 발랄함은 환상의 조합이에요. 어디를 가든 주목받는 베스트 커플이 될 거예요. 두 분이 함께라면 세상은 항상 아름답고 행복으로 가득 차 있을 거예요.",
  loveIndexList: [
    { id: 1, type: "affection", score: 100, text: "애정표현력" },
    { id: 2, type: "sense", score: 95, text: "눈치력" },
    { id: 3, type: "driving", score: 90, text: "썸 추진력" },
    { id: 4, type: "sexy", score: 85, text: "19금력" },
  ],
};
