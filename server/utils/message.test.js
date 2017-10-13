const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Jen';
    const text = 'Some message';
    const message = generateMessage(from, text);
    expect(message).toHaveProperty('from', from);
    expect(message).toHaveProperty('text', text);
    //expect(message.createdAt).toBeA('number');
  });
});
