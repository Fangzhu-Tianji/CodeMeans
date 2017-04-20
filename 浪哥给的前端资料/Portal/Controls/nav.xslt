<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
  <xsl:template name="nav">
    <section class="m-nav-banner">
      <!-- 导航条 -->
      <!-- 菜单 -->
      <!-- 分类导航 -->
      <div class="category-menus container " id="category-menus">
        <div class="category-menu-nav ">
          <h2 class="menu-title">商品服务分类</h2>
          <div class="menu-cnt" style="display: none;">
            <div class="olay"></div>
            <ul id="menu-navs" class="menu-navs">
              <xsl:for-each select="CategoryList/CategoryItem">
                <li class="menu-nav-item">
                  <a target="_blank" href="{$PortalUrl}/{CodeName}.html">
                    <img src="{$ImgServerUrl}/category/{CategoryPic}"/>
                    <span>
                      <xsl:value-of select="CategoryName"/>
                    </span>
                  </a>
                  <div class="menu-sub-panel">
                    <xsl:for-each select="CategoryList/CategoryItem">
                      <dl>
                        <dt>
                          <a target="_blank" href="{$PortalUrl}/{../../CodeName}_c{CategoryID}.html">
                            <xsl:value-of select="CategoryName"/>
                          </a>
                        </dt>
                        <xsl:for-each select="CategoryList/CategoryItem">
                          <dd>
                            <a target="_blank" href="{$PortalUrl}/{../../../../CodeName}_c{CategoryID}.html">
                              <xsl:value-of select="CategoryName"/>
                            </a>
                          </dd>
                        </xsl:for-each>
                      </dl>
                    </xsl:for-each>
                  </div>
                </li>
              </xsl:for-each>
            </ul>
          </div>
        </div>
      </div>
      <!-- 菜单 -->
      <nav class="m-nav container" id="m-nav">
        <ul class="nav-wrap">
          <li id="nav-home">
            <a href="{$PortalUrl}">首页</a>
            <em>&amp;nbsp;</em>
          </li>
          <li id="nav-auction">
            <a href="{$PortalUrl}/Auction.aspx">拍卖行</a>
            <em>&amp;nbsp;</em>
          </li>
          <li class="hot" id="nav-importcar">
            <a href="{$PortalUrl}/ImportedCars.aspx">进口汽车</a>
            <em>&amp;nbsp;</em>
          </li>
          <li id="nav-worldlimit">
            <a href="{$PortalUrl}/GlobalLimited.aspx">全球限量</a>
            <em>&amp;nbsp;</em>
          </li>
          <li id="nav-genuine">
            <a href="{$PortalUrl}/Authentic.aspx">正品保证</a>
            <em>&amp;nbsp;</em>
          </li>
          <li id="nav-entityhall">
            <a href="javascript:void(0)">实体展销馆</a>
            <em>&amp;nbsp;</em>
          </li>
        </ul>
        <a class="ccdfs-fund" href="javascript:void(0)">
          <i>&amp;nbsp;</i>
        </a>
      </nav>
    </section>
  </xsl:template>
</xsl:stylesheet>
