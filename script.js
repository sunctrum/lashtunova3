document.addEventListener("DOMContentLoaded", () => {
            const logo = document.getElementById("logo");
            const line1 = document.getElementById("line1");
            const line2 = document.getElementById("line2");
            const buyBtn = document.getElementById("buyBtn");

            // Тайминги для поочередного включения анимаций (каскад)
            
            // 1. Сразу запускаем выезд логотипа
            setTimeout(() => {
                logo.classList.add("animate");
            }, 200);

            // 2. Через 1.2 сек (когда встал логотип) появляется первая строка
            setTimeout(() => {
                line1.classList.add("animate");
            }, 1400);

            // 3. Через 1.9 сек появляется вторая строка
            setTimeout(() => {
                line2.classList.add("animate");
            }, 2100);

            // 4. Через 2.8 сек из точки вырастает кнопка "Купить"
            setTimeout(() => {
                buyBtn.classList.add("animate");
            }, 2800);
        });
