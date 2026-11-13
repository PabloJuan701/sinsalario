import imagen from './assets/sinsalario.png'

function App() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white">
      <img
        src={imagen}
        alt="Sinsalario"
        className="block h-auto max-h-screen w-full object-contain"
      />
    </main>
  )
}

export default App
