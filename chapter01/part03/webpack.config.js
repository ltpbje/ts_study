const path = require("path")
// 引入 自动生成html文件 的插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { Extension } = require("typescript")
// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    mode: 'production',  
    // 指定入口文件
    entry:'./src/index.ts',
    // 指定打包文件所在目录
    output:{
        // 指定打包文件所在目录
        path:path.resolve(__dirname,"dist"),
        // 打包后文件的文件名
        filename:"bundle.js",
        // 告诉webpack不使用箭头函数
        environment:{
            // 为了兼容ie
            arrowFunction:false
        }
    },
    module:{
        rules:[
            {
                // test指定的是规则生效的文件
                test:/\.ts$/,
                // 要使用的loader
                use:[
                    // 配置babel
                    {
                        // 指定加载器
                        loader:"babel-loader",
                        // 设置babel
                        options:{
                            presets:[
                                [// 指定环境的插件
                                "@babel/preset-env",
                                // 配置信息
                                {
                                    // 要兼容的目标浏览器
                                    "targets":{
                                        "chrome": "100"
                                    },
                                    // 指定corejs的版本
                                    "corejs":"3",
                                    // 使用corejs的方式 "usage"表示按需加载
                                    "useBuiltIns":"usage"
                                }]
                            ]
                        },

                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude:/node_modules/
            }
        ]
    },
    // 配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    // 用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
    

} 