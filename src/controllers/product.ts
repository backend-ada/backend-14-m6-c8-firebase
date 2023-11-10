import { Request, Response } from 'express';
import ProductModel from '../models/product';

abstract class ProductController {
	static async getAll(req: Request, res: Response) {
		const { collectionName } = req.query;

		console.log(collectionName);

		const allProducts = await ProductModel.getAll(collectionName);
		res.status(200).json(allProducts);
	}

	static async createOne(req: Request, res: Response) {
		const { collectionName, productData } = req.body;

		const newProduct = await ProductModel.createOne({
			collectionName,
			productData,
		});

		res.status(201).json({
			message: 'Item created!',
			productID: newProduct.id,
		});
	}
}

export default ProductController;
