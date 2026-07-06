import data from "../dashboard-mock-data.json"

export default function WeeklyAbsence() {
    return (
        <div className="mx-8 mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">Weekly Absence</h2>
            <div className="flex flex-row flex-wrap gap-4">
                {data.attendanceThisWeek.map((day) => (
                    <div 
                        key={day.day} 
                        className={`flex flex-col items-center justify-center p-4  capitalize ${
                            day.status === 'present' ? 'bg-green-100 dark:bg-green-200' : 
                            day.status === 'late' ? 'bg-yellow-100 dark:bg-yellow-200' : 
                            day.status === 'absent' ? 'bg-red-100 dark:bg-red-200' : 'bg-gray-100 dark:bg-gray-200' } 
                            rounded-xl shadow-md min-w-[100px] flex-1 hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 dark:border-white/5`}>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{day.day}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${
                            day.status === 'present' ? 'text-green-800 dark:text-green-800' :
                            day.status === 'late' ? 'text-yellow-800 dark:text-yellow-800' :
                            'text-gray-800 dark:text-gray-400'
                        }`}>
                            {day.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
