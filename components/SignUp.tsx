import React, { useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { Button } from './ui/Button';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

interface SignUpProps {
    onBack: () => void;
    onLogin: () => void;
    onRegisterSuccess: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onBack, onLogin, onRegisterSuccess }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulating API call success
        setTimeout(() => {
            onRegisterSuccess();
        }, 500);
    };

    return (
        <AuthLayout 
            title="Create Account" 
            subtitle="Start spending your crypto instantly" 
            onBack={onBack}
        >
            <form className="space-y-4" onSubmit={handleSubmit}>
                 <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 ml-1">Full Name</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                        </div>
                        <input
                            type="text"
                            required
                            className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 ml-1">Email Address</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                        </div>
                        <input
                            type="email"
                            required
                            className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
                            placeholder="name@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300 ml-1">Password</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            className="block w-full pl-10 pr-10 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
                            placeholder="Create a strong password"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                        >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                <div className="flex items-start gap-2 mt-2">
                    <input type="checkbox" required className="mt-1 rounded bg-white/10 border-white/20 text-brand-500 focus:ring-brand-500" />
                    <p className="text-xs text-slate-400 leading-tight">
                        I agree to the <a href="#" className="text-brand-400 hover:underline">Terms of Service</a> and <a href="#" className="text-brand-400 hover:underline">Privacy Policy</a>.
                    </p>
                </div>

                <div className="pt-2">
                    <Button type="submit" className="w-full shadow-lg shadow-brand-500/20" variant="secondary" size="lg">
                        Create Account
                    </Button>
                </div>
            </form>

            <p className="mt-8 text-center text-sm text-slate-400">
                Already have an account?{' '}
                <button onClick={onLogin} className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
                    Log In
                </button>
            </p>
        </AuthLayout>
    )
}