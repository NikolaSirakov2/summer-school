'use client';
import React from 'react';
import { schoolSubjects } from '@/data/schoolSubjects';

const subjects: {
  id: number;
  name: string;
  image: string;
  teacher: string;
  homework: string;
}[] = [];

const Card = ({ subject }: { subject: { id: number; name: string; homework: string } }) => (
  <div className="border-2 shadow-xl rounded-xl p-4 flex flex-col m-4 hover:bg-gray-200">
    <span className='text-2xl font-bold mb-4'>{subject.name}</span>
    <span>{subject.homework}</span>
  </div>
);

const HomeworksDashboard = () => {
  const studentGrade = localStorage.getItem('grade');
  const subjects = schoolSubjects.find(subject => subject.grade === studentGrade)?.subjects;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {subjects && subjects.map(subject => (
        <Card key={subject.id} subject={subject} />
      ))}
    </div>
  );
}

export default HomeworksDashboard;