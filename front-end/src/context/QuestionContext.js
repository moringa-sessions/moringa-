
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

        // update views in question
        function updateQuestionViews(id)
        {
            fetch(`/update_views/${id}`,{
                method: "PUT",             
    
            }
            )
            .then(res => res.json())
            .then(response => {
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
        questions,
        updateQuestionViews

        // pass all your variables and function
    }

  return (
    <QuestionContext.Provider value={contextData} >
       {children}
    </QuestionContext.Provider>
  )
}

 