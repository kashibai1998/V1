import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/products');
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries())
    console.log('hello', data);
  };
  return (
    <div>
      Home
      <div>
        {/* <a href="/products">products</a> */}
        <Link to="/products">products</Link>
      </div>
      <div>
        <div>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </form>
        </div>
      </div>
      <button>click</button>
    </div>
  );
}
