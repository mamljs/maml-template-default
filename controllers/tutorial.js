var mdi = require('markdown-it')({ html: true, xhtmlOut: true })
var cheerio = require('cheerio')

function index (page) {
  mdi.map = true
  var html = mdi.render(page.markdown)
  mdi.map = false
  var $ = cheerio.load(html)
  var sidebarMD = ''
  $('h1').each(function (idx, h1) {
    sidebarMD += `${idx}. <a href="#${$(h1).attr('id')}">${$(h1).text()}</a>\n`
  })
  page.sidebar = mdi.render(sidebarMD)

  page.html = mdi.render(page.markdown)
  page.generate()
}

module.exports = {
  index: index
}
