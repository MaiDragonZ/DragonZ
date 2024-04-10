  // เปลี่ยนรูป 
  var slideshow = document.getElementById('slideshow');
  var next = document.getElementById('next');
  var prev = document.getElementById('prev');
  var images = slideshow.getElementsByTagName('img');
  var currentImage = 0;

  function showImage(index) {
    if (index >= 0 && index < images.length) {
      for (var i = 0; i < images.length; i++) {
        images[i].classList.remove('active'); // ลบคลาส active ออกจากทุกภาพ
      }
      images[index].classList.add('active'); // เพิ่มคลาส active ให้กับภาพที่กำลังแสดง
      currentImage = index;
    }
  }

  function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
    showImage(currentImage);
  }

  function prevImage() {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    showImage(currentImage);
  }

  document.getElementById('next').addEventListener('click', nextImage);
  document.getElementById('prev').addEventListener('click', prevImage);

  showImage(currentImage); // แสดงภาพเริ่มต้น

//Set Down Arrow Button
jQuery('#scrollToContent').click(function(e){
  e.preventDefault();
  jQuery.scrollTo("#aboutweb", 1000, { offset:-(jQuery('#header .top').height()), axis:'y' });
});

jQuery('nav > ul > li > a').click(function(e){
  e.preventDefault();
  jQuery.scrollTo(jQuery(this).attr('href'), 400, { offset:-(jQuery('#header .top').height()), axis:'y' });
})

jQuery(window).scroll( function() {
   setHeaderBackground();
});


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}
document.getElementById('searchButton').addEventListener('click', function() {
    search();
});


function search() {
    var searchText = document.getElementById('searchInput').value;
    var names =  ['Compsognathus', 'Carcharodontosaurus', 'Carnotaurus', 'Giganotosaurus', 'Coelophysis', 'Ceratosaurus', 'Deinonychus', 
         'Dilophosaurus', 'Tarbosaurus', 'Troodon', 'Tyrannosaurus', 'Baryonyx', 'Velociraptor', 'Spinosaurus', 'Allosaurus', 'Herrerasaurus', 
         'Maiasaura', 'Saichania', 'Diplodocus', 'Saltasaurus', 'Triceratops', 'Gallimimus', 'Iguanodon', 'Diplodocus', 'Stegosaurus', 
         'Apatosaurus'];
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var element = document.getElementById(name);
        if (element) {
            if (name === searchText) {
                // เพิ่มลิงก์ไปยังหน้าเว็บอื่น เปลี่ยนตรงhttp....html ก็จะได้เลย แต่ต้องมั่นใจว่าทุกหน้าขึ้นต้นเหมือนกันนะ มันะเปลี่ยนแค่ตรง searchText แสดงว่าเราจะต้องเปลี่ยนชื่อไฟล์ทุกไฟล์ให้เป็นชื่อไดโนเสาร์
                window.open('https://maidragonz.github.io/Pee/' + searchText + '.html');
                break;
            }
        }
    }
}