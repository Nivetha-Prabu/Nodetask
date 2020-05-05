module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
            password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [7,100]
            }
        }
     });
 }
         