<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.1"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
                xmlns:wdbuynet="wdbuynet:extenstion">
  <xsl:include href="Param.xslt"/>
  <xsl:include href="Control/min-footer.xslt"/>
  <xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" />
  <xsl:template match="Root">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE"/>
        <title>中国保税网--拍卖行</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <link rel="shortcut icon" href="{$BaseServerUrl}/v3/img/public/ccdfs.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/js/plugins/layer/skin/layer.css"/>
        <link rel="stylesheet" href="{$BaseServerUrl}/v3/css/sale.css"/>
        <script src="{$BaseServerUrl}/v3/js/public/html5shiv.js">&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/sea.js'>&amp;nbsp;</script>
        <script src='{$BaseServerUrl}/v3/js/public/configure.js'>&amp;nbsp;</script>
      </head>
      <body>
        <section class="app">
          <section class="page page1">
            <div class="mainpage">
              <ul class="lights" id="lights">
                <li class="light first">&amp;nbsp;</li>
                <li class="light">&amp;nbsp;</li>
                <li class="light">&amp;nbsp;</li>
                <li class="light last">&amp;nbsp;</li>
              </ul>
              <div class="main">
                <div class="timeline">
                  <span class="tm tm-h">49</span>
                  <span class="tm tm-m">00</span>
                  <span class="tm tm-s">01</span>
                </div>
                <div class="goodslist" id="goodlist">
                  <ul>
                    <li>
                      <div class="i-pro">
                        <a href="">
                          <img src="{$BaseServerUrl}/v3/img/tmp/P020.jpg"  alt="" />
                        </a>
                      </div>
                      <p class="i-title">
                        <a href="">CHANEL(香奈儿) 皮质单肩包</a>
                      </p>
                      <div class="i-price">
                        当前价格：<span>
                          <b>￥16800</b>.00
                        </span>
                      </div>
                      <div class="i-action">
                        <a href="">我要出价</a>
                      </div>
                    </li>
                    <li>
                      <div class="i-pro">
                        <a href="">
                          <img src="{$BaseServerUrl}/v3/img/tmp/P020.jpg"  alt="" />
                        </a>
                      </div>
                      <p class="i-title">
                        <a href="">CHANEL(香奈儿) 皮质单肩包</a>
                      </p>
                      <div class="i-price">
                        当前价格：<span>
                          <b>￥16800</b>.00
                        </span>
                      </div>
                      <div class="i-action">
                        <a href="">我要出价</a>
                      </div>
                    </li>
                    <li>
                      <div class="i-pro">
                        <a href="">
                          <img src="{$BaseServerUrl}/v3/img/tmp/P020.jpg"  alt="" />
                        </a>
                      </div>
                      <p class="i-title">
                        <a href="">CHANEL(香奈儿) 皮质单肩包</a>
                      </p>
                      <div class="i-price">
                        当前价格：<span>
                          <b>￥16800</b>.00
                        </span>
                      </div>
                      <div class="i-action">
                        <a href="">我要出价</a>
                      </div>
                    </li>
                    <li>
                      <div class="i-pro">
                        <a href="">
                          <img src="{$BaseServerUrl}/v3/img/tmp/P020.jpg"  alt="" />
                        </a>
                      </div>
                      <p class="i-title">
                        <a href="">CHANEL(香奈儿) 皮质单肩包</a>
                      </p>
                      <div class="i-price">
                        当前价格：<span>
                          <b>￥16800</b>.00
                        </span>
                      </div>
                      <div class="i-action">
                        <a href="">我要出价</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="i-arrows">
                <p>
                  <span>即将开拍</span>
                </p>
                <p>
                  <i>&amp;nbsp;</i>
                </p>
              </div>
            </div>
          </section>
          <section class="page page2">
            <div class="mainpage">
              <div class="main">
                <div class="title">
                  <h3>
                    <img src="{$BaseServerUrl}/v3/img/sale/i010.png" alt="" />
                  </h3>
                  <p>8月18日  10:00 开拍</p>
                </div>
                <ul class="salelist container">
                  <li>
                    <div class="main">
                      <div class="imgwrap">
                        <a href="">
                          <img src="{$BaseServerUrl}/v3/img/tmp/P020.jpg"  alt="" />
                        </a>
                      </div>
                      <div class="guo">
                        <span>&amp;nbsp;</span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDYyNzEwQzAxM0YzMTFFNTkyMDVDQkU3OTU4ODI2MzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDYyNzEwQzExM0YzMTFFNTkyMDVDQkU3OTU4ODI2MzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNjI3MTBCRTEzRjMxMUU1OTIwNUNCRTc5NTg4MjYzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNjI3MTBCRjEzRjMxMUU1OTIwNUNCRTc5NTg4MjYzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXxGgoAAAJ5SURBVHjatJU9bxMxGMf9OM69+d6SXNMkbSUKaWFALHRE3VhhQawsbEyMjMDACEICxEdAiIFvQCUWYEKgIqGqLUUtTUMvl7vL3fnejNuxyxUptWT7kYe/fs/fz2MD5xydzYDrt58XBff92Gnpg2HQaZv7g3Fn1hoc+DOO4Y5CzdAyWXny5sVq8XOEdKhS5MjFdNlyvxKdKsvn24fuxDTUXieyLa07a4m117FMXQujxNDV9c0DePkY9W0jR9U5ZhlQigghKctlqdawaZxkAjOK0pmWESfMaepRnDZtijBOCl5++Ig+RSlSqo3IImi1ybUVommSsMUPI9vURl7UtLXDUeg0dNebWJY69iO7qVOq5N/2EJ2UpVxtSBLgMBcB8cMkSQtTV4OQmbrijaNmg3p+LDzxQ6ZTOWNZMPTUZw/RyiJNsmrqgqM6IFIjNQBAnGWF2NK8wBgzlmMMCcsFYJ6XWCJYp+zOPYQOfCRVU7MYd3vG2ntCqSQwh4ehaSjC3IaphlFqGeokSkUSLM0EuAZF7ekjdHXeSPJq6pILZETqZOu3Ow6S3T/j+Z69veP2F52N7b/9czObv4YLc429fa/lWAM/iV+9RS2elKSaOp2A01afPSB3799IU1EkRKySRIQbNxUSs1wR8fFJmhVIli9/XkO7OyCrldKQSWBbRwH/8f1ExSM42QNHUzVyUse8rDZEtDchuNsFD82dpms5glP2N0cj7PSt3S+Qr29N+e1gJWh1vLQAweqt6SpzFuDZefruNamtXJkydRZDw0EApHZpacrUGQPTElcDnnJxytL5CHcvmBtrwE/zLPyf9nH5ygTO8Jc5O+l/AgwAXlQaxrjUYNsAAAAASUVORK5CYII=" />
                          <em>美国</em>
                      </div>
                      <div class="gtitle">
                        <a href="" title="格致时尚动人系列手提包 浅驼色">格致时尚动人系列手提包 浅驼色</a>
                      </div>
                    </div>
                    <div class="fbar">
                      <span class="start">
                        起拍价：<em>¥228.00</em>
                      </span>
                      <span class="margin">
                        保证金：<em>&amp;nbsp;</em>¥15.00
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="main">
                      <div class="imgwrap">
                        <a href="">
                          <img src="{$BaseServerUrl}/v3/img/tmp/P020.jpg"  alt="" />
                        </a>
                      </div>
                      <div class="guo">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDYyNzEwQzAxM0YzMTFFNTkyMDVDQkU3OTU4ODI2MzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDYyNzEwQzExM0YzMTFFNTkyMDVDQkU3OTU4ODI2MzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNjI3MTBCRTEzRjMxMUU1OTIwNUNCRTc5NTg4MjYzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNjI3MTBCRjEzRjMxMUU1OTIwNUNCRTc5NTg4MjYzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXxGgoAAAJ5SURBVHjatJU9bxMxGMf9OM69+d6SXNMkbSUKaWFALHRE3VhhQawsbEyMjMDACEICxEdAiIFvQCUWYEKgIqGqLUUtTUMvl7vL3fnejNuxyxUptWT7kYe/fs/fz2MD5xydzYDrt58XBff92Gnpg2HQaZv7g3Fn1hoc+DOO4Y5CzdAyWXny5sVq8XOEdKhS5MjFdNlyvxKdKsvn24fuxDTUXieyLa07a4m117FMXQujxNDV9c0DePkY9W0jR9U5ZhlQigghKctlqdawaZxkAjOK0pmWESfMaepRnDZtijBOCl5++Ig+RSlSqo3IImi1ybUVommSsMUPI9vURl7UtLXDUeg0dNebWJY69iO7qVOq5N/2EJ2UpVxtSBLgMBcB8cMkSQtTV4OQmbrijaNmg3p+LDzxQ6ZTOWNZMPTUZw/RyiJNsmrqgqM6IFIjNQBAnGWF2NK8wBgzlmMMCcsFYJ6XWCJYp+zOPYQOfCRVU7MYd3vG2ntCqSQwh4ehaSjC3IaphlFqGeokSkUSLM0EuAZF7ekjdHXeSPJq6pILZETqZOu3Ow6S3T/j+Z69veP2F52N7b/9czObv4YLc429fa/lWAM/iV+9RS2elKSaOp2A01afPSB3799IU1EkRKySRIQbNxUSs1wR8fFJmhVIli9/XkO7OyCrldKQSWBbRwH/8f1ExSM42QNHUzVyUse8rDZEtDchuNsFD82dpms5glP2N0cj7PSt3S+Qr29N+e1gJWh1vLQAweqt6SpzFuDZefruNamtXJkydRZDw0EApHZpacrUGQPTElcDnnJxytL5CHcvmBtrwE/zLPyf9nH5ygTO8Jc5O+l/AgwAXlQaxrjUYNsAAAAASUVORK5CYII="/>
                          <em>美国</em>
                      </div>
                      <div class="gtitle">
                        <a href="" title="格致时尚动人系列手提包 浅驼色">格致时尚动人系列手提包 浅驼色</a>
                      </div>
                    </div>
                    <div class="fbar">
                      <span class="start">
                        起拍价：<em>¥228.00</em>
                      </span>
                      <span class="margin">
                        保证金：<em>&amp;nbsp;</em>¥15.00
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="main">
                      <div class="imgwrap">
                        <a href="">
                          <img src="{$BaseServerUrl}/v3/img/tmp/P020.jpg"  alt="" />
                        </a>
                      </div>
                      <div class="guo">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDYyNzEwQzAxM0YzMTFFNTkyMDVDQkU3OTU4ODI2MzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDYyNzEwQzExM0YzMTFFNTkyMDVDQkU3OTU4ODI2MzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNjI3MTBCRTEzRjMxMUU1OTIwNUNCRTc5NTg4MjYzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNjI3MTBCRjEzRjMxMUU1OTIwNUNCRTc5NTg4MjYzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXxGgoAAAJ5SURBVHjatJU9bxMxGMf9OM69+d6SXNMkbSUKaWFALHRE3VhhQawsbEyMjMDACEICxEdAiIFvQCUWYEKgIqGqLUUtTUMvl7vL3fnejNuxyxUptWT7kYe/fs/fz2MD5xydzYDrt58XBff92Gnpg2HQaZv7g3Fn1hoc+DOO4Y5CzdAyWXny5sVq8XOEdKhS5MjFdNlyvxKdKsvn24fuxDTUXieyLa07a4m117FMXQujxNDV9c0DePkY9W0jR9U5ZhlQigghKctlqdawaZxkAjOK0pmWESfMaepRnDZtijBOCl5++Ig+RSlSqo3IImi1ybUVommSsMUPI9vURl7UtLXDUeg0dNebWJY69iO7qVOq5N/2EJ2UpVxtSBLgMBcB8cMkSQtTV4OQmbrijaNmg3p+LDzxQ6ZTOWNZMPTUZw/RyiJNsmrqgqM6IFIjNQBAnGWF2NK8wBgzlmMMCcsFYJ6XWCJYp+zOPYQOfCRVU7MYd3vG2ntCqSQwh4ehaSjC3IaphlFqGeokSkUSLM0EuAZF7ekjdHXeSPJq6pILZETqZOu3Ow6S3T/j+Z69veP2F52N7b/9czObv4YLc429fa/lWAM/iV+9RS2elKSaOp2A01afPSB3799IU1EkRKySRIQbNxUSs1wR8fFJmhVIli9/XkO7OyCrldKQSWBbRwH/8f1ExSM42QNHUzVyUse8rDZEtDchuNsFD82dpms5glP2N0cj7PSt3S+Qr29N+e1gJWh1vLQAweqt6SpzFuDZefruNamtXJkydRZDw0EApHZpacrUGQPTElcDnnJxytL5CHcvmBtrwE/zLPyf9nH5ygTO8Jc5O+l/AgwAXlQaxrjUYNsAAAAASUVORK5CYII=" />
                          <em>美国</em>
                      </div>
                      <div class="gtitle">
                        <a href="" title="格致时尚动人系列手提包 浅驼色">格致时尚动人系列手提包 浅驼色</a>
                      </div>
                    </div>
                    <div class="fbar">
                      <span class="start">
                        起拍价：<em>¥228.00</em>
                      </span>
                      <span class="margin">
                        保证金：<em>&amp;nbsp;</em>¥15.00
                      </span>
                    </div>
                  </li>
                  <li class="last">
                    <div class="main">
                      <div class="imgwrap">
                        <a href="">
                          <img src="{$BaseServerUrl}/v3/img/tmp/P020.jpg"  alt="" />
                        </a>
                      </div>
                      <div class="guo">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDYyNzEwQzAxM0YzMTFFNTkyMDVDQkU3OTU4ODI2MzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDYyNzEwQzExM0YzMTFFNTkyMDVDQkU3OTU4ODI2MzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNjI3MTBCRTEzRjMxMUU1OTIwNUNCRTc5NTg4MjYzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNjI3MTBCRjEzRjMxMUU1OTIwNUNCRTc5NTg4MjYzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXxGgoAAAJ5SURBVHjatJU9bxMxGMf9OM69+d6SXNMkbSUKaWFALHRE3VhhQawsbEyMjMDACEICxEdAiIFvQCUWYEKgIqGqLUUtTUMvl7vL3fnejNuxyxUptWT7kYe/fs/fz2MD5xydzYDrt58XBff92Gnpg2HQaZv7g3Fn1hoc+DOO4Y5CzdAyWXny5sVq8XOEdKhS5MjFdNlyvxKdKsvn24fuxDTUXieyLa07a4m117FMXQujxNDV9c0DePkY9W0jR9U5ZhlQigghKctlqdawaZxkAjOK0pmWESfMaepRnDZtijBOCl5++Ig+RSlSqo3IImi1ybUVommSsMUPI9vURl7UtLXDUeg0dNebWJY69iO7qVOq5N/2EJ2UpVxtSBLgMBcB8cMkSQtTV4OQmbrijaNmg3p+LDzxQ6ZTOWNZMPTUZw/RyiJNsmrqgqM6IFIjNQBAnGWF2NK8wBgzlmMMCcsFYJ6XWCJYp+zOPYQOfCRVU7MYd3vG2ntCqSQwh4ehaSjC3IaphlFqGeokSkUSLM0EuAZF7ekjdHXeSPJq6pILZETqZOu3Ow6S3T/j+Z69veP2F52N7b/9czObv4YLc429fa/lWAM/iV+9RS2elKSaOp2A01afPSB3799IU1EkRKySRIQbNxUSs1wR8fFJmhVIli9/XkO7OyCrldKQSWBbRwH/8f1ExSM42QNHUzVyUse8rDZEtDchuNsFD82dpms5glP2N0cj7PSt3S+Qr29N+e1gJWh1vLQAweqt6SpzFuDZefruNamtXJkydRZDw0EApHZpacrUGQPTElcDnnJxytL5CHcvmBtrwE/zLPyf9nH5ygTO8Jc5O+l/AgwAXlQaxrjUYNsAAAAASUVORK5CYII=" />
                          <em>美国</em>
                      </div>
                      <div class="gtitle">
                        <a href="" title="格致时尚动人系列手提包 浅驼色">格致时尚动人系列手提包 浅驼色</a>
                      </div>
                    </div>
                    <div class="fbar">
                      <span class="start">
                        起拍价：<em>¥228.00</em>
                      </span>
                      <span class="margin">
                        保证金：<em>&amp;nbsp;</em>¥15.00
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <xsl:call-template name="min-footer"></xsl:call-template>
              <div class="arrow-up" id="arrow-up">
                <em>上一页</em>
                <div class="back">&amp;nbsp;</div>
              </div>
            </div>
          </section>
        </section>



        <script type="text/javascript">seajs.use('w/auction');</script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
