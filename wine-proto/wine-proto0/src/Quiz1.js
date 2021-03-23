import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Navbar, Nav} from 'react-bootstrap';
import Question from './components/Question';

// import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Results from './Results'
import logo from './svg/logo.svg';
import './index.css';


class Quiz1 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          counter: 0,
          questionId: 1,
          question: '',
          answerOptions: [],
          answer: '',
          answersCount: {},
          result: '',
          chosenAnswers: []
        };
    
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
      }
    
      componentDidMount() {
        const shuffledAnswerOptions = quizQuestions.map(question =>
          this.shuffleArray(question.answers)
        );
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: shuffledAnswerOptions[0]
        });
      }
    
      shuffleArray(array) {
        var currentIndex = array.length,
          temporaryValue,
          randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
    
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
    
        return array;
      }
    
      handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
    
        if (this.state.questionId < quizQuestions.length) {
          setTimeout(() => this.setNextQuestion(), 300);
        } else {
          setTimeout(() => this.setResults(this.getResults()), 300);
        }
      }
    
      setUserAnswer(answer) {
        this.setState((state, props) => ({
          answersCount: {
            ...state.answersCount,
            [answer]: (state.answersCount[answer] || 0) + 1
          },
          answer: answer,
          chosenAnswers: this.state.chosenAnswers.concat({answer})
        }));
        console.log(this.state.chosenAnswers)
      }
    
      setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
    
        this.setState({
          counter: counter,
          questionId: questionId,
          question: quizQuestions[counter].question,
          answerOptions: quizQuestions[counter].answers,
          answer: ''
        });
      }
    
      getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map(key => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);
    
        return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
      }
    
      setResults(result) {
        if (result.length === 1) {
          this.setState({ result: result[0] });
        } else {
          this.setState({ result: 'Undetermined' });
        }
      }
    
      renderQuiz() {
        return (
          <Quiz
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
            chosenAnswers={this.chosenAnswers}
          />
        );
      }
    
      renderResult() {
        return <Results chosenAnswers={this.state.chosenAnswers}  />;
      }
    
      render() {
        return (
          <>
          <>
            <Navbar bg="light" variant="light">
                <Link to="/#home">
                    <Navbar.Brand href="#home">WineSmart</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
            
                <Link to="/#home">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                <Link to="/quiz1">
                    <Nav.Link href="#features">Take the Quiz!</Nav.Link>
                </Link>
                <Link to="/results">
                    <Nav.Link href="#recommendations">Recommendations</Nav.Link>
                </Link> 
                </Nav>
            </Navbar>
            </>

          <div className = "Quiz1">
            {this.state.result ? <Link to={{pathname: '/results', state: {chosenAnswers: this.state.chosenAnswers}}}>
              <div>Click here to see your personalized results!</div>
              </Link> 
              : this.renderQuiz()}
          </div>
          </>
        );
      }

    // keeping this in case we need it 
    
    // constructor(props){
    //     super(props);
    // }
    // render() {
    //     return (
    //         <>
    //         <>
    //         <Navbar bg="light" variant="light">
    //             <Link to="/#home">
    //                 <Navbar.Brand href="#home">WineSmart</Navbar.Brand>
    //             </Link>
    //             <Nav className="mr-auto">
            
    //             <Link to="/#home">
    //                 <Nav.Link href="#home">Home</Nav.Link>
    //             </Link>
    //             <Link to="/quiz1">
    //                 <Nav.Link href="#features">Take the Quiz!</Nav.Link>
    //             </Link>
    //             <Link to="/results">
    //                 <Nav.Link href="#recommendations">Recommendations</Nav.Link>
    //             </Link> 
    //             </Nav>
    //         </Navbar>
    //         </>

    //             <Form>
    //                 <Form.Group size="md" controlId = "email">
    //                     <Form.Label>Email address</Form.Label>
    //                     <Form.Control type="email" placeholder="name@example.com" />
    //                 </Form.Group>
    //                 <Form.Group controlId="genderid">
    //                     <Form.Label>Gender Identity</Form.Label>
    //                     <Form.Control as="Select">
    //                         <option></option>
    //                         <option>Female</option>
    //                         <option>Male</option>
    //                         <option>Other</option>
    //                         <option>I prefer not to answer</option>
    //                     </Form.Control>
    //                 </Form.Group>
    //                 <Form>

    //                     <div key={`default-radio`} className="mb-3">
    //                     <Form.Check 
    //                         type={'radio'}
    //                         id={`default-raio`}
    //                         label={`default radio`}
    //                     />

    //                     <Form.Check 
    //                         type={'radio'}
    //                         id={`default-raio`}
    //                         label={`default radio`}
    //                     />

    //                     <Form.Check 
    //                         type={'radio'}
    //                         id={`default-raio`}
    //                         label={`default radio`}
    //                     />
    //                     </div>

    //                 </Form>
    //                 <Link to="/results">
    //                     <Button type="submit">Submit</Button>
    //                 </Link>
    //             </Form>
    //         </>
    //     )
    // }
}
export default Quiz1;