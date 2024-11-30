import React from 'react';
import { Bitcoin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4">
            <Bitcoin className="w-6 h-6 text-orange-500" />
            <span className="text-lg font-semibold text-white">Bitcoin Investment Calculator</span>
          </div>
          <p className="text-gray-400 text-center text-sm">
            © {new Date().getFullYear()} Bitcoin Investment Calculator. All rights reserved.
            <br />
            Past performance does not guarantee future results. E-mail:{' '}
            <a href="mailto:kim@betz.dk" className="text-orange-500 hover:text-orange-400">
              kim@betz.dk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}