import Title from './components/Title';
import Cat from './components/Cat';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
    }}>
      <Title
        name="Ali Azizi"
        role="Product Manager"
      />
    </div>
  )
}

export default App;
