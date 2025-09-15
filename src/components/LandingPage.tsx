import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Zap, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav className="space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Sign Up</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-3xl px-4">
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Revolutionize Your Workflow
          </h2>
          <p className="text-xl mb-8 opacity-90">
            A powerful solution to streamline your tasks and boost productivity.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md text-center">
            <Rocket className="mx-auto h-12 w-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold mb-3">Blazing Fast</h4>
            <p className="text-muted-foreground">
              Experience unparalleled speed and efficiency in all your operations.
            </p>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md text-center">
            <Zap className="mx-auto h-12 w-12 text-purple-500 mb-4" />
            <h4 className="text-xl font-semibold mb-3">Intuitive Design</h4>
            <p className="text-muted-foreground">
              A user-friendly interface that makes complex tasks simple and enjoyable.
            </p>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md text-center">
            <Shield className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <h4 className="text-xl font-semibold mb-3">Secure & Reliable</h4>
            <p className="text-muted-foreground">
              Your data is safe with us, backed by robust security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-secondary text-secondary-foreground py-16 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-6">Ready to get started?</h3>
          <p className="text-lg mb-8">
            Join thousands of satisfied users and transform your experience today.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;