import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import AadhaarCard from './components/AadhaarCard';

function App() {
    const [userData, setUserData] = useState(null);

    return (
        <div className="App">
            <header className="bg-indigo-600 text-white text-center py-4">
                <h1 className="text-3xl font-bold">Aadhaar Registration System</h1>
            </header>
            <main className="p-4">
                {!userData ? (
                    <RegistrationForm setUserData={setUserData} />
                ) : (
                    <AadhaarCard userData={userData} />
                )}
            </main>
        </div>
    );
}

export default App;
