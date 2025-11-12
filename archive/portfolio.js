
        // Ukryj scroll indicator po przewinięciu
        window.addEventListener('scroll', () => {
            const indicator = document.querySelector('.scroll-indicator');
            if (window.scrollY > 100) {
                indicator.style.opacity = '0';
            } else {
                indicator.style.opacity = '1';
            }
        });

        // Dodaj interaktywność do kart projektów
        document.querySelectorAll('.project-card, .contact-item').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });
