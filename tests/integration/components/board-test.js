import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | board', function(hooks) {
  setupRenderingTest(hooks);

  test('it takes a size argument', async function(assert) {
    await render(hbs`<Board />`);

    assert.dom(this.element).hasText('10', 'it has a default size');

    await render(hbs`
      <Board
        @size={{5}}
      />
    `);
    assert.dom(this.element).hasText('5', 'it takes a size argument');
  });
});
