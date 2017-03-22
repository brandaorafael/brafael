module.exports = function (moduleCadastro){
  
  var controllers = moduleCadastro.controllers;

  return function(router){
    router.get("/pagamento", function(req, res){
    	controllers.pagamento.getBoleto(req, res);
    });
    router.post("/pagamento/integrador-confirm", function(req, res){
    	controllers.pagamento.intregradorConfirm(req, res);
    });
  }

}