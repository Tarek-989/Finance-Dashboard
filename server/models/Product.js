import mongoose from 'mongoose';
import { loadType } from 'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose);

const ProductSchema = new Schema({
	price: {
		type: mongoose.Types.Currency,
		currency: 'USD',
		get: (val) => val / 100
	},
	expenses: {
		type: mongoose.Types.Currency,
		currency: 'USD',
		get: (val) => val / 100
	},
	transactions: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Transaction',
	}],
}, {
	timestamps: true,
	toJSON: { getters: true }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;