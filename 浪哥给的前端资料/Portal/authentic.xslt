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
        <title>中国保税网--正品保证</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/ggct.css"/>
        <script src="{$BaseServerUrl}/v3/js/public/html5shiv.js">&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/sea.js'>&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/configure.js'>&amp;nbsp;</script>
      </head>
      <body>
        <!-- 头部（工具栏 + 搜索区）-->
        <xsl:call-template name="header"></xsl:call-template>
        <!-- 菜单 -->
        <xsl:call-template name="nav"></xsl:call-template>
        <section class="main">
          <div class="block block1">

            <i class="leaf leaf1" style="top:660px;margin-left: -300px;">
              <img src="{$BaseServerUrl}/v3/img/ggct/i025.png" alt="" />
            </i>
            <i class="leaf leaf2" style="top:500px;margin-left: 500px;">
              <img src="{$BaseServerUrl}/v3/img/ggct/i026.png" alt="" />
            </i>

            <img src="{$BaseServerUrl}/v3/img/ggct/i001.jpg" alt="" />
              <div class="container promise">
                <img src="{$BaseServerUrl}/v3/img/ggct/i002.jpg" alt="" />
			</div>
            </div>
          <div class="block block2">
            <i class="leaf leaf1" style="top:360px;left:0px;">
              <img src="{$BaseServerUrl}/v3/img/ggct/i024.png" alt="" />
            </i>
            <i class="leaf leaf2" style="top:1059px;margin-left: 600px;">
              <img src="{$BaseServerUrl}/v3/img/ggct/i026.png" alt="" />
            </i>
            <div class="title">
              <img src="{$BaseServerUrl}/v3/img/ggct/i003.png" alt="" />
                <i></i>
              </div>
            <div class="container">
              <div class='row row1'>
                <img src="{$BaseServerUrl}/v3/img/ggct/i004.png" alt="" />
				</div>
              <ul class="row row2">
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i003.jpg" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i004.jpg" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i005.jpg" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i006.jpg" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i007.jpg" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i008.jpg" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i009.jpg" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i010.jpg" alt="" />
                </li>
              </ul>
              <div class='row row3'>
                <img src="{$BaseServerUrl}/v3/img/ggct/i005.png" alt="" />
				</div>
              <ul class="row row4">
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i011.jpg" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i012.jpg" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i013.jpg" alt="" />
                </li>
              </ul>
            </div>
            <div class="row row5">
              <img src="{$BaseServerUrl}/v3/img/ggct/i006.png" alt="" />
			</div>
          </div>
          <div class="block block3">
            <i class="leaf leaf1" style="top:120px;margin-left: -700px;">
              <img src="{$BaseServerUrl}/v3/img/ggct/i023.png" alt="" />
            </i>
            <i class="leaf leaf2" style="top:900px;margin-left: 700px;">
              <img src="{$BaseServerUrl}/v3/img/ggct/i027.png" alt="" />
            </i>
            <div class="title">
              <img src="{$BaseServerUrl}/v3/img/ggct/i007.png" alt="" />
                <i></i>
              </div>
            <div class="container">
              <div class='row row1'>
                <img src="{$BaseServerUrl}/v3/img/ggct/i008.png" alt="" />
				</div>
              <div class="row row2">
                <ul>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/ggct/i014.jpg" alt="" />
                  </li>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/ggct/i015.jpg" alt="" />
                  </li>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/ggct/i016.jpg" alt="" />
                  </li>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/ggct/i017.jpg" alt="" />
                  </li>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/ggct/i018.jpg" alt="" />
                  </li>
                  <li>
                    <img src="{$BaseServerUrl}/v3/img/ggct/i019.jpg" alt="" />
                  </li>
                </ul>
              </div>
              <div class='row row3'>
                <img src="{$BaseServerUrl}/v3/img/ggct/i010.png" alt="" />
				</div>
              <div class="row row4">
                <img src="{$BaseServerUrl}/v3/img/ggct/i020.jpg" alt="" />
				</div>
              <ul class="row row5">
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i016.png" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i015.png" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i014.png" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i013.png" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i012.png" alt="" />
                </li>
                <li>
                  <img src="{$BaseServerUrl}/v3/img/ggct/i011.png" alt="" />
                </li>
              </ul>
            </div>
            <div class="row row6">
              <img src="{$BaseServerUrl}/v3/img/ggct/i019.png" alt="" />
			</div>
          </div>
          <div class="block block4">
            <i class="leaf leaf1" style="top:320px;margin-left: -700px;">
              <img src="{$BaseServerUrl}/v3/img/ggct/i027.png" alt="" />
            </i>
            <i class="leaf leaf2" style="top:900px;margin-left: 0px;">
              <img src="{$BaseServerUrl}/v3/img/ggct/i027.png" alt="" />
            </i>
            <div class="title">
              <img src="{$BaseServerUrl}/v3/img/ggct/i017.png" alt="" />
                <i></i>
              </div>
            <div class="container">
              <div class="row row1">
                <img src="{$BaseServerUrl}/v3/img/ggct/i018.png" alt="" />
				</div>
              <div class="row row2">
                <img src="{$BaseServerUrl}/v3/img/ggct/i021.jpg" alt="" />
				</div>
              <div class="row row3">
                <img src="{$BaseServerUrl}/v3/img/ggct/i020.png" alt="" />
				</div>
              <div class="row row4">
                <img src="{$BaseServerUrl}/v3/img/ggct/i022.jpg" alt="" />
				</div>
            </div>
            <div class="row row5">
              <img src="{$BaseServerUrl}/v3/img/ggct/i021.png" alt="" />	
			</div>
          </div>

        </section>



        <script type="text/javascript">seajs.use('w/authenic');</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>