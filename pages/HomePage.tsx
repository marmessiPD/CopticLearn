
import React from 'react';
import { MODULES } from '../constants/data';
import ModuleCard from '../components/ModuleCard';

const HomePage: React.FC = () => {
    const modules = Object.values(MODULES).sort((a, b) => a.order - b.order);

    return (
        <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {modules.map(module => (
                    <ModuleCard key={module.id} module={module} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
