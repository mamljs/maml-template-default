var mdc = require('markdown-core/markdown-core-node');


function index(page) {
  page.html = mdc.render(page.markdown);
  page.generate();
}


module.exports = {
  index: index,
};
