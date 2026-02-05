import { describe, it, expect } from 'vitest';
import { resta } from '../src/resta.js';

describe('resta', () => {
  it('resta dos números', () => {
    expect(resta(9, 3)).toBe(6);
  });
});