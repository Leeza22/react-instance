const Path = require("path")
const resolve = dir => Path.resolve(__dirname, dir)
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src")
    }
  }
}