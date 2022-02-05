const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: ["lkasld235j"],
	})
);

app.use(authRouter);

const port = 3001;
app.listen(port, () => {
	console.log("Listening");
	console.log(`http://localhost:${port}`);
});
