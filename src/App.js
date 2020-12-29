import React, { useEffect, useState } from "react";
import {Cuestionario} from './components'


const API_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy'

function App() {

  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  

  useEffect(() => {

     fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {

          const questions = data.results.map((question) => 
          
          ({

              ...question,

              answers: [

                // eslint-disable-next-line no-undef
                question.correct_answer,
                // eslint-disable-next-line no-undef
                ...question.incorrect_answers
              ].sort(() => Math.random() - 0.5) 



          }))
          
          setQuestions(questions)
      }) 


  },[])


  const theAnswer = (answer) => {

    if (!showAnswer) {
     
      if (answer === questions[index].correct_answer) {

        
        setScore(score + 15)

      }
    }


    setShowAnswer(true)



  }
  
  const theNextQuestion = () => {

      setIndex(index + 1)
      setShowAnswer(false)    
      

  }


  return questions.length > 0 ? (  
  
  
  
      <div className='container'>

        {
          index >= questions.length ? (

            score <= 75 ? (
      
              <div>Too bad!, your score was: {score}</div>
      
            ) : (
      
              <div>Congrats!, your score was: {score}</div>
      
            )
      
          ) : (

            <Cuestionario 
                data={questions[index]} 
                theAnswer={theAnswer}
                theNextQuestion={theNextQuestion}
                showAnswer={showAnswer}/>

          ) 

        }


         

      </div>
        
            ): (


                <h1>Loading...</h1>

            )

}

export default App;
