import React, { useEffect, useState } from 'react';
import { X, Trash2, Download } from 'lucide-react';
import { StudentInquiry, TutorApplication } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [students, setStudents] = useState<StudentInquiry[]>([]);
  const [tutors, setTutors] = useState<TutorApplication[]>([]);
  const [activeTab, setActiveTab] = useState<'students' | 'tutors'>('students');

  useEffect(() => {
    if (isOpen) {
      const storedStudents = localStorage.getItem('foresight_students');
      const storedTutors = localStorage.getItem('foresight_tutors');
      
      if (storedStudents) setStudents(JSON.parse(storedStudents));
      if (storedTutors) setTutors(JSON.parse(storedTutors));
    }
  }, [isOpen]);

  const deleteStudent = (id: number) => {
    const updated = students.filter(s => s.id !== id);
    setStudents(updated);
    localStorage.setItem('foresight_students', JSON.stringify(updated));
  };

  const deleteTutor = (id: number) => {
    const updated = tutors.filter(t => t.id !== id);
    setTutors(updated);
    localStorage.setItem('foresight_tutors', JSON.stringify(updated));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-gray-900 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
            <p className="text-sm text-gray-500">View local inquiries stored in this browser.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('students')}
            className={`flex-1 py-4 text-sm font-medium text-center ${activeTab === 'students' ? 'text-brand-600 border-b-2 border-brand-600 bg-brand-50' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Student Inquiries ({students.length})
          </button>
          <button 
            onClick={() => setActiveTab('tutors')}
            className={`flex-1 py-4 text-sm font-medium text-center ${activeTab === 'tutors' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Tutor Applications ({tutors.length})
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {activeTab === 'students' ? (
            <div className="overflow-x-auto">
              {students.length === 0 ? (
                <div className="text-center py-12 text-gray-500">No student inquiries found.</div>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class/Board</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((s) => (
                      <tr key={s.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{s.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{s.studentName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{s.parentName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{s.classCategory} ({s.board})</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{s.mobile}</div>
                          <div className="text-xs truncate max-w-[150px]">{s.address}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button onClick={() => deleteStudent(s.id)} className="text-red-600 hover:text-red-900">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              {tutors.length === 0 ? (
                <div className="text-center py-12 text-gray-500">No tutor applications found.</div>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Areas</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tutors.map((t) => (
                      <tr key={t.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t.fullName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.qualification}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.experience}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate">{t.areas}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button onClick={() => deleteTutor(t.id)} className="text-red-600 hover:text-red-900">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;