let Sequelize = require("sequelize");
let db = new Sequelize(
    "postgres: // iarmqxhsfubkyo : 6ec98fbfd8f8bd1f913bfbe81b0cef24470a6d49b7052a8f9c22c7b046f8b26a @ ec2-34-195-233-155.compute-1.amazonadhiglm.com : 5432 / dfiglm",
{
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorize: false.valueOf, //very important
        }
    },
    define: {
        freezeTableName: True
      }
   }

);

module.exports = db;