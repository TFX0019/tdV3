$(document).ready(function() {
    // colecciones
    var glob = {
        CategoriasShow: false,
        menuShow: false,
        btnMenuShow: document.getElementById('toggleMenu'),
        btnMenuClose: document.getElementById('closeMenu'),
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

    $(function() {
        var $visor = document.getElementById('visor');
        setTimeout(() => {
            var visorContainer = document.querySelector('.imgContainer');
            visorContainer.style.height = $visor.clientHeight + 'px';
        }, 100);
        console.log($visor.clientHeight)
    })



    $('#showCategorias').on('click', function () {
        glob.showCategorias();
    })
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
//texto de contactos
$(function() {
    $('.contactTitle').arctext({
        radius: 500
    });
})
//abrir menu principal
    glob.btnMenuShow.addEventListener('click', function() {
       glob.menuContainer[0].style.left = 0
    })

$(function () {
    glob.btnMenuClose.addEventListener('click', function () {
        glob.menuContainer[0].style.left = '-100%'
    })
})

})