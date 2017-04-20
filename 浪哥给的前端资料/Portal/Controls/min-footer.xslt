<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1">
  <xsl:include href="copyright.xslt"/>
  <xsl:template name="min-footer">
    <footer class="m-footer">
      <p class="rules container">
        <img src="{$BaseServerUrl}/v3/img/sale/i009.png" alt="" />
					</p>
      <nav class='footer-nav '>
        <div class='container'>
          <ul>
            <li class='first'>
              <a href="/">首页</a>
            </li>
            <li>
              <a href="{$BaseServerUrl}/about/ccdfs.html" target="_blank">关于我们</a>
            </li>
            <li>
              <a href="javascript:;">正品保证</a>
            </li>
            <li>
              <a href="javascript:;">人才招聘</a>
            </li>
            <li>
              <a href="{$BaseServerUrl}/about/contact-us.html" target="_blank">联系我们</a>
            </li>
            <li>
              <a href="javascript:;">帮助中心</a>
            </li>
            <li>
              <a href="javascript:;">友情链接</a>
            </li>
            <li>
              <a href="javascript:;">手机客户端</a>
            </li>
            <li>
              <a href="javascript:;">客服在线</a>
            </li>
            <li>
              <a href="javascript:;">德协公益</a>
            </li>
            <li>
              <a href="http://weibo.com/ccdfs" target="_blank">德协微博</a>
            </li>
          </ul>
        </div>
      </nav>
       <xsl:call-template name="copyright"></xsl:call-template>
    </footer>

  </xsl:template>
</xsl:stylesheet>
