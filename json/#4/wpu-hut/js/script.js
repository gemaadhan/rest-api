// dibawah ini adalah method
$.getJSON('data/pizza.json', function(hasil){
    // ambil dulu object menu
    let menu = hasil.menu;
   
    // method untuk pengulangan sama sperti foreach
    $.each(menu, function(i, hasil){
//   jquery !! tolong carikan elemen yang idnya daftar menu
$('#daftar-menu').append('  <div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ hasil.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ hasil.nama+'</h5><p class="card-text">'+ hasil.deskripsi+'</p><h5 class="card-title">'+ hasil.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
    })
})