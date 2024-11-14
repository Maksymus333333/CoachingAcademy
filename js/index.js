 
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.pagination-button.prev');
const nextButton = document.querySelector('.pagination-button.next'); 
const menuItems = document.querySelectorAll('.menu-item');

 // код для навбару
menuItems.forEach(item => {
    item.addEventListener('click', function() { 
        menuItems.forEach(i => i.classList.remove('active')); 
        item.classList.add('active');
    });
});

 // код для пагінації
let currentPage = 0;

 
function updatePage(index) {
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
    currentPage = index;

  
    if (currentPage === 0) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (currentPage === dots.length - 1) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updatePage(index);
    });
});

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        updatePage(currentPage - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < dots.length - 1) {
        updatePage(currentPage + 1);
    }
});

updatePage(currentPage);




// Додаємо код для FAQ акордеону
const faqItems = document.querySelectorAll('.faq-item');

// Функція для закриття всіх FAQ-елементів, окрім вказаного
function closeAllFaqItems(exceptItem = null) {
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        const line = item.querySelector('.line');
        const icon = item.querySelector('.line-svg');
        
       
        if (item !== exceptItem) {
            answer.classList.remove('active');
            line.classList.remove('active');
            icon.classList.remove('rotate');  
            icon.src = '/public/icons/plus.svg'; 
            item.classList.remove('active');
        }
    });
}

// Встановлюємо перший елемент активним 
const firstItem = faqItems[0];
const firstAnswer = firstItem.querySelector('.faq-answer');
const firstLine = firstItem.querySelector('.line');
const firstIcon = firstItem.querySelector('.line-svg');

 
firstAnswer.classList.add('active');
firstLine.classList.add('active');
firstIcon.src = '/public/icons/line.svg';  
firstIcon.classList.add('rotate');  
firstItem.classList.add('active');

// Додаємо обробник подій для кожного FAQ-елемента
faqItems.forEach((item) => {
    const button = item.querySelector('.line-ico');
    const answer = item.querySelector('.faq-answer');
    const line = item.querySelector('.line');
    const icon = item.querySelector('.line-svg');

    button.addEventListener('click', () => {
        const isActive = answer.classList.contains('active');

        closeAllFaqItems(item);  

        // Відкриваємо або закриваємо поточний елемент
        if (!isActive) {
            answer.classList.add('active');
            line.classList.add('active');
            icon.src = '/public/icons/line.svg';  
            icon.classList.add('rotate');  
            item.classList.add('active');   
        } else {
            answer.classList.remove('active');
            line.classList.remove('active');
            icon.src = '/public/icons/plus.svg';  
            icon.classList.remove('rotate');  
            item.classList.remove('active');  
        }
    });
});