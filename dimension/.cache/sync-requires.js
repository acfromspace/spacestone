// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/EVADELEON2/Documents/acfromspace.github.io/dimension/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\src\\templates\\blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\.cache\\dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\src\\pages\\index.js")),
  "component---src-pages-new-page-js": preferDefault(require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\src\\pages\\new-page.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\.cache\\json\\layout-index.json"),
  "my-second-post.json": require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\.cache\\json\\my-second-post.json"),
  "hi-folks.json": require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\.cache\\json\\hi-folks.json"),
  "hello-world.json": require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\.cache\\json\\hello-world.json"),
  "dev-404-page.json": require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\.cache\\json\\dev-404-page.json"),
  "index.json": require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\.cache\\json\\index.json"),
  "new-page.json": require("C:\\Users\\EVADELEON2\\Documents\\acfromspace.github.io\\dimension\\.cache\\json\\new-page.json")
}