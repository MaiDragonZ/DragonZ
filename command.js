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
      if (name === searchText) {
          window.location.href = 'https://www.youtube.com/';
          return; // ออกจากฟังก์ชันทันทีหลังจากที่ได้ทำการเปลี่ยน URL แล้ว
      }
  }
}
