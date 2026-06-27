import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({ toasts, dismiss }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} dismiss={dismiss} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function ToastItem({ toast, dismiss }) {
  useEffect(() => {
    const timer = setTimeout(() => dismiss(toast.id), 4000);
    return () => clearTimeout(timer);
  }, [toast.id, dismiss]);

  const isSuccess = toast.type === 'success';

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`pointer-events-auto flex items-start gap-3 px-4 py-3 shadow-xl min-w-[280px] max-w-sm border-l-4 bg-white ${
        isSuccess ? 'border-teal-600' : 'border-red-500'
      }`}
      role="alert"
    >
      <span className={`text-lg mt-0.5 font-bold ${isSuccess ? 'text-teal-600' : 'text-red-500'}`}>
        {isSuccess ? '✓' : '✕'}
      </span>
      <div className="flex-1">
        <p className={`font-semibold font-body text-sm ${isSuccess ? 'text-teal-700' : 'text-red-600'}`}>
          {toast.title}
        </p>
        {toast.message && (
          <p className="text-slate-500 text-xs mt-0.5">{toast.message}</p>
        )}
      </div>
      <button
        onClick={() => dismiss(toast.id)}
        className="text-slate-400 hover:text-slate-600 transition-colors text-xs mt-0.5"
        aria-label="Dismiss notification"
      >
        ✕
      </button>
    </motion.div>
  );
}
