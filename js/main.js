function consultaCep() {
  $(".progress-bar-hidden").show();
  var cep = document.getElementById("input-cep").value;
  var url = "https://viacep.com.br/ws/" + cep + "/json/";

  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      $("#title").html("CEP " + response.cep);
      //$("#cep").html(response.cep);
      $("#logradouro").html(response.logradouro);
      //$("#complemento").html(respo//nse.complemento);
      $("#bairro").html(response.bairro);
      $("#localidade").html(response.localidade);
      $("#uf").html(response.uf);
      //$("#unidade").html(response.unidade);
      //$("#ibge").html(response.ibge);
      //$("#gia").html(response.gia);

      $(".hidden").show();
      $(".progress-bar-hidden").hide();
    },
  });
}

$(function () {
  $(".hidden").hide();
  $(".progress-bar-hidden").hide();
});
