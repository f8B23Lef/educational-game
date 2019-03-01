module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  rules: {
    "linebreak-style": 0,
    "import/no-cycle": [2, { maxDepth: 1 }]
  },
};