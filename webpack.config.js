const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js', // Точка входа
  output: {
    filename: 'bundle.js', // Выходной файл
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очистка папки dist перед каждой сборкой
  },
  mode: 'development', // Режим разработки
  devtool: 'source-map', // Создание карт исходного кода
  module: {
    rules: [
      {
        test: /\.js$/, // Обработка JavaScript файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Поддержка современных JS
          },
        },
      },
      {
        test: /\.css$/, // Обработка CSS файлов
        use: ['style-loader', 'css-loader'], // Загрузка и инжектирование CSS в HTML
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Обработка изображений
        type: 'asset/resource', // Это будет правильно загружать изображения
        generator: {
          filename: 'assets/[name][hash][ext]', // Загружать изображения в dist/assets
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Путь для сервера
    open: true, // Открывать браузер автоматически
    port: 8080, // Порт сервера
    hot: true, // Горячая перезагрузка
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Путь к вашему HTML-шаблону
    }),
  ],
};
