const express = require('express');
const path = require('path');
const app = express();

const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

const indexPath = path.join(publicDirectoryPath, 'index.html');

app.get('/', (req, res)=>{
    res.sendFile(indexPath)
})

app.listen(3000, function(){
    console.log('3000 Port running');
});
