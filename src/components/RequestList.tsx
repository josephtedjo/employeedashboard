interface requestListProps {
    request: ListRequest[];
}

interface ListRequest {
    id: string;
    employeeName: string;
    type: string;
    startDate: string;
    endDate: string;
  reason: string;
  status: string;
}


export default function Requestlist({request}: requestListProps) {
 return (
            <div className="flex flex-col gap-4 p-6 bg-[#F0F0F0] dark:bg-[#2A2A2A] rounded-xl shadow-lg mt-4">
              <h2 className="text-xl font-semibold text-black dark:text-white">Leave Requests</h2>
              <div className="flex flex-col gap-3 overflow-y-auto max-h-[300px] pr-2">
                {request.map((req) => (
                  <div 
                    key={req.id} 
                    className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-white/5 flex flex-col gap-1"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-teal-600 dark:text-teal-400">{req.type} Leave</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                        req.status === 'approved' ? 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200' :
                        req.status === 'rejected' ? 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200'
                      }`}>
                        {req.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {req.startDate} to {req.endDate}
                    </div>
                    {req.reason && (
                      <div className="text-sm italic text-gray-600 dark:text-gray-300 mt-1">
                        "{req.reason}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
    
 )
}