import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-gray-800 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Himanshi Punj</h1>
        <p className="text-lg">
          <Link
            href="https://github.com/Himanshipunj"
            className="text-pink-500 hover:underline"
          >
            GitHub Profile
          </Link>
        </p>
      </div>
    </div>
  );
}
