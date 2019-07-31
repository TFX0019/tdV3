$(document).ready(function() {
    // colecciones
    var glob = {
        CategoriasShow: false,
        menuShow: false,
        btnMenuShow: document.getElementById('toggleMenu'),
        btnMenuClose: document.getElementById('closeMenu'),
        btnMenuCloseD: document.querySelector('.portafolio'),
        menuContainer: document.getElementsByClassName('menu2'),
        showCategorias: function () {
            var menuCategorias = document.querySelector('.categorias_c');
            if (glob.CategoriasShow == false) {
                menuCategorias.style.right = 0;
                glob.CategoriasShow = true;
            } else {
                menuCategorias.style.right = '-70%';
                glob.CategoriasShow = false;
            }
        },
        totalPages: null,
        pagePremios: null

    }

    $('.showCategorias').on('click', function () {
        glob.showCategorias();
    })
    $('.portafolio').on('click', function () {
        glob.showCategorias();
    })

if ($('.revista').length !== 0 || $('.collage').length !== 0) {
        // revista
        $(function () {
            $('.revista').owlCarousel({
                items: 1,
                margin: 0,
                loop: false,
                URLhashListener: false,
                onInitialized: totalItem
            })

            function totalItem(e) {
                glob.totalPages = '0' + (e.item.count);
                $('#pagination-premios').text("0" + (e.item.index + 1) + " / " + glob.totalPages)
            }
            $('.revista').on('changed.owl.carousel', function (e) {
                $('#pagination-premios').text("0" + (e.item.index + 1) + " / " + glob.totalPages)
            })
        })
        // collages
        $(function () {
            $('.collage').owlCarousel({
                center: true,
                items: 3,
                margin: -10,
                loop: true,
                autoplay: true
            })
        })
}
//texto de contactos
if ($('.contactTitle').length !== 0) {
 $(function () {
     $('.contactTitle').arctext({
         radius: 500
     });
 })
}

//abrir menu principal
            glob.btnMenuShow.addEventListener('click', function () {
                glob.menuContainer[0].style.left = 0
            })

            glob.btnMenuClose.addEventListener('click', function () {
                glob.menuContainer[0].style.left = '-100%'
            })

if ($(".home").length !== 0 || $(".coleccion-p").length !== 0) {
        // scroll home page
        $(".home").onepage_scroll({
            sectionContainer: "section",
            easing: "ease",
            animationTime: 1000,
            pagination: true,
            updateURL: false,
            loop: false,
            keyboard: false,
            responsiveFallback: false,
            direction: "vertical"
        });

        // scroll de colecciones

        $('.coleccion-p').onepage_scroll({
            sectionContainer: "section",
            easing: "ease",
            animationTime: 1000,
            pagination: true,
            updateURL: false,
            loop: false,
            keyboard: false,
            responsiveFallback: false,
            direction: "vertical"
        });
}
   
// paginas de revista
$('#togglePagesRevista').on('click', function(e) {
    e.preventDefault()
    $('.modalPaginationPremios').slideToggle();
})
// cerrar premios
$('.closePagination button').on('click', function() {
    $('.modalPaginationPremios').slideToggle();
})
//search
$('.search').hide();
$('#openSearch').on('click', function() {
    $('.search').fadeIn('slow');
})
$('.closeSearch').on('click', function () {
    $('.search').fadeOut('slow');
})
// help
$('.modalhelpsearch').hide();
$('.openhelpremios').on('click', function(e) {
    e.preventDefault();
    $('.modalhelpsearch').fadeIn('slow');
})
$('.closeModalhelp').on('click', function () {
   $('.modalhelpsearch').fadeOut('slow');
})
// contacto
$('.openContacto').on('click', function() {
    $('.contacto').css('opacity', 1);
    $('.contacto').css('bottom', 0);
    $('.info-contacto').css('bottom', 0);
})

$('.closeContact').on('click', function () {
    $('.contacto').css('opacity', 0);
    $('.contacto').css('bottom', '-100%');
    $('.info-contacto').css('bottom', '-100%');
})




        $(function () {
            var $visor = document.getElementById('visor');
            setTimeout(() => {
                var visorContainer = document.querySelector('.imgContainer');
                visorContainer.style.height = $visor.clientHeight + 'px';
            }, 100);
            console.log($visor.clientHeight)
        })

})