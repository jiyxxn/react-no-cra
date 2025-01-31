const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // React 앱의 진입점 (src/index.js)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // 번들된 파일을 dist/bundle.js로 저장
  },
  mode: 'development', // development 모드로 설정
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // babel-loader → JSX와 최신 JavaScript 변환
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // style-loader & css-loader → CSS 파일을 처리
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HtmlWebpackPlugin → public/index.html을 기반으로 번들링된 HTML 자동 생성
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3000, // 개발 서버를 localhost:3000에서 실행
    hot: true, // hot: true → 코드 변경 시 자동으로 업데이트
  },
};
