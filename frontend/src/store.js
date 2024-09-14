import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state structure
const initialState = {
  students: [], // Array to store students
  currentQuestion: 0,
  questions: [
    // Array of questions, each containing options and an answer
    {
      id: 1,
      questionText: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
  ],
  responses: {
    // responses will store the studentId and their answers per question
    1: {
      // Question ID
      studentId1: "Berlin",
      studentId2: "Paris",
    },
  },
};

// Create a slice for students, questions, and responses
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    changeCurrentQuestion: (state, action) => {
      state.currentQuestion = state.currentQuestion + 1;
    },
    addResponse: (state, action) => {
      const { questionId, studentId, response } = action.payload;
      if (!state.responses[questionId]) {
        state.responses[questionId] = {};
      }
      state.responses[questionId][studentId] = response;
    },
    modifyAnswer: (state, action) => {
      const { questionId, newAnswer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.answer = newAnswer;
      }
    },
  },
});

export const { addStudent, addQuestion, addResponse, modifyAnswer } =
  appSlice.actions;

// Configure and export the store
const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export default store;
