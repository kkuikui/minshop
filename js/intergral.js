$(function(){
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
      'title': '￥1000',
      'children': [
        { 'name': 'COCO(VIP3)', 'title': '￥2000', 'className': 'middle-level',
          'children': [
            { 'name': 'jerry(VIP2)', 'title': '￥3000', 'className': 'product-dept' },
            { 'name': 'TOLO(VIP3)', 'title': '￥3000', 'className': 'product-dept',
              'children': [
                { 'name': 'jerry(VIP2)', 'title': '￥4000', 'className': 'pipeline1',
                  'children': [
                    { 'name': 'TOLO(VIP3)', 'title': '￥5000', 'className': 'pipeline1' ,
                        'children': [
                        { 'name': 'jerry(VIP2)', 'title': '￥6000', 'className': 'pipeline1' },
                        { 'name': 'TOLO(VIP3)', 'title': '￥6000', 'className': 'pipeline1' }
                      ]
                  }
                  ]
                 },
                { 'name': 'TOLO(VIP3)', 'title': '￥4000', 'className': 'pipeline1' }
              ]
            }
          ]
        },
        { 'name': 'CISCO(VIP2)', 'title': '￥2000', 'className': 'middle-level',
          'children': [
            { 'name': 'chart(VIP2)', 'title': '￥3000', 'className': 'rd-dept' },
            { 'name': 'TOPi(VIP3)', 'title': '￥3000', 'className': 'rd-dept',
              'children': [
              { 'name': 'chart(VIP2)', 'title': '￥4000', 'className': 'rd-dept' },
              { 'name': 'TOPi(VIP3)', 'title': '￥4000', 'className': 'rd-dept'}
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


    //声明一个数组存放树节点数
    var dataStore = [];
    treeObj(datascource);
    //如果树中没有数据则返回false
    function treeObj(datascource) {
    if (datascource ==null){
        return false;
    }

    enqueue(datascource);  //把root节点进队
    var level = 0 ;     //树层数计数器
    var whileNum = 0;  // 计算while的循环次数

    //通过计算每一层root + root孩子的个数 来记录换行的时机
    //当while遍历到  root + root孩子的个数  说明该换行 然后就把 totalNode（nowNode + nowNode的孩子总数）
    // 当做下一次换行时机
    var tempPrice = 0;    //存放每一行的价钱总和
    var levelPrice = []; //存放所有行的价钱数组
    var totalNode = 1;  //因为root节点放进去了 所以为1
    var nowNode = 1;   // 因为root节点放进去了 所以为1
    //如果非空
    while (!emptyDataStore()){
        whileNum ++;
        //出队
        var obj = dequeue();
        var price = parseFloat(obj.title.replace("￥",""));
        //计算每一层的价钱
        tempPrice += price;
        // console.log(price); //得到每一个节点的价钱
        //如果有孩子
        if (obj.children !="undefined" && obj.children!=null){
            totalNode +=obj.children.length;
            for (var i = 0;i<obj.children.length;i++){
                enqueue(obj.children[i]);
            }
        }

        if(whileNum ==nowNode ){
            nowNode = totalNode;
            level++;
            // console.log(level) //得到多少层
            //在换行的时候把每一行价钱存入数组
            levelPrice.push(tempPrice);
            tempPrice = 0;
        }


    }
    //根据二叉树层数来生成左侧的li数目和添加相应的价钱
    var rewoardUl = $("#reward-tips");
    var ulList = "";
    for(var j = 0 ; j < level-1 ; j++){
        ulList += "<li>奖励：<span>￥"+levelPrice[j+1]+"</span></li>";
    }
    rewoardUl.append(ulList);

    }

    //入队，就是在数组的末尾添加一个元素
    function enqueue(element){
        dataStore.push(element);
    }
    //出队，就是删除数组的第一个元素
    function dequeue(){
        return dataStore.shift();
    }

    //判断数组是否为空
    function emptyDataStore(){
        if(dataStore.length == 0){
            return true;
        }else{
            return false;
        }
    }






    
})
