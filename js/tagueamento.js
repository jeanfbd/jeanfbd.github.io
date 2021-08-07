// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics_debug.js','ga');
    
    //ga('create', 'UA-12345-6', 'auto');
    ga('create', 'UA-12345-6', 'none');
    ga('send', 'pageview');

    window.ga_debug = {trace: true};

    function myFunction() {
        document.getElementById('nome').placeholder = document.getElementById('email').placeholder;
    }

var form = document.getElementById('contato');

var telefone = document.getElementById('telefone');
telefone.onchange = function(){
    ga('send', 'event', 'contato', 'enviado', 'enviado');
};

form.addEventListener('submit', function(e) {
    e.preventDefault(); //prevent the form from submitting immediately

    //Send the event to Google Analytics, and then manually
    //submit the form
    ga('send', 'event', 'contato', 'enviado', 'enviado', 10, {
            hitCallback: function() {
                form.submit(); //submit the form now
            }
    });
});

var trackOutboundLink = function(url) {
    gtag('event', 'click', {
      'event_category': 'outbound',
      'event_label': url,
      'transport_type': 'beacon',
      'event_callback': function(){document.location = url;}
    });
  }


//   document.addEventListener('scroll', () => {
//     if typeof window.ga !== undefined {
//        // sua implementação aqui e mais o evento
//        ga('send', 'event', 'Category', 'Scroll', 'Label', 'Value');
//     }
//   })