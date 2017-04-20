define("common/category.js", ["lib/trimPath.js", "public/category.js", "common/tools.js"], function (require) {
    require("lib/trimPath.js");
    require("public/category.js");
    require("common/tools.js");
    var c = {
        config: {
            isHome: !1,
            isInitData:!0,
            el: $("#menu-navs"),
            mainId: $(".category-menu-nav")
        },
        init: function (a) {
            var b = this;
            var c = $.extend({
                isHome: !1,
                isInitData: !0,
                mainId: null,
                el: $("#menu-navs")
            }, a);
            if (c.isInitData) {
                b.render(c);
            } else {
                b.bind(c);
            }            
        },
        render: function (a) {
            var html = '';
            category && $.each(category, function (index, item) {
                html += '<li class="menu-nav-item"><a class="title" href="javascript:;"><img src="' + T.site.img + item.pic + '"><span>' + item.name + '</span></a><div class="menu-sub-panel">',
                item.categoryList && $.each(item.categoryList, function (key, val) {
                    html += '<dl><dt><a target="_blank" href="' + T.site.web + val.codename + '_c' + val.id + '.html">' + val.name + '</a></dt>',
                    val.categoryList && $.each(val.categoryList, function (k, v) {
                        html += '<dd><a target="_blank" href="' + T.site.web + v.codename + '_c' + v.id + '.html">' + v.name + '</a></dd>';
                    }),
                    html += '</dl>';
                }),
                html += '</div></li>';
            });
            a.el.html(html); this.bind(a);
        },
        bind: function (a) {
            var menucnt = $('#category-menus').find('.menu-cnt');
            if (a.isHome) {
                menucnt.show();
                $('#category-menus').off("hover");
            } else {
                $('#category-menus').hover(function () {
                    menucnt.show().children('.olay').css({
                        "width": "178px",
                        "marginTop": "-2px",
                        "border": "1px solid #ddd",
                        "border-top": "1px solid #c71622"
                    });
                    menucnt.find('.menu-sub-panel').css({
                        'borderLeft': 'none'
                    });
                }, function () {
                    menucnt.hide();
                });
            }
        }
    };
    function d(a) {
        c.init(a)
    }
    return d
});