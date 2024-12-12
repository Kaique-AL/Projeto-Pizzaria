import prismaClient from "../../prisma";

interface ItemRequest {
    pedido_item_id: string;
}

class RemoveItemService {
    async execute({pedido_item_id}: ItemRequest) {

        const item = await prismaClient.item.delete({
            where: {
                id: pedido_item_id
            }

     })

        return item
    }
}

export { RemoveItemService }