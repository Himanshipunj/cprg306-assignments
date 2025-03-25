"use client";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Welcome to Your Shopping List!</h1>
      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login with GitHub
        </button>
      ) : (
        <div className="mt-4 text-center">
          <p className="text-lg">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={firebaseSignOut}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
          <button
            onClick={() => router.push("/shopping-list")}
            className="mt-2 ml-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Go to Shopping List
          </button>
        </div>
      )}
    </div>
  );
}
