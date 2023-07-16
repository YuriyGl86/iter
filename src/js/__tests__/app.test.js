import team from '../app';
import { charackter1, charackter2, charackter3 } from '../character';

afterEach(() => {
  team.members.clear();
});

test('add new charackter', () => {
  team.add(charackter1);
  expect(team.toArray()).toEqual([charackter1]);
});

test('add duplicated charackter', () => {
  team.add(charackter1);
  expect(() => {
    team.add(charackter1);
  }).toThrow();
});

test('add all', () => {
  team.addAll(charackter1, charackter1, charackter2, charackter3);
  expect(team.toArray()).toEqual([charackter1, charackter2, charackter3]);
});
