window.DX = window.DX || {},
DX.ajax = DX.ajax || {},
DX.site=DX.site || {},
DX.url=DX.url || {},
DX.date=DX.date || {},
DX.array=DX.array || {},
DX.tool = DX.tool || {},
DX.json=DX.json || {},
!function(){
    var hostArr=document.location.host.split("."),hostLen=hostArr.length,hostDomain;
    if(hostLen>2){hostDomain=hostArr[hostLen-2].concat(".",hostArr[hostLen-1])}
    DX.site.domain=hostDomain
}(),
$.extend(DX.site,{
    uploadUrl:"http://upload."+DX.site.domain+"/",
    api:"http://action."+DX.site.domain+"/",
    web:"http://v3."+DX.site.domain+"/"
}),
BirdEX.ajax=function (url,option){
var setting={},options = {
        method: "GET",
        apiUrl:BirdEX.site.api,
        xhrFields: { withCredentials: true },
        dataType: "json",
        data:{},
        loading:false,
        beforeSend: function () {},
        success:function (data) {},
        error:function(){
        }
  };
    $.extend(true, options, option);
    setting=$.extend(true,{url:options.apiUrl+url,type:options.method},options);
   // if(typeof option == 'object' && option && option.loading){}
    setting.success=function(data){       
        if(data && data.error!=0){
          switch(data.error){
            case 403 :
              break;
            default:
              break;
          }            
          return ;
        }
        options.success && jQuery.isFunction(options.success) && options.success.call(null,data.data);
    };
  $.ajax(setting);
};