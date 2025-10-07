import { useState, useRef, useCallback } from 'react';

interface TouchGestureOptions {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
    threshold?: number;
    preventDefault?: boolean;
}

interface TouchPosition {
    x: number;
    y: number;
}

export const useTouchGestures = (options: TouchGestureOptions = {}) => {
    const {
        onSwipeLeft,
        onSwipeRight,
        onSwipeUp,
        onSwipeDown,
        threshold = 50,
        preventDefault = true
    } = options;

    const [touchStart, setTouchStart] = useState<TouchPosition | null>(null);
    const [touchEnd, setTouchEnd] = useState<TouchPosition | null>(null);
    const elementRef = useRef<HTMLElement>(null);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (preventDefault) {
            e.preventDefault();
        }
        const touch = e.touches[0];
        setTouchStart({ x: touch.clientX, y: touch.clientY });
        setTouchEnd(null);
    }, [preventDefault]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (preventDefault) {
            e.preventDefault();
        }
        const touch = e.touches[0];
        setTouchEnd({ x: touch.clientX, y: touch.clientY });
    }, [preventDefault]);

    const handleTouchEnd = useCallback(() => {
        if (!touchStart || !touchEnd) return;

        const deltaX = touchStart.x - touchEnd.x;
        const deltaY = touchStart.y - touchEnd.y;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        // Determine if it's a horizontal or vertical swipe
        if (absDeltaX > absDeltaY) {
            // Horizontal swipe
            if (absDeltaX > threshold) {
                if (deltaX > 0 && onSwipeLeft) {
                    onSwipeLeft();
                } else if (deltaX < 0 && onSwipeRight) {
                    onSwipeRight();
                }
            }
        } else {
            // Vertical swipe
            if (absDeltaY > threshold) {
                if (deltaY > 0 && onSwipeUp) {
                    onSwipeUp();
                } else if (deltaY < 0 && onSwipeDown) {
                    onSwipeDown();
                }
            }
        }

        setTouchStart(null);
        setTouchEnd(null);
    }, [touchStart, touchEnd, threshold, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

    const attachTouchListeners = useCallback((element: HTMLElement) => {
        element.addEventListener('touchstart', handleTouchStart, { passive: !preventDefault });
        element.addEventListener('touchmove', handleTouchMove, { passive: !preventDefault });
        element.addEventListener('touchend', handleTouchEnd, { passive: !preventDefault });
    }, [handleTouchStart, handleTouchMove, handleTouchEnd, preventDefault]);

    const detachTouchListeners = useCallback((element: HTMLElement) => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
    }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

    return {
        elementRef,
        attachTouchListeners,
        detachTouchListeners,
        touchStart,
        touchEnd
    };
};
