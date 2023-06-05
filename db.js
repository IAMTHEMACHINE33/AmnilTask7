const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "password", {
    host: "localhost",
    dialect: "postgres",
});

const testConnection = async() => {
    try
    {
        await sequelize.authenticate();
        console.log("database connection successful");
    }
    catch (error)
    {
        console.log("database connection unsuccessful")
        // console.log(err);
    }
}

// // Drop the database
// sequelize.query(`DROP DATABASE IF EXISTS user`)
//   .then(() => {
//     console.log('Database dropped successfully');
//     // Perform any additional actions if needed
//   })
//   .catch((error) => {
//     console.error('Error dropping database:', error);
//   });

module.exports = {sq : sequelize, testConnection}