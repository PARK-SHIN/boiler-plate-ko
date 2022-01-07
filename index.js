const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
/*
mongoose.connect('mongodb+srv://parkshin:qkrtls12@boilerplate.3wwj7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))
*/

mongoose
.connect('mongodb+srv://parkshin:1234@cluster0.tr6vs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e));



// root디렉토리 오게되면 Hello World! 출력
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// port 5000 실행
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}!`)
})