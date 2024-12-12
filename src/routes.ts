import { Router } from "express";
import multer from "multer";

import { UserController } from "./controllers/user/UserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CategoryController } from "./controllers/category/CategoryController";
import {ListCategoryController} from "./controllers/category/ListCategoryController"

import { ProductController } from "./controllers/product/ProductController";

import { isAuthentication } from "./middlewares/isAuthentication";

import uploadConfig from "./config/multer";

import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import { OrderController } from "./controllers/order/OrderController";

import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

import { AddItemController } from "./controllers/order/AddItemController";

import { RemoveItemController } from "./controllers/order/RemoveItemController"

import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'))

//Rotas usuário
router.post('/users', new UserController().handle)
router.post('/login', new AuthUserController().handle)

router.get('/userinfo', isAuthentication, new DetailUserController().handle)

//Rotas categoria
router.post('/category', isAuthentication, new CategoryController().handle)

router.get('/category', isAuthentication, new ListCategoryController().handle)

//Rotas produto

//router.post('/product', isAuthentication, upload.single('file'), new ProductController().handle)
router.post('/product', isAuthentication, new ProductController().handle)

router.get('/category/product', isAuthentication, new ListByCategoryController().handle)

//Rotas pedido
router.post('/order', isAuthentication, new OrderController().handle)

router.delete('/order', isAuthentication, new RemoveOrderController().handle)

router.post('/order/add', isAuthentication, new AddItemController().handle)

router.delete('/order/remove', isAuthentication, new RemoveItemController().handle)

router.put('/order/send', isAuthentication, new SendOrderController().handle)

router.get('/orders', isAuthentication, new ListOrdersController().handle)
router.get('/order/detail', isAuthentication, new DetailOrderController().handle)

router.put('/order/finish', isAuthentication, new FinishOrderController().handle)

export { router }