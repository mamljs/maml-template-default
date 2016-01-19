mermaid.ganttConfig = {
  axisFormatter: [
    ['%Y-%m-%d', function(d) {
      return d.getDay() == 1;
    }]
  ]
};


// fix navbar overlap anchor links issue.
function shiftWindow() {
  scrollBy(0, -64);
}


$(function() {
  setTimeout(function() { shiftWindow(); }, 128);
  window.addEventListener("hashchange", shiftWindow);
  mermaid.init(undefined, $('article.markdown-body .mermaid'));
});
