"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql")); //import the promise-mysql for connecting our database do some CRUD there
const config_1 = __importDefault(require("./config")); //import the configurations that's we define in config file
const cnx = promise_mysql_1.default.createPool(config_1.default.DATABASE); //initilize the connection
cnx.get('getConnection')
    .then(connection => {
    console.log("Connected successfully!");
});
exports.default = cnx;
