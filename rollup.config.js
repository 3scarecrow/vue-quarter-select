import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'
import url from 'postcss-url'
import autoprefixer from 'autoprefixer'
const version = process.env.VERSION || require('./package.json').version
const banner = [
  '/**\n',
  ' * @preserve\n',
  ` * @3scarecrow/vue-quarter-select v${version}\n`,
  ' */'
].join('')
const commonConfig = {
  input: 'src/index.js',
  plugins: [
    resolve(),
    commonjs(),
    vue({
      style: {
        trim: false,
        postcssPlugins: [
          url({
            url: 'inline'
          }),
          autoprefixer()
        ]
      }
    }),
    buble()
  ]
}
export default[
  {
    ...commonConfig,
    output: {
      format: 'es',
      file: 'dist/vue-quarter-select.esm.js',
      banner
    }
  },
  {
    ...commonConfig,
    output: {
      format: 'umd',
      file: 'dist/vue-quarter-select.umd.js',
      name: 'vue-quarter-select',
      banner
    }
  },
  {
    ...commonConfig,
    output: {
      format: 'umd',
      file: 'dist/vue-quarter-select.umd.min.js',
      name: 'vue-quarter-select',
      banner
    },
    plugins: [
      ...commonConfig.plugins,
      uglify({
        output: {
          // https://github.com/TrySound/rollup-plugin-uglify#comments
          comments: function (node, comment) {
            if (comment.type === "comment2") {
              return /@preserve|@license|@cc_on/i.test(comment.value)
            }
            return false
          }
        }
      })
    ]
  }
]