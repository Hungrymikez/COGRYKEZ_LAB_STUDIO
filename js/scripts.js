        //COMENTE ESTO PARA SOLO DEJAR EL MODO CLARO POR AHORA
        // Dark Mode Toggle - Fixed to not use localStorage
        // const modeToggle = document.getElementById('modeToggle');
        // const body = document.body;
        // const icon = modeToggle.querySelector('i');

        // // Use sessionStorage instead of localStorage to avoid security errors
        // const savedMode = sessionStorage.getItem('darkMode');
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // if (savedMode === 'true' || (savedMode === null && prefersDark)) {
        //     body.classList.add('dark-mode');
        //     icon.classList.remove('fa-moon');
        //     icon.classList.add('fa-sun');
        // }

        // modeToggle.addEventListener('click', () => {
        //     body.classList.toggle('dark-mode');
        //     const isDark = body.classList.contains('dark-mode');
        //     sessionStorage.setItem('darkMode', isDark);
            
        //     if (isDark) {
        //         icon.classList.remove('fa-moon');
        //         icon.classList.add('fa-sun');
        //     } else {
        //         icon.classList.remove('fa-sun');
        //         icon.classList.add('fa-moon');
        //     }
        // });

        // Smooth Scrolling
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         const target = document.querySelector(this.getAttribute('href'));
        //         if (target) {
        //             window.scrollTo({
        //                 top: target.offsetTop - 80,
        //                 behavior: 'smooth'
        //             });
        //         }
        //     });
        // });
        // Smooth Scrolling - Versión mejorada
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                
                // Verificar que sea un ancla válido (solo # seguido de caracteres válidos)
                if (href === '#' || !/^#[A-Za-z][\w:.-]*$/.test(href)) {
                    return; // Permitir comportamiento normal para # solo o enlaces inválidos
                }
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Actualizar URL sin recargar la página
                    history.pushState(null, null, href);
                }
            });
        });




        // Active Navigation Link on Scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Scroll to Top Button
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        // Back to Top Functionality
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Fade-in Animation on Scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(element => {
            observer.observe(element);
        });

        // Form Submission
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                formMessage.style.display = 'block';
                formMessage.className = 'alert alert-success';
                formMessage.innerHTML = '¡Mensaje enviado con éxito! Te contactaré pronto.';
                contactForm.reset();
                
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                formMessage.style.display = 'block';
                formMessage.className = 'alert alert-danger';
                formMessage.innerHTML = 'Por favor completa todos los campos requeridos.';
            }
        });

        // Project Data
        const projects = {
            1: {
                title: "Sistema de Parqueadero",
                description: "Plataforma de parqueadero con funcionalidades de ingresar vehiculo, salida de vehiculo, y su respectivo historial de vehiculos que han usado el servicio, por el cual se calcula el tiempo y dinero de manera exacta por el servicio de parqueo prestado",
                technologies: ["Html5", "Css", "Bootstrap", "Javascript","Manejo de API"],
                images: [
                    "../img/parqueadero_cogrykez_01.png",
                    "../img/parqueadero_cogrykez_02.png",
                    "../img/parqueadero_cogrykez_03.png",
                    "../img/parqueadero_cogrykez_04.png",
                    "../img/parqueadero_cogrykez_05.png",
                    "../img/parqueadero_cogrykez_06.png",
                    "../img/parqueadero_cogrykez_07.png",
                ],
                link: "https://hungrymikez.github.io/parqueadero_codema/"
            },
            2: {
                title: "Gestor de archivos por proyecto, versión BETA",
                description: "Gestor de Archivos por Proyecto: aplicación web para administrar versiones de archivos Excel con metadatos, búsqueda avanzada y control de modificaciones por proyecto",
                technologies: ["Html5", "Css", "Bootstrap", "Javascript","Node JS","Supabase","PostgreSQL"],
                images: [
                    "../img/modulo_innovacion_01.png",
                    "../img/modulo_innovacion_001.png",
                    "../img/modulo_innovacion_02.png",
                    "../img/modulo_innovacion_002.png",
                    "../img/modulo_innovacion_03.png",
                    "../img/modulo_innovacion_04.png",
                    "../img/modulo_innovacion_05.png",
                    "../img/modulo_innovacion_06.png",
                    "../img/modulo_innovacion_07.png",
                ],
                link: "https://modulo-innovacion.onrender.com/"
            },
            3: {
                title: "Creative Portfolio",
                description: "Portafolio creativo para diseñadores y desarrolladores con animaciones suaves, galería interactiva y sección de contacto integrada. Totalmente responsive y optimizado para SEO.",
                technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
                images: [
                    "https://placehold.co/800x500/660000/white?text=Portfolio+Homepage",
                    "https://placehold.co/800x500/D4AF37/1a1a1a?text=Project+Gallery",
                    "https://placehold.co/800x500/660000/white?text=Contact+Section"
                ],
                link: "#"
            },
            4: {
                title: "Modern Blog",
                description: "Blog moderno con sistema de comentarios, búsqueda avanzada, categorías y sistema de suscripción por correo electrónico. Diseñado para creadores de contenido que buscan una presencia profesional.",
                technologies: ["Gatsby", "GraphQL", "Contentful", "Disqus", "Mailchimp"],
                images: [
                    "https://placehold.co/800x500/D4AF37/1a1a1a?text=Blog+Homepage",
                    "https://placehold.co/800x500/660000/white?text=Article+Page",
                    "https://placehold.co/800x500/D4AF37/1a1a1a?text=Search+Functionality"
                ],
                link: "#"
            },
            5: {
                title: "Mobile App",
                description: "Aplicación móvil híbrida para gestión de tareas personales con sincronización en la nube, notificaciones push y interfaz intuitiva. Disponible para iOS y Android.",
                technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
                images: [
                    "https://placehold.co/800x500/660000/white?text=Mobile+App+Home",
                    "https://placehold.co/800x500/D4AF37/1a1a1a?text=Task+Management",
                    "https://placehold.co/800x500/660000/white?text=Settings+Screen"
                ],
                link: "#"
            },
            6: {
                title: "Landing Page",
                description: "Página de aterrizaje de alta conversión para startups y productos nuevos. Incluye formulario de captura de leads, testimonios y llamadas a la acción estratégicamente ubicadas.",
                technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Formspree"],
                images: [
                    "https://placehold.co/800x500/D4AF37/1a1a1a?text=Landing+Page+Hero",
                    "https://placehold.co/800x500/660000/white?text=Features+Section",
                    "https://placehold.co/800x500/D4AF37/1a1a1a?text=CTA+Section"
                ],
                link: "#"
            }
        };

        // Project Modal Functionality
        const projectCards = document.querySelectorAll('.project-card');
        const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
        const carouselInner = document.getElementById('carouselInner');
        const carouselIndicators = document.getElementById('carouselIndicators');
        const projectModalLabel = document.getElementById('projectModalLabel');
        const projectDescription = document.getElementById('projectDescription');
        const projectTech = document.getElementById('projectTech');
        const projectLink = document.getElementById('projectLink');

        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                const project = projects[projectId];
                
                if (project) {
                    // Update modal content
                    projectModalLabel.textContent = project.title;
                    projectDescription.textContent = project.description;
                    projectLink.href = project.link;
                    
                    // Clear previous content
                    carouselInner.innerHTML = '';
                    carouselIndicators.innerHTML = '';
                    projectTech.innerHTML = '';
                    
                    // Add images to carousel
                    project.images.forEach((image, index) => {
                        const carouselItem = document.createElement('div');
                        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
                        carouselItem.innerHTML = `<img src="${image}" class="d-block w-100" alt="${project.title} - Image ${index + 1}">`;
                        carouselInner.appendChild(carouselItem);
                        
                        const indicator = document.createElement('button');
                        indicator.type = 'button';
                        indicator.setAttribute('data-bs-target', '#projectCarousel');
                        indicator.setAttribute('data-bs-slide-to', index);
                        if (index === 0) indicator.classList.add('active');
                        carouselIndicators.appendChild(indicator);
                    });
                    
                    // Add technology badges
                    project.technologies.forEach(tech => {
                        const badge = document.createElement('span');
                        badge.className = 'tech-badge';
                        badge.textContent = tech;
                        projectTech.appendChild(badge);
                    });
                    
                    // Show modal
                    projectModal.show();
                }
            });
        });

        // Close modal when clicking outside
        document.getElementById('projectModal').addEventListener('hidden.bs.modal', () => {
            // Reset carousel to first slide
            const carousel = document.getElementById('projectCarousel');
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.to(0);
            }
        });
