/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import PricesView from './components/PricesView';
import ContactView from './components/ContactView';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [preselectedService, setPreselectedService] = useState<string>('orals');

  // Trigger state callback to preselect categories in the contact form
  const handlePreselectService = (serviceId: string) => {
    setPreselectedService(serviceId);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return (
          <ServicesView
            setActiveTab={setActiveTab}
            setPreselectedService={handlePreselectService}
          />
        );
      case 'prices':
        return (
          <PricesView
            setActiveTab={setActiveTab}
            setPreselectedService={handlePreselectService}
          />
        );
      case 'contact':
        return <ContactView preselectedService={preselectedService} />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div id="eduspark-root" className="min-h-screen bg-black text-gray-300 Selection:bg-[#FFD700] Selection:text-black flex flex-col justify-between">
      {/* Top Header navbar with gold accents */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main active portal switched dynamically */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Footer clusters */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating high-priority contact shortcuts */}
      <FloatingContactButtons />
    </div>
  );
}
