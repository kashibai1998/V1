function CoreConcept(props) {
  return (
    <li style={{ color: 'white' }} key={props}>
      <h2 key={props.title}>{props.title}</h2>
      <p key={props.desc}>{props.desc}</p>
    </li>
  );
}
export default CoreConcept;
