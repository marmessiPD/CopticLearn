
import React from 'react';
import { MODULES } from '../constants/data';
import ModuleCard from '../components/ModuleCard';

const HomePage: React.FC = () => {
    const modules = Object.values(MODULES).sort((a, b) => a.order - b.order);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map(module => (
                    <ModuleCard key={module.id} module={module} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
