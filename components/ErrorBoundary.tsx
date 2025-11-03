import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AppContext } from '../context/AppContext';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <AppContext.Consumer>
          {(context) => (
            <ErrorFallback
              error={this.state.error}
              resetError={() => this.setState({ hasError: false, error: null })}
              t={context?.t || ((s: { de: string; en: string; ar: string }) => s.en)}
            />
          )}
        </AppContext.Consumer>
      );
    }

    // Use React.Fragment to ensure context propagation
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

interface ErrorFallbackProps {
  error: Error | null;
  resetError: () => void;
  t: (localeString: { de: string; en: string; ar: string }) => string;
}

function ErrorFallback({ error, resetError, t }: ErrorFallbackProps) {
  return (
    <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-xl sm:text-2xl font-bold text-coptic-blue dark:text-coptic-gold mb-4">
          {t({
            de: 'Ein Fehler ist aufgetreten',
            en: 'An error occurred',
            ar: 'حدث خطأ',
          })}
        </h2>
        {error && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {error.message || error.toString()}
          </p>
        )}
        <button
          onClick={resetError}
          className="px-4 py-2 bg-coptic-blue text-white rounded-lg hover:bg-opacity-80 dark:bg-coptic-gold dark:text-coptic-blue"
        >
          {t({
            de: 'Erneut versuchen',
            en: 'Try again',
            ar: 'حاول مرة أخرى',
          })}
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;

