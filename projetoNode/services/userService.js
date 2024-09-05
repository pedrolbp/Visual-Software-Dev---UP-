// ./services/userService.js

const db = require('../models');

class UserService{
    constructor(UserModel){
        this.User = UserModel;
    }

    async create(email, data_nasc, password){
        try{
            const newUser = await this.User.create({
                email:email,
                data_nasc:data_nasc,
                password:password
            });
            return newUser? newUser : null;
            
        }
        catch (error){
            throw error;
        }
    }
}

module.exports = UserService;