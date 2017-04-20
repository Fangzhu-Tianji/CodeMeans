<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
                xmlns:wdbuynet="wdbuynet:extenstion">
  <xsl:include href="Param.xslt"/>
  <xsl:include href="Control/header.xslt"/>
  <xsl:include href="Control/footer.xslt"/>
  <xsl:include href="Control/nav.xslt"/>
  <xsl:include href="Control/cartbar.xslt"/>
  <xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />
  <xsl:template match="Root">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE"/>
        <title>中国保税网--竞拍详情</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/sale-product.css"/>
        <script src="{$BaseServerUrl}/v3/js/public/html5shiv.js">&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/sea.js'>&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/configure.js'>&amp;nbsp;</script>
      </head>
      <body>
        <!-- 头部（工具栏 + 搜索区）-->
        <xsl:call-template name="header"></xsl:call-template>
        <!-- 菜单 -->
        <xsl:call-template name="nav"></xsl:call-template>
        <div class="container">
          <!-- 当前位置面包屑导航 -->
          <div class="m-crumbs">
            <a href="#">首页</a>
            <b>&gt;</b>
            <a href="#">海外购</a>
            <b>&gt;</b>
            <em>日本原装进口纸尿裤M64 2包装 适合6-11kg男女宝宝</em>
          </div>
          <!-- 商品简单介绍区 -->
          <div class="baseProductInfo box">
            <div class="photo">
              <div class="bigPhoto jqzoom" id="jqzoom">
                <img id="proViewPhoto" src="{$BaseServerUrl}/v3/img/tmp/P002.jpg" bImg="{$BaseServerUrl}/v3/img/tmp/P003.jpg" alt="" />
              </div>
              <div class="smaPhoto" id="smaPhoto">
                <ul>
                  <li class="current">
                    <img src="{$BaseServerUrl}/v3/img/tmp/P001.jpg" mImg="{$BaseServerUrl}/v3/img/tmp/P002.jpg" bImg="{$BaseServerUrl}/v3/img/tmp/P003.jpg" alt="" />
                      <i>selected</i>
                    </li>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/tmp/P004.jpg" mImg="{$BaseServerUrl}/v3/img/tmp/P005.jpg" bImg="{$BaseServerUrl}/v3/img/tmp/P006.jpg" alt="" />
                      <i>selected</i>
                    </li>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/tmp/P001.jpg" mImg="{$BaseServerUrl}/v3/img/tmp/P002.jpg" bImg="{$BaseServerUrl}/v3/img/tmp/P003.jpg" alt="" />
                      <i>selected</i>
                    </li>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/tmp/P001.jpg" mImg="{$BaseServerUrl}/v3/img/tmp/P002.jpg" bImg="{$BaseServerUrl}/v3/img/tmp/P003.jpg" alt="" />
                      <i>selected</i>
                    </li>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/tmp/P001.jpg" mImg="{$BaseServerUrl}/v3/img/tmp/P002.jpg" bImg="{$BaseServerUrl}/v3/img/tmp/P003.jpg" alt="" />
                      <i>selected</i>
                    </li>
                </ul>
              </div>
              <div class="share box">
                <a href="javascript:;" class="sharePro">分享商品</a>
                <a href="javascript:;" class="collectionPro">
                  收藏商品（<em>32</em>）
                </a>
              </div>
            </div>
            <div class="maininfo fl" id="maininfo">&amp;nbsp;</div>
            <script id="maininfotmp" type="text/html">
              <h3>
                <a href="javascript:;">GP-Girard Perregaux/芝柏1945系列男士机械腕表25880-52-721-BB6A</a>
              </h3>
              <p class="status">
                <i>{{statustext}}</i>
                <span class="cutdown">
                  {{if isstart == 0}}
                  距开始：
                  {{else if isstart == 1}}
                  距结束：
                  {{else}}
                  已经结束：
                  {{/if}}
                  <em>{{hour}}</em>时
                  <em>{{minute}}</em>分
                  <em>{{second}}</em>秒
                  <em>{{msecond}}</em>
                </span>
              </p>
              <p class="price">
                <span class="current">
                  当前价：<em>
                    ¥<b>{{saleprice}}</b>
                  </em>
                </span>
                <span>
                  最低成交价：<em>
                    ¥<b>{{minprice}}</b>
                  </em>
                </span>
              </p>

              <div class="salebox" id="salebox">
                <div class="title">
                  <span>
                    参拍条件：{{extprice}}元保证金<a href="#detailArea_2" >（查看拍卖规则）</a>
                  </span>
                </div>
                {{if marginstatus == 1}}
                {{if isstart == 1}}
                <div class="inputwrap">
                  <a href="javascript:;" class="del fl"></a>
                  <span class="fl numinput">{{needpricetext}}</span>
                  <input type="hidden" name="money" readonly="" value="{{needprice}}"  style="ime-mode:disabled;" onpaste="return false;" />
                    <a href="javascript:;" class="add fl"></a>
                    <span class="i-tips fl"></span>
                  </div>
                <div class="button">
                  <a href="javascript:;" class="purchase ui-btn" id="purchase">我要出价</a>
                </div>
                {{else}}
                <div class="inputwrap">
                  <a href="javascript:;" class="del fl"></a>
                  <span class="fl invaidinput">{{needpricetext}}</span>
                  <input type="hidden" name="money" readonly="" value="{{needprice}}"  style="ime-mode:disabled;" onpaste="return false;" />
                    <a href="javascript:;" class="add fl"></a>
                    <span class="i-tips fl">当前时间不是活动时间</span>
                  </div>
                <div class="button">
                  <a href="javascript:;" class="ui-btn disabled">我要出价</a>
                </div>
                {{/if}}
                {{else}}
                {{if isstart == 1}}
                <p class="ui-p margin">
                  <span>
                    保证金：<em>
                      ¥<b>{{extprice}}</b>
                    </em>
                  </span>
                </p>
                <p class="ui-p protocol">
                  <label>
                    <input type="checkbox" id="protocol_check" />
                      <span>
                        我已阅读并同意<a href="saleprotocol.php" target="_blank">《用户竞拍服务协议》</a>
                      </span>
                    </label>
                </p>
                <div class="button">
                  <a href="javascript:;" class="apply disabled ui-btn" data-url="salepay.php">交保证金报名</a>
                </div>
                {{else}}
                <p class="ui-p margin">
                  <span>
                    保证金：<em>
                      ¥<b>{{extprice}}</b>
                    </em>
                  </span>
                </p>
                <p class="ui-p protocol">
                  <label>
                    <input type="checkbox" id="protocol_check" disabled="" />
                      <span>
                        我已阅读并同意<a href="saleprotocol.php" target="_blank">《用户竞拍服务协议》</a>
                      </span>
                    </label>
                </p>
                <div class="button">
                  <a href="javascript:;" class="apply disabled ui-btn">交保证金报名</a>
                </div>
                {{/if}}
                {{/if}}
              </div>
              <div class="tips" id="saleboxtips">
                <p>
                  <span class="fl">起拍价格：¥{{startprice}}元</span>
                  <span class="fl">
                    最小加价幅度：¥<em class="stepprice" data-step="{{stepprice}}">{{stepprice}}</em>元
                  </span>
                </p>
                <p>
                  {{if minprice > 0}}
                  <span class="fl">最低成交价：{{minprice}}</span>
                  {{else}}
                  <span class="fl">最低成交价：无</span>
                  {{/if}}
                </p>
              </div>
            </script>
            <div class="bidrecords fl" id="bidrecords">
              <div class="title">
                出价记录（共<em id="recordnum">&amp;nbsp;</em>条）
              </div>
              <div class="ultabs">
                <span class="item item1">时间</span>
                <span class="item item2">详情</span>
                <span class="item item3">状态</span>
              </div>
              <ul class="recordlist">&amp;nbsp;</ul>
              <script type="text/html" id="bidrecordstmp">
                <![CDATA[ {{each Data as value index}}
                  {{if index < 6}}
						<li>
                    <div class="item item1">
                      {{value.CreateTime}}
                    </div>
                    <div class="item item2">
                      <p>{{value.UserName}}</p>
                      <p>¥{{value.Price}}</p>
                    </div>
                    <div class="item item3">
                      {{if index==0 && PageIndex == 1}}
                      <i class="i-status lead">领先</i>
                      {{else}}
                      <i class="i-status">出局</i>
                      {{/if}}
                    </div>
                  </li>
                  {{else}}

                  {{/if}}
                  {{/each}}
                  ]]>
              </script>
              <div class="footer">
                <a href="javascript:;" class="loadmore" id="showRecordMoew">查看更多</a>
              </div>
            </div>

          </div>
          <div class="sale-ads box container">
            <img src="{$BaseServerUrl}/v3/img/sale/i009.png" alt="" />
          </div>
          <!-- 详情介绍区 -->
          <div class="detailProductInfo box">

            <!-- 左侧热卖商品推荐 -->
            <div class="hostProduct f1">
              <div class="title">热卖商品</div>
              <div class="plist">
                <ul>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P010.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P011.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P010.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P011.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P010.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P011.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P010.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P011.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P010.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                  <li>
                    <p class="img">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">
                        <img src="{$BaseServerUrl}/v3/img/tmp/P011.jpg" alt="" />
                        </a>
                    </p>
                    <p class="name">
                      <a href="#" target="_blank" title="日本原装进口纸尿裤新生大号">日本原装进口纸尿裤新生大号</a>
                    </p>
                    <p class="price">
                      <em>进口价：￥536</em>
                      <span>省：￥188</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 右侧详情介绍 -->
            <div class="detailArea f2">
              <div class="rtSubWrap box">

                <!-- 商品详情 -->
                <div class="item" id="detailArea_0">
                  <!-- 详情标题导航 -->
                  <div class="detailMenuWrap">
                    <div class="detailMenu" id="detailMenu">
                      <ul>
                        <li class="current">
                          <span>商品详情</span>
                        </li>
                        <li>
                          <span>
                            出价记录（<em id="pronums">8</em>）
                          </span>
                        </li>
                        <li>
                          <span>拍卖规则</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="detailContent">
                    <!-- 温馨提示 -->
                    <div class="wxtishi">
                      <h2>温馨提示：</h2>
                      <ul>
                        <li>1、商品仅限个人自用，不能二次销售；</li>
                        <li>2、所售商品适用标准为原产国，可能与中国标准不符；</li>
                        <li>3、产品本身可能没有中文标签，如有需要可查阅销售页面的商品详情。</li>
                      </ul>
                    </div>
                    <!-- 商品属性 -->
                    <div class="proAttribute">
                      <ul class="box">
                        <li>货号：AO44003*2</li>
                        <li>货号：AO44003*2</li>
                        <li>品牌：Wyeth/惠氏</li>
                        <li>品牌：Wyeth/惠氏</li>
                        <li>适用年龄：1-3周岁</li>
                        <li>适用年龄：1-3周岁</li>
                        <li>商品规格：900g*2</li>
                        <li>商品规格：900g*2</li>
                        <li>保质期：24个月</li>
                        <li>&amp;nbsp;</li>
                      </ul>
                    </div>
                    <!-- 图文介绍 -->
                    <div class="proEditer">
                      <p>
                        <img src="{$BaseServerUrl}/v3/img/tmp/P008.jpg" alt="" />
                      </p>
                      <p>
                        <img src="{$BaseServerUrl}/v3/img/tmp/P009.jpg" alt="" />
                      </p>
                    </div>
                  </div>

                </div>
                <!-- 出价记录 -->
                <div class="item" id="detailArea_1">
                  <div class="detailArea-cnt">&amp;nbsp; </div>
                </div>
                <script id="recordstmp" type="text/html">
                  <![CDATA[   <div class="itemTitle">
                      <b>出价记录（{{TotalCount}}）</b>
                      <em>RECORD</em>
                    </div>
                    <div class="detailContent recordscnt">
                      <table>
                        <thead>
                          <th style="width:8%;">状态</th>
                          <th style="width:30%;">价格</th>
                          <th style="width:30%;">竞拍人</th>
                          <th style="width:32%;">时间</th>
                        </thead>
                        <tbody id="recordscnt">
                          {{each Data as value index}}
                          {{if index==0 && PageIndex == 1}}
                          <tr class="first">
                            <td class="status">
                              <span>领先</span>
                            </td>
                            {{else}}
                            <tr>
                              <td class="status">
                                <span>出局</span>
                              </td>
                              {{/if}}
                              <td class="price">¥{{value.Price}}</td>
                              <td class="members">{{value.UserName}}</td>
                              <td class="time">{{value.CreateTime}}</td>
                            </tr>
                            {{/each}}
                          </tbody>
                      </table>
                      <div class="pagebarWrap">
                        <!-- 存放分页条 include("inc/m-pagebar.php"); -->
                      </div>
                    </div>]]>
                </script>
                <!-- 拍卖规则 -->
                <div class="item" id="detailArea_2">
                  <div class="itemTitle">
                    <b>拍卖规则</b>
                    <em>RULES</em>
                  </div>
                  <div class="detailContent rulescnt">
                    <h2>卖家承诺</h2>
                    <h3>一、服务承诺</h3>
                    <h4>A.商家承诺</h4>
                    <p>
                      1.卖家承诺所发拍品均为真品。
                      <br />
                      2.卖家成交不卖，卖家应将保证金退一赔一给竞买成功人。
                      <br />3.竞拍成功后，拍品全国包邮(港澳台除外)。其中拍品重50斤以上（大件家具30斤）或面积大于2个平方不包邮，二手车、房地产、运输设备、不动产、明星见面会等也不包邮。
                    </p>
                    <h4>B. 拍卖行承诺</h4>
                    <p>
                      1.拍卖行承诺如实描述拍品。
                      <br />
                      2.拍卖行成交不卖，拍卖行应将保证金退一赔一向竞买成功人。
                      <br />
                      3.关于拍卖行佣金收取：依据《中华人民共和国拍卖法》的规定，竞买人在竞拍成功后，需根据拍卖行约定（商品页面描述佣金额），缴纳约定比例、数额的佣金。
                      <br />4.关于运费：由竞买成功人承担，以拍卖行实际商品描述运费为准。（如：贵重商品额外保险费用需要由竞买成功人承担）。
                    </p>
                    <h3>二、竞拍活动基础服务</h3>
                    <p>
                      1.如实描述承诺：卖家承诺如实描述，一旦发现描述不符的拍品，买家可在交易成功后指定期限内向京东投诉卖家。
                      <br />
                      2.如实描述承诺：卖家承诺如实描述，一旦发现描述不符的拍品，买家可在交易成功后指定期限内向京东投诉卖家。
                      <br />3.保证金保障：卖家入驻竞拍平台需缴纳较高的经营保证金，买家维权有保障。
                    </p>
                    <h3>三、拍卖特色服务</h3>
                    <h4>A. 支持7天无理由退货</h4>
                    <p>
                      7天无理由退货是指卖家在承诺如实描述和成交必卖的基础上，自愿选择向买家提供的特色服务之一，符合如下退换货条件的买家可以申请退换货：
                      <br />
                      1.买家在收到货品后对商品不满意。
                      <br />
                      2.商品配件、吊牌完整；不存在被洗过、穿过、人为破坏或标牌拆卸等影响二次销售的情况。
                      <br />
                      3.非预定或订制类商品。
                      <br />
                      4.其他根据相关法律法规或京东平台规则规定符合7天无理由退换货的情形。
                      <br />特别提醒：为避免由于商品滞留造成的经济损失，所有退换货商品，买家应在所规定之时间内发回（以物流签收运单显示时间为准），超过规定时间仍不能将退换商品发出的，请买家与卖家自行协商处理办法。
                      非商品质量问题的退换货，由买家承担退货运费；因质量问题产生的退换货，退货运费由卖家承担。
                    </p>
                    <h4>B. 支持线下预览</h4>
                    <p>支持线下预览是指卖家已选定场地预展拍品，竞买人可在竞拍结束前，亲自或委托他人查看竞拍品实物。</p>
                    <h4>C. 提供鉴定证书</h4>
                    <p>选择提供鉴定证书即卖家承诺所发布的拍品已取得省级以上鉴定证书或作者本人出具的书面鉴定文本。</p>
                    <h2>保证金须知</h2>
                    <h3>一、保证金的缴纳：</h3>
                    <p>
                      保证金是竞拍人参加竞拍的凭证，如竞拍人有意参加相关商品竞拍活动，则须缴纳卖家设置的参与竞拍活动的保证金；保证金的缴纳方式为以订单的形式通过网上银行进行支付。
                      <br />
                      缴纳次数：
                      <br />
                      如参加升价拍，每个商品的竞拍只需要缴纳一次保证金；
                      <br />如参加降价拍，每出价一次都需要缴纳一次保证金，并且每次出价只可以竞拍一件拍品。
                    </p>
                    <h3>二、保证金的返还：</h3>
                    <p>
                      在符合以下条件时将原路退还客户保证金：
                      <br />
                      1.竞拍人未成功竞拍商品：例如在竞拍过程中始终未出价、在竞拍过程中放弃加价等情况；
                      <br />
                      2.竞拍人竞拍成功后并在竞拍规则规定时间内付款；
                      <br />
                      3.竞拍人竞拍成功后并在竞拍规则规定时间内付款；
                      <br />竞拍结束后，系统会自动在1-15个工作日内将款项内退还到支付账号中，如您缴纳的竞拍保证金符合退还条件，但是系统未予退还，您可以联系京东客服400-606-5500，我们会尽快帮您处理。
                    </p>
                    <h3>三、保证金的扣除：</h3>
                    <p>
                      1.在升价拍竞拍成功之时起的24小时内，未将拍品转换成订单的；或竞拍成功后72小时内未按照成交价格支付拍品货款的；在降价拍竞拍成功之时起的24小时内未按照成交价格支付拍品货款的。
                      <br />
                      2.在竞拍成功且付款后，竞拍人申请退款（卖家提供7天无理由退货服务的除外）。
                      <br />
                      <img src="{$BaseServerUrl}/v3/img/sale/rules.jpg" alt="" />

                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <script type="text/javascript">seajs.use('w/bidDetails');</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>