const { v4: uuidv4 } = require('uuid');

module.exports = {
  poweredByHeader: false,
  compress: true,
  distDir: 'isekai_build',
  productionBrowserSourceMaps: true,
  generateBuildId: async () => {
    return `isekai_id_${uuidv4()}`
  }
}