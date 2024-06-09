import React from 'react';

const AadhaarCard = ({ userData }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden my-10 border border-gray-300">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Aadhaar Card</h2>
                <div className="mb-4">
                    <img src="https://via.placeholder.com/150" alt="User Avatar" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                    <p className="text-sm text-gray-600"><strong>UID:</strong> {userData.uid}</p>
                    <p className="text-sm text-gray-600"><strong>Name:</strong> {userData.name}</p>
                    <p className="text-sm text-gray-600"><strong>Father's Name:</strong> {userData.fatherName}</p>
                    <p className="text-sm text-gray-600"><strong>Date of Birth:</strong> {userData.dob}</p>
                    <p className="text-sm text-gray-600"><strong>Address:</strong> {userData.address}</p>
                    <p className="text-sm text-gray-600"><strong>Locality:</strong> {userData.locality}</p>
                    <p className="text-sm text-gray-600"><strong>Pin Code:</strong> {userData.pinCode}</p>
                    <p className="text-sm text-gray-600"><strong>State:</strong> {userData.state}</p>
                    <p className="text-sm text-gray-600"><strong>Contact:</strong> {userData.contact}</p>
                </div>
            </div>
        </div>
    );
};

export default AadhaarCard;
