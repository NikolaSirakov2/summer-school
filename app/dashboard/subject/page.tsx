'use client';
import React from "react";
import { useSearchParams } from "next/navigation";
import { schoolSubjects } from "../../../data/schoolSubjects";

const SubjectDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const grade = searchParams.get('grade');
  const subjectId = searchParams.get('subject');

  const gradeData = schoolSubjects.find(g => g.grade === grade);
  const subjectData = gradeData?.subjects.find(s => s.id.toString() === subjectId);

  return (
    <div className="flex flex-col lg:flex-row">
      {subjectData ? (
        <>
          <div className="w-full lg:w-[40vw] h-[85vh] ml-10 mt-10">
            <img src={subjectData.image} alt={subjectData.name} className="w-full h-full object-cover rounded-xl shadow-lg" />
          </div>
          <div className="flex-1 p-4 ml-10 mt-10">
            <h1 className="text-4xl font-bold">{subjectData.name}</h1>
            <h3 className="text-2xl mt-4">{subjectData.teacher}</h3>
            <div className="mt-8">
              <h4 className="text-lg font-semibold">Оценки:</h4>
              <p>5, 4, 6</p>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold">Задачи за домашна работа:</h4>
              <p>{subjectData.homework}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SubjectDetails;