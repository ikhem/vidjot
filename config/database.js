if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://Im:password@ds149974.mlab.com:49974/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}