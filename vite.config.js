const path = require('path')
export default {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@": path.resolve("./src")
    }
  }
}