module.exports = async function initializeSequelize() {
  await sequelize.sync();
};
const app = require("./app");
const port = process.env.PORT || 300;

app.listen(port, () => {
  console.log(`Started express server at port ${port}`);
});
