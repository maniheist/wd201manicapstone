const Sequelize = require("sequelize");

const database = "wd201last";
const username = "postgres";
const password = "Mani@111";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
  
});


const connect = async () => {
  return sequelize.authenticate();
}

module.exports = {
  connect,
  sequelize
}
