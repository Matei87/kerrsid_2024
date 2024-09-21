import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className='mx-4 my-4'>
      <Link to='/check'>
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
            d='M38.8333 29.4999C38.8333 28.9028 38.6055 28.3057 38.1499 27.8501C37.6943 27.3945 37.0972 27.1667 36.5 27.1667M36.5 36.5C40.366 36.5 43.5 33.366 43.5 29.5C43.5 25.634 40.366 22.5 36.5 22.5C32.634 22.5 29.5 25.634 29.5 29.5C29.5 29.8193 29.5214 30.1336 29.5628 30.4415C29.6309 30.948 29.6649 31.2013 29.642 31.3615C29.6181 31.5284 29.5877 31.6184 29.5055 31.7655C29.4265 31.9068 29.2873 32.046 29.009 32.3243L23.0467 38.2866C22.845 38.4884 22.7441 38.5893 22.6719 38.707C22.608 38.8114 22.5608 38.9252 22.5322 39.0442C22.5 39.1785 22.5 39.3212 22.5 39.6065V41.6333C22.5 42.2867 22.5 42.6134 22.6272 42.863C22.739 43.0825 22.9175 43.261 23.137 43.3728C23.3866 43.5 23.7133 43.5 24.3667 43.5H27.1667V41.1667H29.5V38.8333H31.8333L33.6757 36.991C33.954 36.7127 34.0932 36.5735 34.2345 36.4945C34.3816 36.4123 34.4716 36.3819 34.6385 36.358C34.7987 36.3351 35.052 36.3691 35.5585 36.4372C35.8664 36.4786 36.1807 36.5 36.5 36.5Z'
            stroke='#7F56D9'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <h1 className='fw-semibold m-0 text-center'>Set new password</h1>
      <div className='fw-normal m-0 text-center gray'>
        Your new password must be different to
        <p>previously used passwords.</p>
      </div>

      <form>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password here'
          />
          <p className='my-2'>Must be at least 8 characters.</p>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Re-enter your password'
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary fw-medium fs-6 w-100 my-4 border-0'
        >
          Reset password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
