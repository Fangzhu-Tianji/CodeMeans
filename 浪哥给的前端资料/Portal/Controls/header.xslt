<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
  <xsl:template name="header">
    <header class="m-header">
      <div class="topbar"  id="shortcut-header">
        <div class="container">
          <div class="left">
            <!-- 如果未登录 -->
            <div id="nologin" >
              <span>你好，欢迎来到中国保税网！</span>
              <a href="javascript:T.url.Login();" class="login">请登录</a>
              <a href="javascript:T.url.Login();" class="reg">快速注册</a>
            </div>
            <!-- 如果已经登录 -->
            <div id="logined" style="display:none">
              <span>你好，欢迎来到中国保税网！</span>
              <a href="javascript:void(0)" class="username">
                [<em>&amp;nbsp;</em>]
              </a>
              <a href="javascript:void(0)" class="logout">注销</a>
            </div>
          </div>
          <div class="right">

            <div class="menu sc-menu">
              <a href="{$CartUrl}/index.html" class="rLink shopcarts" id="nav-shopcarts">
                <b></b>
                <span>购物车</span>
                <em class="cartsNum">0</em>
                <i></i>
              </a>
              <div class="menu-bd sc-menu-bd">
                <div class="content">
                  <div id="headCartBox">&amp;nbsp;</div>
                </div>
              </div>
            </div>
            <div class="menu">
              <a href="{$MemberUrl}/baseinfo.html" >我的保税网</a>
            </div>
            <div class="menu">
              <a href="{$MemberUrl}/collection.html" class="favorite">
                <span>我的收藏夹</span>
                <!-- <i></i> -->
              </a>
              <!-- <div class="menu-bd">
						<a href="">收藏的宝贝</a>
						<a href="">收藏的店铺</a>
					</div> -->
            </div>
            <div class="menu">
              <a class="rLink" href="{$MemberUrl}/orders.html" >我的订单</a>
            </div>
          </div>
        </div>
      </div>
      <div class="topmain">
        <div class="container">
          <div class="logo">
            <a href="{$PortalUrl}/">
              <img src="{$BaseServerUrl}/v3/img/indexv3/i018.png" alt="中国保税网"/>
            </a>
          </div>
          <div class="good">&amp;nbsp;</div>
          <div class="searchbar">
            <div class="searchWrap">
              <ul id="shelper" class="hide" style="display:none;">&amp;nbsp;</ul>
              <div class="searchinput">
                <input type="text" id="key" onkeydown="javascript:if(event.keyCode==13) searchKey('key');" value="牛栏" class="ui-input" />
                <input type="button" onclick="searchKey('key');return false;" value="搜 索" class="submit" />
              </div>
              <div class="keywords" id="hotwords">
                <em>
                  <a href="http://www.ccdfs.cc/search/%E7%89%9B%E6%A0%8F" target="_blank">牛栏</a>
                </em>
                <em>
                  <a href="http://www.ccdfs.cc/search/%E7%88%B1%E4%BB%96%E7%BE%8E" target="_blank">爱他美</a>
                </em>
                <em>
                  <a href="http://www.ccdfs.cc/search/%E5%B7%A7%E5%85%8B%E5%8A%9B" target="_blank">巧克力</a>
                </em>
                <em>
                  <a href="http://www.ccdfs.cc/search/%E7%BE%8E%E5%9B%BD%E9%A3%9F%E5%93%81" target="_blank">美国食品</a>
                </em>
                <em>
                  <a href="http://www.ccdfs.cc/search/LV" target="_blank">LV</a>
                </em>
                <em>
                  <a href="http://www.ccdfs.cc/search/%E7%88%B1%E9%A9%AC%E4%BB%95" target="_blank">爱马仕</a>
                </em>
                <em>
                  <a href="http://www.ccdfs.cc/search/%E8%8A%B1%E7%8E%8B%E5%B0%BF%E4%B8%8D%E6%B9%BF" target="_blank">花王尿不湿</a>
                </em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </xsl:template>
</xsl:stylesheet>
