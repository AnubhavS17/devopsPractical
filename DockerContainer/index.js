const express=require("express");
const app=express();
const port=3000;
app.set('view engine', 'ejs');
// app.set('views', './views');

app.get('/',(req,res)=>{
    res.json([{Name:"ANUBHAV",AGE:21},{Name:"DAVID",AGE:29},{Name:"ZYXX",AGE:31}])
})

app.get('/home',(req,res)=>{
    res.render("home");
})
app.listen(port,()=>{
    console.log(`PORT IS RUNNING ON ${port}`);
})
