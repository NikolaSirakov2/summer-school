'use client';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { schoolSubjects } from "../../../data/schoolSubjects";

const SubjectDetails: React.FC = () => {
  const [role, setRole] = useState<string | null>('');
  const searchParams = useSearchParams();
  const grade = searchParams.get('grade');
  const subjectId = searchParams.get('subject');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  const gradeData = schoolSubjects.find(g => g.grade === grade);
  const subjectData = gradeData?.subjects.find(s => s.id.toString() === subjectId);

  return (
    <div className="relative flex flex-col lg:flex-row">
      {subjectData ? (
        <>
          <div className="w-full lg:w-[40vw] h-[85vh] ml-10 mt-10">
            <img src={subjectData.image} alt={subjectData.name} className="w-full h-full object-cover rounded-xl shadow-lg" />
          </div>
          <div className="flex-1 p-4 ml-10 mt-10">
            <h1 className="text-4xl font-bold">{subjectData.name}</h1>
            <h3 className="text-2xl mt-4">{subjectData.teacher}</h3>
            <div className="mt-8 lg:w-1/2 border rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold m-4">Оценки:</h4>
              <p className="m-4">5, 4, 6</p>
            </div>
            <div className="mt-8 lg:w-1/2 border rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold m-4">Задачи за домашна работа:</h4>
              <p className="m-4">{subjectData.homework}</p>
            </div>
            {role === 'parent' && (
              <div className="mt-8 lg:w-1/2 border rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold m-4">Бележки:</h4>
                <p className="m-4">Тук учителя може да добави бележки за вашето дете.</p>
              </div>
            )}
          </div>
          <div className="absolute bottom-4 right-4 lg:w-[20vw]">
            <img src="/boy-girl.webp" alt="Additional Image" className="w-full h-full object-cover" />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SubjectDetails;