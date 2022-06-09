import app from "./app.js";


// finally, let's start our server...
var server = app.listen( process.env.PORT || 8081, function(){
    console.log('Listening on port ' + server.address().port);
  });