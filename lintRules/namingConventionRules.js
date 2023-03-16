module.exports.namingConventionRules = [
  { selector: 'default', format: ['camelCase'] },
  {
    selector: ['variableLike', 'property', 'memberLike', 'parameter'],
    format: ['camelCase'],
  },
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase'],
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
  {
    selector: 'enumMember',
    format: ['UPPER_CASE'],
  },
];
