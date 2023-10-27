
module.exports = {
  plugins: {
    // ...
    'postcss-pxtorem': {
      rootValue:50, //换算基数， 默认100 ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
      unitPrecision: 5, //允许REM单位增长到的十进制数字。
      propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
      mediaQuery: false,
      exclude: /node_modules/i
    }
  }
}
