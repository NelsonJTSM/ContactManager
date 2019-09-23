import mongoose from 'mongoose';
import { UserSchema } from '../models/userModels';

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
	let newUser = new User(req.body);

	newUser.save((err, contact) => {
		if (err) {
			res.send(err);
		}
		res.json(contact);
	});
};
