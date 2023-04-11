const express =require("express");
const bodyParser=require("body-parser")

const app=express();

const cors= require('cors');

const connection=require('./db');

app.use(cors());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/',function(req,res){
    res.send('Hey there!');
});

app.get('/history',function(req,res){
   console.log("123",connection)
     const q= "select b.Book_title as Book_title ,b.B_id as B_id,b.Book_author as Book_author, bs.Issued_date as Issued_date, bs.Returned_date as Returned_date,l.lname as lname,l.Mobile_number as Mobile_number,s.sname as sname,s.Mobile_number as Mobile_number FROM books b, books_students bs, librarians l, students s"
     connection.query(q,function(err,data){
         if (err) res.json(err)
         return res.json(data)

         
     })
    
})

app.post('/history',function(req,res){
    //console.log(req)
    return res.json(req.body)
    const q="INSERT INTO `library`.`books` (`B_id`, `Book_title`, `Book_description`, `Book_author`, `Created_by`, `Created_at`) VALUES (req.body.B_id, req.body.Book_title, req.body.Book_description, req.body.Book_author, req.body.Created_by, req.body.Created_at)";
    connection.query(q,function(err,data){
        if (err) res.json(err)
        return res.json("book has been created" );
    })
})

app.listen(4000,function(){
    console.log('app listening on port 4000');
    
});