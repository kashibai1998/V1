export default function Notification(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
}
