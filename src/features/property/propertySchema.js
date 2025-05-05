

//   const Review = sequelize.define('Review', {
//     id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
//     propertyId: { type: DataTypes.UUID, allowNull: false }, // FK to Property
//     renterId: { type: DataTypes.UUID, allowNull: false },    // FK to User
//     rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
//     comment: { type: DataTypes.TEXT },
//     createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
//     updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
//   });
  

//   const Favorite = sequelize.define('Favorite', {
//     id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
//     renterId: { type: DataTypes.UUID, allowNull: false },    // FK to User
//     propertyId: { type: DataTypes.UUID, allowNull: false },  // FK to Property
//     createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
//   });
  