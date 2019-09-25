import mongoose from 'mongoose';
import { UserSchema } from '../models/userModels';

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
	let newUser = new User({
		_id: new mongoose.Types.ObjectId,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});

	newUser.save((err, user) => {
		if (err) {
			/* // Check which error.
			if (err.errors.username.kind == "required") {
				res.json({
					message: "Username required.",
					id: ""
				});
			} else if (err.errors.username.kind == "unique") {
				res.json({
					message: "Username already taken.",
					id: ""
				});
			} else if (err.errors.email.kind == "required") {
				res.json({
					message: "Email required.",
					id: ""
				});
			} else if (err.errors.email.kind == "unique") {
				res.json({
					message: "Email already in use.",
					id: ""
				});
			} else { */
			res.send(err);

/* 				res.json({
					message: "Unknown error.",
					id: ""
				});
			} */
		} 
		// No errors, user can be created :).
		else {
			res.json({
				message: "User successfully created.",
				id: user._id
			});
		}
	});
};
