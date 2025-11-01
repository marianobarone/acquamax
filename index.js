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
    const logoImg = document.getElementById('logoImg');
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');

        // // Cambia la clase de la imagen para el modo claro
        // logoImg.classList.add('dark');
        // logoImg.classList.remove('light');

        logoImg.src = 'img/logo-dark.png';
    }

    toggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');

            // Cambia la clase de la imagen para el modo claro
            // logoImg.classList.remove('dark');
            // logoImg.classList.add('light');

            logoImg.src = 'img/logo-light.png';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');


            // // Cambia la clase de la imagen para el modo oscuro
            // logoImg.classList.remove('light');
            // logoImg.classList.add('dark');
            logoImg.src = 'img/logo-dark.png';
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

    const form = this;
    const submitButton = document.getElementById('submit-button');
    const submitText = document.getElementById('submit-text');
    const loadingIcon = document.getElementById('loading-icon');
    const alertSuccess = document.getElementById('alert-success');
    const alertWarning = document.getElementById('alert-warning');

    // // Limpia alertas anteriores
    alertSuccess.classList.add('d-none');
    alertWarning.classList.add('d-none');

    if (form.checkValidity()) {
        submitButton.disabled = true; // Deshabilita el botón
        submitText.textContent = ''; // Cambia el texto
        loadingIcon.style.display = 'inline-block'; // Muestra el icono de carga

        // Recoge los datos del formulario
        const formData = {
            name: document.getElementById('inputNome').value,
            email: document.getElementById('exampleInputEmail1').value,
            phone: document.getElementById('inputNumber').value,
            message: document.getElementById('exampleFormControlTextarea1').value,
        };

        // Envía el correo con EmailJS
        emailjs.send('service_golden_test', 'template_golden_test', formData)
            .then(function (response) {
                console.log('Correo enviado con éxito', response.status, response.text);
                // alert('¡Messaggio inviato con successo!');
                // Muestra alerta de éxito
                alertSuccess.classList.remove('d-none');

                setTimeout(() => {
                    alertSuccess.classList.add('fade-out');

                    // Después de 1 segundo, ocultar completamente la alerta (para que no ocupe espacio en el DOM)
                    setTimeout(() => {
                        alertSuccess.classList.add('d-none');
                        alertSuccess.classList.remove('fade-out'); // Elimina la clase para futuras apariciones
                    }, 1000); // Duración de la transición en CSS (1 segundo)
                }, 3000); // Tiempo de espera antes de iniciar el desvanecimiento

                // Resetea el formulario
                form.reset();
                form.classList.remove('was-validated'); // Elimina la validación
                // Restaura el botón
                submitButton.disabled = false; // Habilita el botón
                submitText.textContent = 'Invia'; // Restaura el texto original
                loadingIcon.style.display = 'none'; // Oculta el icono de carga
            }, function (error) {
                // Muestra alerta de advertencia (error)
                alertWarning.classList.remove('d-none');
                submitButton.disabled = false; // Habilita el botón
                submitText.textContent = 'Invia'; // Restaura el texto original
                loadingIcon.style.display = 'none'; // Oculta el icono de carga
                console.log('Error al enviar correo', error);
                // alert("Errore nell'invio del messaggio. Riprova");

                setTimeout(() => {
                    alertWarning.classList.add('fade-out');

                    // Después de 1 segundo, ocultar completamente la alerta
                    setTimeout(() => {
                        alertWarning.classList.add('d-none');
                        alertWarning.classList.remove('fade-out'); // Elimina la clase para futuras apariciones
                    }, 1000);
                }, 3000); // Tiempo de espera antes de iniciar el desvanecimiento
            });
    } else {
        // Si el formulario no es válido, mostrar la validación
        form.classList.add('was-validated');
    }
});

// document.getElementById('form-consulta').addEventListener('submit', function (event) {
//     event.preventDefault(); // Evita el envío por defecto

//     // Recoge los datos del formulario
//     const formData = {
//         name: document.getElementById('inputNome').value,
//         email: document.getElementById('exampleInputEmail1').value,
//         phone: document.getElementById('inputNumber').value,
//         message: document.getElementById('exampleFormControlTextarea1').value,
//     };

//     // Envía el correo
//     emailjs.send('service_golden_test', 'template_golden_test', formData)
//         .then(function (response) {
//             console.log('Correo enviado con éxito', response.status, response.text);
//             alert('¡Messaggio inviato con successo!');

//             const form = document.getElementById('form-consulta');
//             form.classList.remove('was-validated'); // Elimina la validación
//             document.getElementById('inputNome').value = '';
//             document.getElementById('exampleInputEmail1').value = '';
//             document.getElementById('inputNumber').value = '';
//             document.getElementById('exampleFormControlTextarea1').value = '';
//         }, function (error) {
//             console.log('Error al enviar correo', error);
//             alert("Errore nell'invio del messaggio. Riprova");
//         });
// });

