import axios from "axios";
import React, { useState } from "react";

let user1=localStorage.getItem("uname");

        
var Bookde=()=>{
    
    let[sid,setid]=useState("")
    
    const deleteUser=async(e)=>{
        e.preventDefault();
      let res= await axios.delete("http://localhost:8080/booking/dele/"+sid)  
       alert(res.data)
    }
    
   
    let [dea,setdata]=useState([])


    let book = async(e)=>{
        e.preventDefault();
        let mydata=await axios.get("http://localhost:8080/booking/bookdata/"+user1)
        setdata(mydata.data)

    }
    return(
        <div className="st">
        <div style={{border:"700px"}}>
            <h1>Dear {user1} this are your upcoming booking </h1>
            <button className="ctgd"  onClick={book}>Click to get details</button>
            <table  className="t"  border={{}}>
                <tr style={{color:"black"}}>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobileno</th>
                    <th>Address</th>
                </tr>
            {
                dea.map((k)=>{
                   return <tr>
                    <tr>{k.sid}</tr>
                        <td>{k.sname}</td>
                        <td>{k.semail}</td>
                        <td>{k.smobileno}</td>
                        <td>{k.saddress}</td>
                    </tr>
                })
            }
            </table>
            <input className="itd" type="text" on placeholder="enter id to delete" value={sid} onChange={e=>setid(e.target.value)} ></input>
            <button className="bookde" onClick={deleteUser}>click to delete</button>
            
        </div>
        </div>
    )
}
export default Bookde;