const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

var config = require("./webpack.config.js");
//config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(config);

const devServerOptions = Object.assign({}, config.devServer, {
  stats: {
    colors: true
  }
});
var server = new webpackDevServer(compiler, devServerOptions);
server.listen(process.env.PORT, process.env.IP, function() {
    console.log('Starting server on http://'+process.env.IP+':'+process.env.PORT);
});