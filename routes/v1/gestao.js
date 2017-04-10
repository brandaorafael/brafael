module.exports = function (moduleGestao){
  
  var controllers = moduleGestao.controllers;

  return function(router){
    router.get("/gestao/pagamento", function(req, res){
    	controllers.pagamento.pagInt(req, res);
    });
    router.get("/gestao/pagamento/pendente", function(req, res){
    	controllers.pagamento.pagPend(req, res);
    });
    router.get("/gestao/afiliacao/range", function(req, res){
    	controllers.afiliacao.clientesRange(req, res);
    });
    router.get("/gestao/afiliacao/data", function(req, res){
    	controllers.afiliacao.clientesData(req, res);
    });
  }

}