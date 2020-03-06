import Component from '@glimmer/component';
import { assert } from '@ember/debug';

export default class SquareComponent extends Component {
  /**
   * component arguments
   *
   * required
   * @property row {Number} - the y coordinate of this square in the game board
   * @property column {Number} - the x coordinate of this square in the game board
   * @property ships {Array} - a [row] x [column] 2d array
   * @property shots {Array} - a [row] x [column] 2d array
   *
   * optional
   * @property shouldShowShip {Boolean}(default = false)
   */

  constructor() {
    super(...arguments);
    const { ships, shots, row, column } = this.args;
    assert('row {Number} is required', Number.isInteger(row));
    assert('column {Number} is required', Number.isInteger(column));
    assert('ships {Array} is required', Array.isArray(ships));
    assert('shots {Array} is required', Array.isArray(shots));
  }

  get state() {
    const { shouldShowShip, ships, shots, row, column } = this.args;
    const ship = ships[row][column];
    const shot = shots[row][column];
    return shouldShowShip ? shot || ship : shot || 0;
  }

  get background() {
    // [empty, ship, miss, hit]
    const backgroundClasses = ['bg-blue-300', 'bg-gray-400', 'bg-white', 'bg-red-500'];
    return backgroundClasses[this.state];
  }

  get hasBeenFiredUpon() {
    return this.state > 1;
  }
}
