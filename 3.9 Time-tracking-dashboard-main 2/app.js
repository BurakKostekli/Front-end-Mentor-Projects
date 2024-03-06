// Fetch işlemi
// fetch('/data.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log('Fetch işlemi başarılı:', data);

//     // İlk fetch işlemi başarılı olduktan sonra butonlara tıklanınca çağrılacak fonksiyonu tanımlayabiliriz.
//     document.getElementById('dailyButton').addEventListener('click', function() {
//       updateBoxes(data, 'daily');
//     });

//     document.getElementById('weeklyButton').addEventListener('click', function() {
//       updateBoxes(data, 'weekly');
//     });

//     document.getElementById('monthlyButton').addEventListener('click', function() {
//       updateBoxes(data, 'monthly');
//     });
//   })
//   .catch(error => {
//     console.error('Fetch işlemi sırasında bir hata oluştu:', error);
//   });

//   function updateBoxes(data, timeframe) {
//     console.log(`updateBoxes fonksiyonu çağrıldı: ${timeframe}`);
  
//     const boxes = document.querySelectorAll('.box__second');
  
//     boxes.forEach((box, index) => {
//       const title = box.parentElement.classList[0]; // "work", "play", vb.
//       const timeframes = data.find(item => item.title.toLowerCase() === title).timeframes;
  
//       const time = box.querySelector('.box__time');
//       const lastTime = box.querySelector('.box__lasttime');
  
//       time.textContent = `${timeframes[timeframe].current}hrs`;
//       lastTime.textContent = `Last Week - ${timeframes[timeframe].previous}hrs`;
//     });
//   }
  






// document.getElementById('dailyButton').addEventListener('click', function() {
//     updateBoxes('daily');
//   });
  
//   document.getElementById('weeklyButton').addEventListener('click', function() {
//     updateBoxes('weekly');
//   });
  
//   document.getElementById('monthlyButton').addEventListener('click', function() {
//     updateBoxes('monthly');
//   });
  
//   function updateBoxes(timeframe) {
//     console.log(`updateBoxes fonksiyonu çağrıldı: ${timeframe}`);
  
//     const boxes = document.querySelectorAll('.box__second');
  
//     boxes.forEach((box, index) => {
//       const title = box.parentElement.classList[0].toLowerCase(); // küçük harfe çevrildi
//       const timeframes = data.find(item => item.title.toLowerCase() === title).timeframes;
  
//       const time = box.querySelector('.box__time');
//       const lastTime = box.querySelector('.box__lasttime');
  
//       time.textContent = `${timeframes[timeframe].current}hrs`;
//       lastTime.textContent = `Last Week - ${timeframes[timeframe].previous}hrs`;
//     });
//   }
  
//   // Fetch işlemi
//   fetch('/data.json')
//     .then(response => response.json())
//     .then(data => {
//       // data global değişkenine atandı
//       window.data = data;
//       console.log('Fetch işlemi başarılı:', data);
//     })
//     .catch(error => {
//       console.error('Fetch işlemi sırasında bir hata oluştu:', error);
//     });
  



// document.getElementById('dailyButton').addEventListener('click', function() {
//     updateBoxes('daily');
//   });
  
//   document.getElementById('weeklyButton').addEventListener('click', function() {
//     updateBoxes('weekly');
//   });
  
//   document.getElementById('monthlyButton').addEventListener('click', function() {
//     updateBoxes('monthly');
//   });
  
  
//   // Fetch işlemi
//   fetch('/data.json')
//     .then(response => response.json())
//     .then(data => {
//       // data global değişkenine atandı
//       window.data = data;
//       console.log('Fetch işlemi başarılı:', data);
  
//       // Fetch işlemi tamamlandıktan sonra updateBoxes fonksiyonunu çağır
//       updateBoxes('daily'); // Veya istediğiniz varsayılan timeframe'i burada ayarlayabilirsiniz
//     })
//     .catch(error => {
//       console.error('Fetch işlemi sırasında bir hata oluştu:', error);
//     });
  
//   function updateBoxes(timeframe) {
//     console.log(`updateBoxes fonksiyonu çağrıldı: ${timeframe}`);
  
//     const boxes = document.querySelectorAll('.box__second');
  
//     boxes.forEach((box, index) => {
//       const title = box.parentElement.classList[0].toLowerCase();
//       const timeframes = data.find(item => item.title.toLowerCase() === title).timeframes;
  
//       const time = box.querySelector('.box__time');
//       const lastTime = box.querySelector('.box__lasttime');
  
//       time.textContent = `${timeframes[timeframe].current}hrs`;
//       lastTime.textContent = `Last Week - ${timeframes[timeframe].previous}hrs`;
//     });
//   }

document.getElementById('dailyButton').addEventListener('click', function() {
    updateBoxes('daily');
  });
  
  document.getElementById('weeklyButton').addEventListener('click', function() {
    updateBoxes('weekly');
  });
  
  document.getElementById('monthlyButton').addEventListener('click', function() {
    updateBoxes('monthly');
  });
  
  function updateBoxes(timeframe) {
    console.log(`updateBoxes fonksiyonu çağrıldı: ${timeframe}`);
  
    if (!window.data) {
      console.error('Veri alınamadı veya beklenen formatta değil.');
      return;
    }
  
    const boxes = document.querySelectorAll('.box__second');
  
    boxes.forEach((box, index) => {
      const title = box.parentElement.classList[0].toLowerCase(); // küçük harfe çevrildi
      const item = window.data.find(item => item.title.toLowerCase() === title);
  
      if (item && item.timeframes) {
        const timeframes = item.timeframes;
  
        const time = box.querySelector('.box__time');
        const lastTime = box.querySelector('.box__lasttime');
  
        time.textContent = `${timeframes[timeframe].current}hrs`;
        lastTime.textContent = `Last Week - ${timeframes[timeframe].previous}hrs`;
      } else {
        console.error(`İlgili başlık için uygun veri bulunamadı: ${title}`);
      }
    });
  }
  
  
  // Fetch işlemi
  fetch('/data.json')
    .then(response => response.json())
    .then(data => {
      // data global değişkenine atandı
      window.data = data;
      console.log('Fetch işlemi başarılı:', data);
  
      // İlk veriyi aldıktan sonra başlangıç durumunu güncelle
      updateBoxes('daily');
    })
    .catch(error => {
      console.error('Fetch işlemi sırasında bir hata oluştu:', error);
    });
  
  