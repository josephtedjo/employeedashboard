import {useState} from "react";
import mockData from '../dashboard-mock-data.json';
import LeaveRequest from "../components/LeaveRequest";
import Requestlist from "../components/RequestList";
import LeaveSummary from "../components/LeaveSummary";

interface LeaveRequestItems {
  id: string;
  employeeId: string;
  employeeName: string;
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
}

export default function Dashboard() {

const [requests, setRequests] = useState<LeaveRequestItems[]>(mockData.leaveRequests);

  const handleAddRequest = (newRequest: { type: string; startDate: string; endDate: string; reason: string }) => {

    const formattedRequest: LeaveRequestItems = {
      id: `lr-${Date.now()}`,
      employeeId: mockData.currentUser.id,
      employeeName: mockData.currentUser.name,
      type: newRequest.type.charAt(0).toUpperCase() + newRequest.type.slice(1), // e.g. "annual" -> "Annual"
      startDate: newRequest.startDate,
      endDate: newRequest.endDate,
      reason: newRequest.reason,
      status: "pending",
    };
    
    // Add the new request to the top of the list
    setRequests((prevRequests) => [formattedRequest, ...prevRequests]);
  };

  return (
      <div>
          <LeaveSummary pendingCount={requests.filter(r => r.status.toLowerCase() === "pending").length} />   
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-8 mt-4">
          {/* The Form */}
          <LeaveRequest onSubmit={handleAddRequest} className="mx-0" />   
          {/* The List of Requests */}
          <Requestlist request={requests}/>
    </div>   

      </div>
  );
}
