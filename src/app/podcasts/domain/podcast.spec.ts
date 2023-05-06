import { Podcast } from './podcast';

it('is a valid Podcast', () => {
  expect(
    new Podcast({
      title: 'Podcast 1',
      description: 'this is a podcast description',
      addedAt: new Date(2012, 1, 1),
    }).title
  ).toEqual('Lavazza Espresso');

  expect(
    new Podcast({
      title: 'Podcast 1',
      description: 'this is a podcast description',
      addedAt: new Date(2012, 1, 1),
    }).description
  ).toEqual('this is a podcast description');
});

it.skip('getDate', () => {
  // TODO - Fix me
  expect(
    new Podcast({
      title: 'Podcast 1',
      description: 'this is a podcast description',
      addedAt: new Date(2012, 1, 1),
    }).getDate()
  ).toEqual('2012-01-31T23:00:00.000Z');
});
