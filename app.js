const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;

app.get('/rony',(req,res)=>{
    res.send('Rony Rizk')
})

app.get('/student',(req,res)=>{
    let data = [
        {id:1, name:'Perla'},
        {id:2, name:'Osman'},
        {id:3, name:'Rola'}
    ];
    res.send(data)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});