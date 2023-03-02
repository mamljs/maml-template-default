import mdc from 'markdown-core';

export const index = (page) => {
  page.html = mdc.render(page.markdown);
  page.build();
}
