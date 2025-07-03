import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: '/task-app-redux',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
