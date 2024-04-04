export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-6xl">Oops!</h1>
      <p className="mt-2">
        Lo siento, un error se ha generado al cargar la pantalla.
      </p>
      <p className="mt-4">
        <i>Vuelve a cargar la página o revisa la dirección de la página</i>
      </p>
    </div>
  );
}
