function Title(props) {
  // const name = 'Sidiq';
  // const role = 'Chief Everything Officer (CEO)';

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem 2rem',
        borderRadius: '1rem',
        backgroundColor: 'burlywood',
      }}
    >
      <p>{props.name}</p>
      <p>{props.role}</p>
    </div>
  );
}

export default Title;