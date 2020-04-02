(function($) {
    
    $(function() {
      
      // Sub menus.
      $("nav ul li a:not(:only-child)").click(function(e) {
        $(this)
          .siblings(".nav-dropdown")
          .toggle();
        // Para cerrar un "nav-dropdown" cuando se abre otro
        $(".nav-dropdown")
          .not($(this).siblings())
          .hide();
        e.stopPropagation();
      });
      // haciendo clic afuera del "nav-dropdown" se ocultará
      $("html").click(function() {
        $(".nav-dropdown").hide();
      });
      // Abrir y cerrar con se hace clik
      $("#nav-toggle").click(function() {
        $("nav ul").slideToggle();
      });
      // Cuando esta en "Menu Hamburger" cambia el icono a x
      $("#nav-toggle").on("click", function() {
        this.classList.toggle("active");
      });
    }); 
  })(jQuery); //final del query
  
  /*Login*/
  function okey(){
    window.location.assign("Cuenta.html");
  }
  function btn_pago(){
  window.location.assign("Pago_curso.html");
  }
