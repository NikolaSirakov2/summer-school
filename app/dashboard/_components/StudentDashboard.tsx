import React from "react";
import { schoolSubjects } from "../../../data/schoolSubjects";
import Link from "next/link";

interface StudentDashboardProps {
  grade: string;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ grade }) => {
  const gradeInfo = schoolSubjects.find((g) => g.grade === grade);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-around lg:ml-10">
      {gradeInfo &&
        gradeInfo.subjects.map((subject) => (
          <Link
            href={{
              pathname: "/dashboard/subject",
              query: { 
                grade: grade,
                subject: subject.id,
               },
            }}
          >
            <div
              className="lg:w-[15vw] lg:h-[40vh] m-2 border border-gray-300 rounded-lg shadow-lg flex flex-col items-center text-center mt-8 mb-6 hover:scale-110 transition-transform duration-400"
            >
              <img
                src={subject.image}
                alt={subject.name}
                className="w-full h-3/4 object-cover rounded-t-lg"
              />
              <div className="p-2">
                <h2 className="text-xl font-semibold">{subject.name}</h2>
                <p className="text-gray-700">{subject.teacher}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default StudentDashboard;
