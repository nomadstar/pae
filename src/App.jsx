import React, { lazy, Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Loading from './Loading'
import Home from "./pages/Home"

const Pay = lazy(() => import('./pages/pay/Pay'));
const Page404 = lazy(() => import('./pages/Page404'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error aquí si lo deseas
    console.error(error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    // Puedes agregar lógica adicional aquí si es necesario antes de recargar
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Puedes personalizar el mensaje de error aquí
      return (
        <div>
          <h1>Hubo un error en la aplicación.</h1>
          <button onClick={this.handleReload}>Recargar</button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/begin" element={<Pay />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
