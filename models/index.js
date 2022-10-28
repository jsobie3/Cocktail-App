const User = require('./User');
// const Drink = require('./Drink');
const Comment = require('./Comment');
const Favorite = require('./Favorite');


User.hasMany(Favorite, {
    foreignKey: ''
})

Favorite.belongsTo(User, {
    foreignKey: ''
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

// Comment.belongsTo(Drink, {
//     foreignKey: 'drink_id'
// })

// Drink.hasMany(Comment, {
//     foreignKey: 'drink_id'
// })

// Category.belongsTo(Category, {
//     foreignKey
// })

// Drink.hasMany(Category, {
//     foreignKey: 'category'
// })

// Category


module.exports = { User, Comment, Favorite };
