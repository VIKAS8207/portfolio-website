
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

// circle tick wraper

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
// circle tick wraper

// music play btn

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

// music play btn

// portal overlay open and close

        const openBtn = document.getElementById('portal-overlay-btn');
        const closeBtn = document.getElementById('closeBtn');
        const portal = document.getElementById('portal');
        const backdrop = document.getElementById('backdrop');
        const body = document.body;

        openBtn.addEventListener('click', () => {
            portal.classList.add('active');
            backdrop.classList.add('active');
            body.classList.add('no-scroll');
        });

        // Clicking the close button OR the backdrop will close the portal
        const closePortal = () => {
            portal.classList.remove('active');
            backdrop.classList.remove('active');
            body.classList.remove('no-scroll');
        };

        closeBtn.addEventListener('click', closePortal);
        backdrop.addEventListener('click', closePortal);


// portal overlay open and close


// Simple Drag and Drop Logic

        const draggables = document.querySelectorAll('.draggable');
        let activeElement = null;
        let offset = { x: 0, y: 0 };
        let highestZ = 100;

        draggables.forEach(el => {
            el.addEventListener('mousedown', (e) => {
                activeElement = el;
                
                // 1. Bring to front
                highestZ++;
                el.style.zIndex = highestZ;

                // 2. Calculate offset
                offset.x = e.clientX - el.offsetLeft;
                offset.y = e.clientY - el.offsetTop;
                
                // 3. Visual feedback (Lift effect)
                el.style.boxShadow = "30px 50px 80px rgba(0,0,0,0.5)";
                el.style.transform += " scale(1.05)"; 
            });
        });

        document.addEventListener('mousemove', (e) => {
            if (!activeElement) return;
            
            // Move element
            activeElement.style.left = (e.clientX - offset.x) + 'px';
            activeElement.style.top = (e.clientY - offset.y) + 'px';
        });

        document.addEventListener('mouseup', () => {
            if (activeElement) {
                // Remove visual "lift" feedback
                activeElement.style.boxShadow = "";
                activeElement.style.transform = activeElement.style.transform.replace(" scale(1.05)", "");
                activeElement = null;
            }
        });

        // Touch support for mobile
        document.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            const target = e.target.closest('.draggable');
            if (target) {
                activeElement = target;
                highestZ++;
                target.style.zIndex = highestZ;
                offset.x = touch.clientX - target.offsetLeft;
                offset.y = touch.clientY - target.offsetTop;
            }
        });

        document.addEventListener('touchmove', (e) => {
            if (!activeElement) return;
            const touch = e.touches[0];
            activeElement.style.left = (touch.clientX - offset.x) + 'px';
            activeElement.style.top = (touch.clientY - offset.y) + 'px';
        });

        document.addEventListener('touchend', () => {
            activeElement = null;
        });

// Simple Drag and Drop Logic
