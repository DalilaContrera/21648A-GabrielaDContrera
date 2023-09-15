const { sequelize, DataTypes } =  require('../database');

const Posteo = sequelize.define('Posteo', {
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    url_imagen: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

}, {
    tableName: 'posteos',
    timestamps: false
})


module.exports = Posteo;