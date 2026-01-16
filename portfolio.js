
// eyes and its moment using hypot

const iris = document.querySelector('.iris');
        const socket = document.querySelector('.eye');

        document.addEventListener('mousemove', (e)=>{

            const rect = socket.getBoundingClientRect();
            const eyeX = rect.left + rect.width / 2;
            const eyeY = rect.top + rect.height / 2;

            const angle = Math.atan2(e.clientY - eyeY , e.clientX - eyeX );

            const maxdistance = 15;
            const distance = Math.min(Math.hypot(e.clientX - eyeX , e.clientY - eyeY ) / 2 , maxdistance);

            const x = Math.cos(angle) * distance ;
            const y = Math.sin(angle) * distance ;

            iris.style.transform = `translate(${x}px,${y}px)`;

        });

// eyes and its moment using hypot

// designer and developer conveyer belt

        window.addEventListener('load', () => {
            const roller = document.querySelector('.roller');
            setTimeout(() => {
                roller.style.animationPlayState = 'running';
            }, 100);
        });

// designer and developer conveyer belt

// year and copyright element

        document.getElementById("year").innerHTML = new Date().getFullYear();

// year and copyright element