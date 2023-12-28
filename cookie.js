// Función para obtener el valor de una cookie por nombre
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

// Función para crear una nueva cookie con nombre, valor y duración en días
function createCookie(name, value, days) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expires.toUTCString()}`;
    document.cookie = cookie;
}

// Función para eliminar una cookie por nombre
function deleteCookie(name) {
    document.cookie = `${encodeURIComponent(name)}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

// Imprimir el valor de document.cookie inicialmente en blanco
console.log('Initial document.cookie:', document.cookie);

// Crear una nueva cookie llamada 'exampleCookie' con valor 'exampleValue' que caduca en 7 días
createCookie('exampleCookie', 'exampleValue', 7);

// Mostrar document.cookie después de crear la cookie
console.log('Document.cookie after creating a cookie:', document.cookie);

// Eliminar la cookie por nombre 'exampleCookie'
deleteCookie('exampleCookie');

// Mostrar document.cookie después de eliminar la cookie
console.log('Document.cookie after deleting a cookie:', document.cookie);