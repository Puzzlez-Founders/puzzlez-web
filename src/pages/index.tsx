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
      <div
        className={`min-h-screen flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-blue-100 via-white to-gray-100 relative overflow-hidden`}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 opacity-10">
          {[...Array(16)].map((_, index) => (
            <div
              key={index}
              className="w-24 h-24 bg-white border rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg rotate-12"
            />
          ))}
        </div>

        {/* Main Content */}
        <h1 className="text-6xl text-center text-purple-600 font-bold drop-shadow-lg z-10">
          Puzzlez.in
        </h1>
        <p className="text-lg text-gray-700 mt-4 text-center z-10 max-w-3xl">
          Empowering businesses with cutting-edge digital solutions. From mobile
          apps to web platforms, we bring your ideas to life with innovation,
          precision, and passion.
        </p>

        {/* Features Section */}
        <div className="mt-12 z-10 flex flex-col items-center gap-8">
          {/* Call-to-Action */}
          <button className="px-8 py-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition">
            Get a Free Consultation
          </button>
        </div>

        {/* Footer Decorative Pieces */}
        <div className="absolute bottom-8 left-8 w-16 h-16 bg-yellow-300 rounded-[50%_50%_0_0/50%_50%_0_0] shadow-lg rotate-6 z-0"></div>
        <div className="absolute bottom-4 right-12 w-20 h-20 bg-blue-300 rounded-[0_0_50%_50%/0_0_50%_50%] shadow-lg rotate-12 z-0"></div>
      </div>
    </div>
  );
};


export default Home;