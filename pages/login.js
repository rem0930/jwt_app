import { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '../utils/auth';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('AAA'); // ここに追加
        try {
            console.log('try'); // ここに追加
            const token = await loginUser(email, password);
            localStorage.setItem('token', token); //ログイン後にトークンを保存
            console.log('Login successful! Token:', token);
            router.push('/profile');
        } catch (error) {
            console.log('errorA'); // ここに追加
            setError('Invalid email or password. Please try again.');
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='email' id='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} required />
                </div>
                <button type='submit'>Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default LoginPage;