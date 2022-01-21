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
      if (hasil.Response == "True") {
        let movies = hasil.Search;
        console.log(movies);
        $("#movie-list").html("");
        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `<div class="col-md-4">
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
              <a href="#" class="btn btn-primary">See Detail</a>
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
$("#search-input").on("keyup", function (event) {
  if (event.keyCode === 13) {
    searchMovie();
  }
});
