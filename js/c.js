$(function() {
    // alert($('body').css('z-index'));
    //三个主按钮
    var $oB1 = $('#b01');
    var $oB2 = $('#b02');
    var $oB3 = $('#b03');
    //缘分-button
    var $oB4 = $('#close');
    var $oB5 = $('#submit');
    var $oB6 = $('#reset');
    //缘分-mask
    var $oM1 = $('#mk');
    var $oD1 = $('#yuanfen');
    var bBol = false;
    var oTimer03;
    //意见箱
    $oB3.click(function(){
        alert('因经费不足，此功能未待完续');
        window.location = '聊天对话框.html';
    })
//-------------------------------------------------

    //turn on luck predictor
    $oB1.click(function(){
        $oM1.css('display','block');
        $oD1.css('display','block');
    })

    $oB5.click(function(){
 
        //缘分-input
        //输入值
        var sV01 = $('#n01').val(),
        sV02 = $('#c01').val(),
        sV03 = $('#n02').val(),
        sV04 = $('#c02').val();

        if(sV01!='涂冰琪'&&sV01!='GiGi'&&sV01!='gigi'){
            alert('你不叫涂冰琪么？？？？');
            alert('我只能看到涂冰琪和别人的缘分!!')
        }
        else if(sV02!='摩羯' && sV02!='摩羯座'){
            alert('你是1月2号摩羯的！！！！');
        }
        else if(sV03!='梁晟葳'&&sV03!='Ace'&&sV03!='ace'){
            if(sV03==='涂世杰'){
                alert('你和他的情缘200%');
                alert('因为是上辈子的，所以扣掉1%');
            }
            else if(sV03==='王啟琴'){
                alert('你和他的情缘400%');
            }
            else if(sV03===''){           
                alert('连我的名字都忘了么？？？');
            }
            else if(sV03==='张杰'){
                bBol = true;
                alert('程序员生气了，网站关闭！！！');
                $('header').hide();
                $('.angry').fadeToggle();
                var oTimer = setInterval(countDown,1000);
                //click认错
                $('.apo').click(function(){
                    alert('不用认错，给我几秒钟');
                })
                var iCount = 9;
                $('#n02').val('');
                function countDown() {
                    if(iCount===-1){
                        alert('算了，大人不计小人过，原谅你了');
                        $('header').show();
                        $('.angry').toggle();
                        clearInterval(oTimer);
                        $('.apo').val('认错 (3)');
                        return;
                    }
                    $('.angry input').val('认错 '+'('+iCount+')');
                    iCount-=1;
            
                 }
            }
            else if(sV03==='白敬亭'){
                bBol = true;
                alert('这是哪个臭不要脸的小白脸');
            }
            else if(sV03==='吴磊'){
                alert('他太小了放过他吧！');
                bBol = true;
            }
            else if(sV03==='黄轩'){
                alert('太老了，不适合你');
                bBol = true;
            }
            else if (sV03==='吴世勋'){
                alert('不认识，不会算，滚！');
                bBol = true;
            }
            else if (sV03==='金汎'){
                alert('第二个字不认识，不会算');
                bBol = true;
            }
            else{
                alert('老子做的东西你还想测你跟别人？？？？');
                var sString = sV03 + '和你的缘分是-100%'
                alert(sString);
            }
            fnLooking();
            $oM1.css('display','none');
            $oD1.css('display','none');
            fnClear();
            oTimer03 = setInterval(fnFocus,500);
            var iCounter02 = 0;
            function fnFocus(){
                if(iCounter02===0){
                    $oB2.css('border','1px solid red');
                    iCounter02=1;
                }
                else{
                    $oB2.css('border','1px solid white');
                    iCounter02=0;
                }

            }
        }
        else if(sV04!='摩羯' && sV04!='摩羯座'){
            alert('忘了你老公是摩羯的么嘿嘿~');
        }
        
        else{
            alert('你和'+sV03+'的缘分是200%！！！配的不能再配了！！');
        }
    })

    $oB6.click(fnClear);

    function fnLooking(){
        if(bBol){
            $('#ul').html('<img class="image" src="images/1.1.jpeg"><img class="image" src="images/1.2.jpeg"><img class="image" src="images/1.3.jpeg"><img class="image" src="images/1.4.jpeg"><img class="image" src="images/1.5.jpeg"><img class="image" src="images/1.6.jpeg"><img class="image" src="images/1.7.jpeg"><img class="image" src="images/1.8.jpeg"><img class="image" src="images/1.9.jpeg"><img class="image" src="images/1.10.jpeg"><img class="image" src="images/1.11.jpeg"><img class="image" src="images/1.12.jpeg">');
        }
    }
    function fnClear(){
        $('#n01').val(''); 
        $('#c01').val(''); 
        $('#n02').val(''); 
        $('#c02').val(''); 
    }
    //close luck predictor
    $oB4.click(function(){
        $oM1.css('display','none');
        $oD1.css('display','none');
        fnClear();
    })
//--------------------------------------
    //点点滴滴
    var $ob1 = $('#bb01'),
    $ob2 = $('#bb02'),
    $ob3 = $('#bb03'),
    $oD2 = $('#ssbox'),
    $oP1 = $('#pp01'),
    $oU1 = $('#ul');
    //move
    var iLeft = 0;
    var temp = 0;
    var iSpeed = 2;
    var oTimer01;
    var oTimer02;
 
    //turn on slide show
    $oB2.click(function(){
        $oD2.fadeToggle();
        $oP1.fadeToggle();
        $oB1.fadeToggle();
        $oB2.fadeToggle();
        $oB3.fadeToggle();

        $('.title').css('color','pink').animate({'padding-top':450},1000).next().fadeToggle();
        //start automove
        $oU1.html($oU1.html()+$oU1.html());
        oTimer01 = setInterval(autoMove,30);
        if(bBol){
            var counter = 0;
            oTimer02 = setInterval(fnAlert,3000);
            function fnAlert(){
                if(counter ==1) {
                    alert('你想看多久');
                }
                if(counter ==2) {
                    alert('入迷了是吧');
                }
                if(counter ==3) {
                    alert('你完了');
                }
                if(counter ==4) {
                    alert('There is no way BACK!!!!');
                }
                if(counter ==5) {
                    alert('你看了帅哥15秒了,再见');
                    clearInterval(oTimer02);
                    $('*').hide();
                }
                counter+=1;
        
            }
        }

       
    })



    //turn off slide show
    $ob2.click(function(){
        $oD2.fadeToggle();
        $oP1.fadeToggle();
        $oB1.fadeToggle();
        $oB2.fadeToggle();
        $oB3.fadeToggle();
        $('.title').css('color','black').animate({'padding-top':120},1000).next().fadeToggle();
        clearInterval(oTimer01);
        if(bBol){
            clearInterval(oTimer02);
            clearInterval(oTimer03);
        }
    })
    //鼠标放上
    $oU1.mouseover(function(){
        temp = iSpeed;
        iSpeed=0;

    })
    //鼠标离开
    $oU1.mouseout(function(){
        iSpeed = temp;
    })
    //向右箭头
    $ob1.click(function(){
        if(iSpeed>0){
            iSpeed = -2;
        }
        else iSpeed-=1;
    })
    //向左箭头
    $ob3.click(function(){
        if(iSpeed<0){
            iSpeed = 2;
        }
        else iSpeed+=1;
    })

    function autoMove(){
        iLeft+=iSpeed;

        if(iLeft>=0 && iSpeed>0){
            iLeft=-2650;
        }
        if(iLeft<=-2650 && iSpeed<0){
            iLeft=75;
        }
        $oU1.css('left',iLeft+'px');

    }
})
//-----------------------------------------------