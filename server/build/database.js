"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql")); //import the promise-mysql for connecting our database do some CRUD there
const config_1 = __importDefault(require("./config")); //import the configurations that's we define in config file
const connection = mysql_1.default.createConnection(config_1.default.DATABASE); //initilize the connection
exports.default = connection;
