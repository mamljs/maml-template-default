var mdc = require('markdown-core')
var cheerio = require('cheerio')

function getHTML (markdown) {
  return mdc.render(markdown)
}

// get html with data-source-line attributes
function getMappedHTML (markdown) {
  mdc.map = true
  var html = mdc.render(markdown)
  mdc.map = false
  return html
}

// split markdown by <h1>
function split (markdown) {
  var html = getMappedHTML(markdown)
  var lines = markdown.split('\n')
  var $ = cheerio.load(html)
  var pages = $('h1').toArray().map(h1 => {
    return {
      id: $(h1).attr('id'),
      name: $(h1).text(),
      source_line: $(h1).data('source-line') - 1
    }
  })
  for (var i = 0; i < pages.length - 1; i++) {
    var page = pages[i]
    var nextPage = pages[i + 1]
    page.markdown = lines.slice(page.source_line + 1, nextPage.source_line).join('\n')
    page.html = `<h1>${page.name}</h1>\n` + getHTML(page.markdown)
  }
  page = pages[pages.length - 1]
  page.markdown = lines.slice(page.source_line + 1, -1).join('\n')
  page.html = `<h1>${page.name}</h1>\n` + getHTML(page.markdown)
  return pages
}

// get html code for sidebar
function sidebar (basePathname, pages, idx) {
  var sidebarMD = ''
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i]
    var pathname = basePathname // i == 0
    if (i > 0) {
      pathname += `${pages[i].id}/`
    }
    if (i === idx) { // current link
      sidebarMD += `${i}. ${page.name}\n`
    } else {
      sidebarMD += `${i}. <a href="${pathname}">${page.name}</a>\n`
    }
  }
  return mdc.render(sidebarMD)
}

// the action method
function index (page) {
  var pages = split(page.markdown)
  var basePathname = page.pathname
  for (var i = 0; i < pages.length; i++) {
    var pathname = basePathname // i == 0
    if (i > 0) {
      pathname += `${pages[i].id}/`
    }
    page.pathname = pathname
    page.sidebar = sidebar(basePathname, pages, i)
    page.markdown = pages[i].markdown
    page.html = pages[i].html
    page.title = pages[i].name
    page.generate()
  }
}

module.exports = {
  index: index
}
