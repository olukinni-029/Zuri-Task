const http = require("http");
const url = require("url");

const user ={
    slackUsername:"Olukinni Feranmi",
    backend:true,
    age:"24",
    bio:"Ambitious, Smart, Hardworking, Optimistic, Mentally, Socially, and Emotionally Capable, always ready to learn. I'm a passionate Software Development, trying to change and add to my community through the tech world."
}; 


const port = 6340;

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Zuri Task');
      } else if (req.url === '/user') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
      } else {
        res.statusCode=404, 
        res.end('... 404!!!,  Page not found-----');
      }
});



server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});