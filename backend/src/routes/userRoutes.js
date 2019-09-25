import { addNewUser } from '../controllers/userController';

const routes = (app) => {
	app.route('/api/user')
	.put(addNewUser);
};

export default routes;