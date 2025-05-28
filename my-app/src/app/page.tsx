'use client';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Amazing Apps Faster
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Modern tools and components to accelerate your development process
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
                Get Started
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
                Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to build modern web applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card 
                title="Modern UI" 
                description="Clean design with Tailwind CSS" 
              />
              <Card 
                title="Type-Safe" 
                description="TypeScript for better code quality" 
              />
              <Card 
                title="Responsive" 
                description="Works on all devices" 
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
