/* eslint-disable react/prop-types */
// src/components/EmployeeForm.js
import  { useState, useEffect } from 'react';
import { createEmployee, getEmployeeById, updateEmployee } from './employeeService';

const EmployeeForm = ({ selectedEmployeeId, onSave }) => {
    const [employee, setEmployee] = useState({ name: '', position: '', salary: '' });

    useEffect(() => {
        if (selectedEmployeeId) {
            getEmployeeById(selectedEmployeeId).then(response => {
                setEmployee(response.data);
            });
        }
    }, [selectedEmployeeId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedEmployeeId) {
            updateEmployee(selectedEmployeeId, employee).then(() => onSave());
        } else {
            createEmployee(employee).then(() => onSave());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Name"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
                    Position
                </label>
                <input
                    type="text"
                    name="position"
                    value={employee.position}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Position"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
                    Salary
                </label>
                <input
                    type="number"
                    name="salary"
                    value={employee.salary}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Salary"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {selectedEmployeeId ? 'Update' : 'Create'}
                </button>
            </div>
        </form>
    );
};

export default EmployeeForm;
