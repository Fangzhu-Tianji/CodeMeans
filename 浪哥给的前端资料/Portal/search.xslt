<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl" xmlns:fn="http://unmi.cc/fn"
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
        <title>中国保税网--搜索列表页</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/w/search.css"/>
        <script src="{$BaseServerUrl}/v3/js/public/html5shiv.js">&amp;nbsp;</script>
        <script src="{$BaseServerUrl}/v3/js/common/base.js">&amp;nbsp;</script>
      </head>
      <body>
        <!-- 头部（工具栏 + 搜索区）-->
        <xsl:call-template name="header"></xsl:call-template>
        <xsl:call-template name="nav"></xsl:call-template>
        <!-- 主内容区 -->
        <section class="container">
          <!-- 当前位置面包屑导航 -->
          <div class="crumbs-bar">
            <div class="crumbs-nav">
              <div class="crumbs-nav-main clearfix">
                <div class="crumbs-nav-item">
                  <div class="crumbs-first">
                    <a href="javascript:void(0)">全部</a>
                  </div>
                </div>
                <i class="crumbs-arrow">&amp;gt;</i>               
                <div class="crumbs-nav-item">
                  <strong class="search-key">"<xsl:value-of select="SearchKeyword"/>"</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="selector">
            <div class="s-line">
              <div class="sl-wrap first clearfix">
                <div class="sl-key">
                  <strong>分类：</strong>
                </div>
                <div class="sl-value">
                  <div class="sl-v-list">
                    <ul class="clearfix">
                    <xsl:for-each select="ResultFilters/CategoryFilters/CategoryFilters">
                      <li>
                      <a  href="{LinkUrl}">
                        <xsl:value-of select="CategoryName" />(<xsl:value-of select="Count" />)
                      </a>
                      </li>
                    </xsl:for-each>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="s-line">
              <div class="sl-wrap clearfix">
                <div class="sl-key">品牌：</div>
                <div class="sl-value">
                  <div class="sl-v-list">
                    <ul class="clearfix">
                      <li>
                        <a  href="#">美国箭牌</a>
                      </li>
                      <li>
                        <a  href="#">达罗咪</a>
                      </li>
                      <li>
                        <a  href="#">熊野</a>
                      </li>
                      <li>
                        <a  href="#">Scalabo</a>
                      </li>
                      <li class="selected">
                        <a  href="#">Reveur</a>
                      </li>
                      <li>
                        <a  href="#">施华蔻</a>
                      </li>
                      <li>
                        <a  href="#">资生堂</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="s-line">
              <div class="sl-wrap clearfix">
                <div class="sl-key">品牌：</div>
                <div class="sl-value">
                  <div class="sl-v-list">
                    <ul class="clearfix">
                      <li>
                        <a  href="#">美国箭牌</a>
                      </li>
                      <li>
                        <a  href="#">达罗咪</a>
                      </li>
                      <li>
                        <a  href="#">熊野</a>
                      </li>
                      <li>
                        <a  href="#">Scalabo</a>
                      </li>
                      <li>
                        <a  href="#">Reveur</a>
                      </li>
                      <li>
                        <a  href="#">施华蔻</a>
                      </li>
                      <li class="selected">
                        <a  href="#">资生堂</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="s-line">
              <div class="sl-wrap clearfix">
                <div class="sl-key">品牌：</div>
                <div class="sl-value">
                  <div class="sl-v-list">
                    <ul class="clearfix">
                      <li>
                        <a  href="#">美国箭牌</a>
                      </li>
                      <li class="selected">
                        <a  href="#">达罗咪</a>
                      </li>
                      <li>
                        <a  href="#">熊野</a>
                      </li>
                      <li>
                        <a  href="#">Scalabo</a>
                      </li>
                      <li>
                        <a  href="#">Reveur</a>
                      </li>
                      <li>
                        <a  href="#">施华蔻</a>
                      </li>
                      <li>
                        <a  href="#">资生堂</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <xsl:for-each select="ResultFilters/SpecFilters">
            <div class="s-line" style="display:none;">
              <div class="sl-wrap clearfix">
                <div class="sl-key">
                  <xsl:value-of select="CodeName" />
                </div>
                <div class="sl-value">
                  <div class="sl-v-list">
                    <ul class="clearfix">
                      <xsl:for-each select="SpecFilters">
                        <li>
                          <a  href="{LinkUrl}">
                            <xsl:value-of select="CodeName" />
                          </a>
                        </li>
                      </xsl:for-each>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </xsl:for-each>
          </div>

          <div class="filter clearfix">
            <div class="f-sort">
              <xsl:for-each select="ResultFilters/Sorts/Sort">
                <xsl:choose>
                  <xsl:when test="SortFlag = 1">
                    <xsl:choose>
                      <xsl:when test="SortValue = '0'">
                        <a title="{Name}" href="{LinkUrl}" class="{fn:getResultStr(IsSelect='true','curr')}">
                          <span class="fl"> <xsl:value-of select="Name"/>
                          </span>
                          <i class="fl searchBg sort-arrow-t">&amp;nbsp;</i>
                        </a>
                      </xsl:when>
                      <xsl:otherwise>
                        <a title="{Name}" href="{LinkUrl}" class="{fn:getResultStr(IsSelect='true','curr')}">
                          <span class="fl">
                            <xsl:value-of select="Name"/>
                          </span>
                          <i class="fl searchBg sort-arrow-t sort-arrow-down">&amp;nbsp;</i>
                        </a>
                      </xsl:otherwise>
                    </xsl:choose>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:choose>
                      <xsl:when test="SortValue = '0'">
                        <a title="{Name}" href="{LinkUrl}" class="{fn:getResultStr(IsSelect='true','curr')}">
                          <span class="fl"><xsl:value-of select="Name"/>
                          </span>
                          <i class="fl searchBg sort-arrow-t">&amp;nbsp;</i>
                        </a>
                      </xsl:when>
                      <xsl:otherwise>
                        <a title="{Name}" href="{LinkUrl}" class="{fn:getResultStr(IsSelect='true','curr')}">
                          <span class="fl">
                            <xsl:value-of select="Name"/>
                          </span>
                          <i class="fl searchBg sort-arrow-t sort-arrow-up">&amp;nbsp;</i>
                        </a>
                      </xsl:otherwise>
                    </xsl:choose>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:for-each>
            </div>
          </div>
          
          <!-- 列表 -->
          <div class="prolist box">
            <ul class="dodge clearfix">
              <xsl:for-each select="ProductList/ProductItem">
                <li>
                  <p class="photo">
                    <a target="_blank"  href="{$ProductUrl}/{ProductID}.html">
                      <img src="{PictureUrl}" data-original="{PictureUrl}" alt="" />
                    </a>
                  </p>
                  <h2>
                    <a href="{$ProductUrl}/{ProductID}.html" target="_blank"  class="title">
                      <xsl:value-of select="ProductNameHTML"/>
                    </a>
                  </h2>
                  <div class="info box">
                    <div class="f1">
                      <p class="price-1">
                        <em>
                          ¥ <xsl:value-of select="SalePrice"/>
                        </em>
                        <b>
                          <xsl:value-of select="Discount"/>折
                        </b>
                      </p>
                      <p class="price-2">
                        市场价：￥<xsl:value-of select="MarketPrice"/>
                      </p>
                    </div>
                    <div class="f2">
                      <img src="{CountryPic}" data-original="{CountryPic}" alt="" />
                      <em>
                        <xsl:value-of select="CountryName"/>
                      </em>
                    </div>
                  </div>
                </li>
              </xsl:for-each>
            </ul>
            <!-- 属选无结果 -->
            <div class="notice-filter-noresult" style="display:none;">
              <div class="nf-n-wrap clearfix">
                <span class="nf-icon">&amp;nbsp;</span>
                <div class="nf-content">
                  <span class="result">很抱歉，暂时没有对应的商品，您可以选择其他条件进行查找，或者搜索相关关键词。</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 分页条 -->
          <div class="pagebarWrap">
            <div class="m-listpageBar box">
              <xsl:value-of select="wdbuynet:GetPagerHtml(TotalRecord,TotalPage,PageIndex,PageSize,UrlRule)"/>
            </div>
          </div>
        </section>
        <xsl:call-template name="footer"></xsl:call-template>
        <div id="dodge-tpl" style="display:none">
          <img src="{$BaseServerUrl}/v3/img/public/i-1060.png" class="i-dodge" style="position:absolute;width:100%;height:100%;top:-100%;height:-100%;" />
        </div>
        <script type="text/javascript">seajs.use("w/search");</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>