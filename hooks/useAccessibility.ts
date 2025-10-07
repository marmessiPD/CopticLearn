import { useEffect } from 'react';

interface AccessibilityOptions {
    announceSlideChange?: boolean;
    announceNavigation?: boolean;
    highContrast?: boolean;
    reducedMotion?: boolean;
}

export const useAccessibility = (options: AccessibilityOptions = {}) => {
    const {
        announceSlideChange = true,
        announceNavigation = true,
        highContrast = false,
        reducedMotion = false
    } = options;

    useEffect(() => {
        // Apply accessibility preferences
        const root = document.documentElement;
        
        if (highContrast) {
            root.classList.add('high-contrast');
        } else {
            root.classList.remove('high-contrast');
        }
        
        if (reducedMotion) {
            root.classList.add('reduce-motion');
        } else {
            root.classList.remove('reduce-motion');
        }
    }, [highContrast, reducedMotion]);

    const announceToScreenReader = (message: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        // Remove after announcement
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    };

    const announceSlideChange = (slideNumber: number, totalSlides: number, slideTitle: string) => {
        if (announceSlideChange) {
            announceToScreenReader(`Slide ${slideNumber} of ${totalSlides}: ${slideTitle}`);
        }
    };

    const announceNavigation = (direction: 'next' | 'previous') => {
        if (announceNavigation) {
            announceToScreenReader(`Navigated ${direction}`);
        }
    };

    const announceQuizStart = (quizTitle: string) => {
        announceToScreenReader(`Starting quiz: ${quizTitle}`);
    };

    const announceQuizComplete = (score: number, total: number) => {
        announceToScreenReader(`Quiz completed. Score: ${score} out of ${total}`);
    };

    return {
        announceSlideChange,
        announceNavigation,
        announceQuizStart,
        announceQuizComplete,
        announceToScreenReader
    };
};
