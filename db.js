
module.exports = {
  getUser,
  getUsers,
  getProfile
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
