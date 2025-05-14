import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const data = {
  labels: ['Books', 'Orders', 'Users'],
  datasets: [
    {
      label: 'Statistics',
      data: [150, 80, 45],
      backgroundColor: '#4E71FF',
      borderRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const userData = {
  labels: ['Admin', 'Seller', 'Customer'],
  datasets: [
    {
      label: 'User Roles',
      data: [2, 5, 43],
      backgroundColor: ['#4E71FF', '#36A2EB', '#FF6384'],
      borderWidth: 1,
    },
  ],
};

const AdminProfile = () => {
  return (
    <div className="mx-auto px-4 py-6 md:py-10 max-w-4xl">
      <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>
      <div className="flex flex-col items-center justify-center gap-6 mt-6">
        <div className="bg-base-100 p-4 rounded-lg shadow w-full md:w-1/2">
          <Bar data={data} options={options} />
        </div>
        <div className="bg-base-100 p-4 rounded-lg shadow w-full md:w-2/5">
          <Pie data={userData}/>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;