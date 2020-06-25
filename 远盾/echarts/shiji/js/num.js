//数字滚动
(function($, window, document) {
    // "use strict";
    var defaults = {
        deVal: 0,       //传入值
        className:'dataNums',   //样式名称
        digit:'',    //默认显示几位数字
        divid:'',
    };
    function rollNumDaq(obj, options){
        this.obj = obj; //真正的值
        this.options = $.extend(defaults, options);
        this.init = function(){
             this.initHtml(obj,defaults);
        }
    }
    rollNumDaq.prototype = {
        initHtml: function(obj,options){
            var strHtml = '<ul class="' + options.className + ' inrow">';
            var valLen = options.digit ||  (options.deVal + '').length;
            if(obj.find('.'+options.className).length <= 0){        
                for(var i = 0; i<  valLen; i++){
                    strHtml += `
                    <li class="dataOne ">
                        <div class="dataBoc">
                            <div class="tt" t="38">
                                 <span class="num0">0</span>
                                 <span class="num1">1</span>
                                 <span class="num2">2</span>
                                 <span class="num3">3</span>
                                 <span class="num4">4</span>
                                 <span class="num5">5</span> 
                                 <span class="num6">6</span> 
                                 <span class="num7">7</span> 
                                 <span class="num8">8</span> 
                                 <span class="num9">9</span>
                                 <span class="num0">0</span> 
                                 <span class="num1">1</span> 
                                 <span class="num2">2</span> 
                                 <span class="num3">3</span> 
                                 <span class="num4">4</span>
                                 <span class="num5">5</span> 
                                 <span class="num6">6</span> 
                                 <span class="num7">7</span> 
                                 <span class="num8">8</span> 
                                 <span class="num9">9</span>
                             </div>
                         </div>
                     </li>`;
                }
                strHtml += '</ul>';
                obj.html(strHtml);
            }
            this.scroNum(options);
        },
        scroNum: function(options){
            var number = options.deVal;
            // var $num_item = $( options.divid).find('.tt');
            var $num_itemoid = $( options.divid).find('.tt');//下面根据这个变量判断后几位动

            // console.log($num_item.length,$num_item);


            var $numer_item = $( options.divid).find('.tt');

            // var $numer_item;
            // if (options.trues) {
            //     $numer_item = $( options.divid).find('.tt');
            // }else{
            //     if ($num_itemoid.length==10) {console.log('长10');
            //     $numer_item = $num_itemoid.map( num =>{
            //     // console.log(num,'num') //index
            //     // console.log('$num_itemoid[num]',$num_itemoid[num]) //数组里面的第几个 div
            //         var number = [];
            //         if (num >= $num_itemoid.length-4) {
            //             number.push($num_itemoid[num]);
            //         }
            //         return number
            // },)
            // }else if ($num_itemoid.length==9) {console.log('长9')
            // $numer_item = $num_itemoid.map( num =>{
            //     // console.log(num,'num') //index
            //     // console.log('$num_itemoid[num]',$num_itemoid[num]) //数组里面的第几个 div
            //         var number = [];
            //         if (num >= $num_itemoid.length-3) {
            //             number.push($num_itemoid[num]);
            //         }
            //         return number
            // },)
            // }else if($num_itemoid.length==8) {console.log('长8')
            //     $numer_item = $num_itemoid.map( num =>{
            //     // console.log(num,'num') //index
            //     // console.log('$num_itemoid[num]',$num_itemoid[num]) //数组里面的第几个 div
            //         var number = [];
            //         if (num >= $num_itemoid.length-3) {
            //             number.push($num_itemoid[num]);
            //         }
            //         return number
            // },)
            // }else if ($num_itemoid.length==7) {console.log('长7')
            //     $numer_item = $num_itemoid.map( num =>{
            //     // console.log(num,'num') //index
            //     // console.log('$num_itemoid[num]',$num_itemoid[num]) //数组里面的第几个 div
            //         var number = [];
            //         if (num >= $num_itemoid.length-3) {
            //             number.push($num_itemoid[num]);
            //         }
            //         return number
            // },)
            // }else if ($num_itemoid.length==6) {console.log('长6')
            //     $numer_item = $num_itemoid.map( num =>{
            //     // console.log(num,'num') //index
            //     // console.log('$num_itemoid[num]',$num_itemoid[num]) //数组里面的第几个 div
            //         var number = [];
            //         if (num >= $num_itemoid.length-2) {
            //             number.push($num_itemoid[num]);
            //         }
            //         return number
            // },)
            // }else if ($num_itemoid.length==3) {console.log('长2')
            //     $numer_item = $num_itemoid.map( num =>{
            //     // console.log(num,'num') //index
            //     // console.log('$num_itemoid[num]',$num_itemoid[num]) //数组里面的第几个 div
            //         var number = [];
            //         if (num >= $num_itemoid.length-2) {
            //             number.push($num_itemoid[num]);
            //         }
            //         return number
            // },)
            // }else if ($num_itemoid.length==6) {console.log('长6')
            //     $numer_item = $num_itemoid.map( num =>{
            //     // console.log(num,'num') //index
            //     // console.log('$num_itemoid[num]',$num_itemoid[num]) //数组里面的第几个 div
            //         var number = [];
            //         if (num >= $num_itemoid.length-2) {
            //             number.push($num_itemoid[num]);
            //         }
            //         return number
            // },)
            // };
            // console.log('===$numer_item===',$numer_item)
            // }


                var h = $('.dataBoc').height();
                    $numer_item.css('transition','all 2s ease-in-out');
                var numberStr = number.toString();

                if(numberStr.length <= $numer_item.length - 1){
                    var tempStr = '';
                    for(var a = 0; a < $numer_item.length - numberStr.length; a++){
                        tempStr += '0';
                    }
                    numberStr = tempStr + numberStr;
                }
           

                var numberArr = numberStr.split('');
        
             
                $numer_item.each(function(i, item) {
                    setTimeout(function(){
                        var toppx =-parseInt(numberArr[i])*h;
                        $numer_item.eq(i).css('top',toppx + 'px');
                    },i*100)
                });
        }
    }
    $.fn.rollNumDaq = function(options){
        var $that = this;
        var rollNumObj = new rollNumDaq($that, options);
        rollNumObj.init();
    };
})(jQuery, window, document);







