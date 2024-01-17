
import {createContext, useState, useEffect} from "react"
import Swal from "sweetalert2"

export const QuestionContext = createContext();



export default function QuestionProvider({children}) 
{
    const [questions, setQuestions] = useState([])
    const [onchange, setOnchange] = useState(false)

    // add question
    function addQuestion(title, body, tags)
    {
        fetch("/questions",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, body, tags })

        }
        )
        .then(res => res.json())
        .then(response => {
            
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.success,
            showConfirmButton: false,
            timer: 1500
            });
            setOnchange(!onchange)


        })
    }


    // fetch questions
    useEffect(()=>{
        fetch("/questions")
        .then(res => res.json())
        .then(response => {
            setQuestions(response)
        })

    }, [onchange])



    // context data
    const contextData = {
        addQuestion,
        questions

        // pass all your variables and function
    }

  return (
    <QuestionContext.Provider value={contextData} >
       {children}
    </QuestionContext.Provider>
  )
}

 