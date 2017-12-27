var mdc = require('markdown-core')

function index (page) {
  page.html = mdc.render(page.markdown)
  page.generate()
}

module.exports = {
  index: index
}
