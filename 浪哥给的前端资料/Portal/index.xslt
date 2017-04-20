<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
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
        <title>中国保税网--首页</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/index.css"/>
        <script src="{$BaseServerUrl}/v3/js/public/html5shiv.js">&amp;nbsp;</script>
        <script src="{$BaseServerUrl}/v3/js/common/base.js">&amp;nbsp;</script>
      </head>
      <body>
        
        <!-- 头部（工具栏 + 搜索区）-->
        <xsl:call-template name="header"></xsl:call-template>
        <section id="m-nav-banner" class="m-nav-banner">
          <!-- 菜单 -->
          <xsl:call-template name="nav"></xsl:call-template>
          <!-- 轮播图 -->
          <div class="box">
            <div class="flexslider " id="flexslider">
              <ul class="slides">
                <xsl:for-each select="PortalAdList/ADPortalAdBannerAd">
                  <li style="background: #ec1656;" >
                    <a href="{RelationLink}" target="_blank" class="title">
                      <img src="{PictureUrl}" alt="" />
                    </a>
                    <a href="javascript:;" target="_blank" class="subtitle">&amp;nbsp;</a>
                  </li>
                </xsl:for-each>
              </ul>
            </div>
          </div>
          <!-- 广告位  -->
          <div class="m-banner-ad">
            <div class="olay">&amp;nbsp;</div>
            <ul class="ads-wrap">
              <xsl:for-each select="PortalAdList/ADPortalAdRecomendAd">
                <li>
                  <a href="{RelationLink}" target="_blank">
                    <img src="{PictureUrl}" alt="" />
                  </a>
                </li>
              </xsl:for-each>
            </ul>
          </div>
        </section>
        <!-- 主内容区 -->
        <section class="main">
          <!-- 整点抢 -->
          <div class="m-part part1">
            <div class="container">
              <div class="part-title">
                <h2>
                  <p class='first'>最便宜</p>
                  <p>绝对值</p>
                </h2>
                <div class="clock">
                  <div class='olay'>&amp;nbsp;</div>
                  <div class='clock-cnt'>
                    <span>
                      <i class="i1">&amp;nbsp;</i>
                      <i class="i2">&amp;nbsp;</i>
                    </span>
                    <p>距离本场结束</p>
                    <p class="cut-down">
                      <em>02</em>:<em>00</em>:<em>00</em>
                    </p>
                  </div>
                </div>
              </div>
              <div class="part-main">
                <div class="time-axis" id="time-axis">
                  <table class="axis">
                    <tr>
                      <xsl:for-each select="OnTheHourSaleList/OnTheHourSaleItem">
                        <td data-sstamp="{DataStamp}">
                          <span>
                            <xsl:value-of select="HourTime"/>
                          </span>
                          <i>&amp;nbsp;</i>
                          <em>&amp;nbsp;</em>
                        </td>
                      </xsl:for-each>
                    </tr>
                  </table>
                  <a href="presale.html" class="tomorrow" target="_blank">[明日预告]</a>
                </div>
                <div class='m-goods-list-wrap'>
                  <div class='goods-widget' id="goods-widget">
                    <xsl:for-each select="OnTheHourSaleList/OnTheHourSaleItem">
                      <ul class="m-goods-list">
                        <xsl:for-each select="ProductList/ProductItem">
                          <li class="good-item">
                            <div class="imgwrap">
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                            <p class="title">
                              <a href="{ProductUrl}/{ProductID}.html" target="_blank" >
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
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </strong>
                                <ins>
                                  ￥<xsl:value-of select="MarketPrice"/>
                                </ins>
                              </div>
                              <div class="staus-gird guo">
                                <p class='img'>
                                  <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                </p>
                                <p>
                                  <xsl:value-of select="CountryName"/>
                                </p>
                              </div>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </xsl:for-each>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 展馆 -->
          <div class="m-part orginal-part part2">
            <div class='part-header ' id="part-header">
              <div class="container">
                <span class='nation mz select'>
                  <b>&amp;nbsp;</b>
                  <i>&amp;nbsp;</i>
                  <em>&amp;nbsp;</em>
                </span>
                <span class='nation oz'>
                  <b>&amp;nbsp;</b>
                  <i>&amp;nbsp;</i>
                  <em>&amp;nbsp;</em>
                </span>
                <span class='nation az'>
                  <b>&amp;nbsp;</b>
                  <i>&amp;nbsp;</i>
                  <em>&amp;nbsp;</em>
                </span>
                <span class='nation yz'>
                  <b>&amp;nbsp;</b>
                  <i>&amp;nbsp;</i>
                  <em>&amp;nbsp;</em>
                </span>
              </div>
            </div>
            <div class='part-cnt container'>
              <div class="part-cnt-wrap" id="zg-part">
                <xsl:for-each select="PavilionRecommend/HotRecommendItems/PavilionRecommendItem">
                  <div class='part-cnt-item'>
                    <xsl:for-each select="RecomendAdList/RecomendAdTop">
                      <h2>
                        <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                      </h2>
                    </xsl:for-each>
                    <div class="part-cnt-main">
                      <div class="part-main-left">
                        <xsl:for-each select="RecomendAdList/RecomendAdLeft">
                          <a href="{RelationLink}.html">
                            <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                          </a>
                        </xsl:for-each>
                      </div>
                      <div class="part-main-center">
                        <ul class="part-row-grid part-row-grid-2">
                          <xsl:for-each select="ProductList/ProductTop">
                            <li>
                              <div class="part-info">
                                <p>
                                  <span class="zhe">
                                    <b>
                                      <xsl:value-of select="Discount"/>
                                    </b>折
                                  </span>
                                </p>
                                <p>
                                  <a href="{RelationLink}" target="_blank"  class="title">
                                    <xsl:value-of select="ProductName"/>
                                  </a>
                                </p>
                                <p>
                                  <span class='jia'>
                                    <b>
                                      ￥<xsl:value-of select="SalePrice"/>
                                    </b>
                                  </span>
                                </p>
                                <p class="guo">
                                  <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                  <span>
                                    <xsl:value-of select="CountryName"/>
                                  </span>
                                </p>
                              </div>
                              <div class='part-logo'>
                                <a href="{RelationLink}" target="_blank" >
                                  <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                                </a>
                              </div>
                            </li>
                          </xsl:for-each>
                        </ul>
                        <ul class="part-row-grid part-row-grid-3">
                          <xsl:for-each select="ProductList/ProductBottom">
                            <li>
                              <div class="part-info">
                                <p>
                                  <span class="zhe">
                                    <b>
                                      <xsl:value-of select="Discount"/>
                                    </b>折
                                  </span>
                                </p>
                                <p>
                                  <a href="{RelationLink}" target="_blank"  class="title">
                                    <xsl:value-of select="ProductName"/>
                                  </a>
                                </p>
                                <p>
                                  <span class='jia'>
                                    <b>
                                      ￥<xsl:value-of select="SalePrice"/>
                                    </b>
                                  </span>
                                </p>
                                <p class="guo">
                                  <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                  <span>
                                    <xsl:value-of select="CountryName"/>
                                  </span>
                                </p>
                              </div>
                              <div class='part-logo'>
                                <a href="{RelationLink}" target="_blank" >
                                  <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                                </a>
                              </div>
                            </li>
                          </xsl:for-each>
                        </ul>
                      </div>
                      <div class="part-main-right">
                        <ul class='part-brand-list'>
                          <xsl:for-each select="BrandRecommendList/BrandRecommendItem">
                            <li>
                              <a href="{LinkUrl}" target="_blank">
                                <img src="{BrandImage}" data-original="{BrandImage}" alt="" />
                              </a>
                            </li>
                          </xsl:for-each>
                        </ul>
                      </div>
                    </div>
                  </div>
                </xsl:for-each>
              </div>
            </div>
          </div>
          <!-- 广告 -->
          <div class='m-part orginal-part ads-part'>
            <div class='container'>
              <a href="{PortalAdList/ADPortalAdBabyTopAD/RelationLink}" target="_blank">
                <img src="{PortalAdList/ADPortalAdBabyTopAD/PictureUrl}" data-original="{PortalAdList/ADPortalAdBabyTopAD/PictureUrl}" alt="" />
              </a>
            </div>
          </div>
          <!-- 频道 -->
          <div class="m-part orginal-part brand-part part3">
            <div class='part-cnt container'>
              <!-- 母婴 -->
              <div class='part-cnt-item part-item-1'>
                <h2>
                  <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i023.png" alt="" />
                </h2>
                <xsl:for-each select="BabyProduct/HotRecommendItems/PavilionRecommendItem" >
                  <div class="part-cnt-main">
                    <div class='part-categorys'>
                      <div class='all-category'>
                        <h3>分类</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommend">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='hot-sale'>
                        <h3>热销</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommendHot">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='category-logo'>
                        <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i024.png" alt="" />
                      </div>
                      <div class='i-shadow'>
                        <i>&amp;nbsp;</i>
                      </div>
                    </div>
                    <div class="part-main-left">
                      <ul>
                        <xsl:for-each select="RecomendAdList/RecomendAdLeft">
                          <li>
                            <a href="{RelationLink}" target="_blank">
                              <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-center">
                      <ul class="part-row-grid part-row-grid-up">
                        <xsl:for-each select="ProductList/ProductTop">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                      <ul class="part-row-grid part-row-grid-down">
                        <xsl:for-each select="ProductList/ProductBottom">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-right">
                      <ul class='part-brand-list'>
                        <xsl:for-each select="BrandRecommendList/BrandRecommendItem">
                          <li>
                            <a href="{LinkUrl}" target="_blank">
                              <img src="{BrandImage}" data-original="{BrandImage}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                  </div>
                </xsl:for-each>
              </div>

              <!-- 营养 -->
              <div class='part-cnt-item part-item-2'>
                <h2>
                  <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i025.png" alt="" />
                </h2>
                <xsl:for-each select="Nutritionhealth/HotRecommendItems/PavilionRecommendItem" >
                  <div class="part-cnt-main">
                    <div class='part-categorys'>
                      <div class='all-category'>
                        <h3>分类</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommend">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='hot-sale'>
                        <h3>热销</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommendHot">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='category-logo'>
                        <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i024.png" alt="" />
                      </div>
                      <div class='i-shadow'>
                        <i>&amp;nbsp;</i>
                      </div>
                    </div>
                    <div class="part-main-left">
                      <ul>
                        <xsl:for-each select="RecomendAdList/RecomendAdLeft">
                          <li>
                            <a href="{RelationLink}" target="_blank">
                              <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-center">
                      <ul class="part-row-grid part-row-grid-up">
                        <xsl:for-each select="ProductList/ProductTop">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                      <ul class="part-row-grid part-row-grid-down">
                        <xsl:for-each select="ProductList/ProductBottom">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-right">
                      <ul class='part-brand-list'>
                        <xsl:for-each select="BrandRecommendList/BrandRecommendItem">
                          <li>
                            <a href="{LinkUrl}" target="_blank">
                              <img src="{BrandImage}" data-original="{BrandImage}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                  </div>
                </xsl:for-each>
              </div>

              <!-- 个护 -->
              <div class='part-cnt-item part-item-3'>
                <h2>
                  <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i027.png" alt="" />
                </h2>
                <xsl:for-each select="Beauty/HotRecommendItems/PavilionRecommendItem" >
                  <div class="part-cnt-main">
                    <div class='part-categorys'>
                      <div class='all-category'>
                        <h3>分类</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommend">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='hot-sale'>
                        <h3>热销</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommendHot">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='category-logo'>
                        <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i024.png" alt="" />
                      </div>
                      <div class='i-shadow'>
                        <i>&amp;nbsp;</i>
                      </div>
                    </div>
                    <div class="part-main-left">
                      <ul>
                        <xsl:for-each select="RecomendAdList/RecomendAdLeft">
                          <li>
                            <a href="{RelationLink}" target="_blank">
                              <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-center">
                      <ul class="part-row-grid part-row-grid-up">
                        <xsl:for-each select="ProductList/ProductTop">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                      <ul class="part-row-grid part-row-grid-down">
                        <xsl:for-each select="ProductList/ProductBottom">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-right">
                      <ul class='part-brand-list'>
                        <xsl:for-each select="BrandRecommendList/BrandRecommendItem">
                          <li>
                            <a href="{LinkUrl}" target="_blank">
                              <img src="{BrandImage}" data-original="{BrandImage}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                  </div>
                </xsl:for-each>
              </div>

              <!-- 奢侈品 -->
              <div class='part-cnt-item part-item-4'>
                <h2>
                  <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i029.png" alt="" />
                </h2>
                <xsl:for-each select="Luxury/HotRecommendItems/PavilionRecommendItem" >
                <div class="part-cnt-main">
                  <div class='part-categorys'>
                    <div class='all-category'>
                      <h3>分类</h3>
                      <p>
                        <xsl:for-each select="CategoryRecommendList/CategoryRecommend">
                          <a href="{LinkUrl}" target="_blank">
                            <xsl:value-of select="CategoryName"/>
                          </a>
                        </xsl:for-each>
                      </p>
                    </div>
                    <div class='hot-sale'>
                      <h3>热销</h3>
                      <p>
                        <xsl:for-each select="CategoryRecommendList/CategoryRecommendHot">
                          <a href="{LinkUrl}" target="_blank">
                            <xsl:value-of select="CategoryName"/>
                          </a>
                        </xsl:for-each>
                      </p>
                    </div>
                    <div class='category-logo'>
                      <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i024.png" alt="" />
                    </div>
                    <div class='i-shadow'>
                      <i>&amp;nbsp;</i>
                    </div>
                  </div>
                  <div class="part-main-left">
                    <ul>
                      <xsl:for-each select="RecomendAdList/RecomendAdLeft">
                        <li>
                          <a href="{RelationLink}" target="_blank">
                            <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                          </a>
                        </li>
                      </xsl:for-each>
                    </ul>
                  </div>
                  <div class="part-main-center">
                    <ul class="part-row-grid part-row-grid-up">
                      <xsl:for-each select="ProductList/ProductTop">
                        <li>
                          <div class='hovermask'>&amp;nbsp;</div>
                          <div class="part-info">
                            <p>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                <xsl:value-of select="ProductName"/>
                              </a>
                            </p>
                            <p>
                              <span class='jia'>
                                <b>
                                  ￥<xsl:value-of select="SalePrice"/>
                                </b>
                              </span>
                            </p>
                            <p class="guo">
                              <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                              <span>
                                <xsl:value-of select="CountryName"/>
                              </span>
                            </p>
                          </div>
                          <div class='part-logo'>
                            <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                              <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                            </a>
                          </div>
                        </li>
                      </xsl:for-each>
                    </ul>
                    <ul class="part-row-grid part-row-grid-down">
                      <xsl:for-each select="ProductList/ProductBottom">
                        <li>
                          <div class='hovermask'>&amp;nbsp;</div>
                          <div class="part-info">
                            <p>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                <xsl:value-of select="ProductName"/>
                              </a>
                            </p>
                            <p>
                              <span class='jia'>
                                <b>
                                  ￥<xsl:value-of select="SalePrice"/>
                                </b>
                              </span>
                            </p>
                            <p class="guo">
                              <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                              <span>
                                <xsl:value-of select="CountryName"/>
                              </span>
                            </p>
                          </div>
                          <div class='part-logo'>
                            <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                              <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                            </a>
                          </div>
                        </li>
                      </xsl:for-each>
                    </ul>
                  </div>
                  <div class="part-main-right">
                    <ul class='part-brand-list'>
                      <xsl:for-each select="BrandRecommendList/BrandRecommendItem">
                        <li>
                          <a href="{LinkUrl}" target="_blank">
                            <img src="{BrandImage}" data-original="{BrandImage}" alt="" />
                          </a>
                        </li>
                      </xsl:for-each>
                    </ul>
                  </div>
                </div>
                </xsl:for-each>
              </div>

              <!-- 服饰鞋帽 -->
              <div class='part-cnt-item part-item-5'>
                <h2>
                  <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i031.png" alt="" />
                </h2>
                <xsl:for-each select="Clothes/HotRecommendItems/PavilionRecommendItem" >
                  <div class="part-cnt-main">
                    <div class='part-categorys'>
                      <div class='all-category'>
                        <h3>分类</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommend">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='hot-sale'>
                        <h3>热销</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommendHot">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='category-logo'>
                        <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i024.png" alt="" />
                      </div>
                      <div class='i-shadow'>
                        <i>&amp;nbsp;</i>
                      </div>
                    </div>
                    <div class="part-main-left">
                      <ul>
                        <xsl:for-each select="RecomendAdList/RecomendAdLeft">
                          <li>
                            <a href="{RelationLink}" target="_blank">
                              <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-center">
                      <ul class="part-row-grid part-row-grid-up">
                        <xsl:for-each select="ProductList/ProductTop">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                      <ul class="part-row-grid part-row-grid-down">
                        <xsl:for-each select="ProductList/ProductBottom">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-right">
                      <ul class='part-brand-list'>
                        <xsl:for-each select="BrandRecommendList/BrandRecommendItem">
                          <li>
                            <a href="{LinkUrl}" target="_blank">
                              <img src="{BrandImage}" data-original="{BrandImage}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                  </div>
                </xsl:for-each>
              </div>

              <!-- 居家日用 -->
              <div class='part-cnt-item part-item-6'>
                <h2>
                  <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i033.png" alt="" />
                </h2>
                <xsl:for-each select="HomeDaily/HotRecommendItems/PavilionRecommendItem" >
                  <div class="part-cnt-main">
                    <div class='part-categorys'>
                      <div class='all-category'>
                        <h3>分类</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommend">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='hot-sale'>
                        <h3>热销</h3>
                        <p>
                          <xsl:for-each select="CategoryRecommendList/CategoryRecommendHot">
                            <a href="{LinkUrl}" target="_blank">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </xsl:for-each>
                        </p>
                      </div>
                      <div class='category-logo'>
                        <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/indexv3/i024.png" alt="" />
                      </div>
                      <div class='i-shadow'>
                        <i>&amp;nbsp;</i>
                      </div>
                    </div>
                    <div class="part-main-left">
                      <ul>
                        <xsl:for-each select="RecomendAdList/RecomendAdLeft">
                          <li>
                            <a href="{RelationLink}" target="_blank">
                              <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-center">
                      <ul class="part-row-grid part-row-grid-up">
                        <xsl:for-each select="ProductList/ProductTop">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                      <ul class="part-row-grid part-row-grid-down">
                        <xsl:for-each select="ProductList/ProductBottom">
                          <li>
                            <div class='hovermask'>&amp;nbsp;</div>
                            <div class="part-info">
                              <p>
                                <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                                  <xsl:value-of select="ProductName"/>
                                </a>
                              </p>
                              <p>
                                <span class='jia'>
                                  <b>
                                    ￥<xsl:value-of select="SalePrice"/>
                                  </b>
                                </span>
                              </p>
                              <p class="guo">
                                <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                                <span>
                                  <xsl:value-of select="CountryName"/>
                                </span>
                              </p>
                            </div>
                            <div class='part-logo'>
                              <a href="{$ProductUrl}/{ProductID}.html" target="_blank" >
                                <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                              </a>
                            </div>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                    <div class="part-main-right">
                      <ul class='part-brand-list'>
                        <xsl:for-each select="BrandRecommendList/BrandRecommendItem">
                          <li>
                            <a href="{LinkUrl}" target="_blank">
                              <img src="{BrandImage}" data-original="{BrandImage}" alt="" />
                            </a>
                          </li>
                        </xsl:for-each>
                      </ul>
                    </div>
                  </div>
                </xsl:for-each>
              </div>
            </div>
          </div>
          <!-- 广告 -->
          <div class="m-part orginal-part ads-part">
            <div class="container">
              <a href="Product.aspx">
                <img src="{$BaseServerUrl}/v3/img/plugins/grey.png" data-original="{$BaseServerUrl}/v3/img/tmp/p1014.jpg" alt="" />
              </a>
            </div>
          </div>
          <!-- 猜你喜欢 -->
          <div class="m-part orginal-part love-part">
            <div class="container">
              <h2>
                <img src="{$BaseServerUrl}/v3/img/indexv3/i035.png" alt="" />
                <a href="javascript:;" class='change' >换一换</a>
              </h2>
              <div class="part-cnt">
                <ul id="love-parts-cnt">
                  <xsl:for-each select="LoveProductList/ProductItem">
                    <li>
                      <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  title="{ProductName}">
                        <img src="{PictureUrl}" alt="" />
                      </a>
                      <p class='title'>
                        <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  title="{ProductName}">
                          <xsl:value-of select="ProductName"/>
                        </a>
                      </p>
                      <p class='price'>
                        <span>
                          <b>
                            ￥<xsl:value-of select="SalePrice"/>
                          </b>
                        </span>
                      </p>
                    </li>
                  </xsl:for-each>
                </ul>

              </div>
            </div>
          </div>
        </section>
        <xsl:call-template name="footer"></xsl:call-template>
        <xsl:call-template name="cartbar"></xsl:call-template>
        <script type="text/javascript">seajs.use('w/index');</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>