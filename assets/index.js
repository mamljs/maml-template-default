mermaid.ganttConfig = {
  axisFormatter: [
    ['%Y-%m-%d', function(d) {
      return d.getDay() == 1;
    }]
  ]
};


$(function() {
  $.material.init();
  mermaid.init(undefined, $('article.markdown-body .mermaid'));
});
