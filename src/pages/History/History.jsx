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
    console.log(category)
  
    const booktitle=category.map(({Book_title})=>Book_title)
    //console.log(bookid);
    
    
    
    return <>
        <table>
            <thead>
            <tr>
                <th>Book name</th>
                <th>Librarian Name</th>
                <th>Librarian Mobile.no</th>
                <th>Issued date</th>
                <th>Retuned date</th>
                <th>Borrower Name</th>
                <th>Borrower Mobile.no</th>
            </tr>
            </thead>
            <tbody>
           
                
            
            
            </tbody>
        </table>
    </>
}

export default App;