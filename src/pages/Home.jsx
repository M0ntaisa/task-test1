export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Heading Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-wide sm:text-5xl">
          Welcome to <span className="text-blue-500">MyApp</span>
        </h1>
        <p className="text-lg text-gray-300 sm:text-xl">
          Discover the best movies and TV series!
        </p>

        {/* Call to Action */}
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
