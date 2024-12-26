interface EmployeeGridProps {
    employees: { name: string; position: string }[];
  }
  
  const EmployeeGrid: React.FC<EmployeeGridProps> = ({ employees }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default EmployeeGrid;
  