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
  var namesPlants =  ['Maiasaura', 'Saichania', 'Diplodocus', 'Saltasaurus', 'Triceratops', 'Gallimimus', 'Iguanodon', 
       'Parasaurolophus', 'Stegosaurus', 'Apatosaurus'];
       var namesmeats =  ['Compsognathus', 'Carcharodontosarus', 'Carnotaurus', 'Giganotosaurus', 'Coelophysis', 'Ceratosaurus', 'Deinonychus', 
       'Dilophosaurus', 'Tarbosaurus', 'Troodon', 'Tyrannosaurus', 'Baryonyx', 'velociraptor', 'Spinosaurus', 'Allosaurus', 'Oviraptor', 'Herrerasaurus'];
      
  for (var i = 0; i < namesPlants.length; i++) {
      var name = namesPlants[i];
      if (name === searchText) {
        window.open('https://maidragonz.github.io/maprang/' + searchText , '_blank');
          return; // ออกจากฟังก์ชันทันทีหลังจากที่ได้ทำการเปลี่ยน URL แล้ว
      }
    } 
    for (var i = 0; i < namesmeats.length; i++) {
    var name = namesmeats[i];
      if (name === searchText) {
        
        window.open('https://maidragonz.github.io/vieew/' + searchText , '_blank');
          return; // ออกจากฟังก์ชันทันทีหลังจากที่ได้ทำการเปลี่ยน URL แล้ว
      }
    }
  }

