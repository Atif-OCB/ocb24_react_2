import Title from './components/Title';
import Cat from './components/Cat';

function App() {
  const familyName = 'De Souza';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
    }}>
      <Title
        name={`Ali ${familyName}`}
        role="Product Manager"
        isManager={true}
      />
      <Title
        name={`Atif ${familyName}`}
        role="Frontend Developer"
        meow={() => console.log("Meow!")}
      />
      <Title
        name={`Sidiq ${familyName}`}
        role="Project Manager"
      />
      <Title
        name={`Fatin ${familyName}`}
        role={"CEO"}
        isManager={true}
      />
    </div>
  )
}

export default App;
