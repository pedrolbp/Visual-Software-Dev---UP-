// ./services/cartService.js
const db = require('../models');

class CartService {
    constructor(CartModel) {
        this.Cart = CartModel; 
    }

    // Método para criar um novo carrinho
    async create(userId) {
        try {
            const newCart = await this.Cart.create({
                userId: userId
            });
            return newCart ? newCart : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para retornar todos os carrinhos
    async findAll() {
        try {
            const allCarts = await this.Cart.findAll();
            return allCarts ? allCarts : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para retornar o carrinho pelo id
    async findById(id) {
        try {
            const cart = await this.Cart.findByPk(id);
            return cart ? cart : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para atualizar um carrinho
    async update(id, updatedData) {
        try {
            const [updated] = await this.Cart.update(updatedData, {
                where: { id: id }
            });
            return updated ? await this.findById(id) : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para deletar um carrinho
    async delete(id) {
        try {
            const deleted = await this.Cart.destroy({
                where: { id: id }
            });
            return deleted ? true : false;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartService;
