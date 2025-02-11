import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteDts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    ViteDts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json'
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
        // BsInputField: resolve(__dirname, 'lib/BsInputField/index.ts'),
        BsButton: resolve(__dirname, 'lib/BsButton/index.ts')
        // BsCheckbox: resolve(__dirname, 'lib/BsCheckbox/index.ts')
      },
      name: 'kcp-ui-component',
      formats: ['es', 'cjs'],
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
