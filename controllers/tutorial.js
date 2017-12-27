var mdc = require('markdown-core')
var cheerio = require('cheerio')

function index (page) {
  mdc.map = true
  var html = mdc.render(page.markdown)
  mdc.map = false
  var $ = cheerio.load(html)
  var sidebarMD = ''
  $('h1').each(function (idx, h1) {
    sidebarMD += `${idx}. <a href="#${$(h1).attr('id')}">${$(h1).text()}</a>\n`
  })
  page.sidebar = mdc.render(sidebarMD)

  page.html = mdc.render(page.markdown)
  page.generate()
}

module.exports = {
  index: index
}
