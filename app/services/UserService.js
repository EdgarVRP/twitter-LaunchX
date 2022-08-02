const User = require('../models/User')
class UserService{
    static create(id,username,name){
        return new User(id,username,name,'Sin bio')
    }
    static getInfo(user){
        return Object.values(user)
    }
    static updateUSerUSername(user,username){
        user.setUsername=username
    }
    static getAllUsernames(users){
        const usersUsernames = users.map( user => user.username)
        return usersUsernames
    } 
}
module.exports=UserService