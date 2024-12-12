import {Request, Response} from 'express'
import { RemoveItemService } from '../../services/orders/RemoveItemService'

class RemoveItemController {
    async handle(req: Request, res: Response) {
        const pedido_item_id = req.query.pedido_item_id as string

        const removeItem = new RemoveItemService();

        const item = await removeItem.execute({
             pedido_item_id
        })

        return res.json(item)
    }
}

export { RemoveItemController }