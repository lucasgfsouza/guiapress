const Sequelize = require("sequelize");

const connection = new Sequelize('lucasgfsouzablog', 'lucasgfsouza', 'teste123', {
    host: 'mysql742.umbler.com',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;

