import db from './database/connection';

abstract class ProductModel {
	static async getAll(collectionName: any) {
		const documentsRef = db.collection(collectionName);
		const snapshot = await documentsRef.get();

		const documentsCollection = [] as any;

		snapshot.forEach((doc) => {
			documentsCollection.push(doc.data());
		});

		return documentsCollection;
	}

	static async createOne(data: any) {
		const { collectionName, productData } = data;

		const newProduct = await db.collection(collectionName).add(productData);
		return newProduct;
	}
}

export default ProductModel;
