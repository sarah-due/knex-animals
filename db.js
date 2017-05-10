
module.exports = {
  getUser,
  getUsers,
  getProfile,
  addUser,
  getBlog
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function getProfile (id, connection) {
  return connection('profiles')
    .join('users', 'profiles.user_id','users.id')
    .where('users.id', id)
}

function getBlog (id, connection) {
  return connection('blogs')
    .join('users', 'blogs.user_id','users.id')
    .where('users.id', id)
}

function addUser (data, connection) {
  return connection('users')
    .insert({name: data.name, email: data.email})
    .then( (users_id) => {
      console.log(users_id)
      return connection('profiles')
      .insert({user_id: users_id[0], snack: data.snack, habitat: data.habitat, image: data.image})
    })
  }
