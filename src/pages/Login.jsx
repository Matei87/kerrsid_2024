import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='mx-4'>
      <Header />
      <h1 className='fw-semibold m-0 text-center'>Log in to your account</h1>
      <p className='fw-normal m-0 text-center'>
        Welcome back! Please enter your details.
      </p>

      <form>
        <div className='mb-3'>
          <label className='form-label'>Email ID</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter your email'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password here'
          />
        </div>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <div className='form-check'>
            <input type='checkbox' className='form-check-input' />
            <label>Remember me</label>
          </div>
          <div>
            <p onClick={() => navigate('/forgot')} className='forgot m-0'>
              Forgot password ?
            </p>
          </div>
        </div>

        <button
          type='submit'
          className='btn btn-primary fw-medium fs-6 w-100 my-4 border-0'
          onClick={() => navigate('/dashboard')}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
