import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'

function UpdateForm(){
    let pos = useParams();
    let navigate = useNavigate();
    let [userData, setUserData] = useState({});

    useEffect(()=>{
        console.log(pos);

        Axios.get("http://localhost:5000/users/"+pos.index)
        .then(async (res)=>{
              setUserData(res.data)
        })
        // fetch("http://localhost:5000/users/"+pos.index,{
        //     method : "get"
        // })
        // .then(async (res)=>{
        //     setUserData(await res.json())
        // })

    },setUserData)

    let changeInput = (e) =>{
        let {name,value} = e.target;
        setUserData({...userData,[name]:value})
    }

    let submitData = (e) =>{
        e.preventDefault();
        // console.log(userData)
        Axios.put("http://localhost:5000/users/"+userData.id,userData)
        .then((res)=>{
             toast.success("Record updated successfully");
             setTimeout(()=>{
                navigate("/showhome");
             },5000)
        })
        .catch((err)=>{
            console.log(err);
        })
        // fetch("http://localhost:5000/users/"+userData.id,{
        //     method:"put",
        //     body: JSON.stringify(userData)
        // })
        // .then((res)=>{
        //      toast.success("Record updated successfully");
        //      setTimeout(()=>{
        //         navigate("/showhome");
        //      },5000)
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }

    return(
        <>
        <div style={{textAlign:"center"}}>
            <h1>Details form</h1> <Link to="/showhome">Update Form</Link>
            <form method="post" onSubmit={(e)=>submitData(e)}>
                <table border={1} align="center">
                    <tr>
                        <td>Enter Username</td>
                        <td><input type="text" name="username" value={userData.username?userData.username:""} onChange={(e)=>changeInput(e)}/></td>
                    </tr>

                    <tr>
                        <td>Enter Email</td>
                        <td><input type="text" name="email" value={userData.email?userData.email:""} onChange={(e)=>changeInput(e)}/></td>
                    </tr>

                    <tr>
                        <td>Enter Password</td>
                        <td><input type="password" name="password" value={userData.password?userData.password:""} onChange={(e)=>changeInput(e)}/></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><input type="submit" name="submit" value="edit"/></td>
                    </tr>
                </table>
            </form>
        </div>
        <ToastContainer />
        </>
    )
}

export default UpdateForm;