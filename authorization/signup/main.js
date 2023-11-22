document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://vercel-server-iota-murex.vercel.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            console.log('User registered');
            window.location.replace('https://zan-wheat.vercel.app/authorization/mainpage/main-page.html');
        } else {
            console.error('Registration failed');
            console.log(response)
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
