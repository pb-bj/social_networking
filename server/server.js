const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoute = require('./routers/auth.route');
const postRoute = require('./routers/posts.route');
const userRoute = require('./routers/user.route');

require('dotenv').config();
require('./database/db')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors( {
    origin : "http://localhost:5173",
    credentials : true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/auth', authRoute);
app.use('/api', postRoute);
app.use('/api', userRoute);

app.use('/public/uploads', express.static('public/uploads'))

app.listen(PORT, () => {
    console.log(`Server is http://localhost:${PORT}`);
});