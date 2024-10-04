document.addEventListener("DOMContentLoaded", () => { // Cambié "style2" a "DOMContentLoaded"
    const fondo = document.querySelector(".fondo");
    const loginlink = document.querySelector(".login-link");
    const registrarlink = document.querySelector(".registrar-link");
    const btn = document.querySelector(".btn");
    const iconocerrar = document.querySelector(".icono-cerrar");
    

    // Cuando el usuario hace clic en el link de registrar, se activa la clase 'active'
    registrarlink.addEventListener("click", () => {
        fondo.classList.add('active');
    });

    // Cuando el usuario hace clic en el link de login, se desactiva la clase 'active'
    loginlink.addEventListener("click", () => {
        fondo.classList.remove('active');        
        ;
    });

    // Al hacer clic en el botón de inicio de sesión, se activa la clase 'active-btn'
    btn.addEventListener("click", () => {
        fondo.classList.add('active-btn');
        
    });

    // Al hacer clic en el icono de cerrar, se desactiva la clase 'active-btn'
    iconocerrar.addEventListener("click", () => {
        fondo.classList.remove('active-btn');
    });
});
