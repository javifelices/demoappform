import { AppFormPage } from './app.po';

describe('app-form App', () => {
  let page: AppFormPage;

  beforeEach(() => {
    page = new AppFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
