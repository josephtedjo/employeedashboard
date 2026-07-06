import React, { useState } from "react";

interface LeaveRequestData {
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
}

interface LeaveRequestProps {
  onSubmit?: (data: LeaveRequestData) => void;
  className?: string;
}

export default function LeaveRequest({ onSubmit, className = "" }: LeaveRequestProps) {
  const [form, setForm] = useState<LeaveRequestData>({
    type: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents page refresh
    if (!form.type || !form.startDate || !form.endDate) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Send form data up to the parent component
    if (onSubmit) {
      onSubmit(form);
    }

    // Reset form fields
    setForm({
      type: "",
      startDate: "",
      endDate: "",
      reason: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 p-6 bg-[#F0F0F0] dark:bg-[#2A2A2A] rounded-xl shadow-lg mx-8 mt-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-4">Request Leave</h2>

      {/* Dropdown */}
      <select name="type" value={form.type} onChange={handleChange} className="border border-gray-300 dark:border-white/10 rounded-lg p-4 h-[50px] bg-white dark:bg-zinc-800">
        <option value="">Select leave type</option>
        <option value="annual">Annual Leave</option>
        <option value="sick">Sick Leave</option>
      </select>

      {/* Date inputs */}
      <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="border border-gray-300 dark:border-white/10 rounded-lg p-2 bg-white dark:bg-zinc-800" />
      <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className="border border-gray-300 dark:border-white/10 rounded-lg p-2 bg-white dark:bg-zinc-800" />

      {/* Textarea */}
      <textarea name="reason" value={form.reason} onChange={handleChange} placeholder="Reason..." className="border border-gray-300 dark:border-white/10 rounded-lg p-2 bg-white dark:bg-zinc-800" />

      <button type="submit" className="text-gray-500 bg-white dark:bg-zinc-600 dark:text-white rounded-lg py-2 hover:text-white dark:hover:text-gray-400 dark:hover:bg-zinc-700 transition transform duration-300 ease-in-out">
        Submit
      </button>
    </form>
  );
}
