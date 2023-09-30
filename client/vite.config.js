import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  return {
    plugins: [react()],
    define: {
      'process.env.API_URL': JSON.stringify(process.env.REACT_APP_BACKEND_URL),
    },
    server: {
      host: '0.0.0.0',
      port: 3000, // use your desired port
      strictPort: true, // make Vite fail if the port is already in use
        https: false,
    },
  }
})
