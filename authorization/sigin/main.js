function handleResponse(responseCode) {
    var responseContainer = document.getElementById('responseContainer');
    var responseText = document.getElementById('responseText');

    var inf = "";
    if (responseCode === 403) {
        inf = "Email или Пароль некорректны"
    }
    if (responseCode === 401) {
        inf = "Пользователь уже существует"
    }
    responseText.innerText = inf;

    // First, make the div visible in the layout
    responseContainer.style.display = 'flex';

    setTimeout(() => {
        responseContainer.style.opacity = '1';

        setTimeout(() => {
            responseContainer.style.opacity = '0';
        }, 2000); 
    }, 100); 
}

//SPINNER START
function startSpinner(){
    var spinnerContainer = document.getElementById('spinnerContainer');

    spinnerContainer.style.opacity = '1';

}
function stopSpinner(){
    var spinnerContainer = document.getElementById('spinnerContainer');
    spinnerContainer.style.opacity = '0';

}
//SPINNER END




document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    startSpinner();
    try {
        const response = await fetch('https://vercel-server-iota-murex.vercel.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        stopSpinner();
        if (response.ok) {
            console.log('User registered');
            window.location.replace('https://zan-wheat.vercel.app/authorization/mainpage/main-page.html');
        } else {
            console.error('Registration failed');
            handleResponse(response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});




/*document.getElementById('loginForm').addEventListener('submit', async function(event) {
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
*/