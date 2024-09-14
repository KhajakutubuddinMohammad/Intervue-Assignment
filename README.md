You can clone or download the repository from "https://github.com/KhajakutubuddinMohammad/Intervue-Assignment".

Run 2 terminals, one for frontend and the other for backend

In one terminal, cd into frontend, run the command "npm i", then "npm run start", then the frontend server will start at port 3000.
In other terminal, cd into backend and then run the command "npm i", then "node server.js", then the backend server will start at port 5000.

Flows:

1. Student Flow:
   The student has to select "I am a student" option, then he will be redirected to namePage where his name should be entered. And upon clicking continue, he then will be redirected to attemptQuestion page.

   In AttemptQuestion, the logic is to wait for the event "new-question-submitted" which will be triggered from createQuestion.js file by the teacher. Until receiving that event, a loader will be shown and then the question from the teacher will be displayed.

   I did not implement the further flow of displaying percentages of answers because of time constraint.

2. Teacher Flow:
   When we select "I am a Teacher" option in homepage, then we will be redirected to TeacherNamePage where the teacher should enter his/her name and then upon clicking continue, they will be redirected to createQuestion.js page where they can submit a question and an event "new-question-submitted" will be emitted successfully.

A socket was created at backend running on port 5000, I am sending an event 'new-question-submitted' event to the backend from createQuestion.js by teacher and receiving that same event to the attemptQuestion.js by the student.

How to test the application:

Open 2 tabs in browser,
(i) In first tab, open "localhost:3000/" select "Student" >>> Enter Name >>> wait for question from teacher
(ii) In second tab, open "localhost:3000/" select "Teacher" >>> Enter Name >>> Then submit a question.

When the teacher submits a question from the second tab, the student can see that question in the first tab.

Database:
I am storing the questions in the MongoDB database, calling the endpoint "api/polls/createPoll" for storing polls. It is working but I commented it just to avoid confusion between redux store and MongoDB database.

If there are any questions or issues, please let me know.
