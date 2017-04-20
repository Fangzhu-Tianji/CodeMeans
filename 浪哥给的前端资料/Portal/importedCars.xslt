<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
                xmlns:wdbuynet="wdbuynet:extenstion">
  <xsl:include href="Param.xslt"/>
  <xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />
  <xsl:template match="Root">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE"/>
        <title>中国保税网--进口汽车</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/importcars.css"/>
        <script src="{$BaseServerUrl}/v3/js/public/html5shiv.js">&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/sea.js'>&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/configure.js'>&amp;nbsp;</script>
      </head>
      <body>
        <header>
          <i>
            <img src="{$BaseServerUrl}/v3/img/importcars/logo-1.png" alt="" />
          </i>
          <span>
            <b>销售热线：</b>18512345678
          </span>
        </header>
        <section class="pages" id="pages">
          <section class="page page1 active">
            <article></article>
            <table class="opts" style="display:none;" width="90%" cellpadding="0" cellspacing="0">
              <tr>
                <th colspan="2">1、基本信息</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">外饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr>
                <th colspan="2">内饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">安全</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">功能</th>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">舒适性</th>
              </tr>
              <tr class="odd">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="even">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">技术数据</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">标准配备</th>
                </tr>
                <tr class="odd">
                  <td class="tt">综合工况油耗</td>
                  <td class="ct">综合工况油耗</td>
                </tr>
                <tr class="even">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="odd">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="even">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="odd">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">底盘制动</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">娱乐</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
              </table>
          </section>
          <section class="page page2">
            <article></article>
            <table class="opts" style="display:none;" width="90%" cellpadding="0" cellspacing="0">
              <tr>
                <th colspan="2">2、基本信息</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">外饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr>
                <th colspan="2">内饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">安全</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">功能</th>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">舒适性</th>
              </tr>
              <tr class="odd">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="even">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">技术数据</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">标准配备</th>
                </tr>
                <tr class="odd">
                  <td class="tt">综合工况油耗</td>
                  <td class="ct">综合工况油耗</td>
                </tr>
                <tr class="even">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="odd">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="even">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="odd">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">底盘制动</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">娱乐</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
              </table>
          </section>
          <section class="page page3">
            <article></article>
            <table class="opts" style="display:none;" width="90%" cellpadding="0" cellspacing="0">
              <tr>
                <th colspan="2">3、基本信息</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">外饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr>
                <th colspan="2">内饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">安全</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">功能</th>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">舒适性</th>
              </tr>
              <tr class="odd">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="even">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">技术数据</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">标准配备</th>
                </tr>
                <tr class="odd">
                  <td class="tt">综合工况油耗</td>
                  <td class="ct">综合工况油耗</td>
                </tr>
                <tr class="even">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="odd">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="even">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="odd">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">底盘制动</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">娱乐</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
              </table>
          </section>
          <section class="page page4">
            <article></article>
            <table class="opts" style="display:none;" width="90%" cellpadding="0" cellspacing="0">
              <tr>
                <th colspan="2">4、基本信息</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">外饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr>
                <th colspan="2">内饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">安全</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">功能</th>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">舒适性</th>
              </tr>
              <tr class="odd">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="even">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">技术数据</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">标准配备</th>
                </tr>
                <tr class="odd">
                  <td class="tt">综合工况油耗</td>
                  <td class="ct">综合工况油耗</td>
                </tr>
                <tr class="even">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="odd">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="even">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="odd">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">底盘制动</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">娱乐</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
              </table>
          </section>
          <section class="page page5">
            <article></article>
            <table class="opts" style="display:none;" width="90%" cellpadding="0" cellspacing="0">
              <tr>
                <th colspan="2">5、基本信息</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">外饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr>
                <th colspan="2">内饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">安全</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">功能</th>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">舒适性</th>
              </tr>
              <tr class="odd">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="even">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">技术数据</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">标准配备</th>
                </tr>
                <tr class="odd">
                  <td class="tt">综合工况油耗</td>
                  <td class="ct">综合工况油耗</td>
                </tr>
                <tr class="even">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="odd">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="even">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="odd">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">底盘制动</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">娱乐</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
              </table>
          </section>
          <section class="page page6">
            <article></article>
            <table class="opts" style="display:none;" width="90%" cellpadding="0" cellspacing="0">
              <tr>
                <th colspan="2">6、基本信息</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">外饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">保修政策</td>
                <td class="ct">三年不限公里</td>
              </tr>
              <tr class="even">
                <td class="tt">排量（升）</td>
                <td class="ct">3.0L</td>
              </tr>
              <tr class="odd">
                <td class="tt">变速箱</td>
                <td class="ct">7档 手自一体</td>
              </tr>
              <tr class="even">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr>
                <th colspan="2">内饰</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">安全</th>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">功能</th>
              </tr>
              <tr class="odd">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="even">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="odd">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="even">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">舒适性</th>
              </tr>
              <tr class="odd">
                <td class="tt">综合工况油耗</td>
                <td class="ct">综合工况油耗</td>
              </tr>
              <tr class="even">
                <td class="tt">加速时间</td>
                <td class="ct">17.00L</td>
              </tr>
              <tr class="odd">
                <td class="tt">最高车速</td>
                <td class="ct">230km/h</td>
              </tr>
              <tr class="even">
                <td class="tt">成员人数（含司机）</td>
                <td class="ct">5人</td>
              </tr>
              <tr class="odd">
                <td class="tt">车辆型号</td>
                <td class="ct">AK47</td>
              </tr>
              <tr>
                <th colspan="2">技术数据</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">标准配备</th>
                </tr>
                <tr class="odd">
                  <td class="tt">综合工况油耗</td>
                  <td class="ct">综合工况油耗</td>
                </tr>
                <tr class="even">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="odd">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="even">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="odd">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">底盘制动</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
                <tr>
                  <th colspan="2">娱乐</th>
                </tr>
                <tr class="odd">
                  <td class="tt">加速时间</td>
                  <td class="ct">17.00L</td>
                </tr>
                <tr class="even">
                  <td class="tt">最高车速</td>
                  <td class="ct">230km/h</td>
                </tr>
                <tr class="odd">
                  <td class="tt">成员人数（含司机）</td>
                  <td class="ct">5人</td>
                </tr>
                <tr class="even">
                  <td class="tt">车辆型号</td>
                  <td class="ct">AK47</td>
                </tr>
              </table>
          </section>
        </section>
        <aside>
          <a href="javascript:;" class='sp'></a>
          <a href="javascript:;" class='pz' id="carOptsBtn"></a>
        </aside>
        <nav id="nav">
          <ul>
            <li class='active'>奔驰 G55</li>
            <li>揽胜</li>
            <li>捷豹</li>
            <li>玛莎GT</li>
            <li>玛莎吉博力</li>
            <li>迈巴赫</li>
          </ul>
        </nav>
        <footer>
          <div class='mask'></div>
          <p>
            <a href="index.php">中国保税网</a>
            <a href="javascript:;" class='explan' id="explanBtn">平行进口汽车说明</a>
          </p>
        </footer>
        <!-- 进口介绍 start -->
        <div class="popup" id="explanpop" style="display:none;">
          <div class="olay"></div>
          <div class="pop-container">
            <div class="pop-header">
              <img src="{$BaseServerUrl}/v3/img/importcars/explan-header.png" alt="" />
                <a href="javascript:;" class="pop-close"></a>
              </div>
            <div class="cnt">
              <div class="cntwrap">
                <h3>平行进口汽车</h3>
                <p>平行进口汽车，是指经专业渠道直接从海外市场购买，并引入中国市场进行销售的汽车。由于进口地不同，可分为“美规车”“中东版车”等，以区别于传统渠道销售的“中规车。</p>
                <p>所谓“平行进口”，是相对“中规车”概念而来的，指除总经销商以外，由其他进口商从产品原产地直接进口，其进口渠道与国内授权经销渠道相“平行”。</p>
                <p>能够购买中国没有的海外车型，也是平行进口车的一项优势。一般为了符合中国市场定位策略，汽车厂商在将海外车型进口到中国后都会进行一定调整、改装。而平行进口车直接从北美、中东等地区进口，款型与中规车并不一定一致。</p>
                <h3>售价比中规车价格要低10%~20%</h3>
                <p>平行进口车绕过了总经销商、大区经销商、4S店等销售环节，省去了不少中间环节。且平行进口车经销商定价不受厂</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 进口介绍 end -->
        <!-- 参数说明 start -->
        <div class="popup" id="carOpts" style="display:none;">
          <div class="olay"></div>
          <div class="pop-container">
            <div class="pop-header">
              <img src="{$BaseServerUrl}/v3/img/importcars/mercedes-benz.png" alt="" />
                <a href="javascript:;" class="pop-close"></a>
              </div>
            <div class="box">
              <div class="nav">
                <ul>
                  <li class="current" style="margin-left: 90px;">基本信息</li>
                  <li style="margin-left: 81px;">外饰</li>
                  <li style="margin-left: 73px;">内饰</li>
                  <li style="margin-left: 64px;">安全</li>
                  <li style="margin-left: 55px;">功能</li>
                  <li style="margin-left: 46px;">舒适性</li>
                  <li style="margin-left: 38px;">技术数据</li>
                  <li style="margin-left: 29px;">标准配备</li>
                  <li style="margin-left: 20px;">底盘制动</li>
                  <li style="margin-left: 12px;">娱乐</li>
                </ul>
              </div>
              <div class="cnt">
                <div class="cntwrap"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 参数说明 end -->
        <!-- 汽车图片 start -->
        <div class="popup" id="carPhotos" style="display:none;">
          <div class="olay"></div>
          <div class="pop-container">
            <div class="pop-header">
              <img src="{$BaseServerUrl}/v3/img/importcars/mercedes-benz.png" alt="" />
                <a href="javascript:;" class="pop-close"></a>
              </div>

          </div>
        </div>
        <!-- 汽车图片 end -->
        <script type="text/javascript">seajs.use('w/importedCars');</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>