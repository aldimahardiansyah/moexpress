const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.json({
        message: "welcome to express api"
    });
});

require('./app/routes/post_routes')(app);

const db = require('./app/models/');
db.mongoose
    .connect(db.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true
    })
    .then(()=>{
        console.log(`Database connected`);
    }).catch((err)=>{
        console.log(`Cannot connect to the database!`, err);
        process.exit();
    });

const port = 8000;
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});