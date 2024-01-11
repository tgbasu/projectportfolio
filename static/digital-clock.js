
        function updateDigitalClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const digitalClock = document.getElementById('digital-clock');
            digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
        }

        // Update the digital clock every second
        setInterval(updateDigitalClock, 1000);

        // Initial update when the page loads
        updateDigitalClock();
