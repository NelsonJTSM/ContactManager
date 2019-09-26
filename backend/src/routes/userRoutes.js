import { addNewUser } from '../controllers/userController';
import { loginUser } from '../controllers/userController';
import {addNewContact} from '../controllers/userController';

const routes = (app) => {
	app.route('/api/user')
	.put(addNewUser)
	.post(loginUser);

	app.route('/api/contact')
	.put(addNewContact);
};

export default routes;