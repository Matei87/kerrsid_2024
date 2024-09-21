import Teacher1 from '../assets/img/avatar.png';
import Teacher2 from '../assets/img/bessie.png';
import Teacher3 from '../assets/img/marvin.png';
import Teacher4 from '../assets/img/jerome.png';
import Teacher5 from '../assets/img/arlene.png';
import Teacher6 from '../assets/img/guy.png';
import Teacher7 from '../assets/img/avatar.png';
import Teacher8 from '../assets/img/marvin.png';
import Teacher9 from '../assets/img/arlene.png';
import Teacher10 from '../assets/img/bessie.png';
import Logo from '../assets/img/logo.png';
import './Teachers.css';

const Teachers = () => {
  const ratedTeachers = [
    {
      img: Teacher1,
      name: 'Dianne Russell',
      ID: 5486235,
      subject: 'Mathemathics',
      classed: '05',
      score: 4.9,
    },
    {
      img: Teacher2,
      name: 'Bessie Cooper',
      ID: 5486235,
      subject: 'English',
      classed: '04',
      score: 4.7,
    },
    {
      img: Teacher3,
      name: 'Marvin McKinney',
      ID: 5486235,
      subject: 'Arabic',
      classed: '07',
      score: 4.8,
    },
    {
      img: Teacher4,
      name: 'Jerome Bell',
      ID: 5486235,
      subject: 'History',
      classed: '06',
      score: 4.9,
    },
    {
      img: Teacher5,
      name: 'Arlene McCoy',
      ID: 5486235,
      subject: 'Geography',
      classed: '05',
      score: 4.6,
    },
    {
      img: Teacher6,
      name: 'Guy Hawkins',
      ID: 5486235,
      subject: 'Mathemathics',
      classed: '06',
      score: 4.8,
    },

    {
      img: Teacher7,
      name: 'Floyd Miles',
      ID: 5486235,
      subject: 'History',
      classed: '05',
      score: 4.7,
    },
    {
      img: Teacher8,
      name: 'Jane Cooper',
      ID: 5486235,
      subject: 'History',
      classed: '03',
      score: 4.9,
    },
    {
      img: Teacher9,
      name: 'Courtney Henry',
      ID: 5486235,
      subject: 'Arabic',
      classed: '05',
      score: 4.5,
    },
    {
      img: Teacher10,
      name: 'Annette Black',
      ID: 5486235,
      subject: 'English',
      classed: '05',
      score: 4.2,
    },
  ];

  return (
    <div className='container-fluid w-100 p-5 h-100' id='teachers'>
      <h1 className='title'>Teachers</h1>
      <p className='m-0 subtitle'>
        Explore Your Teachers Easily and Check Individual Profiles with a Click
      </p>

      <div className='d-flex justify-content-end my-3'>
        <button
          type='button'
          className='btn btn-primary btn-modal d-flex justify-content-center align-items-center fw-medium'
          data-bs-toggle='modal'
          data-bs-target='#modal'
        >
          <svg
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.8125 10.5C17.8125 10.7486 17.7137 10.9871 17.5379 11.1629C17.3621 11.3387 17.1236 11.4375 16.875 11.4375H10.9375V17.375C10.9375 17.6236 10.8387 17.8621 10.6629 18.0379C10.4871 18.2137 10.2486 18.3125 10 18.3125C9.75136 18.3125 9.5129 18.2137 9.33709 18.0379C9.16127 17.8621 9.0625 17.6236 9.0625 17.375V11.4375H3.125C2.87636 11.4375 2.6379 11.3387 2.46209 11.1629C2.28627 10.9871 2.1875 10.7486 2.1875 10.5C2.1875 10.2514 2.28627 10.0129 2.46209 9.83709C2.6379 9.66127 2.87636 9.5625 3.125 9.5625H9.0625V3.625C9.0625 3.37636 9.16127 3.1379 9.33709 2.96209C9.5129 2.78627 9.75136 2.6875 10 2.6875C10.2486 2.6875 10.4871 2.78627 10.6629 2.96209C10.8387 3.1379 10.9375 3.37636 10.9375 3.625V9.5625H16.875C17.1236 9.5625 17.3621 9.66127 17.5379 9.83709C17.7137 10.0129 17.8125 10.2514 17.8125 10.5Z'
              fill='white'
            />
          </svg>
          Add Teacher
        </button>
      </div>

      <div className='row'>
        <div className='col-12'>
          <table className='table table-borderless m-0'>
            <thead>
              <tr>
                <th scope='col' className='fw-medium'>
                  Teacher Name
                </th>
                <th scope='col' className='fw-medium'>
                  Subject
                </th>
                <th scope='col' className='fw-medium'>
                  Number of classes
                </th>
                <th scope='col' className='fw-medium'>
                  Review score
                </th>
                <th scope='col' className='fw-medium text-center'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {ratedTeachers.map((el) => (
                <tr key={el.name}>
                  <td
                    scope='row'
                    className='fw-medium d-flex align-items-center'
                  >
                    <img src={el.img} alt={el.name} className='mx-2' />
                    <div>
                      <span>{el.name}</span>
                      <p className='m-0'>ID: {el.ID}</p>
                    </div>
                  </td>
                  <td>{el.subject}</td>
                  <td>{el.classed}</td>

                  <td>
                    <div className='score fw-medium d-flex justify-content-around align-items-center gap-1'>
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1'
                      >
                        <path
                          d='M14.6563 7.14875L11.8375 9.60875L12.6819 13.2712C12.7266 13.4627 12.7138 13.6631 12.6452 13.8474C12.5767 14.0316 12.4553 14.1916 12.2963 14.3072C12.1373 14.4229 11.9477 14.4891 11.7513 14.4976C11.5549 14.5061 11.3603 14.4565 11.1919 14.355L7.99753 12.4175L4.81003 14.355C4.64163 14.4565 4.44706 14.5061 4.25063 14.4976C4.05421 14.4891 3.86465 14.4229 3.70565 14.3072C3.54665 14.1916 3.42527 14.0316 3.35668 13.8474C3.28809 13.6631 3.27534 13.4627 3.32003 13.2712L4.16315 9.6125L1.34378 7.14875C1.19466 7.02014 1.08683 6.85036 1.03381 6.66071C0.980795 6.47107 0.984951 6.26999 1.04576 6.08269C1.10657 5.89539 1.22132 5.73022 1.37562 5.60788C1.52993 5.48554 1.71692 5.41149 1.91315 5.395L5.6294 5.07312L7.08003 1.61312C7.15578 1.43157 7.28356 1.27649 7.44727 1.16741C7.61098 1.05833 7.8033 1.00012 8.00003 1.00012C8.19675 1.00012 8.38907 1.05833 8.55279 1.16741C8.7165 1.27649 8.84427 1.43157 8.92003 1.61312L10.375 5.07312L14.09 5.395C14.2863 5.41149 14.4732 5.48554 14.6276 5.60788C14.7819 5.73022 14.8966 5.89539 14.9574 6.08269C15.0182 6.26999 15.0224 6.47107 14.9694 6.66071C14.9163 6.85036 14.8085 7.02014 14.6594 7.14875H14.6563Z'
                          fill='#FFBB0B'
                        />
                      </svg>
                      {el.score}/5
                    </div>
                  </td>
                  <td>
                    <div className='d-flex justify-content-around align-items-center'>
                      <button className='btn edit d-flex justify-content-center align-items-center fw-medium mr-1'>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M15.9834 5.15878L12.8412 2.01722C12.7367 1.91272 12.6127 1.82983 12.4762 1.77328C12.3397 1.71673 12.1933 1.68762 12.0456 1.68762C11.8978 1.68762 11.7515 1.71673 11.615 1.77328C11.4785 1.82983 11.3545 1.91272 11.25 2.01722L2.57977 10.6875C2.47485 10.7915 2.39167 10.9154 2.33506 11.052C2.27844 11.1885 2.24953 11.3349 2.25001 11.4827V14.625C2.25001 14.9233 2.36853 15.2095 2.57951 15.4204C2.79049 15.6314 3.07664 15.75 3.37501 15.75H15.1875C15.3367 15.75 15.4798 15.6907 15.5853 15.5852C15.6907 15.4797 15.75 15.3366 15.75 15.1875C15.75 15.0383 15.6907 14.8952 15.5853 14.7897C15.4798 14.6842 15.3367 14.625 15.1875 14.625H8.10844L15.9834 6.74995C16.0879 6.64548 16.1708 6.52145 16.2274 6.38494C16.2839 6.24844 16.313 6.10212 16.313 5.95437C16.313 5.80661 16.2839 5.6603 16.2274 5.52379C16.1708 5.38728 16.0879 5.26325 15.9834 5.15878ZM6.51727 14.625H3.37501V11.4827L9.56251 5.29519L12.7048 8.43745L6.51727 14.625ZM13.5 7.64222L10.3584 4.49995L12.0459 2.81245L15.1875 5.95472L13.5 7.64222Z'
                            fill='#446ECB'
                          />
                        </svg>
                        Edit
                      </button>
                      <button className='btn view d-flex justify-content-center align-items-center fw-medium'>
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M17.389 8.77219C17.3644 8.71664 16.7688 7.39547 15.4448 6.07148C13.6807 4.30734 11.4525 3.375 8.99999 3.375C6.54749 3.375 4.31929 4.30734 2.55515 6.07148C1.23117 7.39547 0.632806 8.71875 0.611009 8.77219C0.579026 8.84413 0.5625 8.92198 0.5625 9.0007C0.5625 9.07943 0.579026 9.15728 0.611009 9.22922C0.635618 9.28477 1.23117 10.6052 2.55515 11.9292C4.31929 13.6927 6.54749 14.625 8.99999 14.625C11.4525 14.625 13.6807 13.6927 15.4448 11.9292C16.7688 10.6052 17.3644 9.28477 17.389 9.22922C17.421 9.15728 17.4375 9.07943 17.4375 9.0007C17.4375 8.92198 17.421 8.84413 17.389 8.77219ZM8.99999 13.5C6.83577 13.5 4.94507 12.7132 3.37991 11.1621C2.73771 10.5235 2.19134 9.7952 1.75781 9C2.19123 8.20472 2.73761 7.47645 3.37991 6.83789C4.94507 5.2868 6.83577 4.5 8.99999 4.5C11.1642 4.5 13.0549 5.2868 14.6201 6.83789C15.2635 7.4763 15.8111 8.20457 16.2457 9C15.7387 9.94641 13.5302 13.5 8.99999 13.5ZM8.99999 5.625C8.33248 5.625 7.67996 5.82294 7.12494 6.19379C6.56993 6.56464 6.13734 7.09174 5.8819 7.70844C5.62645 8.32514 5.55962 9.00374 5.68984 9.65843C5.82007 10.3131 6.1415 10.9145 6.61351 11.3865C7.08551 11.8585 7.68688 12.1799 8.34156 12.3102C8.99625 12.4404 9.67485 12.3735 10.2915 12.1181C10.9082 11.8626 11.4354 11.4301 11.8062 10.875C12.1771 10.32 12.375 9.66751 12.375 9C12.3741 8.10518 12.0182 7.24728 11.3855 6.61454C10.7527 5.98181 9.89481 5.62593 8.99999 5.625ZM8.99999 11.25C8.55498 11.25 8.11997 11.118 7.74996 10.8708C7.37995 10.6236 7.09156 10.2722 6.92126 9.86104C6.75097 9.4499 6.70641 8.9975 6.79323 8.56105C6.88004 8.12459 7.09433 7.72368 7.409 7.40901C7.72367 7.09434 8.12458 6.88005 8.56104 6.79323C8.9975 6.70642 9.4499 6.75097 9.86103 6.92127C10.2722 7.09157 10.6236 7.37996 10.8708 7.74997C11.118 8.11998 11.25 8.55499 11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59673 11.25 8.99999 11.25Z'
                            fill='#34CB4C'
                          />
                        </svg>
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan='9999'>
                  <nav
                    aria-label='Page navigation example'
                    className='d-flex justify-content-center align-items-center'
                  >
                    <ul className='pagination m-0'>
                      <li className='page-item'>
                        <a
                          className='page-link border-0 fw-medium'
                          href='#'
                          aria-label='Previous'
                        >
                          <span aria-hidden='true'>&lt;</span>
                        </a>
                      </li>
                      <li className='page-item'>
                        <a
                          className='page-link border-0 active fw-medium'
                          href='#'
                        >
                          1
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link border-0 fw-medium' href='#'>
                          2
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link border-0 fw-medium' href='#'>
                          3
                        </a>
                      </li>

                      <li className='page-item'>
                        <a className='page-link border-0 fw-medium' href='#'>
                          ...
                        </a>
                      </li>

                      <li className='page-item'>
                        <a className='page-link border-0 fw-medium' href='#'>
                          8
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link border-0 fw-medium' href='#'>
                          9
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link border-0 fw-medium' href='#'>
                          10
                        </a>
                      </li>
                      <li className='page-item'>
                        <a
                          className='page-link border-0 fw-medium'
                          href='#'
                          aria-label='Next'
                        >
                          <span aria-hidden='true'>&gt;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div
        className='modal fade'
        id='modal'
        tabIndex='-1'
        aria-labelledby='modalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog m-0 '>
          <div className='modal-content border-0'>
            <div className='modal-header d-flex justify-content-between align-items-center border-0'>
              <h1 className='modal-title fs-5' id='modalLabel'>
                Add New Teacher
              </h1>
              <button
                type='button'
                className='dismiss-btn m-0'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19.2806 18.2194C19.3502 18.2891 19.4055 18.3718 19.4432 18.4629C19.4809 18.5539 19.5003 18.6515 19.5003 18.7501C19.5003 18.8486 19.4809 18.9462 19.4432 19.0372C19.4055 19.1283 19.3502 19.211 19.2806 19.2807C19.2109 19.3504 19.1281 19.4056 19.0371 19.4433C18.9461 19.4811 18.8485 19.5005 18.7499 19.5005C18.6514 19.5005 18.5538 19.4811 18.4628 19.4433C18.3717 19.4056 18.289 19.3504 18.2193 19.2807L11.9999 13.0604L5.78055 19.2807C5.63982 19.4214 5.44895 19.5005 5.24993 19.5005C5.05091 19.5005 4.86003 19.4214 4.7193 19.2807C4.57857 19.1399 4.49951 18.9491 4.49951 18.7501C4.49951 18.551 4.57857 18.3602 4.7193 18.2194L10.9396 12.0001L4.7193 5.78068C4.57857 5.63995 4.49951 5.44907 4.49951 5.25005C4.49951 5.05103 4.57857 4.86016 4.7193 4.71943C4.86003 4.5787 5.05091 4.49963 5.24993 4.49963C5.44895 4.49963 5.63982 4.5787 5.78055 4.71943L11.9999 10.9397L18.2193 4.71943C18.36 4.5787 18.5509 4.49963 18.7499 4.49963C18.949 4.49963 19.1398 4.5787 19.2806 4.71943C19.4213 4.86016 19.5003 5.05103 19.5003 5.25005C19.5003 5.44907 19.4213 5.63995 19.2806 5.78068L13.0602 12.0001L19.2806 18.2194Z'
                    fill='#344054'
                  />
                </svg>
              </button>
            </div>
            <div className='modal-body border-0'>
              <form>
                <div>
                  <div className='d-flex justify-content-center mb-4 position-relative'>
                    <img
                      src={Logo}
                      className='rounded-circle'
                      style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                      }}
                      alt='example placeholder'
                    />
                    <div className='d-flex justify-content-center position-absolute input-label-picture'>
                      <div className='btn btn-primary btn-rounded border-0 bg-transparent'>
                        <label>
                          <svg
                            width='26'
                            height='26'
                            viewBox='0 0 26 26'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <rect
                              x='1'
                              y='1'
                              width='24'
                              height='24'
                              rx='12'
                              fill='#7E3EE5'
                              stroke='#F8F8F8'
                              strokeWidth='2'
                            />
                            <path
                              d='M17.375 9.0625H15.8591L15.1137 7.94469C15.0737 7.88483 15.0197 7.83575 14.9562 7.80179C14.8928 7.76783 14.822 7.75004 14.75 7.75H11.25C11.178 7.75004 11.1072 7.76783 11.0438 7.80179C10.9803 7.83575 10.9263 7.88483 10.8863 7.94469L10.1404 9.0625H8.625C8.2769 9.0625 7.94306 9.20078 7.69692 9.44692C7.45078 9.69306 7.3125 10.0269 7.3125 10.375V16.5C7.3125 16.8481 7.45078 17.1819 7.69692 17.4281C7.94306 17.6742 8.2769 17.8125 8.625 17.8125H17.375C17.7231 17.8125 18.0569 17.6742 18.3031 17.4281C18.5492 17.1819 18.6875 16.8481 18.6875 16.5V10.375C18.6875 10.0269 18.5492 9.69306 18.3031 9.44692C18.0569 9.20078 17.7231 9.0625 17.375 9.0625ZM17.8125 16.5C17.8125 16.616 17.7664 16.7273 17.6844 16.8094C17.6023 16.8914 17.491 16.9375 17.375 16.9375H8.625C8.50897 16.9375 8.39769 16.8914 8.31564 16.8094C8.23359 16.7273 8.1875 16.616 8.1875 16.5V10.375C8.1875 10.259 8.23359 10.1477 8.31564 10.0656C8.39769 9.98359 8.50897 9.9375 8.625 9.9375H10.375C10.447 9.93755 10.518 9.9198 10.5815 9.88584C10.6451 9.85187 10.6992 9.80274 10.7392 9.74281L11.4841 8.625H14.5154L15.2608 9.74281C15.3008 9.80274 15.3549 9.85187 15.4185 9.88584C15.482 9.9198 15.553 9.93755 15.625 9.9375H17.375C17.491 9.9375 17.6023 9.98359 17.6844 10.0656C17.7664 10.1477 17.8125 10.259 17.8125 10.375V16.5ZM13 10.8125C12.5241 10.8125 12.0589 10.9536 11.6632 11.218C11.2675 11.4824 10.959 11.8582 10.7769 12.2979C10.5948 12.7376 10.5471 13.2214 10.64 13.6882C10.7328 14.155 10.962 14.5837 11.2985 14.9202C11.635 15.2567 12.0638 15.4859 12.5306 15.5788C12.9973 15.6716 13.4811 15.624 13.9208 15.4418C14.3605 15.2597 14.7363 14.9513 15.0007 14.5556C15.2651 14.1599 15.4062 13.6947 15.4062 13.2188C15.4055 12.5808 15.1518 11.9692 14.7007 11.5181C14.2496 11.067 13.638 10.8132 13 10.8125ZM13 14.75C12.6971 14.75 12.4011 14.6602 12.1493 14.4919C11.8975 14.3237 11.7012 14.0845 11.5853 13.8047C11.4694 13.5249 11.4391 13.2171 11.4982 12.92C11.5573 12.623 11.7031 12.3501 11.9172 12.136C12.1314 11.9218 12.4042 11.776 12.7013 11.7169C12.9983 11.6578 13.3062 11.6882 13.586 11.8041C13.8658 11.92 14.1049 12.1162 14.2732 12.368C14.4414 12.6198 14.5312 12.9159 14.5312 13.2188C14.5312 13.6249 14.3699 14.0143 14.0828 14.3015C13.7956 14.5887 13.4061 14.75 13 14.75Z'
                              fill='white'
                            />
                          </svg>
                        </label>
                        <input type='file' className='form-control d-none' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <label className='form-label'>First Name</label>
                  <input
                    type='text'
                    className='form-control'
                    aria-describedby='emailHelp'
                    placeholder='Enter your first name here'
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Last Name</label>
                  <input
                    type='text'
                    className='form-control'
                    aria-describedby='emailHelp'
                    placeholder='Enter your last name here'
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    aria-describedby='emailHelp'
                    placeholder='Enter your email here'
                  />
                </div>

                <div className='mb-3 date-birth'>
                  <label className='form-label'>Date of birth</label>
                  <select
                    className='form-select'
                    aria-label='Default select example'
                  >
                    <option defaultValue>Please select date</option>
                  </select>
                </div>

                <div className='mb-3'>
                  <label className='form-label'>Select Subject</label>
                  <select
                    className='form-select'
                    aria-label='Default select example'
                  >
                    <option defaultValue>Please select subject</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
              </form>
            </div>
            <div className='modal-footer border-0 d-flex justify-content-around align-items-center'>
              <button
                type='button'
                className='btn close-modal'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
              <button type='button' className='btn add-modal'>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
