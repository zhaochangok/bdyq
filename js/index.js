$(function(){
  $("#main").fullpage({
      navigation:true,
      navigationPosition:'right',
      navigationTooltips:['登陆百度舆情','领先：数据收集和处理','全面：舆情分析逻辑与构架','专业：专业数据可视化'],
      showActiveTooltip:false,
      scrollingSpeed:1200,
      keyboardScrolling:true,

  });
   $('.bottom a').on('click',function(){
       $.fn.fullpage.moveSectionDown();
   })
})
