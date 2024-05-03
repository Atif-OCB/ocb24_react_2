function Title(props) {
  props.meow?.();
  
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem 2rem',
        borderRadius: '1rem',
        backgroundColor: 'burlywood',
      }}
    >
      <p style={{ fontWeight: 'bold', fontSize: 40 }}>{props.name}</p>
      <p>{props.role}</p>
      {
        props.isManager && <p style={{ color: 'red' }}>Manager</p>
      }
    </div>
  );
}

export default Title;