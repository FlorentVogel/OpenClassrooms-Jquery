$(function() {
    var wishList = ["#Wish1: Happy Birthday, get ready for lots of cake and ice cream!", "#Wish2: May this day be your best-ever day.", "#Wish3: Happy Birthday! You are the star of the office — never stop shining. 'CLICK HERE' ->"];
    var $list = $("#wish-list");
    var $submitBtn = $("#btn-submit");
    
    $submitBtn.on('click', function() {
        $submitBtn.remove();
        $list.append("<p>" + wishList[0] + "</p>");
    });

    $list.one('click', 'p:eq(0)', function() {
        $list.append("<p>" + wishList[1] + "</p>");
        $("p:eq(1)").css('background-color', 'orange');
        $('p:eq(0)').off('click'); 
      });

      $list.one('click', 'p:eq(1)', function() {
        $list.append("<p>" + wishList[2] + "</p>");
        $("p:eq(2)").css('background-color', 'lightgray');
        $('p:eq(0) p:eq(1)').off('click'); 
      });

    $list.on('click', 'p:eq(2)', function() {
        $("body").css('background-color', 'red');
        
  });
});