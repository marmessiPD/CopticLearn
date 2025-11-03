
import React from 'react';
import { MODULES } from '../constants/data';
import ModuleCard from '../components/ModuleCard';

const HomePage: React.FC = () => {
    const modules = Object.values(MODULES).sort((a, b) => a.order - b.order);
    
    // Debug logging
    console.log('Total modules loaded:', modules.length);
    console.log('Module IDs:', modules.map(m => m.id));
    console.log('MODULES object:', MODULES);

    return (
        <div className="container mx-auto px-2 sm:px-4">
            <div className="mb-4 p-2 bg-yellow-100 dark:bg-yellow-900 rounded">
                <p className="text-sm">Debug: {modules.length} modules loaded</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {modules.map(module => (
                    <ModuleCard key={module.id} module={module} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
