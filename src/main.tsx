import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeScreen from "./pages/home";
import AboutScreen from "./pages/about";
import ContactScreen from "./pages/contact";
import WordScreen from "./pages/word";
import CategoryScreen from "./pages/category";
import WordListScreen from "./pages/wordlist";
import WordPageScreen from "./pages/wordpage";
import { NotFound } from "@/pages/not-found";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ScrollToHash } from "./components/ScrollToHash";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <ScrollToHash />
                <RouteProvider>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/about" element={<AboutScreen />} />
                        <Route path="/contact" element={<ContactScreen />} />
                        <Route path="/category" element={<CategoryScreen />} />
                        <Route path="/list" element={<WordListScreen />} />
                        <Route path="/:category/:group/:slug" element={<WordScreen />} />
                        <Route path="/:type/:normalized_ga" element={<WordPageScreen />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
