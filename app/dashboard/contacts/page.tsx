import React from 'react';
import { users } from '../../../data/users';

function Contacts() {
  const teachers = users.filter(user => user.role === 'teacher');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Контакти</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teachers.map(teacher => (
          <div key={teacher.id} className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img src={teacher.photo} alt={`${teacher.firstName} ${teacher.lastName}`} className="w-24 h-24 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold">{teacher.firstName} {teacher.lastName}</h2>
            <p className="text-gray-600">{teacher.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;