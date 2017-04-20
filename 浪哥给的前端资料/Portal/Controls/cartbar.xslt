<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
  <xsl:template name="cartbar">
    <div id="m-mui-bar" class="m-mui-bar">
      <div class="mui-mbar-tabs" id="mui-mbar-tabs">
        <div class="mui-mbar-tab tab1 ">
          <a href="javascript:;" class="open-plugins" tab-index="0">
            <span class="icon"></span>
          </a>
          <div class="itips">
            <span class="ititle">用户登录</span>
            <i>&amp;nbsp;</i>
          </div>
        </div>
        <div class="mui-mbar-tab tab2 open-plugins" tab-index="1">
          <span class="icon">&amp;nbsp;</span>
          <span class="i-lbl">购物车</span>
          <em id="i-cartNums" class="i-cartNum">0</em>
        </div>
        <div class="mui-mbar-tab tab3 open-plugins" tab-index="0">
          <a href="javascript:;">
            <span class="icon">&amp;nbsp;</span>
          </a>
          <div class="itips">
            <span class="ititle">我的收藏</span>
            <i>&amp;nbsp;</i>
          </div>
        </div>
        <div class="mui-mbar-tab tab4 open-plugins" tab-index="0">
          <span class="icon">&amp;nbsp;</span>
          <div class="itips">
            <span class="ititle">联系客服</span>
            <i>&amp;nbsp;</i>
          </div>
        </div>
        <div class="mui-mbar-tab-bottom">
          <div class="mui-mbar-tab tab5">
            <span class="icon">&amp;nbsp;</span>
            <div class="itips">
              <i>&amp;nbsp;</i>
              <div class="qrcode">
                <img src="{$BaseServerUrl}/v3/img/public/ewm.png" alt=""/>
              </div>
            </div>

          </div>
          <div class="mui-mbar-tab tab6 open-plugins" tab-index="0">
            <span class="icon">&amp;nbsp;</span>
            <div class="itips">
              <span class="ititle">用户反馈</span>
              <i>&amp;nbsp;</i>
            </div>
          </div>
          <div class="mui-mbar-tab tab7" id="returntop">
            <span class="icon">&amp;nbsp;</span>
            <div class="itips">
              <span class="ititle">返回顶部</span>
              <i>&amp;nbsp;</i>
            </div>
          </div>
        </div>
      </div>
       <div class="mui-mbar-plugins">
        <div class="mui-mbar-plugin plugin1">
          <h2>
            <i class='i-close close-plugins'>&amp;nbsp;</i>
            <span>登录</span>
          </h2>
          <div class="plugin-cnt">
            <form name="sildeloginForm" id="sildeloginForm">
              <ul>
                <li>
                  <input style="display:none"/>
                  <!-- for disable autocomplete on chrome -->
                  <input type="text"  class="ui-input username" name="uName" placeholder="手机/邮箱"  autocomplete="off"/>
                  <div class="ui-tips">
                    <span>请填写正确的信息</span>
                  </div>
                </li>
                <li>
                  <input style="display:none"/>
                  <!-- for disable autocomplete on chrome -->
                  <input type="password" class="ui-input password" name="uPassword" placeholder="密码" autocomplete="off"/>
                  <div class="ui-tips">
                    <span>请填写正确的信息</span>
                  </div>
                </li>
                <li class="last">
                  <input type="submit" class="ui-btn login" value="登录"/>
                </li>
              </ul>
            </form>
            <div class="otherways">
              <h3>您可以通过以下方式直接登录</h3>
              <ul>
                <!-- <li><a href="" class="wb"><i></i>微博登录</a></li> -->
                <li>
                  <a href="javascript:void(0)" class="qq">
                    <i>&amp;nbsp;</i>QQ登录
                  </a>
                </li>
                <!-- <li><a href="" class="wx"><i></i>微信登录</a></li>
						<li><a href="" class="tb"><i></i>淘宝登录</a></li>
						<li><a href="" class="zfb"><i></i>支付宝登录</a></li> -->
              </ul>
            </div>
          </div>
        </div>
        <div class="mui-mbar-plugin plugin2" >
          <div class="plugin-cnt" id="mui-bar-plugin2">&amp;nbsp; </div>
        </div>
        <div class="mui-mbar-plugin plugin3">&amp;nbsp;</div>
        <div class="mui-mbar-plugin plugin4">
          <h2>
            <i class='i-close close-plugins'>&amp;nbsp;</i>
            <span>在线客服</span>
          </h2>
          <div class="plugin-cnt">
            <div class="logo">
              <img src="{$BaseServerUrl}/v3/img/indexv3/i051.png" alt=""/>
            </div>
            <ul class="qqlist" id="qqlist">
              &amp;nbsp;
            </ul>
          </div>
        </div>
        <div class="mui-mbar-plugin plugin5">&amp;nbsp;</div>
        <div class="mui-mbar-plugin plugin6">
          <h2>
            <i class='i-close close-plugins'>&amp;nbsp;</i>
            <span>意见反馈</span>
          </h2>
          <div class="plugin-cnt">
            <form id="feedbackForm">
              <ul>
                <li>
                  <p class='title'>
                    <cite>*</cite>问题描述<em>
                      <b>0</b>/250
                    </em>
                  </p>
                  <div class="td-cnt">
                    <textarea name="Content" class="ui-texterea" placeholder="不超过250字">&amp;nbsp;</textarea>
                  </div>
                  <div class="td-tips" style="color:#f60;">
                    提醒：请不要输入您的隐私信息。
                  </div>
                </li>
                <li>
                  <p class='title'>请问您是在购买以下哪类商品时遇到了问题？</p>
                  <div class="td-cnt">
                    <label>
                      <input type="radio" name="TypeID" value="0" data-name="母婴用品" />
                      <span>母婴用品</span>
                    </label>
                    <label>
                      <input type="radio" name="TypeID" value="1" data-name="个护美妆" />
                      <span>个护美妆</span>
                    </label>
                    <label>
                      <input type="radio" name="TypeID" value="2" data-name="营养保健" />
                      <span>营养保健</span>
                    </label>
                    <label>
                      <input type="radio" name="TypeID" value="3" data-name="奢侈品" />
                      <span>奢侈品</span>
                    </label>
                    <label>
                      <input type="radio" name="TypeID" value="4" data-name="服饰鞋帽" />
                      <span>服饰鞋帽</span>
                    </label>
                    <label>
                      <input type="radio" name="TypeID" value="5" data-name="居家日用" />
                      <span>居家日用</span>
                    </label>
                    <label>
                      <input type="radio" name="TypeID" value="6" data-name="进口汽车" />
                      <span>进口汽车</span>
                    </label>
                    <label>
                      <input type="radio" name="TypeID" value="7" data-name="其他" />
                      <span>其他</span>
                    </label>
                    <input type="hidden" name="TypeName"/>
                  </div>
                </li>
                <li>
                  <p class='title'>您常用的电子邮箱是？（请填写）</p>
                  <div class="td-cnt">
                    <input type="text" class="ui-input" name="Email"/>
                  </div>
                </li>
                <li>
                  <input type="submit" class="ui-btn " value="提交"/>
                </li>
              </ul>
            </form>
          </div>
        </div>

      </div>
    </div>
  </xsl:template>
</xsl:stylesheet>
