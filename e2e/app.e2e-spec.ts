import { GroupMentorMeetupPage } from './app.po';

describe('group-mentor-meetup App', () => {
  let page: GroupMentorMeetupPage;

  beforeEach(() => {
    page = new GroupMentorMeetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
