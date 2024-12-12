import { Request, Response } from "express";

import { OrderService } from "../../services/orders/OrderService";

class OrderController {
    async handle(req: Request, res: Response) {
        const { table, name } = req.body;

        const orderService = new OrderService();

        const order = await orderService.execute({ table, name });

        return res.json(order);
    }
}

export { OrderController };