$('#search-button').on('click', function() {
    // ini pengganti $.getJSON
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get', //methodnya apa
        dataType: 'json', //kembaliannya mau apa
        data : {
            'apikey' : 'd8980229',
            's' : $('#search-input').val() //ambil value dari search input
          
        },
        // kalo success ngapain
        success: function (hasil) {
            if(hasil.Response == "True") {
                console.log(hasil);
            } else {
                $('#movie-list').html('<h1>Data yang anda cari tak ada</h1>')
            }
        }
    });
})