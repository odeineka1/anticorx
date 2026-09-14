// Header scroll animation
        document.addEventListener('scroll', function () {
                const header = document.querySelector('header');
                if (window.scrollY > 0) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
        // Кнопка Детальніше
        document.querySelector('.btn').addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                const offset = 110; // Відступ від верху

                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            });
        
        // Кнопка контакти
        document.querySelector('.contacts').addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                const offset = 110; // Відступ від верху

                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            });

        // Функція для анімації підрахунку цифр
            function animateValue(id, start, end, duration) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    document.getElementById(id).innerText = Math.floor(progress * (end - start) + start);
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }

            // Функція для запуску анімації при потраплянні в зону видимості
            function onIntersection(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateValue("lost-amount", 0, 36, 2000);  // 5 мільярдів
                        animateValue("corruption-rank", 0, 104, 2000);  // 122 місце
                        animateValue("percent-gdp", 0, 10, 2000);  // 10% ВВП
                        observer.disconnect();  // Вимикаємо спостерігач після виконання
                    }
                });
            }

            // Налаштування Intersection Observer
            document.addEventListener('DOMContentLoaded', function () {
                const observer = new IntersectionObserver(onIntersection, {
                    threshold: 0.5  // Запускати анімацію, коли 50% секції видно
                });

                // Початок спостереження за секцією з цифрами
                const statsSection = document.querySelector('.corruption-stats');
                observer.observe(statsSection);
            });
            
            // Mission animation
            document.addEventListener('DOMContentLoaded', function () {
                    const missionText = document.querySelector('.mission-text');

                    function handleScroll() {
                        const rect = missionText.getBoundingClientRect();
                        if (rect.top < window.innerHeight && rect.bottom >= 0) {
                            missionText.classList.add('in-view');
                        }
                    }

                    window.addEventListener('scroll', handleScroll);
                    handleScroll(); // To check initial position
                });

            // Goals animation
            document.addEventListener('DOMContentLoaded', function () {
                    const goalItems = document.querySelectorAll('.goal-list li');

                    function handleScroll() {
                        goalItems.forEach((item) => {
                            const rect = item.getBoundingClientRect();
                            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                                item.classList.add('in-view');
                            }
                        });
                    }

                    window.addEventListener('scroll', handleScroll);
                    handleScroll(); // To check initial position
                });
            
            // Hide main content and show materials content
            function showMain() {
                    document.getElementById("main-content").style.display = "block";
                    document.getElementById("materials-content").style.display = "none";
                    document.getElementById("resources-content").style.display = "none";
                    document.getElementById("report-content").style.display = "none";
                }

            function showMaterials() {
                    document.getElementById("resources-content").style.display = "none";
                    document.getElementById("main-content").style.display = "none";
                    document.getElementById("materials-content").style.display = "block";
                    document.getElementById("report-content").style.display = "none";
                    
                }

            // Hide all the content and show resources content
            function showResources() {
                    document.getElementById("main-content").style.display = "none";
                    document.getElementById("materials-content").style.display = "none";
                    document.getElementById("resources-content").style.display = "block";
                    document.getElementById("report-content").style.display = "none";
                }
            
            // Hide all the content and show report content
            function showReport() {
                    
                    document.getElementById("materials-content").style.display = "none";
                    document.getElementById("resources-content").style.display = "none";
                    document.getElementById("main-content").style.display = "none";
                    document.getElementById("report-content").style.display = "block";
                }



