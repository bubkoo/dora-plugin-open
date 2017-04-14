var opn = require('opn');

module.exports = {
  name: 'dora-plugin-opn',
  'server.after': function () {
    var query = this.query;
    var url = query.target || 'http://localhost:' + this.port;
    opn(url, query);
  }
};
