// Configura la fecha objetivo: 28 de Junio de este año a las 00:00:00
const currentYear = new Date().getFullYear();
const targetDate = new Date(`June 28, ${currentYear} 00:00:00`).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Si la fecha ya pasó
    if (difference < 0) {
        document.querySelector('.countdown').classList.add('hidden');
        document.getElementById('expired-message').classList.remove('hidden');
        clearInterval(countdownInterval);
        return;
    }

    // Cálculos de tiempo para días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Insertar los resultados en el HTML, asegurando dos dígitos (ej: 05 en vez de 5)
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

// Ejecutar la función inmediatamente para evitar el retraso de 1 segundo al cargar
updateCountdown();

// Actualizar el contador cada 1 segundo (1000 milisegundos)
const countdownInterval = setInterval(updateCountdown, 1000);