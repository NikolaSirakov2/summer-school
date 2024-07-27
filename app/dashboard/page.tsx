'use client';
import React, { useEffect, useState } from "react";
import ParentDashboard from "./_components/ParentDashboard";
import StudentDashboard from "./_components/StudentDashboard";
import TeacherDashboard from "./_components/TeacherDashboard";

function Dashboard() {
  const [role, setRole] = useState<string | null>('');
  const [grade, setGrade] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedGrade = localStorage.getItem('grade');
    console.error(storedRole, storedGrade);
    setRole(storedRole);
    setGrade(storedGrade);
  }, []);

  const renderDashboard = () => {
    switch (role) {
      case 'teacher':
        return <TeacherDashboard />;
      case 'parent':
        return <ParentDashboard />;
      case 'student':
        return <StudentDashboard grade={grade || ''} />;
      default:
        return <div></div>;
    }
  };

  return (
    <>
    <div>
      {renderDashboard()}
    </div>
    </>
  );
}

export default Dashboard;