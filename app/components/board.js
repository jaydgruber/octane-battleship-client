import Component from '@glimmer/component';

/**
 * component arguments:
 * size {Number} - the width/height of the board (boards are square)
 */
export default class BoardComponent extends Component {
  DEFAULT_SIZE = 10;

  get size() {
    return this.args.size || this.DEFAULT_SIZE;
  }

  getLetterByIndex(index) {
    return String.fromCharCode(65 + index); // charCode 65 = 'A'
  }

  get rows() {
    return [...Array(this.size)].map((_, index) => this.getLetterByIndex(index));
  }
}
