import React from 'react'




const Cuestionario = ({ 

    theNextQuestion,
    showAnswer,
    theAnswer, 
    data : {question, correct_answer, answers}, 
    
}) => {
    
    return (
    <div className='flex flex-col'>
        
        <div className='bg-white text-black p-10 rounded-lg shadow-md flex justify-center items-center'>
            
            <h2 className='text-2xl' 
                dangerouslySetInnerHTML ={{__html:question}}>
            </h2>



        </div>

        <div className='grid grid-cols-2 gap-6 mt-6 '> 

                {answers.map((answer, ix) => {
                    
                    const bgColorAnswer = showAnswer ? 
                        answer === correct_answer ? 
                          'bg-green-500' 
                        : 'bg-red-500' 
                        : 'bg-gray-700'

                    return(

                      
                        <button 
                                key={ix}
                                className={` ${bgColorAnswer} bg-gray-700 focus:outline-none p-4 text-white font-semibold rounded shadow text-center`}
                                onClick={() => theAnswer(answer)} 
                                dangerouslySetInnerHTML ={{__html:answer}}/>
                    )        


                })}
        </div>
        {showAnswer && (

            <button 

                onClick={theNextQuestion}
                className={`ml-auto mt-7 bg-gray-400 focus:outline-none p-4 text-black font-semibold rounded shadow text-center`}>
                    Next Question
            </button> 

        )}
    
    </div>

)}

export default Cuestionario