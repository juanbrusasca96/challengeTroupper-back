

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        numberOfPlays: {
            type: DataTypes.INTEGER
        },
        numberOfWins: {
            type: DataTypes.INTEGER
        },
        amount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    },
        {
            timestamps: false,
        });

    return User;
};