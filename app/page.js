import Link from "next/link";
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <p className="mb-2">
          Link to week 2:{" "}
          <a href="week-2" className="text-pink-500 hover:underline">
            Week 2
          </a>
        </p>
        <p className="mb-2">
          Link to week 3:{" "}
          <a href="week-3" className="text-pink-500 hover:underline">
            Week 3
          </a>
        </p>
        <p className="mb-2">
          Link to week 4:{" "}
          <a href="week-4" className="text-pink-500 hover:underline">
            Week 4
          </a>
        </p>
        <p className="mb-2">
          Link to week 5:{" "}
          <a href="week-5" className="text-pink-500 hover:underline">
            Week 5
          </a>
        </p>
        <p className="mb-2">
          Link to week 6:{" "}
          <a href="week-6" className="text-pink-500 hover:underline">
            Week 6
          </a>
        </p>
      </div>
    </div>
  );
}
