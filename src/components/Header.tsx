"use client";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Transakt
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Pricing
            </a>
            <a href="https://docs.transakt.online" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Docs
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-sm">
              Join Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="https://docs.transakt.online" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-2 py-1"
              >
                Docs
              </a>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Join Early Access
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}