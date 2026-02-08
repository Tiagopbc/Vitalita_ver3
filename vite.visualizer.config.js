import { defineConfig } from 'vite'
import baseConfig from './vite.config.js'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(async (env) => {
  const resolvedConfig = typeof baseConfig === 'function' ? await baseConfig(env) : baseConfig
  const plugins = resolvedConfig.plugins ? [...resolvedConfig.plugins] : []

  plugins.push(
    visualizer({
      filename: 'output/bundle-stats.json',
      template: 'raw-data',
      gzipSize: true,
      brotliSize: true,
      open: false,
    })
  )

  return {
    ...resolvedConfig,
    plugins,
  }
})
