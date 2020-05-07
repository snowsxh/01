// 引入path
let path = require('path');
// 模板插件
let HtmlWebpackPlugin = require('html-webpack-plugin');
// css打包插件
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// 引入webpack
let { CommonsChunkPlugin, UglifyJsPlugin } = require('webpack').optimize;
// 压缩css
let OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
// 配置
module.exports = {
	// 解决问题
	resolve: {
		// 拓展名
		extensions: ['.vue', '.js', '.es'],
		// 模块入口
		alias: {
			vue$: 'vue/dist/vue.js'
		}
	},
	// 入口文件
	entry: {
		// 模块打包在一起
		main: './src/main.js',
		// 库打包在一起
		lib: ['vue', 'vuex', 'vue-router', 'axios', 'element-ui']
	},
	// 发布
	output: {
		// 发布位置
		path: path.join(process.cwd(), '../'),
		// 发布文件
		filename: './static/admin/[name].js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.js$/,
				// 不包含的目录
				exclude: '/node_modules/',
				// 加载机
				loader: 'babel-loader',
				// 插件
				query: {
					presets: ['es2015']
				}
			},
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					// css拆分
					extractCSS: true,
					// 添加加载机
					loader: {
						js: ['babel-loader?presets[]=es2015']
					}
				}
			},
			// scss
			{
				test: /\.scss$/,
				// loader: 'style-loader!css-loader!sass-loader'
				loader: ExtractTextPlugin.extract({
					// 加载机
					fallback: 'style-loader',
					// 插件
					use: ['css-loader', 'sass-loader']
				})
			},
			// css
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					// 加载机
					fallback: 'style-loader',
					// 插件
					use: 'css-loader'
				})
			},
			// 字体图标
			{
				test: /\.(ttf|woff)$/,
				loader: 'url-loader'
			}
		]
	},
	// 插件
	plugins: [
		// 处理模板
		new HtmlWebpackPlugin({
			// 模板
			template: './public/index.html',
			// 发布
			filename: './views/admin.html',
			// 添加指纹
			hash: true
		}),
		// 拆分库文件
		new CommonsChunkPlugin('lib'),
		// 打包css
		new ExtractTextPlugin('./static/admin/style.css'),
		//压缩js
		new UglifyJsPlugin(),
		//压缩css
		new OptimizeCssAssets()
	]
}