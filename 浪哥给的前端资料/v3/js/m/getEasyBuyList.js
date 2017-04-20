define("m/getEasyBuyList.js", ["common/address.js","common/shoppingcart.js", "common/m-home-slider.js", "common/tools.js"], function (require, exports, modules) {
    require('common/m-home-slider.js');
    var g = require("common/shoppingcart.js");
    var e = require("common/address.js");
    var TPL = {
        list: '{for record in data}<tr id="consignee_index_${record.AddressID}"><td>${record.Receiver}</td><td><span title="${record.AreaName}">${record.AreaName}</span></td><td><span title="${record.Address}">${record.Address}</span></td><td>${record.ZipCode}</td><td>${record.Mobile}{if record.Tel}<br />${record.Tel}{/if}</td><td class="action">{if record.IsDefault==false}<a href="#" data-aid="${record.AddressID}" class="set">设为默认</a>{/if}<a href="#" data-aid="${record.AddressID}" class="edit">编辑</a><a href="#" data-aid="${record.AddressID}" class="del">删除</a></td></tr>{/for}',
        none: '<div class="nothing"><div class="cnt"><p class="title">对不起，没有找到相关地址</p><p class="subtitle"><a href="' + T.site.web + '">去随便逛逛</a><span>，万一有喜欢的呢</span></p></div></div>'
    };
    g();
    e({
            showlist:function(data){
                var temstr = data.length > 0 ? TPL.list.process({ data: data }) : TPL.none;
                $("#resultList").html(temstr);
                $("#saveAdrCount").text(data.length);
            }


    });
})
