SELECT posts.id,
       users.displayName as 'author',
       posts.message
  FROM Posts
  LEFT JOIN users ON posts.userId = users.id;
