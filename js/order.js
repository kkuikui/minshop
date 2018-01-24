$(function(){
    //制保留2位小数，如：2，会在2后面补上00.即2.00 
    function toDecimal2(x) { 
      var f = parseFloat(x); 
      if (isNaN(f)) { 
        return false; 
      } 
      var f = Math.round(x*100)/100; 
      var s = f.toString(); 
      var rs = s.indexOf('.'); 
      if (rs < 0) { 
        rs = s.length; 
        s += '.'; 
      } 
      while (s.length <= rs + 2) { 
        s += '0'; 
      } 
      return s; 
    } 
    //合计计算
    var subtotalPrice = 0,  //合计、总价
        totalNum = 0;       //总共多少件商品
    $('#checkout-goods-list .subtotal .price').each(function(){
        var ths = $(this);
        var price = parseFloat( ths.text().replace('￥',''));
        subtotalPrice += price;
    })
    $('#checkout-goods-list .num').each(function(){
        var ths = $(this);
        var num = parseInt( ths.text());
        totalNum += num;
    })
    $('#total-price').text('￥'+ toDecimal2(subtotalPrice));
    $('#all-price').text(toDecimal2(subtotalPrice));
    $('#total-num').text(totalNum);

    //应付金额
    var payPrice = parseFloat($('#all-price').text())+parseFloat($('#freight').text())-parseFloat($('#favourable').text())-parseFloat($('#integral').text());
    $('#pay-price').text(toDecimal2(payPrice));

    $("#checkoutPaymentList .item").click(function(){
      $("#checkoutPaymentList input").removeAttr("checked");
      $(this).find("input").attr("checked","checked");
    })

})