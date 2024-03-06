// document.addEventListener('DOMContentLoaded', function () {
//     // JSON dosyasını fetch et
//     fetch('./data.json')
//         .then(response => response.json())
//         .then(data => {
//             // Günleri döngüye al ve her biri için işlem yap
//             data.forEach(dayData => {
//                 const dayElement = document.getElementById(dayData.day);
//                 const amountElement = document.getElementById(dayData.amount);
//                 const columnElement = dayElement.querySelector('.chart__color-box');
//                 const hoverElement = document.querySelector('.chart__hover-box');

//                 // Renkli kutunun uzunluğunu ayarla
//                 const percentageHeight = dayData.amount / 60; // Ölçeklendirme yapabilirsiniz
//                 columnElement.style.height = `calc(${percentageHeight * 100}% - 10px)`; // İsteğinize göre ölçeklendirme ve ekstra düzenlemeler yapabilirsiniz

//                 // Gün elementine tıklama event'i ekle
//                 dayElement.addEventListener('click', function () {
//                     // Tıklanan günün bilgilerini göster
//                     console.log(`Day: ${dayData.day}, Amount: $${dayData.amount}`);
//                 });

//                 columnElement.addEventListener('mouseenter', function () {
//                     hoverElement.style.display = 'block';
//                 })
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });

document.addEventListener('DOMContentLoaded', function () {
    // JSON dosyasını fetch et
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            // Günleri döngüye al ve her biri için işlem yap
            data.forEach(dayData => {
                const dayElement = document.getElementById(dayData.day);
                const columnElement = dayElement.querySelector('.chart__color-box');
                const hoverBox = dayElement.querySelector('.chart__hover-box');

                // Renkli kutunun uzunluğunu ayarla
                const percentageHeight = dayData.amount / 60;
                columnElement.style.height = `calc(${percentageHeight * 100}% - 10px)`;

                // Gün elementine hover event'leri ekle
                columnElement.addEventListener('mouseenter', function () {
                    // Fare elemanın üzerine gelirse yapılacak işlemler
                    // hoverBox.style.display = 'block';
                    hoverBox.textContent = `$${dayData.amount}`;
                    hoverBox.style.opacity = 1; // İsteğe bağlı: Opacity değerini değiştirebilirsiniz
                });

                columnElement.addEventListener('mouseleave', function () {
                    // Fare elemandan çıkarsa yapılacak işlemler
                    // hoverBox.style.display = 'none';
                    hoverBox.style.opacity = 0; // İsteğe bağlı: Opacity değerini sıfıra geri getirebilirsiniz
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
