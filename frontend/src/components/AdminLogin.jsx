import React, { useState } from 'react';
import { Lock, ShieldCheck, ArrowLeft, Key, User, AlertCircle } from 'lucide-react';

export const AdminLogin = ({ onLoginSuccess, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();
      if (data.success && data.token) {
        localStorage.setItem('admin_token', data.token);
        localStorage.setItem('admin_user', JSON.stringify(data.admin));
        if (onLoginSuccess) {
          onLoginSuccess(data.admin);
        }
      } else {
        setError(data.message || 'Invalid admin credentials');
      }
    } catch (err) {
      setError('Connection to backend failed. Please verify server status.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-8 shadow-2xl backdrop-blur-xl transition-colors">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-600/30">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Admin Authentication
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5">
            Host console and question banks are strictly restricted to verified administrators.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/60 flex items-center gap-2.5 text-rose-700 dark:text-rose-300 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
              Admin Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
                autoFocus
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none transition-colors placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
              Admin Password
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-400 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none transition-colors placeholder:text-slate-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-sm shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Log In to Host Console</span>
              </>
            )}
          </button>
        </form>

        {/* Back / Cancel button */}
        {onCancel && (
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700/60 text-center">
            <button
              onClick={onCancel}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Student Portal</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
