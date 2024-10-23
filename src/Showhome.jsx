import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from 'axios'

function Showhome(){

    let [record,setRecord] = useState([])

    useEffect(   ()=>{
        //  fetch("http://localhost:5000/users/",{
        //     method : "get"
        // })
        Axios.get("http://localhost:5000/users/")
        .then(async(res)=>{
                // console.log(res.data);
                // let allrecord = await res.json();
                setRecord(res.data?res.data:[])
        })
        .catch((err)=>{
            console.log(err);
        })
    })

    
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Show Details</h1>
                <table border={1} align="center">
                    <tr>
                        <td>No</td>
                        <td>username</td>
                        <td>email</td>
                        <td>password</td>
                        <td>action</td>
                    </tr>

                    {record.map((v,i)=>{
                        return(
                            <tr>
                                <td>{i+1}</td>
                                <td>{v.username}</td>
                                <td>{v.email}</td>
                                <td>{v.password}</td>
                                <td>
                                    <Link to={"/update/"+v.id} >Update</Link></td>
                            </tr>
                        )
                    })}


                </table>
            </div>        
        </>
    )
}

export default Showhome