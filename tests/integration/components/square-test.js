import { render } from '@ember/test-helpers';
import { setProperties } from '@ember/object';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | square', function(hooks) {
  setupRenderingTest(hooks);

  const stateEnum = {
    empty: 0,
    ship: 1,
    miss: 2,
    hit: 3
  };

  const classes = ['bg-blue-300', 'bg-gray-400', 'bg-white', 'bg-red-500'];

  const testCases = [
    {
      name: 'empty',
      expectedClass: classes[stateEnum.empty],
      row: 0,
      column: 0,
      ships: [[0]],
      shots: [[0]],
      shouldShowShip: false
    },
    {
      name: 'ship, shouldShowShip=false, miss',
      expectedClass: classes[stateEnum.miss],
      row: 0,
      column: 0,
      ships: [[1]],
      shots: [[2]],
      shouldShowShip: false
    },
    {
      name: 'ship, shouldShowShip=false, hit',
      expectedClass: classes[stateEnum.hit],
      row: 0,
      column: 0,
      ships: [[1]],
      shots: [[3]],
      shouldShowShip: false
    },
    {
      name: 'ship, shouldShowShip=true, miss',
      expectedClass: classes[stateEnum.miss],
      row: 0,
      column: 0,
      ships: [[1]],
      shots: [[2]],
      shouldShowShip: true
    },
    {
      name: 'ship, shouldShowShip=true, hit',
      expectedClass: classes[stateEnum.hit],
      row: 0,
      column: 0,
      ships: [[1]],
      shots: [[3]],
      shouldShowShip: true
    }
  ];
  testCases.forEach(({ name, expectedClass, ...props }) => {
    test(name, async function(assert) {
      setProperties(this, props);
      await render(hbs`
        <Square
          @row={{this.row}}
          @column={{this.column}}
          @ships={{this.ships}}
          @shots={{this.shots}}
          @shouldShowShip={{this.shouldShowShip}}
        />
      `);

      assert.dom('td').hasClass(expectedClass);
    });
  });
});
