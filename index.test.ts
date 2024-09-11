import checkout from '.';

describe('tests', () => {
  test(`Given three misses
        Checkout returns 0`, () => {
    const actual = checkout([]);
    expect(actual).toBe(0);
  });
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
  test(`Given at least one triple is thrown
        Checkout returns the total score`, () => {
    const oneTriple = checkout(['T20', '10', '3']); //73
    const twoTriples = checkout(['T16', 'T18', '10']); //112
    const threeTriples = checkout(['T15', 'T20', 'T20']); //165
    expect(oneTriple).toBe(73);
    expect(twoTriples).toBe(112);
    expect(threeTriples).toBe(165);
  });
  test(`Given one of the darts hits the outer ring
        Checkout returns the total score`, () => {
    const withRing = checkout(['ring']);
    const withRingAndOthers = checkout(['20', 'D10', 'ring']);
    expect(withRing).toBe(25);
    expect(withRingAndOthers).toBe(65);
  });
  test(`Given one of the darts hits the bullseye
        Checkout returns the total score`, () => {
    const bullseye = checkout(['bullseye']);
    const bullseye2 = checkout(['bullseye', 'T5', 'D12']);
    const bullseye3 = checkout(['bullseye', 'T20', 'D15']);
    expect(bullseye).toBe(50);
    expect(bullseye2).toBe(89);
    expect(bullseye3).toBe(140);
  });
});