let isLoggedIn = false; 

    const authSection = document.getElementById("auth-options");

    function updateAuthOptions() {
        if (isLoggedIn) {
            authSection.innerHTML = `<option value="">Logout</option>`;
        } else {
            authSection.innerHTML = `
                <option value="">Login</option>
                <option value="">Register</option>
            `;
        }
    }

    updateAuthOptions()