const users = {
  1: {
    id: 1,
    username: 'chuck',
    displayName: 'Chuck D.',
    email: 'chuck@chuckdries.com'
  }
}

module.exports.getById = async (id) => {
  if(users[id]){
    return users[id];
  } else {
    return null;
  }
}