import { ActionToDescriptionPipe } from './action-to-description.pipe';

describe('ActionToDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new ActionToDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
