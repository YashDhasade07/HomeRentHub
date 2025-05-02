

// const User = sequelize.define('User', {
//     id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     email: { type: DataTypes.STRING, allowNull: false, unique: true },
//     password: { type: DataTypes.STRING, allowNull: false },
//     role: { type: DataTypes.ENUM('owner', 'renter'), defaultValue: 'renter' },
//     createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
//     updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
//   });
  


// const Property = sequelize.define('Property', {
//     id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
//     ownerId: { type: DataTypes.UUID, allowNull: false }, // FK to User
//     title: { type: DataTypes.STRING, allowNull: false },
//     description: { type: DataTypes.TEXT },
//     city: { type: DataTypes.STRING, allowNull: false },
//     address: { type: DataTypes.STRING },
//     type: { type: DataTypes.ENUM('apartment', 'villa', 'house'), allowNull: false },
//     pricePerNight: { type: DataTypes.DECIMAL, allowNull: false },
//     isAvailable: { type: DataTypes.BOOLEAN, defaultValue: true },
//     createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
//     updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
//   });
  


// const Booking = sequelize.define('Booking', {
//     id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
//     propertyId: { type: DataTypes.UUID, allowNull: false }, // FK to Property
//     renterId: { type: DataTypes.UUID, allowNull: false },    // FK to User
//     startDate: { type: DataTypes.DATE, allowNull: false },
//     endDate: { type: DataTypes.DATE, allowNull: false },
//     status: { type: DataTypes.ENUM('pending', 'approved', 'rejected'), defaultValue: 'pending' },
//     createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
//     updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
//   });
  


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
  