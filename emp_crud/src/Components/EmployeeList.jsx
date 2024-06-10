/* eslint-disable react/prop-types */
// src/components/EmployeeList.js
import { deleteEmployee } from './employeeService';

const EmployeeList = ({ employees, onEdit, onDelete }) => {

    const handleDelete = (id) => {
        deleteEmployee(id).then(() => onDelete());
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id} className="flex justify-between items-center mb-2">
                        <span>{employee.name} - {employee.position} - ${employee.salary}</span>
                        <div>
                            <button
                                onClick={() => onEdit(employee.id)}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(employee.id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
