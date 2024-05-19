const express= require("express"); // usinig express
//const res = require("express/lib/response");
    const app= express();
    const addTwoNumber= (n1,n2) => {
        return n1+n2;               // this function add two numbers
    }
    app.get("/addTwoNumber", (req,res)=>{
        const n1= parseInt(req.query.n1);
        const n2=parseInt(req.query.n2);
        const result = addTwoNumber(n1,n2);
        res.json({statuscocde:200, data: result });     // this function that take two number, add them and then return them back
    });

    app.get("/", (req, res) => {
        const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(n1));     
    });
    console.log (addTwoNumber(19,12));
    const port=3040;                                         // this function is listening to port3040
    app.listen(port,()=> {
        console.log("hello i'm listening to port "+port);
    })
    