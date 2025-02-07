const WelcomeMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center p-8 rounded-lg">
        <h1 className="text-4xl font-light text-gray-800 mb-6">
          Bienvenido
        </h1>
        <p className="text-gray-600 text-lg">
          Selecciona una opción del menú para comenzar.
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage; 