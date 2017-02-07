import { DicesPage } from './app.po';

describe('dices App', function() {
  let page: DicesPage;

  beforeEach(() => {
    page = new DicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
