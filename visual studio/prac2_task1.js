const http = require("http");
const httpserver = http.createServer(function(req,res){
    if(req.method == 'GET')
    {
        res.end("This is Get request");
    }  
});
httpserver.listen(3000,()=>{
    console.log("Listning on port 3000...");
})
