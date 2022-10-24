const User = require('./User');
const Drink = require('./Drink');
const Comment = require('./Comment');

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Drink, {
    foreignKey: 'drink_id'
})

Drink.hasMany(Comment, {
    foreignKey: 'drink_id'
})



module.exports = { User, Drink, Comment };
