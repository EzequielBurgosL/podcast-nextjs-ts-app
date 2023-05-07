import { Podcast } from './podcast';

it('is a valid Podcast', () => {
  expect(
    new Podcast({
      title: 'Podcast 1',
      summary: 'this is a podcast summary',
      addedAt: new Date(2012, 1, 1),
    }).title
  ).toEqual('Lavazza Espresso');

  expect(
    new Podcast({
      title: 'Podcast 1',
      summary: 'this is a podcast summary',
      addedAt: new Date(2012, 1, 1),
    }).summary
  ).toEqual('this is a podcast summary');
});

it.skip('getDate', () => {
  // TODO - Fix me
  expect(
    new Podcast({
      title: 'Podcast 1',
      summary: 'this is a podcast summary',
      addedAt: new Date(2012, 1, 1),
    }).getDate()
  ).toEqual('2012-01-31T23:00:00.000Z');
});
