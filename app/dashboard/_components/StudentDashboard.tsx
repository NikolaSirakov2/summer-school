import React from 'react';
import { grades } from '../../../data/schoolSubjects';

interface StudentDashboardProps {
  grade: string;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ grade }) => {
  const gradeInfo = grades.find(g => g.grade === grade);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Grade: {grade}</p>
      {gradeInfo && <p>{gradeInfo.subjects.map(subject => subject.name).join(', ')}</p>}
    </div>
  );
};

export default StudentDashboard;