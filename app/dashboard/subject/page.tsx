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
    <div>
      {subjectData ? (
        <>
          <h1>{subjectData.name}</h1>
          <p>{subjectData.teacher}</p>
          <img src={subjectData.image} alt={subjectData.name} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SubjectDetails;