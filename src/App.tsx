import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ExtensionPopup } from './pages/ExtensionPopup/ExtensionPopup';
import { ResumeLibraryPage } from './pages/ResumeLibraryPage/ResumeLibraryPage';
import { AutofillDemoPage } from './pages/AutofillDemoPage/AutofillDemoPage';
import { BrandMarkPage } from './pages/BrandMarkPage/BrandMarkPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/preview" element={<ExtensionPopup />} />
      <Route path="/popup" element={<ExtensionPopup />} />
      <Route path="/library" element={<ResumeLibraryPage />} />
      <Route path="/demo" element={<AutofillDemoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/brand-mark" element={<BrandMarkPage />} />
    </Routes>
  );
}

export default App;
