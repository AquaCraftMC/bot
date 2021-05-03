const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send(`congrats i guess this is an easter egg now gg you found it :0`)
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("[Web] Monitor Running!")});
}
module.exports = keepAlive;
