const crypto = require('crypto')
const {numberRepetitions,characterString,algorism} = require('../config/passwordConfing.json')

const passwordModule ={
    createSalt : ()=> new Promise((resolve, reject)=>{
            crypto.randomBytes(64,(err, buf)=>{
                if(err) reject(err)
                resolve(buf.toString('base64'))
            })
    }),

    createHashedPassword :(password, salt)=>{
        const passwordN = crypto.pbkdf2Sync(
            password,salt,numberRepetitions,characterString,algorism)
            .toString('base64')
            return passwordN
    }
}

module.exports = passwordModule