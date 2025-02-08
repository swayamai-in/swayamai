export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Company Name */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-wider text-gray-700 dark:text-gray-300">
              COMPANY NAME
            </h2>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Coming Soon
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We're crafting something amazing for you. Our new website is under construction 
            and will be ready soon. Stay tuned for updates!
          </p>

          {/* Email Subscription */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-8 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              Notify Me
            </button>
          </div>

          {/* Launch Timer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {[
              { value: "14", label: "Days" },
              { value: "09", label: "Hours" },
              { value: "43", label: "Minutes" },
              { value: "17", label: "Seconds" }
            ].map((item) => (
              <div key={item.label} className="p-4">
                <div className="text-3xl font-bold text-blue-500">{item.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
            Twitter
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
            Instagram
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          © 2025 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}