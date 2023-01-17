import React from 'react';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-2 flex justify-between">
            <div className="flex items-center">
                <a href="/" className="text-white font-bold">Your Brand</a>
            </div>
            <div className="flex items-center">
                <a href="/" className="text-white mr-4">Home</a>
                <a href="/" className="text-white mr-4">About</a>
                <a href="/" className="text-white mr-4">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
