<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
                xmlns:wdbuynet="wdbuynet:extenstion">
  <xsl:include href="Param.xslt"/>
  <xsl:include href="Controls/header.xslt"/>
  <xsl:include href="Controls/footer.xslt"/>
  <xsl:include href="Controls/nav.xslt"/>
  <xsl:include href="Controls/cartbar.xslt"/>
  <xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />
  <xsl:template match="Root">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE"/>
        <title>中国保税网--明日预告</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/tomorrowsale.css"/>
        <script src="{$BaseServerUrl}/v3/js/public/html5shiv.js">&amp;nbsp;</script>
        <script src="{$BaseServerUrl}/v3/js/common/base.js">&amp;nbsp;</script>
      </head>
      <body>
        <!-- 头部（工具栏 + 搜索区）-->
        <xsl:call-template name="header"></xsl:call-template>
        <!-- 菜单 -->
        <xsl:call-template name="nav"></xsl:call-template>
        <section class="main">
          <!-- 明日预告 -->
          <div class="container">
            <div class='m-goods-list-wrap' id="goods-widget">
              <div class="blines">&amp;nbsp;</div>
              <div class="m-times-left">
                <div class="m-times-left-box">
                  <xsl:for-each select="OnTheHourSaleList/OnTheHourSaleItem">
                    <div class="m-goods-timeaxis">
                      <div class="times">
                        <span>
                          明日<b>
                            <xsl:value-of select="HourTime"/>
                          </b> <br />
                          准时开抢 <em>&amp;nbsp;</em>
                        </span>
                        <i>&amp;nbsp;</i>
                      </div>
                    </div>
                  </xsl:for-each>
                </div>
              </div>
              <xsl:for-each select="OnTheHourSaleList/OnTheHourSaleItem">
                <div class="m-goods-item">
                  <ul class="m-goods-list ">
                    <xsl:for-each select="ProductList/ProductItem">
                      <li class="good-item">
                        <div class="imgwrap">
                          <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                            <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                          </a>
                        </div>
                        <p class="title">
                          <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                            <xsl:value-of select="ProductName"/>
                          </a>
                        </p>
                        <div class="goodstatus">
                          <div class="staus-gird zhe">
                            <b>
                              <xsl:value-of select="Discount"/>
                            </b>折
                          </div>
                          <div class="staus-gird jia">
                            <strong>
                              <b>￥<xsl:value-of select="SalePrice"/>
                            </b>
                            </strong>
                            <ins>￥<xsl:value-of select="MarketPrice"/>
                          </ins>
                          </div>
                          <div class="staus-gird guo">
                            <p class='img'>
                              <img src="{$ImgServerUrl}/country/{CountryPic}" data-original="{$ImgServerUrl}/country/{CountryPic}" alt="" />
                            </p>
                            <p>
                              <xsl:value-of select="CountryName"/>
                            </p>
                          </div>
                        </div>
                      </li>
                    </xsl:for-each>
                  </ul>
                </div>
              </xsl:for-each>
            </div>
          </div>
        </section>
        <script type="text/javascript">seajs.use('w/presalse');</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>