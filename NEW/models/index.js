const User = require('./User');
const Post = require('./Post');
// const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// })

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// })

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id'
// })

// Post.hasMany(Comment, {
//   foreignKey: 'post_id'
// })

// Post.belongsTo(Comment, {
//   foreignKey: 'comment_id'
// })

// Comment.hasOne(Post, {
//   foreignKey: 'comment_id'
// })

module.exports = { User, Post };
