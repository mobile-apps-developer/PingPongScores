/**
 * @format
 */

import {isValidInput} from '../src/utils/validations';

describe('utils:validations', () => {
  test('isValidInput', () => {
    expect(isValidInput('1')).toEqual(true);
    expect(isValidInput('1     ')).toEqual(true);
    expect(isValidInput('abc', 3)).toEqual(true);

    expect(isValidInput('')).toEqual(false);
    expect(isValidInput('      ')).toEqual(false);
    expect(isValidInput(null)).toEqual(false);
    expect(isValidInput(undefined)).toEqual(false);
    expect(isValidInput('1     ', 2)).toEqual(false);
  });
});
