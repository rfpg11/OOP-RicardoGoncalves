function Init() { //Função inicial

    function youtube(youtuber, conteudo, subscritores, videosSemanais){
		this.youtuber = youtuber;
		this.conteudo  = conteudo;
		this.subscritores = subscritores;
		this.videosSemanais = videosSemanais;
		this.informacoes = function() {
			document.body.innerHTML += "Youtuber: ".bold() + this.youtuber + "<br>";
			document.body.innerHTML += "Conteúdo: ".bold() + this.conteudo + "<br>";
			document.body.innerHTML += "Subscritores: ".bold() + this.subscritores + "<br>";
			document.body.innerHTML += "Videos Por Semana: ".bold() + this.videosSemanais + "<br><br>";
		}
	}
      
   
    var Wuant = new youtube("Wuant", "Vlog", "2.861.560", "4");
	Wuant.informacoes();
	
	
	var RicFazeres = new youtube("RicFazeres", "Gaming", "573.592" , "6");
	RicFazeres.informacoes();
	
	
	var MoceDumCabreste = new youtube("Môce Dum Cabreste", "Comédia", "185.057", "2");
	MoceDumCabreste.informacoes();

}