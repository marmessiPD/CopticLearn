
import React from 'react';
import { Link } from 'react-router-dom';
import { Module } from '../types';
import { useAppContext } from '../context/AppContext';

interface ModuleCardProps {
    module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
    const { t } = useAppContext();
    
    return (
        <Link to={`/module/${module.id}`} className="block transform hover:scale-105 transition-transform duration-200">
            <div className="bg-light-primary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden h-full">
                <div className="p-6">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-coptic-blue text-coptic-gold dark:bg-coptic-gold dark:text-coptic-blue text-2xl font-bold">
                            {module.order}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-coptic-blue dark:text-coptic-gold">{t(module.title)}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ModuleCard;
