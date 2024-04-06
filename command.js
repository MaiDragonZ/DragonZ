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
// เพิ่มฟังก์ชันค้นหา
document.getElementById("search-button").addEventListener("click", function() {
  var searchTerm = document.getElementById("search-input").value; // รับค่าที่ป้อนเข้ามาในช่องค้นหา
  // ดำเนินการค้นหาโดยใช้ค่า searchTerm
  // แสดงผลข้อมูลที่ค้นหาในที่ที่คุณต้องการ
});

document.getElementById("search-button").addEventListener("click", function() {
  var searchTerm = document.getElementById("search-input").value.toLowerCase(); // รับค่าที่ป้อนเข้ามาในช่องค้นหาและแปลงเป็นตัวพิมพ์เล็กทั้งหมด
  var contentList = document.getElementById("searchable-content").getElementsByTagName("li"); // ดึงรายการข้อมูลที่ต้องการค้นหา

  var searchResults = []; // เก็บผลลัพธ์การค้นหาที่ตรงกับเงื่อนไข
  for (var i = 0; i < contentList.length; i++) {
    var content = contentList[i].textContent.toLowerCase(); // แปลงข้อความในรายการเป็นตัวพิมพ์เล็กทั้งหมด
    if (content.includes(searchTerm)) { // ตรวจสอบว่าข้อความในรายการมีคำค้นหาหรือไม่
      searchResults.push(contentList[i].innerHTML); // เพิ่มข้อมูลที่ตรงกับเงื่อนไขไปยังผลลัพธ์การค้นหา
    }
  }

  // แสดงผลลัพธ์การค้นหา
  var resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "<h3>Search Results</h3>"; // เพิ่มส่วนหัวของผลลัพธ์การค้นหา
  if (searchResults.length > 0) { // ตรวจสอบว่ามีผลลัพธ์การค้นหาหรือไม่
    resultsContainer.innerHTML += "<ul>"; // เริ่มต้นรายการผลลัพธ์การค้นหา
    for (var j = 0; j < searchResults.length; j++) {
      resultsContainer.innerHTML += "<li>" + searchResults[j] + "</li>"; // เพิ่มข้อมูลผลลัพธ์การค้นหา
    }
    resultsContainer.innerHTML += "</ul>"; // ปิดรายการผลลัพธ์การค้นหา
  } else {
    resultsContainer.innerHTML += "<p>No results found.</p>"; // แสดงข้อความว่าไม่พบผลลัพธ์การค้นหา
  }
});

