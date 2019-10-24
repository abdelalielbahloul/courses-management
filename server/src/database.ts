import  mysql  from "mysql"; //import the promise-mysql for connecting our database do some CRUD there
import  config  from "./config"; //import the configurations that's we define in config file

const connection = mysql.createConnection(config.DATABASE); //initilize the connection

export default connection;
