import { create } from 'zustand'

// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 3,
  score: 0,
  updateState: (useState) => set( (state)=>({state: newState}) ),
  updateQuestionState: (useState) => set( (state)=>({questionState: newState}) ),
  updateTotalQuestions: (useState) => set( (state)=>({totalQuestions: newState}) ),
  updateScore: (useState) => set( (state)=>({score: newState}) ),
}))



export { usePsyStore }