import React, {useEffect, useState} from "react";
import UserData from "./UserData";
import "./History.css";
import "./Historyindex.css";
import axios from "axios";





const App = () => {
    const [category,setCategory]=useState([]);

     useEffect(() => {
        const getcategory =async()=>{
       const res =await fetch("http://localhost:4000/history");
       const getdata= await res.json();
       setCategory(getdata);
       
     
     
  

    }
    getcategory();
    
    
    }, []);
    //console.log(category)
    
    // const booktitle=category.map(({Book_title})=>Book_title)
    // console.log(booktitle);


        const displaydata=category.map(
            (info,index)=>(
                <tr key={index}>
                    <td>{info.B_id}</td>
                    <td>{info.Book_title}</td>
                    <td>{info.Book_author}</td>
                    <td>{info.lname}</td>
                    <td>{info.Mobile_number}</td>
                    <td>{info.Issued_date}</td>
                    <td>{info.Returned_date}</td>
                    <td>{info.sname}</td>
                    <td>{info.Mobile_number}</td>
                   
                </tr>
        )
           
        )
        console.log(displaydata)
        
    
    
    
    
    return <>
        <table>
            <thead>
            <tr>
                <th>Book id</th>
                <th>Book name</th>
                <th>Book author</th>
                <th>Librarian Name</th>
                <th>Librarian Mobile.no</th>
                <th>Issued date</th>
                <th>Retuned date</th>
                <th>Borrower Name</th>
                <th>Borrower Mobile.no</th>
            </tr>
            </thead>
            <tbody>
            
              {displaydata}
            
            
            </tbody>
        </table>
    </>
}

export default App;