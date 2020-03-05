import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | square', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <table>
        <tbody>
          <tr>
            <Square
            />
          </tr>
        </tbody>
      </table>
    `);

    assert.dom('td').hasText('X', 'it has an X when it is non-empty');
    await this.pauseTest();
  });
});
