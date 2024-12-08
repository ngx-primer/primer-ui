// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};

import 'jest-preset-angular/setup-jest';

import { customAlphabet, nanoid } from 'nanoid';

// Mock nanoid to use the actual module's behavior (for dynamic values)
jest.mock('nanoid', () => ({
  nanoid: jest.fn(() => nanoid()),  // Return actual nanoid value in the mock
  customAlphabet: jest.fn(() => () => customAlphabet('12345678abcdef', 10)),
}));
