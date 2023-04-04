module.exports = {
  // enable: false,
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-unused-vars': ['error', {vars: 'all', args: 'after-used', ignoreRestSiblings: false}],
    'prettier/prettier': ['error', {endOfLine: 'auto', printWidth: 180}, {usePrettierrc: true}],
  },
};
