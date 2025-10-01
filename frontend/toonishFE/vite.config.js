import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import moduleFederationConfig from "./module-federation.config.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), moduleFederationConfig],
})
