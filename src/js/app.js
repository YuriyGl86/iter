// TODO: write your code here
import { charackter1, charackter2, charackter3 } from './character.js';

class Team {
  constructor() {
    this.members = new Set();
  }

  add(cheracter) {
    if (this.members.has(cheracter)) {
      throw new Error('такой персонаж уже есть в команде');
    }
    this.members.add(cheracter);
  }

  addAll(...newCharacters) {
    newCharacters.forEach((cheracter) => {
      this.members.add(cheracter);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const array = this.toArray();
    let index = 0;
    const maxIndex = this.members.size - 1;
    return {
      next() {
        if (index > maxIndex) {
          return {
            done: true,
            value: undefined,
          };
        }
        return {
          value: array[index++],
          done: false,
        };
      },
    };
  }
}

const team = new Team();
export default team;
team.addAll(charackter1, charackter1, charackter2, charackter3);
// for (let char of team){
//   console.log(char)
// }
console.log(...team);
