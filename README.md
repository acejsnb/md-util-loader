# md-util-loader
将.md文件转为react或者vue组件

## react中使用
```js
    {
        test: /\.mdx?$/,
        use: [
            'babel-loader',
            'md-util-loader'
        ]
    }
```

## vue中使用
```js
    {
        test: /\.mdx?$/,
            use: [
            'babel-loader',
            {
                loader: 'md-util-loader',
                options: {
                    type: 'vue'
                }
            }
        ]
    }
```
