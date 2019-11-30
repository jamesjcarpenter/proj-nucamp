module.exports = {
    server: {
      middleware: {
        // overrides the second middleware default with new settings
        1: require('connect-history-api-fallback')({
          index: '/index_chal1129.html',
          verbose: true
        })
      }
    }
  };