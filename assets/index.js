mermaid.ganttConfig = {
  axisFormatter: [
    ['%Y-%m-%d', function(d) {
      return d.getDay() == 1;
    }]
  ]
};


function shiftWindow() {
  scrollBy(0, -64);
}


$(function() {
  if (location.hash) {
    shiftWindow();
  }
  window.addEventListener("hashchange", shiftWindow);
  mermaid.init(undefined, $('article.markdown-body .mermaid'));
});
