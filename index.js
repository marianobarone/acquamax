$(document).ready(function () {

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
});