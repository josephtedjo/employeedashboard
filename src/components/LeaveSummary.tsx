import FloatingContainerSummary from "./FloatingContainerSummary";
import mockData from "../dashboard-mock-data.json";
import WeeklyAbsence from "./WeeklyAbsence";

interface LeaveSummaryProps {
  pendingCount: number;
}

export default function LeaveSummary({ pendingCount }: LeaveSummaryProps) {
  return (
    <div className="flex flex-row mx-8 mt-4 bg-[#F0F0F0] dark:bg-[#2A2A2A] rounded-lg py-4 px-4 items-center justify-center gap-12">
      <WeeklyAbsence />
      <FloatingContainerSummary title="Annual Leave Left" description="days" num={mockData.leaveSummary.annualLeaveTotal}/>
      <FloatingContainerSummary title="Sick Leave Used" description="days" num={mockData.leaveSummary.sickLeaveUsed}/>
      <FloatingContainerSummary title="Pending Request" description="" num={pendingCount}/>
    </div>
  );
}