const dbPromise = require('./base');

module.exports.getById = async (id) => {
  if (posts[id]) {
    return posts[id];
  } else {
    return null;
  }
}

module.exports.getAll = async () => {
  const db = await dbPromise;
  const posts = await db.all(
    `SELECT posts.id,
    users.displayName as 'author',
    posts.message
    FROM Posts
    LEFT JOIN users ON posts.userId = users.id;`
  );
  return posts;
}

module.exports.insert = async (post) => {
  const db = await dbPromise;
  db.run(`INSERT INTO Posts (
    userId,
    message
    )
    VALUES (
        '${post.userId}',
        '${post.message}'
    );
  `);
  return;
}