// ./controllers/userController.js

class UserController{
    constructor(UserService){
        this.userService = UserService;
    }
    async createUser(req,res){
        //processar a request
        const {email, data_nasc, password} = req.body;
        try{
            const newUser = this.userService.create(email, data_nasc, password);
            res.status(200).json(newUser);
        }
        catch(error){
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao gravar o novo usuário.'});
        }
    }
}

module.exports = UserController;