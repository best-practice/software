(function() {
  var apiNode = document.getElementById("slide-api");
  var taskCfg = apiNode.taskConfig();
  var sHtml= "<div class='frame-build' _config='default-large-small' _zindex='995' _left='" + taskCfg.mouseX + "' _top='" + taskCfg.mouseY + "' _width='640' _height='440'><iframe class='echarts-pie build' frameborder='0' border='0' _widget=\"[['legend=','left'],['percent=','true'],['table=','pie',,,'value'],[,,'&lt;inner:Source of visit&gt;','Directly','335'],[,,,'Email','310'],[,,,'Viedo','135'],[,,,'Search','1548']]\" _src='/software/slide11/$plugins/echarts_pie.html' src='/software/slide11/$plugins/echarts_pie.html'></iframe></div>\n";
  
  var currId = apiNode.currSlideId();
  if (currId) {
    var currNode = document.getElementById(currId);
    apiNode.innerHTML = sHtml;
    
    currNode.appendChild(apiNode.childNodes[0]);
    apiNode.innerHTML = "";
    
    apiNode.addDepends("frame-build","","/software/slide11/$plugins/echarts.js","text/javascript","");
    apiNode.initPagePos(currId);
    apiNode.renewCurrSlide();
    apiNode.selectLastAdded();
    apiNode.setPageModified(currId);
  }
})();
