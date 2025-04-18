import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./components/theme-provider"
import { SidebarProvider } from "./components/ui/sidebar"
import { Toaster } from "./components/ui/toaster"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="light">
        <SidebarProvider>
          <App />
          <Toaster />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
