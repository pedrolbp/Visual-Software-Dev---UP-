const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const User = sequelize.define('User',{
        id:{
            type: Sequelize.INTEGER,
            autoicrement: true,
            primaryKey:true,
            allowNull:false
        },
        email:{
            type: Sequelize.STRING,
            unique: true,
            allowNull:false
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        }
    });
    return User;
};