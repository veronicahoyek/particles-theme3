particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffcc00" // Honeycomb color
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 2,
                "color": "#ffcc00"
            },
            "polygon": {
                "nb_sides": 6
            }
        },
        "opacity": {
            "value": 0.9,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 15,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 5,
                "size_min": 10,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#ffcc00",
            "opacity": 0.6,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble" // Clustering effect on hover
            },
            "onclick": {
                "enable": true,
                "mode": "repulse" // Dispersion effect on click
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 300,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 150,
                "size": 30,
                "duration": 2,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
