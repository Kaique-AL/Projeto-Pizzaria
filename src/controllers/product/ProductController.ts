import { Request, Response } from "express";
import { ProductService } from "../../services/product/ProductService";
import { UploadedFile } from "express-fileupload";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

class ProductController {

    async handle(req: Request, res: Response) {

        const {name, price, description, category_id} = req.body

        const productService = new ProductService();

        if(!req.files || Object.keys(req.files).length === 0) {
            throw new Error('Erro ao enviar o arquivo');
        }else{
            const file: UploadedFile = req.files['file']

            const resultFile: UploadApiResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, function(error, result) {
                    if(error) {
                        reject(error);
                        return
                    }

                    resolve(result)
                }).end(file.data)
            })


             const product = await productService.execute({
                 name,
                 price,
                 description,
                 banner: resultFile.url,
                 category_id
             });
    
             return res.json(product);
        }
        


    }
}

export { ProductController };
