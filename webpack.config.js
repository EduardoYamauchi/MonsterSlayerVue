var webpack = require('webpack')
var config = {
  // retorna o diretorio do arquivo e concatena com 'src'
  context: __dirname + '/src',
  // qual arquivo vai ser executado
  entry: {
    app: './app.js'
  },
  // output coloca o endereço onde os arquivos finais irão ficar depois de buildados
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  // É a configuração do servidor
  devServer: {
    contentBase: __dirname + '/src'   
  }
}
// quando alguem der required ele irá receber o config
module.exports = config
