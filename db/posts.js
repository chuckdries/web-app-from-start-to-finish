
const posts = {
  1: {
    id: 1,
    date: '1523064754632',
    userId: 1,
    message: 'hello world'
  }
}

module.exports.getById = async (id) => {
  if(posts[id]){
    return posts[id];
  } else {
    return null;
  }
}

module.exports.getAll = async () => {
  return Object.values(posts);
}

module.exports.insert = async (post) => {
  const id = Math.max(...Object.keys(posts)) + 1;
  post.id = id;
  posts[id] = post;
  return true;
}