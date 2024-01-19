
import {createContext, useState, useEffect} from "react"
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"

export const UserContext = createContext();



export default function UserProvider({children}) 
{
    const [onchange, setOnchange] = useState(false)

     const navigate = useNavigate()
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

    // login user
    function login(username,password)
    {
        fetch("/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,password })

        }
        )
        .then(res => res.json())
        .then(response => {
            
            if (response.access_token)
            {
                navigate("/")
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login success",
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

            console.log(response)


        })
    }



    // context data
    const contextData = {
        addUser,
        login

        // pass all your variables and function
    }

  return (
    <UserContext.Provider value={contextData} >
       {children}
    </UserContext.Provider>
  )
}

 