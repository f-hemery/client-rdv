import { RdvAppPage } from './app.po';

describe('rdv-app App', () => {
  let page: RdvAppPage;

  beforeEach(() => {
    page = new RdvAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
