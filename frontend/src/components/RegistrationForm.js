import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ setUserData }) => {
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        dob: '',
        address: '',
        locality: '',
        pinCode: '',
        state: '',
        contact: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/generate-uid');
            setUserData({ ...formData, uid: response.data.uid });
        } catch (error) {
            console.error("There was an error generating the UID!", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Aadhaar Registration Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {['name', 'fatherName', 'dob', 'address', 'locality', 'pinCode', 'state', 'contact'].map((field) => (
                        <div key={field}>
                            <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                            <input
                                type="text"
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                    ))}
                    <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
