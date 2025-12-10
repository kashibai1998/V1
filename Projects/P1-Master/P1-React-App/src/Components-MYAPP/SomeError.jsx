export default function SomeError() {
  const handleClick = () => {
    try {
      throw new Error('new error');
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div>
      hello
      <button onClick={handleClick}>error</button>
    </div>
  );
}
