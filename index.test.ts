import checkout from '.';

describe('tests', () => {
  test(`Given three misses
        Checkout returns 0`, () => {
    const actual = checkout([]);
  })
  test(`Given three singles are thrown,
        Checkout returns the total score`, () => {
    const actual = checkout(['10', '7', '18']);
    expect(actual).toBe(35);
  });
  test(`Given at least one double is thrown
        Checkout returns the total score`, () => {
    const oneDouble = checkout(['D12', '5', '13']);
    const twoDoubles = checkout(['D15', 'D7', '9']);
    const threeDoubles = checkout(['D15', 'D20', '20']);
    expect(oneDouble).toBe(42);
    expect(twoDoubles).toBe(53);
    expect(threeDoubles).toBe(90);
  });
})