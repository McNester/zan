document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://vercel-server-login.vercel.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            alert('Login successful');
            window.location.replace('https://zan-wheat.vercel.app/authorization/mainpage/main-page.html');
        } else {
            alert('Login failed: ' + await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
