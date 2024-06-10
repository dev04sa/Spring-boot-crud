import { useEffect, useState } from "react";
import { getAllEmployees } from "./employeeService";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";


const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        getAllEmployees().then(response => {
            setEmployees(response.data);
        });
    };

    const handleEdit = (id) => {
        setSelectedEmployeeId(id);
    };

    const handleSave = () => {
        fetchEmployees();
        setSelectedEmployeeId(null);
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-center">
                <div className="w-full max-w-lg">
                    <EmployeeForm selectedEmployeeId={selectedEmployeeId} onSave={handleSave} />
                    <EmployeeList employees={employees} onEdit={handleEdit} onDelete={fetchEmployees} />
                </div>
            </div>
        </div>
    );
};

export default Employee;
