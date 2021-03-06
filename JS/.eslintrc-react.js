{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/react",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/media-has-caption": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  }
}
