'use client';
import React from 'react';
import { schoolSubjects } from '@/data/schoolSubjects';
import { Button } from '@/components/ui/button';

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
    <Button className="mt-4">Предай домашно</Button>
  </div>
);

const HomeworksDashboard = () => {
  const studentGrade = localStorage.getItem('grade');
  const subjects = schoolSubjects.find(subject => subject.grade === studentGrade)?.subjects;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-4 gap-4">
      {subjects && subjects.map((subject, index) => (
        <div
          key={subject.id}
        >
          <Card subject={subject} />
        </div>
      ))}
      <div className="hidden lg:flex lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-3 justify-center items-center">
        <img src="/school-boy.avif" alt="Additional Image" className="lg:w-[25vw] object-cover" />
      </div>
    </div>
  );
}

export default HomeworksDashboard;