import { describe, it, expect } from 'vitest';
import { multi } from '../src/multi.js';

describe('multi', () => {
  it('multiplica dos números', () => {
    expect(multi(5, 5)).toBe(25);
  });
});