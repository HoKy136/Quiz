import React, { useEffect, useState } from "react";
// import FetchUsers from "../Api/Api"
import data from "../questions.json"


function GameRender(){
    const [showFinal , setShowFinal] = useState(true)
    const [score , setScore] = useState(0)
    const [timmer , setTimmer] = useState(150)
    const [currenQuestion , setCurrentQuestion] = useState(0)
    
    const [showReview , setShowReview] = useState(false)
    useEffect(() =>{ 
        const dem = setInterval(() => {
            setTimmer(prev => prev - 1)
        }, 1000);
        if(timmer == 0 ){
            setShowFinal(false)
            clearInterval(dem)
        }
    } ,[])
    const chooseResult =(correct) =>{
       
        if(correct){
            setScore(score +1)
        }
        
        
    } ;
    const nextQuestion = () =>{
        if(currenQuestion < 4)
        {setCurrentQuestion(currenQuestion + 1);}
       
    };

    const backQuestion = () =>{
        if(currenQuestion >= 1)
        setCurrentQuestion(currenQuestion - 1);
    };

    const tryAgainQuestion = () =>{
        setCurrentQuestion(0);
        setScore(0);
        setShowFinal(true)
        setTimmer(150)
        setShowReview(false);
    };
    const submitQuestion = () =>{
       
        alert('Chắc chưa ????')
        setShowFinal(false)
        setTimmer(150)
    };
    const reviewQuestion =() =>{
        setShowReview(!showReview)
        
    }
    const restartQuestion = () =>{
        setCurrentQuestion(0);
        setScore(0);
        setShowFinal(true)
        setTimmer(150)
        setShowReview(false)
        
    };
    return (
        <div>
        {showFinal ?
        <div>
            
            <div>
           <button onClick={() =>backQuestion()}
            style={{backgroundColor :"#6B7280" ,
                    margin : "15px",
                    width : "100px",
                    height : "40px",
                    borderRadius : "5%",
                    border: "none",
                    color : "white"}} >Previous</button>
           <button onClick={() => nextQuestion()} 
           style={{backgroundColor :"#6ED5B7",
                    margin : "15px",
                    width : "100px",
                    height : "40px",
                    borderRadius : "5%",
                    border: "none"}}
            disabled={currenQuestion === 4}>Next</button>
             <button onClick={() => submitQuestion()} 
           style={{backgroundColor :"#F59E0B",
                    margin : "15px",
                    width : "100px",
                    height : "40px",
                    borderRadius : "5%",
                    border: "none",
                    }}
            disabled={currenQuestion < 4}>Submit</button>
           </div>
           <div className="containerQuestion">
            <h5 style={{color:"#6ED5B7" }}> {timmer} </h5>
            <h3 style={{color:"#6ED5B7" }}> Question {currenQuestion + 1}/{data.length}</h3>
            <h3 style={{marginTop : "20px"}} 
            key={data[currenQuestion].id}>
               {data[currenQuestion].question_content}
            </h3>
            </div>
            <div className="containerAnswer">
           
                {data[currenQuestion].answers.map(answers =>{
                    return(
                        <button className="btnAnswers" 
                        key={answers.answer_content} 
                        onClick={() =>chooseResult(answers.correct)}
                        style ={ chooseResult === answers.answer_content ? {backgroundColor :'red'} : {}}
                        >{answers.answer_content}</button>
                    )
                })}
           
            </div>
         
        </div>
        : <div>
            <h3 style={{color:"white" }}>
                Your score: {score}
            </h3>
            <button onClick={() => reviewQuestion()} 
           style={{backgroundColor :"#6ED5B7",
                    margin : "15px",
                    width : "100px",
                    height : "40px",
                    borderRadius : "5%",
                    border: "none"}}>Review</button>
                <button onClick={() => tryAgainQuestion()} 
           style={{backgroundColor :"#6ED5B7",
                    margin : "15px",
                    width : "100px",
                    height : "40px",
                    borderRadius : "5%",
                    border: "none"}}>Try again</button>
            </div>}
            {showReview && <div>
            <div>
           <button onClick={() =>backQuestion()}
            style={{backgroundColor :"#6B7280" ,
                    margin : "15px",
                    width : "100px",
                    height : "40px",
                    borderRadius : "5%",
                    border: "none",
                    color : "white"}} >Previous</button>
           <button onClick={() => nextQuestion()} 
           style={{backgroundColor :"#6ED5B7",
                    margin : "15px",
                    width : "100px",
                    height : "40px",
                    borderRadius : "5%",
                    border: "none"}}>Next</button>
               <button onClick={() => restartQuestion()} 
           style={{backgroundColor :"#F59E0B",
                    margin : "15px",
                    width : "100px",
                    height : "40px",
                    borderRadius : "5%",
                    border: "none"}}>Restart</button>
           </div>
           <div className="containerQuestion">
            <h3 style={{color:"#6ED5B7" }}> Question {currenQuestion + 1}/{data.length}</h3>
            <h3 style={{marginTop : "20px"}} 
            key={data[currenQuestion].id}>
               {data[currenQuestion].question_content}
            </h3>
            </div>
            <div className="containerAnswer">
           
                {data[currenQuestion].answers.map(answers =>{
                    return(
                        <button className="btnAnswers" style={{backgroundColor : answers.correct === true ? '#10B981' : '#EF4444'}}
                        key={answers.answer_content} 
                        onClick={() =>chooseResult(answers.correct)}
                        >{answers.answer_content}</button>
                    )
                })}
           
            
            </div></div>}
        </div>
    )
}

export default GameRender;