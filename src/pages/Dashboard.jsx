import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Teacher1 from '../assets/img/teacher1.png';
import Teacher2 from '../assets/img/teacher2.png';
import Teacher3 from '../assets/img/teacher3.png';
import Teacher4 from '../assets/img/teacher4.png';
import Teacher5 from '../assets/img/teacher5.png';
import Teacher6 from '../assets/img/teacher6.png';
import './Dashboard.css';

const Dashboard = () => {
  const data = [
    {
      name: 'Jan',
      Present: 70,
      Absent: 30,
    },
    {
      name: 'Feb',
      Present: 78,
      Absent: 22,
    },
    {
      name: 'Mar',
      Present: 70,
      Absent: 50,
    },
    {
      name: 'Apr',
      Present: 95,
      Absent: 20,
    },
    {
      name: 'May',
      Present: 70,
      Absent: 52,
    },
    {
      name: 'Jun',
      Present: 78,
      Absent: 60,
    },
  ];

  const performerData = [
    {
      name: 'Class 11',
      Present: 79,
    },
    {
      name: 'Class 05',
      Present: 75,
    },
    {
      name: 'Class 01',
      Present: 70,
    },
    {
      name: 'Class 07',
      Present: 60,
    },
    {
      name: 'Class 12',
      Present: 50,
    },
  ];

  const ratedTeachers = [
    {
      img: Teacher1,
      name: 'Theresa Webb',
      subject: 'Mathemathics',
      grade: 4.9,
    },
    {
      img: Teacher2,
      name: 'Ronald Richards',
      subject: 'English',
      grade: 4.8,
    },
    {
      img: Teacher3,
      name: 'Ralph Edwards',
      subject: 'Arabic',
      grade: 4.8,
    },
    {
      img: Teacher4,
      name: 'Annette Black',
      subject: 'History',
      grade: 4.7,
    },
    {
      img: Teacher5,
      name: 'Jane Cooper',
      subject: 'Geography',
      grade: 4.7,
    },
    {
      img: Teacher6,
      name: 'Leslie Alexander',
      subject: 'English',
      grade: 4.6,
    },
  ];

  const ratedStudents = [
    {
      img: Teacher1,
      name: 'Kathryn Murphy',
      reward: 95,
      grade: 9.8,
      absences: 12,
    },
    {
      img: Teacher2,
      name: 'Darrell Steward',
      reward: 92,
      grade: 9.6,
      absences: 16,
    },
    {
      img: Teacher3,
      name: 'Arlene McCoy',
      reward: 89,
      grade: 9.2,
      absences: 20,
    },
    {
      img: Teacher4,
      name: 'Eleanor Pena',
      reward: 85,
      grade: 8.9,
      absences: 28,
    },
    {
      img: Teacher5,
      name: 'Guy Hawkins',
      reward: 82,
      grade: 8.7,
      absences: 32,
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip'>
          {payload.map((el) => (
            <div
              className='d-flex flex-direction-column align-items-center justify-content-center gap-1'
              key={el.name}
            >
              <div
                style={{
                  background: el.fill,
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                }}
              />
              <p className='label m-0'>{el.value}%</p>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className='w-100 p-5 h-100' id='dashboard'>
      <h1 className='title'>Dashboard</h1>
      <div className='container-fluid'>
        <div className='row gap-5 mb-5'>
          <div className='col-7 d-flex flex-column gap-5'>
            <div className='row gap-5'>
              <div className='total col d-flex justify-content-evenly align-items-center p-3 py-4'>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='20' cy='20' r='20' fill='white' />
                  <path
                    d='M28.4674 13.8478L20.2174 11.0978C20.0763 11.0507 19.9237 11.0507 19.7826 11.0978L11.5326 13.8478C11.3957 13.8934 11.2766 13.981 11.1923 14.098C11.1079 14.2151 11.0625 14.3558 11.0625 14.5001V21.3751C11.0625 21.5574 11.1349 21.7323 11.2639 21.8612C11.3928 21.9901 11.5677 22.0626 11.75 22.0626C11.9323 22.0626 12.1072 21.9901 12.2361 21.8612C12.3651 21.7323 12.4375 21.5574 12.4375 21.3751V15.454L15.3241 16.4156C14.5572 17.6546 14.3133 19.1474 14.646 20.5661C14.9788 21.9848 15.8609 23.2135 17.0987 23.9824C15.5519 24.5891 14.2147 25.6865 13.2367 27.187C13.1859 27.2626 13.1505 27.3475 13.1328 27.4369C13.115 27.5263 13.1152 27.6183 13.1334 27.7076C13.1515 27.7969 13.1872 27.8817 13.2384 27.957C13.2896 28.0324 13.3552 28.0969 13.4315 28.1466C13.5079 28.1964 13.5933 28.2305 13.6829 28.247C13.7725 28.2634 13.8645 28.2619 13.9535 28.2425C14.0426 28.2231 14.1268 28.1862 14.2015 28.134C14.2761 28.0817 14.3396 28.0151 14.3883 27.9381C15.6834 25.9512 17.7287 24.8126 20 24.8126C22.2713 24.8126 24.3166 25.9512 25.6117 27.9381C25.7126 28.088 25.8683 28.1921 26.0453 28.2281C26.2224 28.264 26.4064 28.2288 26.5577 28.1302C26.709 28.0315 26.8154 27.8772 26.8539 27.7007C26.8923 27.5242 26.8598 27.3397 26.7633 27.187C25.7853 25.6865 24.443 24.5891 22.9012 23.9824C24.1379 23.2136 25.0192 21.9857 25.3519 20.568C25.6846 19.1503 25.4414 17.6586 24.6759 16.4199L28.4674 15.1566C28.6043 15.111 28.7234 15.0235 28.8078 14.9064C28.8922 14.7893 28.9377 14.6487 28.9377 14.5043C28.9377 14.36 28.8922 14.2194 28.8078 14.1023C28.7234 13.9852 28.6043 13.8977 28.4674 13.8521V13.8478ZM24.125 19.3126C24.1252 19.9647 23.9707 20.6076 23.6744 21.1885C23.378 21.7694 22.9481 22.2717 22.4199 22.6543C21.8918 23.0369 21.2805 23.2888 20.6362 23.3894C19.9918 23.4899 19.3328 23.4363 18.7132 23.2329C18.0936 23.0294 17.5311 22.682 17.0718 22.2191C16.6124 21.7561 16.2694 21.1909 16.0709 20.5697C15.8723 19.9485 15.8238 19.2891 15.9295 18.6456C16.0351 18.0021 16.2918 17.3927 16.6785 16.8676L19.7826 17.8989C19.9237 17.9459 20.0763 17.9459 20.2174 17.8989L23.3215 16.8676C23.8438 17.5758 24.1254 18.4326 24.125 19.3126Z'
                    fill='#7E3EE5'
                  />
                </svg>
                <div className='d-flex flex-column gap-3'>
                  <h2 className='fw-medium m-0'>Total Students</h2>
                  <p className='m-0 fw-semibold'>3350</p>
                </div>
              </div>
              <div className='total col d-flex justify-content-evenly align-items-center p-3'>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='20' cy='20' r='20' fill='white' />
                  <path
                    d='M27.5625 12.4375H12.4375C12.0728 12.4375 11.7231 12.5824 11.4652 12.8402C11.2074 13.0981 11.0625 13.4478 11.0625 13.8125V26.1875C11.0625 26.5522 11.2074 26.9019 11.4652 27.1598C11.7231 27.4176 12.0728 27.5625 12.4375 27.5625H13.5882C13.7183 27.5625 13.8458 27.5257 13.9558 27.4561C14.0657 27.3866 14.1537 27.2873 14.2095 27.1698C14.5438 26.4639 15.0717 25.8675 15.7316 25.4499C16.3916 25.0322 17.1565 24.8105 17.9375 24.8105C18.7185 24.8105 19.4834 25.0322 20.1434 25.4499C20.8033 25.8675 21.3312 26.4639 21.6655 27.1698C21.7213 27.2873 21.8093 27.3866 21.9192 27.4561C22.0292 27.5257 22.1567 27.5625 22.2868 27.5625H27.5625C27.9272 27.5625 28.2769 27.4176 28.5348 27.1598C28.7926 26.9019 28.9375 26.5522 28.9375 26.1875V13.8125C28.9375 13.4478 28.7926 13.0981 28.5348 12.8402C28.2769 12.5824 27.9272 12.4375 27.5625 12.4375ZM17.9375 23.4375C17.3936 23.4375 16.8619 23.2762 16.4097 22.974C15.9574 22.6719 15.605 22.2424 15.3968 21.7399C15.1887 21.2374 15.1342 20.6844 15.2403 20.151C15.3464 19.6176 15.6084 19.1276 15.993 18.743C16.3776 18.3584 16.8676 18.0964 17.401 17.9903C17.9344 17.8842 18.4874 17.9387 18.9899 18.1468C19.4924 18.355 19.9219 18.7074 20.224 19.1597C20.5262 19.6119 20.6875 20.1436 20.6875 20.6875C20.6875 21.4168 20.3978 22.1163 19.882 22.632C19.3663 23.1478 18.6668 23.4375 17.9375 23.4375ZM27.5625 26.1875H22.701C22.4013 25.6707 22.0193 25.2063 21.5701 24.8125H25.5C25.6823 24.8125 25.8572 24.7401 25.9861 24.6111C26.1151 24.4822 26.1875 24.3073 26.1875 24.125V15.875C26.1875 15.6927 26.1151 15.5178 25.9861 15.3889C25.8572 15.2599 25.6823 15.1875 25.5 15.1875H14.5C14.3177 15.1875 14.1428 15.2599 14.0139 15.3889C13.8849 15.5178 13.8125 15.6927 13.8125 15.875V24.125C13.8124 24.2775 13.863 24.4256 13.9564 24.5462C14.0497 24.6668 14.1805 24.7529 14.3281 24.791C13.8685 25.1892 13.4785 25.6612 13.174 26.1875H12.4375V13.8125H27.5625V26.1875Z'
                    fill='#7E3EE5'
                  />
                </svg>
                <div className='d-flex flex-column gap-3'>
                  <h2 className='fw-medium m-0'>Total Teachers</h2>
                  <p className='m-0 fw-semibold'>165</p>
                </div>
              </div>
              <div className='total col d-flex justify-content-evenly align-items-center p-3'>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='20' cy='20' r='20' fill='white' />
                  <path
                    d='M20.3656 19.2306L21.4279 19.272L20.4733 21.3012L20.8884 24.4709C20.8884 24.4709 24.0246 19.7201 23.9764 19.6818C25.3335 20.3097 27.5546 24.6251 27.555 26.7651V29.979C27.555 30.6948 27.3756 30.6555 26.6244 30.6555L12.9306 30.6553C12.1795 30.6555 12 30.6948 12 29.979V26.7705C12 24.5265 14.3754 20.2426 15.5781 19.6818C15.5299 19.7201 18.666 24.4709 18.666 24.4709L19.0812 21.3012L18.1498 19.2834C19.4812 19.2166 18.7428 19.2406 20.3656 19.2306ZM19.7775 10C17.4583 10 15.5781 11.8802 15.5781 14.1995C15.5781 16.5187 17.4583 18.3989 19.7775 18.3989C22.0968 18.3989 23.9769 16.5187 23.9769 14.1995C23.9769 11.8802 22.0968 10.0001 19.7775 10Z'
                    fill='#7E3EE5'
                  />
                </svg>
                <div className='d-flex flex-column gap-3'>
                  <h2 className='fw-medium m-0'>Total Parents</h2>
                  <p className='m-0 fw-semibold'>1450</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 attendance'>
                <form className='custom-form'>
                  <select
                    className='form-select'
                    aria-label='Default select example'
                  >
                    <option defaultValue>Last 6 months</option>
                    <option value='1'>Last 3 months</option>
                    <option value='2'>Last 2 months</option>
                  </select>
                  <select
                    className='form-select'
                    aria-label='Default select example'
                  >
                    <option defaultValue>Class room 5</option>
                    <option value='1'>Class room 1</option>
                    <option value='2'>Class room 2</option>
                    <option value='3'>Class room 3</option>
                  </select>
                </form>

                <ResponsiveContainer minWidth={700} minHeight={500}>
                  <BarChart width={800} height={500} data={data}>
                    <CartesianGrid strokeDasharray='3 3' vertical={false} />
                    <Legend verticalAlign='top' height={36} iconType='circle' />
                    <XAxis dataKey='name' tickSize={0} tickMargin={15} />
                    <YAxis
                      tickSize={0}
                      axisLine={false}
                      tickMargin={15}
                      label={{
                        value: `Attendance`,
                        position: 'insideTopRight',
                        offset: -30,
                        fill: '#344054',
                      }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Bar
                      dataKey='Present'
                      fill='#7E3EE5'
                      maxBarSize={35}
                      radius={4}
                    />
                    <Bar
                      dataKey='Absent'
                      fill='#FFC42B'
                      maxBarSize={35}
                      radius={4}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className='top-right-column col-4 d-flex flex-column justify-content-between p-3'>
            <div className='d-flex justify-content-between align-items-center w-100 mb-3'>
              <h2 className='fw-semibold m-0'>Top Rated Teachers</h2>
              <form>
                <select className='form-select border-0 p-0'>
                  <option defaultValue>See all</option>
                  <option value='1'>See latest</option>
                </select>
              </form>
            </div>

            {ratedTeachers.map((el) => (
              <div
                key={el.name}
                className='teachers d-flex justify-content-between pb-3'
              >
                <img src={el.img} alt={el.name} />
                <div className='d-flex flex-column gap-2'>
                  <p className='m-0'>{el.name}</p>
                  <span>Subject: {el.subject}</span>
                </div>
                <div>
                  <div className='rating fw-medium d-flex justify-content-around align-items-center gap-1'>
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
                    {el.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='row gap-5'>
          <div className='students col-5 p-4'>
            <h2 className='mb-3 fw-semibold'>Top 5 Students</h2>

            <table className='table table-borderless m-0'>
              <thead>
                <tr>
                  <th scope='col' className='fw-medium'>
                    Student
                  </th>
                  <th scope='col' className='fw-medium'>
                    Grade
                  </th>
                  <th scope='col' className='fw-medium'>
                    Reward (%)
                  </th>
                  <th scope='col' className='fw-medium'>
                    Absences
                  </th>
                </tr>
              </thead>
              <tbody>
                {ratedStudents.map((el) => (
                  <tr key={el.name}>
                    <td
                      scope='row'
                      className='fw-medium d-flex align-items-center'
                    >
                      <img src={el.img} alt={el.name} className='mx-2' />
                      <span>{el.name}</span>
                    </td>
                    <td className='grade'>{el.grade}</td>
                    <td>{el.reward}%</td>
                    <td>{el.absences}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='performers col-6 p-4 d-flex flex-column'>
            <div className='d-flex justify-content-between align-items-center w-100'>
              <h2 className='mb-3 fw-semibold'>Top Performer Classrooms</h2>
              <form>
                <select className='form-select border-0 p-0'>
                  <option defaultValue>See all</option>
                  <option value='1'>See latest</option>
                </select>
              </form>
            </div>
            <ResponsiveContainer minWidth={400} minHeight={400}>
              <BarChart width={400} height={400} data={performerData}>
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <XAxis
                  dataKey='name'
                  tickSize={0}
                  tickMargin={15}
                  domain={[0, 100]}
                />
                <YAxis
                  tickSize={0}
                  axisLine={false}
                  tickMargin={15}
                  domain={[0, 100]}
                />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Bar
                  dataKey='Present'
                  fill='#3671F4'
                  maxBarSize={35}
                  radius={4}
                  background={{ fill: '#E3EAF9' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
