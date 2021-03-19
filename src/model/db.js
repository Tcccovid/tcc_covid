let Sequelize = require("sequelize");
let db = new Sequelize(
    "postgres://wjqrieoxpabanq:0326806ed0e8f0e1d1b521e9567e590a2b25daf6b8cdcc66fe087f228472b6e6@ec2-52-4-171-132.compute-1.amazonaws.com:5432/dak1h011ronaws.com:5432/dak1h011ronaws.com:5432/dak1h011ronaws.com",
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