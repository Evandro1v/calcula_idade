function validateForm(event) {
  //resetando
  document.getElementById("P1-id").innerHTML = "--";
  document.getElementById("P2-id").innerHTML = "--";
  document.getElementById("P3-id").innerHTML = "--";
  document.getElementById("day1").style.color = '';
  document.getElementById("month1").style.color = '';
  document.getElementById("year1").style.color = '';
  document.getElementById("month-id").style.borderColor = ""
  document.getElementById("day-id").style.borderColor = ""
  document.getElementById("year-id").style.borderColor = ""
  document.getElementById("span1").innerHTML = "ㅤ";
  document.getElementById("span2").innerHTML = "ㅤ";
  document.getElementById("span3").innerHTML = "ㅤ";
  //reseteando

  //pegando id
  let day = document.getElementById("day-id").value;
  let month = document.getElementById("month-id").value;
  let year = document.getElementById("year-id").value;
  //pegando id
  //formando a data com as informações dos inputs
  let dataCompleta = new Date(year, month - 1, day); // Note que o mês é indexado em 0 (janeiro é 0, fevereiro é 1, etc.)
  //formando a data com as informações dos inputs
  let dataAtual = new Date();//data atual
  //calcula a diferença data atual - data completa
  let diferencaAnos = dataAtual.getFullYear() - dataCompleta.getFullYear();
  let diferencaMeses = dataAtual.getMonth() - dataCompleta.getMonth();
  let diferencaDias = dataAtual.getDate() - dataCompleta.getDate();
  //calcula a diferença data atual - data completa

  //limita os dados q for prenchido pelo usuario
  if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1900 && year <= 2090) {
    //passa do string para inteiro
    day = parseInt(day, 10);
    month = parseInt(month, 10);
    year = parseInt(year, 10);
    //passa do string para inteiro
    // Verifique se a data combinada é válida
    if (dataCompleta.getDate() === day && dataCompleta.getMonth() === month - 1 && dataCompleta.getFullYear() === year) {

      //condições para formar a data certa para não ficar numeros negativos
      if (diferencaDias < 0) {
        diferencaMeses--;
        var dataTemp = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0);
        diferencaDias = dataTemp.getDate() - dataCompleta.getDate() + dataAtual.getDate();
      }

      if (diferencaMeses < 0) {
        diferencaAnos--;
        diferencaMeses = 12 - Math.abs(diferencaMeses);
      }
      //condições para formar a data certa para não ficar numeros negativos

      //adiciona no HTML as informações
      document.getElementById("P1-id").innerHTML = diferencaAnos;
      document.getElementById("P2-id").innerHTML = diferencaMeses;
      document.getElementById("P3-id").innerHTML = diferencaDias;
      //adiciona no HTML as informações

    }
    else {
      //adiciona no HTML caso a data esteja certa mas ela não existe
      document.getElementById("span1").innerHTML = "must be a valid date";
      //adiciona no HTML caso esteja errado
    }
  }

  else {
    document.getElementById("span1").innerHTML = "must be a valid day.";
    document.getElementById("span2").innerHTML = "must be a valid month";
    document.getElementById("span3").innerHTML = "must be a valid year";
    //muda cores
    document.getElementById("day1").style.color = 'red';
    document.getElementById("month1").style.color = 'red';
    document.getElementById("year1").style.color = 'red';
    document.getElementById("month-id").style.borderColor = "red"
    document.getElementById("day-id").style.borderColor = "red"
    document.getElementById("year-id").style.borderColor = "red"
    // muda cores
  }
  return false;
}