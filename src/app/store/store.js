import { create } from 'zustand'


// 建立 store hook
const usePsyStore = create((set) => ({
	// states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 3,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "你起床後第一件事是？",
      options: [
        {title: "滑手機", value: 3},
        {title: "再睡五分鐘", value: 2},
        {title: "想今天早餐要吃什麼", value: 1},
        {title: "思考自己為什麼還活著", value: 4}
      ]
    },
    "2":{
      title: "你半夜睡不著時通常都在做什麼？",
      options: [
        {title: "想昨天那句話是不是講得太重了", value: 3},
        {title: "回想自己不堪的黑歷史", value: 4},
        {title: "想未來的自己要幹嘛", value: 1},
        {title: "當然是趕作業嘻嘻嗚嗚嗚", value: 2}
      ]
    },
    "3":{
      title: "最常從朋友口中聽到的話？",
      options: [
        {title: "「T人不准說話！」", value: 2},
        {title: "「沒事的，別太在意」", value: 3},
        {title: "「欸，好酷的想法！」", value: 1},
        {title: "「真假！我都沒注意到欸」", value: 4}
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }