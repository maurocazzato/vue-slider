
// Partendo dallo starter pack dello zip che vi passo, rifare lo slider ma questa volta usando Vue.

// creo funzione data con all'interno gli elementi degli slides.
const app = Vue.createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    alt: 'Spiderman',
                    title: 'Spiderman',
                    description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    alt: 'Ratchet & Clank: Rift Apart',
                    title: 'Ratchet & Clank: Rift Apart',
                    description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    alt: 'Fortnite',
                    title: 'Fortnite',
                    description: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    alt: 'Stray',
                    title: 'Stray',
                    description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    alt: "Marvel's Avengers",
                    title: "Marvel's Avengers",
                    description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
            currentIndex: 0
            
        };
    },
    // funzione per cambiare slide
    methods: {
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        changeSlide(index) {
            this.currentIndex = index;
        },
        // funzione per cambiare slide ogni 3 secondi
        // StartaOutoplay e StopAutoplay per gestire l'avvio e l'arresto di Autoplay.
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.nextSlide();
            }, 3000); 
        },
        stopAutoplay() {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    },
    mounted() {
        // Start autoplay 
        this.startAutoplay();
    },
    beforeDestroy() {
        // Stop autoplay quanndo viene interrotto
        this.stopAutoplay();
    }
});
app.mount('#app');
