import { ReadablePipe } from './readable.pipe';

describe('ReadablePipe', () => {
  it('create an instance', () => {
    const pipe = new ReadablePipe();
    expect(pipe).toBeTruthy();
  });
});
