
import {createContext, useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"


export const QuestionContext = createContext();



export default function QuestionProvider({children}) 
{
    const navigate =  useNavigate()

    const [questions, setQuestions] = useState([])
    const [onchange, setOnchange] = useState(false)

    const authToken = sessionStorage.getItem("authToken")

    // add question
    function addQuestion(title, body, tags)
    {
        fetch("http://127.0.0.1:5000/questions",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken && authToken}`
            },
            body: JSON.stringify({title, body, tags })

        }
        )
        .then(res => res.json())
        .then(response => {
            navigate("/questions")

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

        // delete question
        function deleteQuestion(id)
        {
            fetch(`http://127.0.0.1:5000/question/${id}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken && authToken}`
                },
    
            }
            )
            .then(res => res.json())
            .then(response => {
                if(response.success)
                {
                    navigate("/questions")

                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: response.success,
                    showConfirmButton: false,
                    timer: 1500
                    });
                    setOnchange(!onchange)
                }
                else if(response.error){
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: response.error,
                        showConfirmButton: false,
                        timer: 1500
                        });
            
                        setOnchange(!onchange)
                }
                else{
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Something went wrong!",
                        showConfirmButton: false,
                        timer: 1500
                        });
            
                        setOnchange(!onchange)
                }

    
    
            })
        }

    // add answer
    function addAnswer(question_id, body)
    {
        fetch("http://127.0.0.1:5000/answers",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken && authToken}`
            },
            body: JSON.stringify({question_id, body })

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
            fetch(`http://127.0.0.1:5000/update_views/${id}`,{
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
        fetch("http://127.0.0.1:5000/questions")
        .then(res => res.json())
        .then(response => {
            setQuestions(response)
        })

    }, [onchange])



    // context data
    const contextData = {
        addQuestion,
        questions,
        deleteQuestion,
        updateQuestionViews,
        addAnswer

        // pass all your variables and function
    }

  return (
    <QuestionContext.Provider value={contextData} >
       {children}
    </QuestionContext.Provider>
  )
}

 