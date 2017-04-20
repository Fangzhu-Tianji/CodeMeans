define(function(require, exports, modules){
	var $ = require("jquery");
	 	require("plugins/jquery.defscroll")($);
	 //	require("plugins/jquery.form")($);
	 if($.validator && !$.validator.classRuleSettings.username){
		jQuery.validator.addMethod("username", function (value, element) {
			return this.optional(element) || T.RE.mobile_email.test(value);
		}, "请输入邮箱或手机号");
	 }
	var config={
		serviceqq:[{
			qq : "3029300632",
			name : "小颜"	
		},{
			qq : "3353130884",
			name : "李伟"	
		}]
	}
	window.maction = {
		success : function(msg,fn){
			var html = "<div class='maction'><div class='olay'></div><div class='success'><span>"+msg+"</span></div></div>";
			$('#m-mui-bar').find('.mui-mbar-plugins').append(html);
			setTimeout(function(){
				if(fn){
					fn();
				}
			},1000);
		},
		fail : function(msg,fn){
			var html = "<div class='maction'><div class='olay'></div><div class='fail'><p class='logo'></p><span>"+msg+"</span></div>";
			$('#m-mui-bar').find('.mui-mbar-plugins').append(html);
			setTimeout(function(){
				if(fn){
					fn();
				}
			},2000);
		},
		close: function(){
			$('#m-mui-bar').find('.maction').remove();
		}
	}
	window.online = [];
	var G = {
		init : function(){
			G.runToTop();
			G.openslider();
		},
		// 回到顶部
		runToTop:function(){
			$("body").on('click','#returntop',function(){
				$('html,body').animate({scrollTop: '0px'}, 500);
			});	
		},
		
		//  关闭和打开 
		openslider : function(){
			var slimscroll = function(){
				var H = $(window).height() - 82;
				$('#m-mui-bar .plugin2').find('.listbox').
				height(H).
				slimscroll({
			        "height":H+"px",
			        "color" : "#eee",
			        "opacity" : "0.3",
			        "borderRadius":"0",
			        "start":"top",
			        "size":"3px",
			        "alwaysVisible":true,
			        "railVisible":false,
			        "railsize":"7px",
			        "raildistance":"0px",
			        "railColor":"#666",
			        "railOpacity":"0.6",
			        "distance":"2px"
			    });
			}
			$(window).resize(function(){
		    	if($('#m-mui-bar .plugin2').is(":visible")){
		    		slimscroll();
		    	}
		    });
			// 登录
    $('#sildeloginForm').validate({
        errorPlacement: function (error, element) {
            // 报错的位置
            $(element).closest("li").find(".ui-tips").html(error).show();
        },
		success: function(label) {
			label.parent().hide()
		},
        rules: {
            uName: {
                required: true,
                username: true
            },
            uPassword: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            uName: {
                required: "输入您的邮箱或手机号",
                username: "邮箱或手机号格式不正确"
            },
            uPassword: {
                required: "请输入密码",
                minlength: "密码必须大于6位"
            }
        },
        submitHandler: function (form) {
            var sparam = $(form).serializeObject();
             T.ajax("userlogin/login",{
                type:"POST",
                data:sparam,
                success: function (data) {
                    layer.msg("登录成功",{icon:1});
					T.cookie("__sid", data.Sid);
					T.cookie("__uname", data.UserName);
                    window.location.reload();					
                }
             });
        }
    });
    $('#feedbackForm').validate({
        errorPlacement: function (error, element) {
            // 报错的位置
           // $(element).closest("li").find(".ui-tips").html(error).show();
        },
		success: function(label) {
			label.parent().hide()
		},
        rules: {
            TypeID: {
                required: true
            },
            Email: {
                required: true,
                email: true
            },
            Content: {
                required: true,
                rangelength: [1, 250]
            }
        },
        messages: {
            TypeID: {
                required: ""				
            },
            Email: {
                required: "",
                email: "请输入您常用的电子邮箱"
            },
            Content: {
                required: "",
                rangelength: "字符限制在1到250之间"
            }
        },
        submitHandler: function (form) {
            var sparam = $(form).serializeObject();
			sparam.TypeName="sss";
             T.ajax("Feedback/AddFeedback",{
                type:"POST",
                data:sparam,
                success: function (data) {
                    layer.msg("反馈成功",{icon:1,shade: [0.8, '#393D49']});
					form.reset();			
                }
             });
        }
    });
	
/*
			var loginFormbefore = function(){
				var userno = $('#sildeloginForm').find('input[name=uName]'),
				password = $('#sildeloginForm').find('input[name=uPassword]'),
				username = userno.val() || "",
				passtext = password.val() || "";


				// 验证是否为空
				if(username.length == 0){
					userno.next('.ui-tips').show().find('span').html("帐号不能为空");
					return false;
				}
				if(passtext.length == 0){
					password.next('.ui-tips').show().find('span').html("密码不能为空");
					return false;
				}
				return true;
			}
			// form input 输入监听
			$('#sildeloginForm').find('.ui-input').on("focus",function(){	
				$('#sildeloginForm').find('.ui-tips').hide().find('span').html('');
			});
			$('#sildeloginForm').submit(function() {
				$(this).ajaxSubmit({
				 	beforeSubmit: loginFormbefore, 
				 	data: $("#sildeloginForm").serialize(),  
				 	dataType:"jsonp", 
				 	cache: false,
				  	success: function(data){
				  		if(data.result == "T"){
				  			data.msg = data.msg || "";
				  			maction.success(data.msg,function(){
				  				document.getElementById('sildeloginForm').reset();
				  				maction.close();
				  				window.location.reload();
				  			})
				  		}else{
				  			maction.fail(data.msg,function(){
				  				maction.close();
				  			});
				  		}
				  	}
				});
				return false;
			});

			// 反馈
			var content = $('#fbForm').find('textarea[name=Content]');
			var fbFormkeydown = function(){
				var lb = $('#fbForm').find('.title').find('b');
				$('#fbForm').find('.ui-texterea').on('keyup',function(){
					var text = $(this).val();
					if(text.length > 250){
						text = text.substr(0,250);
						$(this).val(text);
					}else if(text.length == 0){
						content.css("border-color","#f00");
					}else{
						content.css("border-color","#ccc");
					}
					lb.text(text.length);
				});
			}
			var fbFormbefore = function(){
				var contenttext = content.val() || "";
				// 	内容为空	
				if(contenttext.length == 0){
					content.css("border-color","#f00");
					return false;
				}else{
					content.css("border-color","#ccc");
				}

				var typename = $('input[name=TypeID]:checked').next('span').text() || "";
				$('input[name=TypeName]').val(typename);
				return true;	
			}
			// 反馈
			fbFormkeydown();
			$('#fbForm').submit(function(){
				$(this).ajaxSubmit({
					beforeSubmit: fbFormbefore, 
				 	dataType:"json",  
				  	success: function(data){
				  		if(data.result == "T"){
				  			maction.success(data.msg,function(){
				  				document.getElementById('fbForm').reset();
				  				$('#m-mui-bar').stop().animate({
									right: '-235px'
								},500,function(){
									$('#fbForm').closest('.plugin-cnt').find('.maction').remove();
									$('#m-mui-bar').find('.mui-mbar-plugin').hide();
								});
				  			})
				  		}else{
				  			maction.fail(data.msg,function(){
				  				maction.close();
				  			});
				  		}
				  	}
				});
				return false;
			});


			// 删除
			$('#mui-bar-plugin2').on("click",'.i-del',function(){
				var url = $(this).attr("data-delurl");
				T.GET({
				    action:url,
				    success:function (data) {
		              	if(data.isSuccess){
		              		T.GET({
							    action:'http://base.ccdfs.cc/v3/json/cart.json',
							    params:opts.para,
							    success:function (data) {
					              	var cartsNum = 0;
					              	if(data.isSuccess){
					              		cartsNum = data.data.length || 0;
					              		if(cartsNum > 0){
					              			data.hasgoods = true;
					              			$('.cartsNum').show().text(cartsNum);
					              			$('.i-cartNum').text(cartsNum);
					              			// 启用 arttemplate 更新顶部导航区购物车数据
					              			var coinsCount = 0;	// 金额小计
					              			var totalnum = 0; // 商品件数
					              			for (var i = cartsNum - 1; i >= 0; i--){
					              				coinsCount += data.data[i].price * data.data[i].productCount;
					              				totalnum += data.data[i].productCount;
					              				// 正则替换字符
					              				data.data[i].description = data.data[i].description.replace(/\^/g,"  ");
					              				data.data[i].description = data.data[i].description.replace(/~/g,"：");
					              				data.data[i].price = data.data[i].price.toFixed(2);
					              			};
					              			coinsCount = coinsCount.toFixed(2);
					              			data.coinsCount = coinsCount;
					              			data.totalnum  = totalnum;
					              			// 头部购物车
					              			if($('#headCart').length>0){
						              			var thtml = template('headCart', data);
							              		$('#headCart').nextAll(".hasgoods").find("ul").html(thtml);
							              		$('#headCart').closest(".content").nextAll("footer").find(".coins").html(coinsCount);
							              		$('#headCart').closest(".content").nextAll("footer").find(".account").attr("href",data.checkUrl);
					              			}
					              			
					              		}else{
					              			data.hasgoods = false;
					              			$('.cartsNum').hide().text(0);
					              			$('.sc-menu-bd').find('.hasgoods').hide();
					              		    $('.sc-menu-bd').find('.nogoods').show();
					              		    $('#headCart').closest(".content").nextAll("footer").find(".coins").html("0.00");
                                            $('#i-cartNums').text(0);
					              		}
				              			// 侧栏购物车 
						              	var shtml = template('muibarplugin2tmp', data);
						              	$('#mui-bar-plugin2').html(shtml);
					              		
					              	}else{
					              		$('.cartsNum').hide().text(0);
					              		$('.sc-menu-bd').find('.hasgoods').hide();
					              	    $('.sc-menu-bd').find('.nogoods').show();
					              	}

					            },
								error: function (XMLHttpRequest, textStatus, errorThrown) {
						            console.log(textStatus);
						        },
							    failure:function(){}
							});
		              	}else{
		              		maction.fail(data.msg,function(){
				  				maction.close();
				  			});
		              	}
		            },
				    failure:function(){},
				    error:function(){}
				});
				return false;
			});
*/
			$('#m-mui-bar').off('click').on('click','.open-plugins',function(){
				var tabindex = $(this).attr("tab-index");
				if($('#m-mui-bar').find('.mui-mbar-plugin').eq(tabindex).is(":visible")){
					$('#m-mui-bar').stop().animate({
						right: '-235px'
					},300,function(){
						$('#m-mui-bar').find('.mui-mbar-plugin').hide();
					});
				}else{
					$('#m-mui-bar').find('.mui-mbar-plugin').eq(tabindex).show().siblings().hide();
					$('#m-mui-bar').stop().animate({
						right: '-1px'
					},300,function(){
						// 显示 对应内容区
						$('#m-mui-bar').on('click','.close-plugins',function(){
							$('#m-mui-bar').stop().animate({
								right: '-235px'
							},300,function(){
								$('#m-mui-bar').find('.mui-mbar-plugin').hide();
							});
						});
					});

					// 登录
					if(tabindex == 0){
						document.getElementById('sildeloginForm').reset();
					}
					else if(tabindex == 1){
						slimscroll();
					}else if(tabindex == 3){ // 客服
						var serviceqq = config.serviceqq;
						var scriptsrc = "http://webpresence.qq.com/getonline?Type=1&";
						for(var i=0;i<serviceqq.length;i++){
							scriptsrc += serviceqq[i].qq + ":";
						}
						var head= document.getElementsByTagName('head')[0];  
						var script= document.createElement('script');  
						script.type= 'text/javascript';  
						script.onreadystatechange= function () {  
						    if (this.readyState == 'complete'){
						    	
						    }
						}     
						script.onload= function(){  
							var html = "";
							for(var i=0;i<serviceqq.length;i++){
								if(online[i] == 0){
									html += "<li class='offline'>";
								}else{
									html += "<li class='online'>";
								}
								html += "<a target='_blank' href='"+"http://wpa.qq.com/msgrd?v=3&amp;uin="+serviceqq[i].qq+"&amp;site=ccdfs.com&amp;menu=yes'>" + "<i></i><span>"+serviceqq[i].name+"</span></a></li>";
							}

							$('#qqlist').html(html);
						}  
						script.src= scriptsrc;    
						head.appendChild(script);
					}else if(tabindex == 5){ // 反馈建议
						document.getElementById('feedbackForm').reset();
					}
				}
					
			});
			$(document).on('click',function(e){
				var e = e || window.event,tar = e.target,$muibar=$(tar).closest('#m-mui-bar');
				if($muibar && $muibar.length > 0){
					
				}else{
					$('#m-mui-bar').stop().animate({
						right: '-235px'
					},300,function(){
						$('#m-mui-bar').find('.mui-mbar-plugin').hide();
					});
				}
			});
		}
		
	}
	var run = function(){
		G.init();
		$('#m-mui-bar').css({
			opacity:'0',
			right:'-270px'
		}).stop().animate({
			right:'-235px',
			opacity:'1'
		},1000);
	}
	

	exports.run = run;
})