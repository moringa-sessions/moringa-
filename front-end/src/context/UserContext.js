
import {createContext, useState, useEffect} from "react"
import Swal from "sweetalert2"

export const UserContext = createContext();



export default function UserProvider({children}) 
{
    const [onchange, setOnchange] = useState(false)


    // add user
    function addUser(username,email,phone, password)
    {
        fetch("/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,email,phone, password })

        }
        )
        .then(res => res.json())
        .then(response => {
            
            if (response.success)
            {
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: response.success,
                showConfirmButton: false,
                timer: 1500
                });
                setOnchange(!onchange)
            }
            else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: response.error,
                    showConfirmButton: false,
                    timer: 1500
                    });
                    setOnchange(!onchange)
            }


        })
    }





    // context data
    const contextData = {
        addUser,

        // pass all your variables and function
    }

  return (
    <UserContext.Provider value={contextData} >
       {children}
    </UserContext.Provider>
  )
}

 