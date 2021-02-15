import { SorterPipe } from './sorter.pipe';

describe('OrderPipe', () => {
  it('create an instance', () => {
    const pipe = new SorterPipe();
    expect(pipe).toBeTruthy();
  });
});
