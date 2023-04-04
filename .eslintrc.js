module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-unused-vars': [
      'error',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: false},
    ],
  },
};
