const loginUser = async (email, password) => {
    console.log('Login info:', { email, password });

    try {
        const response = await fetch('http://127.0.0.1:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Login failed');
        }
        const data = await response.json();
        return data.token;
    } catch (error) {
        throw new Error(error.message || 'Login failed');
    }
};

export { loginUser };