import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, ".", "")

  return {
    base: env.VITE_BASE_PATH ?? (command === "build" ? "/caloristika-b2b-crm-demo/" : "/"),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": "/src"
      }
    }
  }
})
