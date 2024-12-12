"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const UserController_1 = require("./controllers/user/UserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CategoryController_1 = require("./controllers/category/CategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const ProductController_1 = require("./controllers/product/ProductController");
const isAuthentication_1 = require("./middlewares/isAuthentication");
const multer_2 = __importDefault(require("./config/multer"));
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const OrderController_1 = require("./controllers/order/OrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const RemoveItemController_1 = require("./controllers/order/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrdersController_1 = require("./controllers/order/ListOrdersController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload('./tmp'));
//Rotas usuário
router.post('/users', new UserController_1.UserController().handle);
router.post('/login', new AuthUserController_1.AuthUserController().handle);
router.get('/userinfo', isAuthentication_1.isAuthentication, new DetailUserController_1.DetailUserController().handle);
//Rotas categoria
router.post('/category', isAuthentication_1.isAuthentication, new CategoryController_1.CategoryController().handle);
router.get('/category', isAuthentication_1.isAuthentication, new ListCategoryController_1.ListCategoryController().handle);
//Rotas produto
//router.post('/product', isAuthentication, upload.single('file'), new ProductController().handle)
router.post('/product', isAuthentication_1.isAuthentication, new ProductController_1.ProductController().handle);
router.get('/category/product', isAuthentication_1.isAuthentication, new ListByCategoryController_1.ListByCategoryController().handle);
//Rotas pedido
router.post('/order', isAuthentication_1.isAuthentication, new OrderController_1.OrderController().handle);
router.delete('/order', isAuthentication_1.isAuthentication, new RemoveOrderController_1.RemoveOrderController().handle);
router.post('/order/add', isAuthentication_1.isAuthentication, new AddItemController_1.AddItemController().handle);
router.delete('/order/remove', isAuthentication_1.isAuthentication, new RemoveItemController_1.RemoveItemController().handle);
router.put('/order/send', isAuthentication_1.isAuthentication, new SendOrderController_1.SendOrderController().handle);
router.get('/orders', isAuthentication_1.isAuthentication, new ListOrdersController_1.ListOrdersController().handle);
router.get('/order/detail', isAuthentication_1.isAuthentication, new DetailOrderController_1.DetailOrderController().handle);
router.put('/order/finish', isAuthentication_1.isAuthentication, new FinishOrderController_1.FinishOrderController().handle);
