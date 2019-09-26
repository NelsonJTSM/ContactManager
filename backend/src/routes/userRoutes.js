import { addNewUser } from '../controllers/userController';
import { loginUser } from '../controllers/userController';
import { addNewContact } from '../controllers/userController';
import { getAllContacts } from '../controllers/userController';
import { deleteContact } from '../controllers/userController';
import { editContact } from '../controllers/userController';

const routes = (app) => {
	app.route('/api/user')
	.put(addNewUser)
	.post(loginUser);

	app.route('/api/contact')
	.put(addNewContact)
	.post(getAllContacts)
	.delete(deleteContact)
	.patch(editContact);
};

export default routes;