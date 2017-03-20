module.exports = function (moduleOrcamento){
  
  var controllers = moduleOrcamento.controllers;

  return function(router){
    router.post("/orcamento", function(req, res){
    	controllers.orcamento.post(req, res);
    });
    router.get("/orcamento", function(req, res){
    	controllers.orcamento.get(req, res);
    });
    router.post("/orcamento/message", function(req, res){
    	controllers.orcamento.postMessage(req, res);
    });
  }

}