import { StdangPage } from './app.po';

describe('stdang App', function() {
  let page: StdangPage;

  beforeEach(() => {
    page = new StdangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
