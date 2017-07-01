import { SapientBFPage } from './app.po';

describe('sapient-bf App', () => {
  let page: SapientBFPage;

  beforeEach(() => {
    page = new SapientBFPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
