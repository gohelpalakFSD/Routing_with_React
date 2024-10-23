import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';


function Home(){

    let [user,setUser] = useState({});
    let navigate = useNavigate();
    let getInput = (e) =>{
        let {name,value} = e.target;
        setUser({...user,[name]:value})
    }

    let submitData = async (e) =>{
        e.preventDefault();
        console.log(user);

        Axios.post("http://localhost:5000/users/",user)
        .then((res)=>{
            toast.success("Record inserted successfully")
                setTimeout(()=>{
                    navigate("/showhome");
                },4000)
        })
        .catch((err)=>{
            toast.error("Something wrong");
        })
        //  await fetch("http://localhost:5000/users/",{
        //     method : "post",
        //     body : JSON.stringify(user)
        //  }).then((res)=>{
        //     if(res){
        //         // alert("Record inserted successfully")
        //         toast.success("Record inserted successfully")
        //         setTimeout(()=>{
        //             navigate("/showhome");
        //         },4000)
        //     }
        //  }).catch((err)=>{
        //       console.log(err);
        //       toast.error("Something wrong");
        //  });
        
    }
    return(
        <>
        <div style={{textAlign:"center"}}>
            <h1>Details form</h1> <Link to="/showhome">View Data</Link>
            <form method="post" onSubmit={(e)=>submitData(e)}>
                <table border={1} align="center">
                    <tr>
                        <td>Enter Username</td>
                        <td><input type="text" name="username" onChange={(e)=>getInput(e)}/></td>
                    </tr>

                    <tr>
                        <td>Enter Email</td>
                        <td><input type="text" name="email" onChange={(e)=>getInput(e)}/></td>
                    </tr>

                    <tr>
                        <td>Enter Password</td>
                        <td><input type="password" name="password" onChange={(e)=>getInput(e)}/></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><input type="submit" name="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>

        <ToastContainer />
        </>
    )
}

export default Home;