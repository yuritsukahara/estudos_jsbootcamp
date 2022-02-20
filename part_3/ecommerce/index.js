const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const AdminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: ['lkasld235j'],
	})
);
app.use(authRouter);
app.use(AdminProductsRouter);
app.use(productsRouter);


const port = 3003;
app.listen(port, () => {
	console.log('Listening');
	console.log(`http://localhost:${port}`);
});
