import React, { Component } from 'react';
import '../styles//App.scss';
import Header from './Header';
import Progress from './Progress';
import Question from './Question';
import Answers from './Answers';
import Result from './Result';
import Footer from './Footer';
import LoadingPage from './LoadingPage';

// const API = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple';
const API = 'https://opentdb.com/api.php?amount=10&category=21&type=multiple';

class App extends Component {



  state = {
    questionNumber: 0,
    score: 0,
    questions: [],
    givenAnswers: [],
    correctAnswer: '',
    isActive: false,
    isCorrect: false,
    disableButtons: false,
    quizFinished: false,
  }

  fetchAPI = () => {
    this.timer = setTimeout(() => {
      fetch(API)
        .then(res => {
          if (res.ok) {
            return res;
          }
          throw new Error("Something went wrong");
        })
        .then(res => res.json())
        .then(data => {
          const questions = data.results.map(el => ({
            question: el.question,
            all_answers: [el.correct_answer, ...el.incorrect_answers].sort(() => .5 - Math.random()),
            correct_answer: el.correct_answer
          }));

          this.setState({
            questions,
            isActive: true,
          });
        })
    }, 500)
  }


  componentDidMount() {
    this.fetchAPI();

  }

  componentDidUpdate(prevState) {
    if (!prevState.isActive !== this.state.isActive) {
      clearTimeout(this.timer);
      this.fetchAPI();
    }
  }



  handleAnswerClick = (e) => {
    const index = this.state.questionNumber;
    const questions = this.state.questions;
    const correctAnswer = questions[index].correct_answer;
    const choosedAnswer = e.target.textContent;

    if (correctAnswer === choosedAnswer && this.state.isCorrect === false) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isCorrect: true,
        disableButtons: true,
        givenAnswers: [...prevState.givenAnswers, "ok"],
        correctAnswer

      }))
    } else if (correctAnswer !== choosedAnswer) {
      this.setState(prevState => ({
        disableButtons: true,
        givenAnswers: [...prevState.givenAnswers, "nok"],
        correctAnswer
      }))
    }

  }

  handleNextQuestion = () => {
    if (!this.state.disableButtons) {
      this.setState(prevState => ({
        givenAnswers: [...prevState.givenAnswers, "nok"]
      }))
    }
    this.setState(prevState => ({
      questionNumber: prevState.questionNumber + 1,
      isCorrect: false,
      disableButtons: false,
    }))
  }

  handleFinishQuiz = () => {
    this.setState({
      quizFinished: true
    })
  }

  handleRestart = () => {
    this.setState({
      questionNumber: 0,
      score: 0,
      questions: [],
      givenAnswers: [],
      isActive: false,
      isCorrect: false,
      disableButtons: false,
      quizFinished: false
    })

  }


  render() {
    const { questionNumber } = this.state;

    if (this.state.quizFinished) {
      return (
        <div className="app">
          <div className="quiz">
            <Header />
            <Result
              restart={this.handleRestart}
              score={this.state.score}
            />
            <Footer />
          </div>
        </div>
      )
    }
    else if (this.state.questions.length > 0 && !this.state.quizFinished) {
      const question = this.state.questions[questionNumber].question;
      const answers = this.state.questions[questionNumber].all_answers;
      const correctAnswer = this.state.questions[questionNumber].correct_answer;

      return (
        <div className="app">
          <div className="quiz">
            <Header />
            <Progress
              score={this.state.score}
              questionNumber={this.state.questionNumber}
              correct={this.state.isCorrect}
              givenAnswers={this.state.givenAnswers}
            />
            <div className="container">
              <Question
                questionText={question}
              />
              <Answers
                answers={answers}
                checkAnswer={this.handleAnswerClick}
                nextQuestion={this.handleNextQuestion}
                finishQuiz={this.handleFinishQuiz}
                disableButtons={this.state.disableButtons}
                number={this.state.questionNumber}
                correctAnswer={this.state.correctAnswer}
              />
            </div>
            <Footer />
          </div>
        </div>
      );
    }
    else {

      return (
        <div className="app">
          <Header />
          <div className="loading">
            <LoadingPage />
          </div>
        </div>
      )
    }
  }

}






export default App;
