
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
        <Link to={`/module/${module.id}`} className="block transform hover:scale-105 transition-transform duration-200 touch-manipulation">
            <div className="bg-light-primary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden h-full">
                <div className="p-4 sm:p-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-coptic-blue text-coptic-gold dark:bg-coptic-gold dark:text-coptic-blue text-lg sm:text-2xl font-bold">
                            {module.order}
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-coptic-blue dark:text-coptic-gold truncate">{t(module.title)}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ModuleCard;
