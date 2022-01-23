function searchMovie() {
  // ini pengganti $.getJSON
  $.ajax({
    url: "http://omdbapi.com",
    type: "get", //methodnya apa
    dataType: "json", //kembaliannya mau apa
    data: {
      apikey: "d8980229",
      s: $("#search-input").val(), //ambil value dari search input
    },
    // kalo success ngapain
    success: function (hasil) {
      if (hasil.Response === "True") {
        let movies = hasil.Search;
        console.log(movies);
        $("#movie-list").html("");
        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `<div class="col-md-2">
                <div class="card mb-3" >
                <img class="card-img-top" src="` +
                  data.Poster +
                  `" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">` +
                  data.Title +
                  `</h5>
                  <h6 class="card-subtitle mb-2 text-muted">` +
                  data.Year +
                  `</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#detailModal" data-pengenal="`+ data.imdbID +`">See Detail</a>
                </div>
              </div>
            </div>`
          );
        });

        $("#search-input").val("");
      } else {
        $("#movie-list").html(
          `
          <div class="col">
          <h1 class="text-center">` +
            hasil.Error +
            `</h1>
          </div>
`
        );
      }
    },
  });
}

$("#search-button").on("click", function () {
  searchMovie();
});

// carikan element search input ketika tombol di lepas (keyup)
$("#search-input").on("keyup", function (eventnya) {
  if (eventnya.keyCode === 13) {
    searchMovie();
  }
});

// carikan saya tombol see-detail ketika tombol di klik lakukan fungsi ini (tampilkan data-pengenal dari tombol yang sedang diklik).. ehhh ternyata ga ketemu element see-detail. karena belum dibuat di halaman index waktu pertama di load, element baru dibuat ketika setelah proses pencarian. 
$('.see-detail').on("click", function(){
  console.log($(this).data('pengenal'));
});

// jadi kita ganti aja, kayak gini. jquery tolong carikan saya element movie-list, kemudian ketika di klik kalo ada element .see-detail entah element nya digenerate nanti, atau dari awal udah ada. 
$('#movie-list').on("click",'.see-detail', function(){
  console.log($(this).data('pengenal'));
  $.ajax({
    url: "http://omdbapi.com",
    type: "get",
    dataType: "json",
    data : {
      apikey: "d8980229",
      i : $(this).data('pengenal')
    },
    success: function(hasil){
      if (hasil.Response === "True") {
        $(".modal-body").html(`
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4" align="center">
            <img src="`+ hasil.Poster +`" class="img-fluid mb-4">
            </div>
            <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item"><h3>`+hasil.Title+`</h3></li>
                  <li class="list-group-item">Genre :`+hasil.Genre+`</h3></li>
                  <li class="list-group-item">Actor :`+hasil.Actors+`</h3></li>
                  <li class="list-group-item">Plot :`+hasil.Plot+`</h3></li>
                  </ul>
            </div>
          </div>
        </div>
        `)
      }
    }


  })
});
