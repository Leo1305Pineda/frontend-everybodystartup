import { FrontendEverybodystartupPage } from './app.po';

describe('frontend-everybodystartup App', () => {
  let page: FrontendEverybodystartupPage;

  beforeEach(() => {
    page = new FrontendEverybodystartupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
