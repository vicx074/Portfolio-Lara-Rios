// Importa os hooks useLocation e useEffect do React Router e do React, respectivamente
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Componente funcional que representa a página de erro 404 (rota não encontrada)
const NotFound = () => {
  // Hook que fornece informações sobre a localização atual da URL
  const location = useLocation();

  // Hook de efeito que é executado sempre que o pathname da localização muda
  useEffect(() => {
    // Loga no console um erro informando que o usuário tentou acessar uma rota inexistente
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]); // Dependência: executa sempre que o pathname muda

  // Renderiza a interface da página 404
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Container centralizado */}
      <div className="text-center">
        {/* Código do erro */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        
        {/* Mensagem de erro */}
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        
        {/* Link para retornar à página inicial */}
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

// Exporta o componente para ser utilizado em outras partes da aplicação
export default NotFound;
