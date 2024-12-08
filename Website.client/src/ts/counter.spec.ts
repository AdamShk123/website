import { expect, test } from 'vitest'
import { raiseCounter } from './counter.ts'

test('counter goes up from 0 to 1', () => {
    const elem = document.createElement("div");
    expect(raiseCounter(elem)).toBe(1);
})