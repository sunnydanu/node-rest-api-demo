import express from "express";
import iRouter from  "./routers/invetory-router.js"
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


app.use("/",iRouter)

 /// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

app.use(function(err, req, res, next) {

    // console.log(err.stack);
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: {}
    //  error: err
    }});
  });
 

export default  app;
