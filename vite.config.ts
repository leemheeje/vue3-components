import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteDts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    ViteDts({
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@tests': resolve(__dirname, 'tests')
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'lib/main.ts'),
        BsInputField: resolve(__dirname, 'lib/BsInputField/index.ts')
      },
      name: 'testleem',
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
})
