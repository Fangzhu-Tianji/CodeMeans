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
        <title>中国保税网--全球限量</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/globalsale.css"/>
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
          <!-- 商品展示区 -->
          <div class="container">
            <section class='block row'>
              <div class='row-grid row-grid-1'>
                <h2>
                  <img src="{$BaseServerUrl}/v3/img/sale/i006.png" alt="" />
                </h2>
                <ul class="goods-list">
                  <li class="good-item">
                    <div class="good-item-left">
                      <p class="img">
                        <img src="{$BaseServerUrl}/v3/img/tmp/p1034.jpg" alt="" />
                      </p>
                      <p class="title">
                        <a href="">德国ROLEX(劳力士) 男士机械腕表</a>
                      </p>
                      <p class="subtitle">穿上它，戴出去</p>
                      <div class="downbox">
                        <p class="price">
                          ￥<b>1580</b>.00
                        </p>
                        <p>
                          <span class="cutdown">
                            剩余<em>2</em>天<em>19</em>时<em>12</em>分<em>24</em>秒
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="good-item-right">
                      <a href="">
                        <img src="{$BaseServerUrl}/v3/img/tmp/p1035.jpg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li class="good-item">
                    <div class="good-item-left">
                      <p class="img">
                        <img src="{$BaseServerUrl}/v3/img/tmp/p1034.jpg" alt="" />
                      </p>
                      <p class="title">
                        <a href="">德国ROLEX(劳力士) 男士机械腕表</a>
                      </p>
                      <p class="subtitle">穿上它，戴出去</p>
                      <div class="downbox">
                        <p class="price">
                          ￥<b>1580</b>.00
                        </p>
                        <p>
                          <span class="cutdown">
                            剩余<em>2</em>天<em>19</em>时<em>12</em>分<em>24</em>秒
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="good-item-right">
                      <a href="">
                        <img src="{$BaseServerUrl}/v3/img/tmp/p1035.jpg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li class="good-item">
                    <div class="good-item-left">
                      <p class="img">
                        <img src="{$BaseServerUrl}/v3/img/tmp/p1034.jpg" alt="" />
                      </p>
                      <p class="title">
                        <a href="">德国ROLEX(劳力士) 男士机械腕表</a>
                      </p>
                      <p class="subtitle">穿上它，戴出去</p>
                      <div class="downbox">
                        <p class="price">
                          ￥<b>1580</b>.00
                        </p>
                        <p>
                          <span class="cutdown">
                            剩余<em>2</em>天<em>19</em>时<em>12</em>分<em>24</em>秒
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="good-item-right">
                      <a href="">
                        <img src="{$BaseServerUrl}/v3/img/tmp/p1035.jpg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li class="good-item">
                    <div class="good-item-left">
                      <p class="img">
                        <img src="{$BaseServerUrl}/v3/img/tmp/p1034.jpg" alt="" />
                      </p>
                      <p class="title">
                        <a href="">德国ROLEX(劳力士) 男士机械腕表</a>
                      </p>
                      <p class="subtitle">穿上它，戴出去</p>
                      <div class="downbox">
                        <p class="price">
                          ￥<b>1580</b>.00
                        </p>
                        <p>
                          <span class="cutdown">
                            剩余<em>2</em>天<em>19</em>时<em>12</em>分<em>24</em>秒
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="good-item-right">
                      <a href="">
                        <img src="{$BaseServerUrl}/v3/img/tmp/p1035.jpg" alt="" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- 头部 -->
              <div class='row-grid row-grid-2'>
                <div class="row-hot">
                  <a href="">
                    <img src="{$BaseServerUrl}/v3/img/tmp/p1037.jpg" alt="" />
                      <div class="title">
                        <div class="olay"></div>
                        <p>
                          Maud Frizon <br />意大利名鞋上新</p>
                      </div>
                    </a>
                </div>
                <div class="row-preview">
                  <h2>近期开抢预告</h2>
                  <ul class="row-top" id="row-top">
                    <li class="select">
                      下一期<i></i>
                    </li>
                    <li>
                      09-26<i></i>
                    </li>
                    <li>
                      12-28<i></i>
                    </li>
                  </ul>
                  <div class="brand-slide-content">
                    <div class="brand-slide-panels" id="brand-slide-panels">
                      <div class="brand-slide-panel">
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                      </div>
                      <div class="brand-slide-panel">
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                      </div>
                      <div class="brand-slide-panel">
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                        <div class="brand-item">
                          <a href="">
                            <img src="{$BaseServerUrl}/v3/img/tmp/p1036.jpg" alt="" />
                              <p>日本LV豹纹手提包</p>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </section>
        <xsl:call-template name="footer"></xsl:call-template>
        <script type="text/javascript">seajs.use('w/globalLimited');</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>