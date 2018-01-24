requirejs.config({
    paths: {
        "jquery" : "../vendor/jquery/jquery.min"
    }
});
requirejs(["jquery",'js/module/jquery.orgchart.js'],function($,orgchart){
    // 奖励分类tab切换
    $('.reward-tab-wrap .tab-header li').each(function(i){
        var _this = $(this);
        _this.click(function(){
            $('.reward-tab-wrap .tab-header li').removeClass('active');
            _this.addClass('active');
            $('.reward-tab-wrap .tab-content .content1').removeClass('active');
            $('.reward-tab-wrap .tab-content .content1').eq(i).addClass('active');
        })
    })
    // 二叉树显示
    var datascource = {
      'name': 'viky(VIP2)',
      'title': '￥4000',
      'children': [
        { 'name': 'COCO(VIP3)', 'title': '￥1000', 'className': 'middle-level',
          'children': [
            { 'name': 'jerry(VIP2)', 'title': '￥1000', 'className': 'product-dept' },
            { 'name': 'TOLO(VIP3)', 'title': '￥1000', 'className': 'product-dept',
              'children': [
                { 'name': 'jerry(VIP2)', 'title': '￥1000', 'className': 'pipeline1',
                  'children': [
                    { 'name': 'TOLO(VIP3)', 'title': '￥1000', 'className': 'pipeline1' ,
                        'children': [
                        { 'name': 'jerry(VIP2)', 'title': '￥1000', 'className': 'pipeline1' },
                        { 'name': 'TOLO(VIP3)', 'title': '￥1000', 'className': 'pipeline1' }
                      ]
                  }
                  ]
                 },
                { 'name': 'TOLO(VIP3)', 'title': '￥1000', 'className': 'pipeline1' }
              ]
            }
          ]
        },
        { 'name': 'CISCO(VIP2)', 'title': '￥1000', 'className': 'middle-level',
          'children': [
            { 'name': 'chart(VIP2)', 'title': '￥1000', 'className': 'rd-dept' },
            { 'name': 'TOPi(VIP3)', 'title': '￥1000', 'className': 'rd-dept',
              'children': [
              { 'name': 'chart(VIP2)', 'title': '￥1000', 'className': 'rd-dept' },
              { 'name': 'TOPi(VIP3)', 'title': '￥1000', 'className': 'rd-dept'}
                ]
             },

           ]
        }
        ]
     
    };

    $('#chart-container').orgchart({
      'data' : datascource,
      'nodeContent': 'title'
    });


    //页码切换效果
    $('#page-list>li').click(function(){
        var ths = $(this);
        $('#page-list>li').removeClass('active');
        ths.addClass('active');
    })
})
