// ./controllers/paymentController.js
class PaymentController {
    constructor(PaymentService) {
        this.paymentService = PaymentService;
    }

    async pay(req, res, metodoPagamento) {
        const { userId, valorTotal } = req.body;
        try {
            const payment = await this.paymentService.processPayment(userId, valorTotal, metodoPagamento);
            res.status(201).json({ message: 'Pagamento processado', payment });
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Erro ao processar pagamento' });
        }
    }

    async status(req, res) {
        const { transactionId } = req.params;
        try {
            const payment = await this.paymentService.getStatus(transactionId);
            if (!payment) {
                return res.status(404).json({ error: 'Transação não encontrada' });
            }
            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao consultar status' });
        }
    }
}

module.exports = PaymentController;
