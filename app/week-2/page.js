import StudentInfo from "./student-info.js";
export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Shopping List</h1>
      <StudentInfo />
    </main>
  );
}

  