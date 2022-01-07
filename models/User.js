const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,     // trim = space 없애주는 역할
        unique: 1       // 중복금지
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0      // 관리자, 일반유저 관리
    },
    image: String,
    token: {
        type: String    // 유효성 관리를 위해
    },
    tokenExp:{
        type: Number    // 토큰 유효기간
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}     // 다른 파일에서도 쓸 수 있게 exports