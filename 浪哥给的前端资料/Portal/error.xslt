<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
                xmlns:wdbuynet="wdbuynet:extenstion">
  <xsl:include href="Param.xslt"/>
  <xsl:include href="Control/header.xslt"/>
  <xsl:include href="Control/copyright.xslt"/>
  <xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />
  <xsl:template match="Root">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE"/>
        <title>Error 错误页面</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/error.css"/>
        <script src="{$BaseServerUrl}/v3/js/public/html5shiv.js">&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/sea.js'>&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/configure.js'>&amp;nbsp;</script>
      </head>
      <body>
        <!-- 头部（工具栏 + 搜索区）-->
        <xsl:call-template name="header"></xsl:call-template>
        <section class="container">
          <div class="errorTips">
            <div class="icon">
              <img src="{$BaseServerUrl}/v3/img/public/i-1042.jpg" alt="" />
			</div>
            <div class="text">
              <h2>抱歉！没有找到相关的商品</h2>
              <h3>建议您：</h3>
              <p>1、看看输入的文字是否有误。</p>
              <p>2、调整关键词，减少条件限制。</p>
            </div>
          </div>
          <div class="eavlProducts">
            <h2>热卖商品推荐</h2>
            <script id="hotsGoods" type="text/html">
              {{each data as v i}}
              <li>
                <p class="img">
                  <a href="{{v.url}}" target="_blank" title="{{v.productName}}">
                    <img src="{{v.photoSrc}}" alt="" />
                  </a>
                </p>
                <p class="name">
                  <a href="{{v.url}}" target="_blank" title="{{v.productName}}">
                    {{v.productName}}<br />￥{{v.price}}</a>
                </p>
                <p class="eval">
                  <a href="{{v.url}}">立即购买</a>
                </p>
              </li>
              {{/each}}
            </script>
            <ul>
            </ul>
          </div>
        </section>
        <footer class="m-footer">
          <xsl:call-template name="copyright"></xsl:call-template>
        </footer>


        <script type="text/javascript">seajs.use('w/error');</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>