<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top color">
      <div class="container">
        <div class="navbar-header">
          <a href="index.html" class="navbar-brand logo">
            <img src="img/logo.png" alt="瓢城企训网" />
          </a>
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-collapse"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="index.html">首页</a>
            </li>
            <li>
              <a href="information.html">资讯</a>
            </li>
            <li>
              <a href="case.html">案例</a>
            </li>
            <li>
              <a href="about.html">关于</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="tab1"></div>
    <footer id="footer">
      <div class="container">
        <p>企业培训 | 合作事宜 | 版权投诉</p>
        <p>苏ICP 备12345678. © 2009-2016 瓢城企训网. Powered by Bootstrap.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
<style>
#footer {
	background-color: #666;
	border-top: 1px solid #ccc;
	padding: 20px;
	text-align: center;
	color: #eee;
}
.color {
  background-color: rgba(46, 59, 128, 0.94);
}
.active {
  background-color: rgba(46, 59, 128, 0.94);
}
.navbar-default .navbar-nav > li > a {
  color: #fff;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: rgba(46, 59, 128, 0.94);
}
</style>