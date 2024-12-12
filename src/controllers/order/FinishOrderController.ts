import { Request, Response } from "express";

import { FinishOrderService } from "../../services/orders/FinishOrderService";

class FinishOrderController {
    async handle(req: Request, res: Response) {
        
        const {order_id} = req.body;

        const order = await new FinishOrderService().execute({
            order_id
        });

        return res.json(order);
    }
}

export { FinishOrderController }