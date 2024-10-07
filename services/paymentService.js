// ./services/paymentService.js
class PaymentService {
    constructor(PaymentModel) {
        this.Payment = PaymentModel;
    }

    async processPayment(userId, valorTotal, metodoPagamento) {
        const status = Math.random() > 0.2 ? 'SUCESSO' : 'FALHA';
        return await this.Payment.create({
            userId,
            valorTotal,
            metodoPagamento,
            status
        });
    }

    async getStatus(transactionId) {
        return await this.Payment.findByPk(transactionId);
    }
}

module.exports = PaymentService;
