function consultaCep() {
  var cep = document.getElementById("input-cep").value;
  var url = "https://viacep.com.br/ws/" + cep + "/json/";
  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      //console.log(response);
      $("#localidade").html(response.localidade);
      //document.getElementById("localidade").innerHTML = response.localidade;
    },
  });
}
