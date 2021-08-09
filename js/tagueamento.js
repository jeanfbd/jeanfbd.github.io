// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//Função de Integração com Google Analytics Utilizada em PROD
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');

function sendEventGA (eventCategory, eventAction, eventLabel) {
	ga('send', 'event', eventCategory, eventAction, eventLabel);
}

window.addEventListener('load', function () {
	ga('send', 'pageview', location.pathname);
});

$(".menu-lista li.menu-lista-item a").each(function(){
    $(this).click(function(e){
		const index = $(this).parent().index();
		console.log($(this).parent().index());
		let eventCategory = 'menu';
		if (index === 3) {
			sendEventGA(eventCategory, 'entre_em_contato', 'link_externo');
		}
		if (index === 4) {
			sendEventGA(eventCategory, 'download_pdf', 'download_pdf');
		} 
	});
});

$(".cards-montadoras div").each(function(){
	$(this).click(function(e){
		const index = $(this).index();
		console.log($(this).index());
		let eventCategory = 'analise';
		let eventAction = 'ver_mais';
		if (index === 0) {
			sendEventGA(eventCategory, eventAction, 'lorem');
		}
		if (index === 1) {
			sendEventGA(eventCategory, eventAction, 'ipsum');
		} 
		if (index === 2) {
			sendEventGA(eventCategory, eventAction, 'dolor');
		} 
    });
});


$("#nome").keypress(function() {
	sendEventGA('contato', 'nome', 'preencheu');
});

$("#email").keypress(function() {
	sendEventGA('contato', 'email', 'preencheu');
});

$("#telefone").keypress(function() {
	sendEventGA('contato', 'telefone', 'preencheu');
});

$("#aceito").each(function(){
    $(this).click(function(e){
		if (this.checked) {
			sendEventGA('contato', 'aceito', 'preencheu');
		}
	});
});