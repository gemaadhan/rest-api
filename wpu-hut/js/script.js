function tampilkanSemuaMenu() {
    // dibawah ini adalah method
    $.getJSON('data/pizza.json', function(hasil){
        // ambil dulu object menu
        let menu = hasil.menu;
       
        // method untuk pengulangan sama sperti foreach
        $.each(menu, function(i, hasil){
            //   jquery !! tolong carikan elemen yang idnya daftar menu
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ hasil.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ hasil.nama+'</h5><p class="card-text">'+ hasil.deskripsi+'</p><h5 class="card-title">'+ hasil.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
        })
    });
};

tampilkanSemuaMenu();



// jequery tolong carikan saya element yang class nya nav link

$('.nav-link').on('click',function(){
    //// saat dia diklik, jalankan fungis berikut ini untuk carikan navlink lagi
    // hilangkan semua kelas active
    $('.nav-link').removeClass('active');

    // this maksudnya adalah navlink yang kita pilih... 
    $(this).addClass('active');

    // ambil isi dari navlink yang kita klik
    let kategori = $(this).html();

    //  ganti h1 dengan isi dari vaiable kategori
    $('h1').html(kategori);

    if (kategori == 'All Menu'){
        tampilkanSemuaMenu();
        return; //supaya dia keluar dari function 
    }

    $.getJSON('data/pizza.json', function(hasil){
        let menu = hasil.menu;
        let content = '';

        $.each(menu, function (i, hasil){
           if(hasil.kategori == kategori.toLowerCase()) {
              content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ hasil.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ hasil.nama+'</h5><p class="card-text">'+ hasil.deskripsi+'</p><h5 class="card-title">'+ hasil.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
           } 
        });

        $('#daftar-menu').html(content);
        console.log(content);
    });
    

});