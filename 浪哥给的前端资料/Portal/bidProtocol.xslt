﻿<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
                xmlns:wdbuynet="wdbuynet:extenstion">
  <xsl:include href="Param.xslt"/>
  <xsl:include href="Control/header.xslt"/>
  <xsl:include href="Control/footer.xslt"/>
  <xsl:include href="Control/nav.xslt"/>
  <xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />
  <xsl:template match="Root">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE"/>
        <title>中国保税网--竞拍详情</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/saleprotocol.css"/>
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
          <div class='container'>
            <div class="cnt">
              <h2>用户竞拍服务协议</h2>
              <p>在保税网平台（ccdfs.com）依据《用户注册协议》注册的用户（即“竞拍人”），在同意本协议以下全部条款后，方有资格享受保税网平台（以下简称“平台”）提供的竞拍服务（以下简称“服务”）。您使用本平台提供的服务即意味着同意与本平台签订本协议并同意受本协议约束，使用服务前请认真阅读本协议。</p>

              <h3>第一条：立约背景</h3>
              <p>为维护保税网平台的竞拍活动秩序，规范竞拍人参与竞拍活动的行为，保障用户的合法权益，基于相应的竞拍流程与规则（以下简称：竞拍规则）和保税网开放平台公示的规则，特制定本协议。</p>

              <h3>第二条：参与竞拍的条件</h3>
              <p>同时符合以下条件的用户方能参与平台提供的竞拍活动：</p>
              <p>2.1 用户为保税网平台会员，拥有独立的保税网平台用户名；</p>
              <p>2.2 同意本协议及竞拍规则中的条款；</p>
              <p>2.3 按照竞拍规则缴纳相应的竞拍保证金。</p>

              <h3>第三条：服务说明</h3>
              <p>本平台开展的竞拍活动要求参与竞拍的用户缴纳相应保证金，以取得竞拍资格。用户通过本平台参与竞拍活动前应仔细阅读竞拍规则，并应予以遵守。</p>

              <h3>第四条：用户权利和义务</h3>
              <p>4.1 用户应自行妥善保管用户名及密码，该竞拍行为被认为用户本人参与竞拍活动的行为，用户应自行承担竞拍行为产生的相应义务及责任。</p>

              <p>4.2参与竞拍活动的商品由商家提供，并由商家进行商品信息、商品介绍的上传，商品咨询、配送、及相应的售后服务。用户参与竞拍活动前应仔细查看竞拍活动页面对竞拍商品的信息、商品描述介绍。且知悉认可因摄影、显示等造成描述作品的色调等与原物有误差的，以原物为准。</p>

              <p>4.3 用户知悉互联网竞拍活动数据处理的时间间隙，如遇系统提示出价金额与最终出价金额不同，用户认可以最终出价金额为准。</p>

              <p>4.4用户参与竞拍活动成功取得最终购买的竞拍商品时，应按竞拍规则完成竞拍商品交易。如未竞拍规则完成交易的，用户应按竞拍规则承担相应责任及不利后果。</p>

              <p>4.5用户应按照竞拍规则及商家设置的保证金金额缴纳保证金， 且在竞拍成功后应在竞拍规则规定的时间内完成付款。用户竞拍成功后未在竞拍规则规定的时间完成付款或未在规定时间内完成订单转换的，保税网将直接扣除用户缴纳的保证金作为违约金用于赔付商家。商家应向用户出具相应凭据，但保税网无需就代为扣除的保证金向用户开具发票及收据等相关凭证；</p>

              <p>4.6 保证金的返还：以下三种情况下，将原路退还用户保证金：</p>

              <p>4.6.1用户未成功竞拍商品；</p>

              <p>4.6.2用户竞拍活动成功后并在竞拍规则规定的时间内付款；</p>

              <p>4.6.3用户竞拍活动成功后，商家主动关闭交易或未履约发货。</p>

              <p>4.7若竞拍成功后，商家具有成交不卖的违规行为，包括但不限于关闭交易或未履约发货，用户将获得由商家提供的金额为所缴纳保证金金额一倍的违约金作为赔偿。</p>

              <h3>第五条：平台服务及免责条款</h3>
              <p>5.1本平台仅为技术服务平台，竞拍活动均由平台各商家举办开展，本平台尽力向用户提供稳定的技术服务，使用户参与的竞拍活动得以顺利进行；用户同意严格按照本协议约定及保税网用户注册协议规定使用技术服务。如用户行为违反本协议及平台规则，本平台有权取消用户竞拍资格，由此产生的损失及不利后果由用户自行承担。</p>

              <p>5.2 本协议项下的竞拍服务将按“现状”和按“可得到”的状态提供，本平台将在现有技术的基础上尽最大努力提供相应的安全措施以保障服务安全和正常运行。但由于可能存在的计算机病毒、网络通讯故障、系统维护等方面的因素以及可能发生的不可抗力事件，本平台在此明确声明对技术服务不作任何明示或暗示的保证，包括但不限于：对服务的可适用性、没有错误或疏漏、持续性、准确性、可靠性、适用于某一特定用途。对此用户予以理解并不应要求本平台承担责任。</p>

              <p>5.3 本平台仅向用户提供技术服务平台以便用户与平台商家之间达成竞拍活动相关的交易，本平台并非交易的参与方，不对商家的任何口头、书面陈述或者向上传的线上信息及竞拍活动商品的真实性、合法性做任何明示或暗示的担保，或对此承担任何责任。如因竞拍活动商品交易产生纠纷的，均由平台商家以自己的名义独立承担所有的法律责任。</p>

              <h3>第六条：协议生效及适用</h3>
              <p>6.1 用户通过本平台参与竞拍活动即时本协议生效，本协议生效后即表示您选择接受本协议，并同意接受本协议的全部约定内容。</p>

              <p>6.2本协议内容包括协议正文、竞拍规则以及所有本平台已经发布的或将来可能发布的各类规则、操作流程。所有规则为协议不可分割的一部分，与协议正文具有同等的法律效力。本平台有权根据需要不时地制定、修改本协议、附件或各类规则、操作流程，如有任何变更，将在本平台上以公示形式通知用户。任何修订和新规则及流程一经公布即自动生效，成为本协议的一部分。如您继续在本平台参与竞拍活动，则视为您对修改后的条款不持异议并同意遵守。</p>

              <h3>第七条：法律适用与争议解决</h3>
              <p>7.1 本协议适用中华人民共和国法律。</p>

              <p>7.2 因本协议产生的任何争议，由双方协商解决，协商不成的，任何一方有权向北京市朝阳区法院提起诉讼。</p>

              <div class="ui-btns">
                <a href="#" class='agree'>同意</a>
                <a href="javascript:window.close();">取消</a>
              </div>
            </div>

          </div>
        </section>
        <script type="text/javascript">seajs.use('w/bidProtocol');</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>