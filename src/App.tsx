import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Terms from "./pages/Terms";
import RefundsPolicy from "./pages/RefundsPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// UTM Tracker Component
const UTMTracker = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
    
    utmParams.forEach(param => {
      const value = params.get(param);
      if (value) {
        sessionStorage.setItem(param, value);
      }
    });
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <UTMTracker />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/o-nas" element={<About />} />
              <Route path="/uslugi" element={<Services />} />
              <Route path="/uslugi/:slug" element={<ServiceDetail />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/dziekujemy" element={<ThankYou />} />
              <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
              <Route path="/polityka-cookies" element={<CookiePolicy />} />
              <Route path="/regulamin" element={<Terms />} />
              <Route path="/polityka-zwrotow" element={<RefundsPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <CookieBanner />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
