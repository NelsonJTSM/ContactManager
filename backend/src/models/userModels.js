import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
}, {
	versionKey: false
}).plugin(uniqueValidator);

export const ContactSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	firstname: String,
	lastname: String,
	phone: String,
	email: String,
	address: String,
	notes: String
}, {
	versionKey: false
}).plugin(uniqueValidator);