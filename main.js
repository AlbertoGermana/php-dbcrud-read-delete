// funzione che stampa nell'index i dati ricevuti
function stampaTuttiPaganti(paganti){
  var target = $('#paganti');
  var template = $('#pagante-template').html();
  var compiled = Handlebars.compile(template);

  for (var pagante of paganti){
    var paganteHTML = compiled(pagante);
    target.append(paganteHTML);
  }
}

//funzione che seleziona nel DB i valori e li passa alla funzione stampaTuttiPaganti
function getPaganti(){
  $.ajax({
    url: 'getPaganti.php',
    method: 'GET',
    success: function(data){
      stampaTuttiPaganti(data);
    },
    error: function(err){
      console.log(err);
    }
  })
}

//funzione che elimina il record passandogli l'ID
function delpagante(){
  //salvo il this perché dentro success si perderebbe
  var self = $(this);
  var id = self.parent().data('id');
  $.ajax({
    url: 'deletepagante.php',
    method: 'POST',
    //passo id alla pagina php così da poter eliminare il record corrispondente
    data: {
      'id': id
    },
    success: function(){
      //nell'html elimino l'oggetto che contiene quel record
      self.parent().fadeOut('slow', function(){
        self.parent().remove();
      })
    },
    error: function(err){
      console.log(err);
    }
  })
};


$(document).ready(init);
//funzione principale
function init(){
  getPaganti();
  $('#paganti').on('click', '.delete', delpagante);
}
