export default function TabButton(props) {
  return (
    <li key={props}>
      <button className={props.isSelected?'active':''} onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
