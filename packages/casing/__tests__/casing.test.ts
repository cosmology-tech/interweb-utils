import { isValidIdentifier, isValidIdentifierCamelized, toCamelCase, toPascalCase } from '../src';

it('should convert strings to PascalCase', () => {
  expect(toPascalCase('hello_world')).toBe('HelloWorld');
  expect(toPascalCase('hello world')).toBe('HelloWorld');
  expect(toPascalCase('hello-world')).toBe('HelloWorld');
  expect(toPascalCase('Hello-World')).toBe('HelloWorld');
});

it('should convert strings to camelCase', () => {
  expect(toCamelCase('hello_world')).toBe('helloWorld');
  expect(toCamelCase('hello world')).toBe('helloWorld');
  expect(toCamelCase('hello-world')).toBe('helloWorld');
  expect(toCamelCase('Hello-World')).toBe('helloWorld');
  expect(toCamelCase('_hello_world')).toBe('helloWorld');
  expect(toCamelCase('123hello_world')).toBe('helloWorld');
});

it('should validate valid JavaScript identifiers', () => {
  expect(isValidIdentifier('validIdentifier')).toBe(true);
  expect(isValidIdentifier('$validIdentifier')).toBe(true);
  expect(isValidIdentifier('_validIdentifier')).toBe(true);
  expect(isValidIdentifier('1invalidIdentifier')).toBe(false);
  expect(isValidIdentifier('invalid-Identifier')).toBe(false);
});

it('should validate valid JavaScript-like identifiers allowing internal hyphens', () => {
  expect(isValidIdentifierCamelized('valid-identifier')).toBe(true);
  expect(isValidIdentifierCamelized('$valid-identifier')).toBe(true);
  expect(isValidIdentifierCamelized('_valid-identifier')).toBe(true);
  expect(isValidIdentifierCamelized('1invalid-identifier')).toBe(false);
  expect(isValidIdentifierCamelized('-invalid-identifier')).toBe(false);
  expect(isValidIdentifierCamelized('invalid-identifier-')).toBe(true);
});
