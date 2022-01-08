const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
// User 가져오기
const { User } = require("./models/User");

// application/s-www-form-urlencoded를 분석해서 가져온다.
app.use(bodyParser.urlencoded({extended: true}));

// application/json 타입을 분석해서 가져온다.
app.use(bodyParser.json());

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
app.get('/', (req, res) => res.send('Hello World!!!'))


// 클라인언트에서 보내는 정보
app.post('/register', (req, res) => {

  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

      // 정보를 db에 넣기 위해서는 req.body(request.body) 사용
      // bodyParser가 있기에 가능
      const user = new User(req.body)

      user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({     // status=200 은 성공했다.
          success: true
        })
      })
})



// port 5000 실행
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}!`))