
import {createContext} from "react"
import Swal from "sweetalert2"

export const AnswerContext = createContext();



export default function AnswerProvider({children}) 
{

    // add answer
    function addAnswer(question_id, body)
    {
        fetch("/answers",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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


        })
    }

        // // update views in question
        // function updateQuestionViews(id)
        // {
        //     fetch(`/update_views/${id}`,{
        //         method: "PUT",             
    
        //     }
        //     )
        //     .then(res => res.json())
        //     .then(response => {
        //         setOnchange(!onchange)
        //     })
        // }




    // context data
    const contextData = {
        addAnswer,
        // pass all your variables and function
    }

  return (
    <AnswerContext.Provider value={contextData} >
       {children}
    </AnswerContext.Provider>
  )
}

 