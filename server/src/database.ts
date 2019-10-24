import  mysql  from "promise-mysql"; //import the promise-mysql for connecting our database do some CRUD there
import  config  from "./config"; //import the configurations that's we define in config file

const cnx = mysql.createPool(config.DATABASE); //initilize the connection
cnx.get('getConnection')
    .then( connection => {
        console.log("Connected successfully!");
        
    });

export default cnx;
