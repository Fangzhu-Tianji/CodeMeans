<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.1" xmlns:fn="http://unmi.cc/fn"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl fn">
  <xsl:param name="PortalUrl"></xsl:param>
  <xsl:param name="BaseServerUrl"></xsl:param>
  <xsl:param name="ProductUrl"></xsl:param>
  <xsl:param name="MemberUrl"></xsl:param>
  <xsl:param name="PassportUrl"></xsl:param>
  <xsl:param name="CartUrl"></xsl:param>
  <xsl:param name="PayUrl"></xsl:param>
  <xsl:param name="ImgServerUrl"></xsl:param>
  <xsl:param name="CurrentTime"></xsl:param>
  <!--每个页面 扩展参数传递-->
  <xsl:param name="TitleName"></xsl:param>
  <xsl:param name="Description"></xsl:param>
  <xsl:param name="KeyWords"></xsl:param>


  <msxsl:script implements-prefix="fn" language="JavaScript">
    <![CDATA[
        function getResultStr(b,str){
            return b === true ? str : '';
        }
        function getResultStr1(b,str,str2){
            return b === true ? str : str2;
        }
        ]]>
  </msxsl:script>
</xsl:stylesheet>
