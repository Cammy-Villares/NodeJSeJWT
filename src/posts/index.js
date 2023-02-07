module.exports = {
  modelo: require('./posts-modelo'),
  rotas: require('./posts-rotas'),
  controlador: require('./posts-controlador'),
  estrategiasAutenticacao: require ('../usuarios/estrategias-autenticacao.js'),
  middlewaresAutenticacao: require ('../usuarios/middlewares-autenticacao.js')
};
