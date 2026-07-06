import './App.css'
import mockData from './dashboard-mock-data.json';
import LeavePage from './pages/Dashboard';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';



function App() {

  const [isDark, setIsDark] = useState<boolean>(false);
  const [query, setQuery] = useState('');


  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark])


    return (
    <div className='flex flex-row bg-[#F5F5F5] h-full w-screen mx-auto dark:bg-[#1A1A1A]'>
      <div className="mx-4 my-2 w-full">
        <div className='flex flex-row'>
          <div className='grid mt-4'>
            <h1 className="text-4xl font-bold text-start pl-8 text-black dark:text-white">
              Hello, {mockData.currentUser.name}
            </h1>
            <p className="text-start pl-8 text-gray-400 dark:text-gray-600 mb-8">
              Here's your current summary
            </p>
            <div className='flex flex-row items-center gap-2 ml-6 px-4 py-2 rounded-lg font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm transition-all duration-200 hover:scale-105 gap-4' >
            <Search className='text-gray-400 dark:text-gray-600 text-sm'/>
            <input type="search" value={query} onChange={(i) => setQuery(i.target.value)} placeholder="Search employee name" />
          </div>
          </div>
          <div className="absolute top-4 right-8">
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-4 py-2 rounded-lg font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm transition-all duration-200 hover:scale-105"
        >
          {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
        </div>
      <LeavePage />   
    </div>

    </div>
  )

  }
 


export default App
