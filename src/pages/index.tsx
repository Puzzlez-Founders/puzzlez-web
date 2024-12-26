import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeGrid from "./components/EmployeeGrid";

const Home = () => {
  const [employees, setEmployees] = useState<
    { name: string; position: string }[]
  >([]);

  const fetchEmployees = async () => {
    const response = await fetch("/api/employees");
    const data = await response.json();
    setEmployees(data);
  };

  const handleSubmit = async (data: { name: string; position: string }) => {
    await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
      <div>
        <h1>Employee Details</h1>
        <EmployeeForm onSubmit={handleSubmit} />
        <EmployeeGrid employees={employees} />
      </div>
  );
};

export default Home;
