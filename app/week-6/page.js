import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6 bg-dark bg-pink-300 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
