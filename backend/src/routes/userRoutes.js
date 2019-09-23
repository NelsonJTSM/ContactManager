import { addNewUser } from '../controllers/userController';

const routes = (app) => {
	app.route('/api/user')
	.get((req, res) => {
		res.send('GET request successful');
	})
	.post((req, res) => {
		res.send('POST request succssfull');
	})
	.put(addNewUser)
	.delete((req, res) => {
		res.send('DELETE request succssfull');
	});
};

export default routes;