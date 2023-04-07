const mysql=require("mysql");

const connection = mysql.createConnection({
    
    host:'localhost',
    database:'library',
    user:'root',
    password:'root'
}); 

connection.connect(function(err){
    if(err) throw err;
    console.log('database connected');
})

module.exports=connection; 



