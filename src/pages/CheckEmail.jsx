import { Link, useNavigate } from 'react-router-dom';

const CheckEmail = () => {
  const navigate = useNavigate();

  return (
    <div className='mx-4 my-4'>
      <Link to='/forgot'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.56032L11.0306 18.2194C11.1003 18.2891 11.1556 18.3718 11.1933 18.4628C11.231 18.5539 11.2504 18.6515 11.2504 18.75C11.2504 18.8485 11.231 18.9461 11.1933 19.0372C11.1556 19.1282 11.1003 19.2109 11.0306 19.2806C10.961 19.3503 10.8782 19.4056 10.7872 19.4433C10.6961 19.481 10.5986 19.5004 10.5 19.5004C10.4015 19.5004 10.3039 19.481 10.2128 19.4433C10.1218 19.4056 10.0391 19.3503 9.96939 19.2806L3.21939 12.5306C3.14965 12.461 3.09433 12.3783 3.05659 12.2872C3.01885 12.1962 2.99942 12.0986 2.99942 12C2.99942 11.9014 3.01885 11.8038 3.05659 11.7128C3.09433 11.6217 3.14965 11.539 3.21939 11.4694L9.96939 4.71937C10.1101 4.57864 10.301 4.49958 10.5 4.49958C10.699 4.49958 10.8899 4.57864 11.0306 4.71937C11.1714 4.8601 11.2504 5.05097 11.2504 5.25C11.2504 5.44902 11.1714 5.63989 11.0306 5.78062L5.56032 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z'
            fill='#344054'
          />
        </svg>
      </Link>
      <div className='d-flex justify-content-center my-4'>
        <svg
          width='66'
          height='66'
          viewBox='0 0 66 66'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='5' y='5' width='56' height='56' rx='28' fill='#F4EBFF' />
          <rect
            x='5'
            y='5'
            width='56'
            height='56'
            rx='28'
            stroke='#F9F5FF'
            strokeWidth='10'
          />
          <path
            d='M20.8333 27.1667L30.3591 33.8347C31.1304 34.3746 31.5161 34.6446 31.9356 34.7492C32.3062 34.8416 32.6938 34.8416 33.0643 34.7492C33.4839 34.6446 33.8695 34.3746 34.6409 33.8347L44.1666 27.1667M26.4333 42.3333H38.5666C40.5268 42.3333 41.5069 42.3333 42.2556 41.9519C42.9142 41.6163 43.4496 41.0809 43.7852 40.4223C44.1666 39.6736 44.1666 38.6935 44.1666 36.7333V29.2667C44.1666 27.3065 44.1666 26.3264 43.7852 25.5777C43.4496 24.9191 42.9142 24.3837 42.2556 24.0481C41.5069 23.6667 40.5268 23.6667 38.5666 23.6667H26.4333C24.4731 23.6667 23.493 23.6667 22.7443 24.0481C22.0858 24.3837 21.5503 24.9191 21.2148 25.5777C20.8333 26.3264 20.8333 27.3065 20.8333 29.2667V36.7333C20.8333 38.6935 20.8333 39.6736 21.2148 40.4223C21.5503 41.0809 22.0858 41.6163 22.7443 41.9519C23.493 42.3333 24.4731 42.3333 26.4333 42.3333Z'
            stroke='#7F56D9'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <h1 className='fw-semibold m-0 text-center'>Check your email</h1>
      <span className='fw-normal text-center d-flex justify-content-center flex-column gray'>
        We sent a password reset link to
        <span className='m-0'>olivia@untitledui.com</span>
      </span>

      <button
        type='submit'
        className='btn btn-primary fw-medium fs-6 w-100 mt-5 my-4 border-0'
        onClick={() => navigate('/reset')}
      >
        Open email app
      </button>
      <span className='d-flex justify-content-center'>
        Didn’t receive the email? &nbsp;
        <span onClick={() => navigate('/forgot')} className='forgot'>
          Click to resend
        </span>
      </span>
    </div>
  );
};

export default CheckEmail;
