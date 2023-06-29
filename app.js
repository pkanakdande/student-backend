const express=require("express")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const cors=require('cors')
const dbmodel=require("./database/database")
app.use(cors())




app.get("/",(req,res)=>{
    res.send("home")
})


app.post('/',async(req,res)=>{
    try 
    {
        res.json('received')
        console.log(req.body);
        let {name,dob,address,standard,city,math,english,sci,hindi,history}=req.body
        let totalScore=parseInt(math)+parseInt(english)+parseInt(sci)+parseInt(hindi)+parseInt(history)
        let percentage=(totalScore/500)*100

        let data=await new dbmodel({
        name:name,
        dob:dob,
        address:address,
        standard:standard,
        city:city,
        math:math,
        english:english,
        sci:sci,
        hindi:hindi,
        history:history,
        percentage:percentage
    })
    data.save()
    } 
    catch (error) 
    {
        res.json({
            message:' error'})
    }
})

app.get("/score/:standard",async(req,res)=>{
    
    try{
        console.log(req.params)
        const data=await dbmodel.find({standard:req.params.standard})
        res.send(data)
    }
    catch(e){
        res.send(e)
    }
})





app.listen(4000,()=>{
    console.log("port is running")
})