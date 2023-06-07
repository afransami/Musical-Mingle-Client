import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        className="pl-10 pr-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
              <FaEyeSlash></FaEyeSlash>          
          // <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          // </svg>
        ) : (
          <FaEye></FaEye>
          // <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.071 4.929c-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142zm-1.414 1.414c2.828 2.828 2.828 7.43 0 10.243-2.828 2.828-7.43 2.828-10.243 0-2.828-2.828-2.828-7.43 0-10.243 2.828-2.828 7.43-2.828 10.243 0z" />
          // </svg>
        )}
      </button>
    </div>
  );
};

export default PasswordToggle;
