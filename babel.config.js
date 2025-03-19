module.exports = {
  presets: [
    '@babel/preset-env', // Транспиляция современного JS в более старую версию, совместимую с большинством браузеров
    '@babel/preset-react' // Если используете React, иначе можете не включать этот пресет
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties', // Позволяет использовать свойства классов
    '@babel/plugin-proposal-private-methods', // Позволяет использовать приватные методы в классах
    '@babel/plugin-transform-runtime' // Для уменьшения размера итогового файла
  ],
};
