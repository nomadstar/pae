import { lazy, Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Loading from './Loading'
import Home from "./pages/Home"
import Page404 from "./pages/Page404"

const Pay = lazy(() => import('./pages/pay/Pay'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/begin" element={<Pay />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
export default App
