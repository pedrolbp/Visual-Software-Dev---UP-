// ./controllers/productController.js

class ProductController {
    constructor(ProductService) {
        this.productService = ProductService;
    }

    // Método para criar um novo produto
    async createProduct(req, res) {
        const { name, description, price, stock } = req.body; 
        try {
            const newProduct = await this.productService.create(name, description, price, stock);
            res.status(200).json(newProduct);
        } catch (error) {
            res
                .status(500)
                .json({ error: 'Ocorreu um erro ao gravar o novo produto' });
        }
    }

    // Método para listar todos os produtos
    async findAllProducts(req, res) {
        try {
            const allProducts = await this.productService.findAll();
            res.status(200).json(allProducts);
        } catch (error) {
            res
                .status(500)
                .json({ error: 'Ocorreu um erro ao localizar todos os produtos.' });
        }
    }

    // Método para buscar um produto pelo ID
    async findProductById(req, res) {
        const { id } = req.params; 
        try {
            const product = await this.productService.findById(id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            res
                .status(500)
                .json({ error: 'Ocorreu um erro ao localizar o produto pelo ID.' });
        }
    }

    async updateProduct(req, res){
        const { id } = req.params;
        try {
            const product = await this.productService.findById(id);
            if (product) {
                const editedProduct = await this.productService.update(product.id, req.body)
                res.status(200).json(editedProduct);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            res
                .status(500)
                .json({ error: 'Ocorreu um erro ao editar o produto.' });
        } 
    }

    async deleteProduct(req, res){
        const { id } = req.params;
        try {
            const product = await this.productService.findById(id);
            if (product) {
                await this.productService.delete(product.id)
                res.status(200).send("Produto deletado com sucesso.");
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            res
                .status(500)
                .json({ error: 'Ocorreu um erro ao deletar o produto.' });
        } 
    }
}

module.exports = ProductController;
