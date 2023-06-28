module.exports = {
  pages: {
    index: {
      entry: 'examples'
    }
  }
}

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  pages: {
    index: {
      entry: 'examples'
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"))
  }
}
