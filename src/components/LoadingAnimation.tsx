
import React from 'react';
import { Loader } from 'lucide-react';

interface LoadingAnimationProps {
  isLoading: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center flex-col">
      <div className="mb-4">
        <Loader className="h-12 w-12 text-school-blue animate-spin" />
      </div>
      <div className="text-xl font-display font-medium text-school-blue-dark">
        <span className="animate-pulse">Loading Smart Avenues...</span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
