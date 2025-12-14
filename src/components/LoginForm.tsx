import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        console.log("Submitting login", { username, password });

        // Accept any username/password - no validation needed for portfolio demo
        if (username.trim() && password.trim()) {
            // Navigate directly to dashboard
            navigate('/dashboard');
        } else {
            setError('Please enter both username and password');
        }
    };

    return (
        <div className={styles.loginContainer}>
            {/* Form header */}
            <div className={styles.formHeader}>
                <h2 className={styles.title}>
                    Welcome Back
                </h2>
                <p className={styles.subtitle}>
                    Sign in to continue your journey
                </p>
                 <p className={styles.subtitle}>
                    Enter Any Username/Password for Demo!
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                {/* Username Input */}
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <div className={styles.icon}>
                        ✉
                    </div>
                </div>

                {/* Password Input */}
                <div className={styles.inputContainer}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <div className={styles.icon}>
                        🔒
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className={styles.errorMessage}>
                        {error}
                    </div>
                )}

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className={styles.submitButton}
                >
                    Sign In
                </button>

            </form>
        </div>
    );
};

export default LoginForm;
