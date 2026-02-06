
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

// circle dots

        const wrapper = document.getElementById('tick-wrapper');
        const totalTicks = 60; // Number of small lines around the circle

        for (let i = 0; i < totalTicks; i++) {
            const tick = document.createElement('div');
            tick.className = 'tick';
            
            // Calculate rotation
            const degrees = i * (360 / totalTicks);
            tick.style.transform = `rotate(${degrees}deg)`;

            // Make every 15th tick a "major" tick
            

            wrapper.appendChild(tick);
        }

// circle dots

// play pause btn

        const audio = document.getElementById("myAudio");
        const btn = document.getElementById("playPauseBtn");
        const icon = document.getElementById("icon");

        btn.addEventListener("click", () => {
            if (audio.paused) {
                // Restart song every time play is clicked
                audio.currentTime = 0; 
                audio.play();
                
                // Switch icon to Pause
                icon.classList.remove("fa-play");
                icon.classList.add("fa-pause");
                // Remove the left margin used for the play button
                icon.style.marginLeft = "0px";
            } else {
                audio.pause();
                
                // Switch icon to Play
                icon.classList.remove("fa-pause");
                icon.classList.add("fa-play");
                // Add left margin back to visually center the triangle
                icon.style.marginLeft = "5px";
            }
        });

        // Reset icon if song finishes
        audio.onended = () => {
            icon.classList.replace("fa-pause", "fa-play");
            icon.style.marginLeft = "5px";
        };

// play pause btn

        const closePortal = () => {
            portal.classList.remove('active');
            backdrop.classList.remove('active');
            body.classList.remove('no-scroll');
        };

        closeBtn.addEventListener('click', closePortal);
        backdrop.addEventListener('click', closePortal);

