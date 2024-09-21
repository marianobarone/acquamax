$(document).ready(function () {

    (function () {
        emailjs.init("xJMClN6ORiLd-82a8"); // Reemplaza con tu USER ID
    })();

    var currentYear = new Date().getFullYear();
    $('#webYear').text(currentYear);

    // const themeToggleBtn = document.getElementById('theme-toggle');
    // let currentTheme = localStorage.getItem('theme') || 'light';

    // document.documentElement.setAttribute('data-theme', currentTheme);

    // themeToggleBtn.addEventListener('click', () => {
    //   const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    //   document.documentElement.setAttribute('data-theme', newTheme);
    //   localStorage.setItem('theme', newTheme);
    // });

    // document.addEventListener('DOMContentLoaded', () => {
    //     const themeToggleBtn = document.getElementById('theme-toggle');
    //     let currentTheme = localStorage.getItem('theme') || 'light';

    //     document.documentElement.setAttribute('data-theme', currentTheme);
    //     themeToggleBtn.textContent = currentTheme === 'light' ? 'Tema Oscuro' : 'Tema Claro';

    //     themeToggleBtn.addEventListener('click', () => {
    //         currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    //         document.documentElement.setAttribute('data-theme', currentTheme);
    //         localStorage.setItem('theme', currentTheme);
    //         themeToggleBtn.textContent = currentTheme === 'light' ? 'Tema Oscuro' : 'Tema Claro';
    //     });
    // });




    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });



});

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    toggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });

    var forms = document.querySelectorAll('.needs-validation');

    // Activa la validación en cada formulario
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Oculta la validación después de 10 segundos
            setTimeout(() => {
                form.classList.remove('was-validated');
            }, 5000); // 10000 ms = 10 segundos

            form.classList.add('was-validated');
        }, false);
    });
});

document.getElementById('form-consulta').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío por defecto

    // Recoge los datos del formulario
    const formData = {
        name: document.getElementById('inputNome').value,
        email: document.getElementById('exampleInputEmail1').value,
        phone: document.getElementById('inputNumber').value,
        message: document.getElementById('exampleFormControlTextarea1').value,
    };

    // Envía el correo
    emailjs.send('service_golden_test', 'template_golden_test', formData)
        .then(function (response) {
            console.log('Correo enviado con éxito', response.status, response.text);
            alert('¡Mensaje enviado con éxito!');

            const form = document.getElementById('form-consulta');
            form.classList.remove('was-validated'); // Elimina la validación
            document.getElementById('inputNome').value = '';
            document.getElementById('exampleInputEmail1').value = '';
            document.getElementById('inputNumber').value = '';
            document.getElementById('exampleFormControlTextarea1').value = '';
        }, function (error) {
            console.log('Error al enviar correo', error);
            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
        });
});

