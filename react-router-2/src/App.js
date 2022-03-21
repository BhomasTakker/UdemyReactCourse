import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuote from "./pages/AddQuote";
import NotFound from "./pages/NotFound";
import QuoteDetails from "./pages/QuoteDetails";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />}></Route>
        {/* Replace replaces - push would be default */}
        <Route path="/quotes/*" element={<Quotes />}></Route>
        <Route path="/new-quote" element={<AddQuote />}></Route>
        <Route path="/quotes/:quoteId" element={<QuoteDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
