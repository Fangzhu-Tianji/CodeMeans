<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fn="http://unmi.cc/fn">
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
        <title>
          <xsl:value-of select="ProductName"/>--中国保税网
        </title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/product.css"/>
        <script src="{$BaseServerUrl}/v3/js/public/html5shiv.js">&amp;nbsp;</script>
        <script src="{$BaseServerUrl}/v3/js/common/base.js">&amp;nbsp;</script>
      </head>
      <body>
        <!-- 头部（工具栏 + 搜索区）-->
        <xsl:call-template name="header"></xsl:call-template>
        <!-- 菜单 -->
        <xsl:call-template name="nav"></xsl:call-template>
        <div class='container'>
          <!-- 当前位置面包屑导航 -->
          <div class="m-crumbs">
            <a href="{$PortalUrl}/">首页</a>
            <xsl:value-of select="Navigation"/>
          </div>
          <!-- 商品简单介绍区 -->
          <div class="baseProductInfo box">
            <div class="photo">
              <div class="bigPhoto jqzoom" id="jqzoom">
                <xsl:for-each select="ProductImageList/ProductImage[position()=1]">
                  <img id="proViewPhoto" src="{ImagePath2}" bImg="{ImagePath1}" alt=""/>
                </xsl:for-each>
              </div>
              <div class="smaPhoto" id="smaPhoto">
                <ul>
                  <xsl:for-each select="ProductImageList/ProductImage">
                    <li class="{fn:getResultStr(position()=1,'current')}">
                      <img src="{ImagePath3}" mImg="{ImagePath2}" bImg="{ImagePath1}" alt=""/>
                      <i>selected</i>
                    </li>
                  </xsl:for-each>
                </ul>
              </div>
              <div class="share box">
                <div class="bshare-custom">
                  <a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);">&amp;nbsp;</a>
                  <a title="分享到QQ空间" class="bshare-qzone">&amp;nbsp;</a>
                  <a title="分享到腾讯微博" class="bshare-qqmb">&amp;nbsp;</a>
                  <a title="分享到微信" class="bshare-weixin" href="javascript:void(0);">&amp;nbsp;</a>
                  <a title="分享到新浪微博" class="bshare-sinaminiblog" href="javascript:void(0);">&amp;nbsp;</a>
                  <a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis">&amp;nbsp;</a>
                </div>
                <a href="javascript:;" data-pid="{ProductID}" data-name="{ProductName}" class="collectionPro">
                  收藏商品（<em>
                    <xsl:value-of select="FavoriteCount"/>
                  </em>）
                </a>
              </div>
            </div>
            <div class="info">
              <div class="rtSubWrap">
                <div class="topBrand box">
                  <div class="country">
                    <img src="{CountryPic}"/>
                    <span>
                      <xsl:value-of select="CountryName"/>
                      <br/>
                      <xsl:value-of select="WarehouseName"/>
                    </span>
                  </div>
                  <div class="brand">
                    <img src="{BrandPic}"/>
                  </div>
                </div>
                <div class="title">
                  <h1>
                    <xsl:value-of select="ProductName"/>
                  </h1>
                  <p>
                    <xsl:value-of select="Description"/>
                  </p>
                </div>
                <div class="price box">
                  <p class="sub01 box">
                    <span class="import">
                      <i>进口价:</i>
                      <em>￥</em>
                      <b>
                        <xsl:value-of select="SalePrice"/>
                      </b>
                    </span>
                    <!--<span class="original">
                      <em>原价:</em>
                      <b>￥280</b>
                    </span>-->
                    <!--<span class="freight">邮费6元</span>-->
                  </p>
                  <p class="sub02 box">
                    <span>
                      国内价:￥<xsl:value-of select="MarketPrice"/>
                    </span>
                    <span>
                      省:￥<xsl:value-of select="PrivilegePrice"/>
                    </span>
                  </p>
                  <p class="sub03 box">
                    <i>免</i> 进口税率 <xsl:value-of select="TaxRate"/>% ,税费 <xsl:value-of select="Taxfees"/> 元/件， 进口税小于等于50元免征  <a target="_blank" href="{$BaseServerUrl}/about/rules.html">[进口税细则]</a>
                  </p>
                </div>
                <div class="changeArea box">
                  <xsl:for-each select="CategoryAttrList/CategoryAttrItem">
                    <div class="stage box">
                      <dl>
                        <dt>
                          <xsl:value-of select="FontName"/>：
                        </dt>
                        <dd>
                          <div class="ddWrap" id="stageArea">
                            <xsl:for-each select="AttrValues/AttrValueItem">
                              <a href="javascript:;">
                                <xsl:if test="OnSheildFlag='True'">
                                  <xsl:attribute name="href">
                                    <xsl:value-of select="AttrLink"/>
                                  </xsl:attribute>
                                </xsl:if>
                                <xsl:if test="OnSheildFlag='False'">
                                  <xsl:attribute name="class">
                                    <xsl:text>disabled</xsl:text>
                                  </xsl:attribute>
                                </xsl:if>
                                <span>
                                  <xsl:if test="IsThis='True'">
                                    <xsl:attribute name="class">
                                      <xsl:text>selected</xsl:text>
                                    </xsl:attribute>
                                  </xsl:if>

                                  <xsl:value-of select="CustomValue"/>
                                  <i>selected</i>
                                </span>
                              </a>
                            </xsl:for-each>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </xsl:for-each>
                  <div class="number box">
                    <dl>
                      <dt>数量：</dt>
                      <dd>
                        <div class="ddWrap">
                          <div class="numberCount" id="proNumberCount">
                            <button class="reduce">-</button>
                            <input class="count" type="text" value="1" id="buy-num" data-pid="{ProductID}" data-status="0" readonly="readonly"/>
                            <button class="increase">+</button>
                          </div>
                          <!--<div class="numberInfo">
                            <span>
                              （库存<em>275</em>件）
                            </span>
                            <span>
                              每人一天限制<b>3</b>罐
                            </span>
                          </div>-->
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div class="submit box">
                    <button class="mustBuy" id="buyNowBtn">立即抢购</button>
                    <button class="addShopCar" id="InitCartUrl">加入购物车</button>
                  </div>
                  <div class="qrcode">
                    <img src="{QRCodeImg}"/>
                    <br/>手机扫描购买
                  </div>
                </div>
                <div class="support box">
                  <ul>
                    <li>
                      <i class="icon-01">&amp;nbsp;</i>
                      <span>支持支付宝</span>
                    </li>
                    <li>
                      <i class="icon-02">&amp;nbsp;</i>
                      <span>支持网上银行</span>
                    </li>
                    <li>
                      <i class="icon-03">&amp;nbsp;</i>
                      <span>支持免运卡</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 详情介绍区 -->
          <div class="detailProductInfo box">
            <!-- 左侧热卖商品推荐 -->
            <div class="hostProduct f1">
              <div class="title">热卖商品</div>
              <div class="plist">
                <ul>
                  <xsl:for-each select="HotSaleProductList/HotSaleProductItem">
                    <li>
                      <p class="img">
                        <a href="/{ProductID}.html" target="_blank" title="{ProductName}">
                          <img src="{$BaseServerUrl}/v3/img/tmp/P010.jpg" alt="{ProductName}"/>
                        </a>
                      </p>
                      <p class="name">
                        <a href="{$ProductUrl}/{ProductID}.html" target="_blank" title="{ProductName}">
                          <xsl:value-of select="ProductName"/>
                        </a>
                      </p>
                      <p class="price">
                        <em>
                          进口价：￥<xsl:value-of select="@SalePrice"/>
                        </em>
                      </p>
                    </li>
                  </xsl:for-each>
                </ul>
              </div>
            </div>
            <!-- 右侧详情介绍 -->
            <div class="detailArea f2">
              <div class="rtSubWrap box">
                <!-- 商品详情 -->
                <div class="item floor" id="detailArea_0" data-idx="0">
                  <!-- 详情标题导航 -->
                  <div class="detailMenuWrap">
                    <div class="detailMenu" id="detailMenu">
                      <ul class="elevator" id="elevator">
                        <li class="handler current" data-idx="0">
                          <span>商品详情</span>
                        </li>
                        <li class="handler" data-idx="1">
                          <span>
                            用户评价（<em>
                              <xsl:value-of select="Suncom"/>
                            </em>）
                          </span>
                        </li>
                        <li class="handler" data-idx="2">
                          <span>购物保证</span>
                        </li>
                        <li class="handler" data-idx="3">
                          <span>商品咨询</span>
                        </li>
                      </ul>
                      <a href="javascript:;" class="addShopCar">加入购物车</a>
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
                        <xsl:for-each  select="ProductNormsList/ProductNormsItem">
                          <li>
                            <xsl:value-of select="NormsName"/>：<xsl:value-of select="NormsValue"/>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <!-- 图文介绍 -->
                    <div class="proEditer">
                      <xsl:value-of select="DetailledIntro"/>
                    </div>
                  </div>
                </div>
                <!-- 用户评价 -->
                <div class="item floor" id="detailArea_1" data-idx="1">
                  <div class="itemTitle">
                    <b>用户评价</b>
                    <em>COMMENT</em>
                  </div>
                  <div class="detailContent">
                    <!-- 评价区 -->
                    <div class="commentDataView">
                      <!-- if -->
                      <div class="lt">
                        <div class="rate">
                          <strong>
                            <xsl:value-of select="GoodPercentage"/>
                            <span>%</span>
                          </strong>
                          <br />
                          <span>好评度</span>
                        </div>
                      </div>
                      <div class="split">&amp;nbsp;</div>
                      <div class="percent">
                        <dl>
                          <dt>
                            好评<span>
                              (<xsl:value-of select="GoodPercentage"/>%)
                            </span>
                          </dt>
                          <dd>
                            <div style="width: {GoodPercentage}%;">&amp;nbsp;</div>
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            中评<span>
                              (<xsl:value-of select="MiddlePercentage"/>%)
                            </span>
                          </dt>
                          <dd>
                            <div style="width: {MiddlePercentage}%;">&amp;nbsp;</div>
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            差评<span>
                              (<xsl:value-of select="BadPercentage"/>%)
                            </span>
                          </dt>
                          <dd>
                            <div style="width: {BadPercentage}%;">&amp;nbsp;</div>
                          </dd>
                        </dl>
                      </div>
                      <!-- else -->
                      <!-- 
							<div class="noData">
								暂无评价
							</div> 
							-->
                      <!-- end if -->
                      <div class="split">&amp;nbsp;</div>
                      <div class="rt">
                        <p>我购买过此单</p>
                        <p>
                          <a href="{$MemberUrl}/evaluate.html" class="commentBtn" id="toCommentBtn">我要评价</a>
                        </p>
                      </div>
                    </div>
                    <div class="commentTitle" id="commentTab">
                      <label>
                        <input type="radio" name="commentListSeclect" value="0" checked="checked" id="cls01"/>
                        全部(<em>
                          <xsl:value-of select="Suncom"/>
                        </em>)
                      </label>
                      <label>
                        <input type="radio" name="commentListSeclect" value="1" id="cls02"/>
                        晒单(<em>
                          <xsl:value-of select="Shaidancom"/>
                        </em>)
                      </label>
                    </div>
                    <div class="commentItem" id="commentItem">&amp;nbsp;</div>
                    <div class="pagebarWrap text-right">
                      <ul id="commentPagination" class="pagination">&amp;nbsp;</ul>
                    </div>
                  </div>
                </div>
                <!-- 购物保证 -->
                <div class="item floor" id="detailArea_2" data-idx="2">
                  <div class="itemTitle">
                    <b>购物保证</b>
                    <em>GUARANTEE</em>
                  </div>
                  <div class="detailContent">
                    <div class="proIdeas">
                      <ul>
                        <li>
                          <img src="{$BaseServerUrl}/v3/img/public/idea1.png"/>
                          <h2>正品保证</h2>
                          <h6>进口正品 海关监管</h6>
                        </li>
                        <li>
                          <img src="{$BaseServerUrl}/v3/img/public/idea2.png"/>
                          <h2>极速发货</h2>
                          <h6>海关发货 国内物流</h6>
                        </li>
                        <li>
                          <img src="{$BaseServerUrl}/v3/img/public/idea3.png"/>
                          <h2>贴心省钱</h2>
                          <h6>海外价格 人民币支付</h6>
                        </li>
                        <li>
                          <img src="{$BaseServerUrl}/v3/img/public/idea4.png"/>
                          <h2>售后保障</h2>
                          <h6>七天包退 国内售后</h6>
                        </li>
                      </ul>
                    </div>
                    <!-- 图文介绍 -->
                    <div class="proEditer">
                      <p>&amp;nbsp;</p>
                      <p>
                        <img src="{$BaseServerUrl}/v3/img/public/i-0012.jpg" alt=""/>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- 商品咨询 -->
                <div class="item floor" id="detailArea_3" data-idx="3">
                  <div class="itemTitle">
                    <b>商品咨询</b>
                    <em>COMMENT</em>
                  </div>
                  <div class="detailContent">
                    <div class="proConsultation" id="proConsultBox">
                      &amp;nbsp;
                    </div>
                    <div class="pagebarWrap text-right">
                      <ul id="consultPagination" class="pagination">&amp;nbsp;</ul>
                    </div>
                    <!-- 咨询表单 -->
                    <div class="proConsultationForm box">
                      <h6>咨询回复的工作时间为：周一至周五，9:00至18:00，请耐心等待工作人员回复。</h6>
                      <form id="CounselFrom">
                        <input type="hidden" name="ProductID" value="{ProductID}" />
                        <input type="hidden" name="ProductName" value="{ProductName}" />
                        <dl>
                          <dt>咨询类型：</dt>
                          <dd>
                            <label>
                              <input type="checkbox" name="CounselType" value="1" />商品咨询
                            </label>
                            <label>
                              <input type="checkbox" name="CounselType" value="2" />库存及配送
                            </label>
                            <label>
                              <input type="checkbox" name="CounselType" value="3" />支付问题
                            </label>
                            <label>
                              <input type="checkbox" name="CounselType" value="4" />发票及保修
                            </label>
                            <label>
                              <input type="checkbox" name="CounselType" value="5" />其他问题
                            </label>
                            <span class="td-tips">&amp;nbsp;</span>
                          </dd>
                        </dl>
                        <dl>
                          <dt>咨询内容：</dt>
                          <dd>
                            <textarea name="CounselContent">&amp;nbsp;</textarea>
                            <div>
                              <span class="td-tips">&amp;nbsp;</span>
                            </div>
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            <xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text>
                          </dt>
                          <dd>
                            <input type="submit" value="提交" class="submitBtn"/>
                          </dd>
                        </dl>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <xsl:call-template name="cartbar"></xsl:call-template>
        <script type="text/javascript">seajs.use('w/product');</script>
        <script src='{$BaseServerUrl}/v3/js/public/bshare.js'>&amp;nbsp;</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>