import FormularioPregunta from './components/FormularioPregunta';
import './App.css';
import PreguntasCreadas from './components/PreguntasCreadas';
import PreguntasProvider from './contexts/PreguntasProvider';

function App() {
  return (
    <>
      <h1>Hola</h1>
      <PreguntasProvider>
        <FormularioPregunta />
        <PreguntasCreadas />
      </PreguntasProvider>
    </>
  )
}

export default App
