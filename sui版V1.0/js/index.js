$(function () {
    $('#panelLeft').on('click', '.alert-text-title', function () {
        alert('作者：前端十期小菜鸟--吴静施,使用框架：SUI Mobile,友情提示：如有疑问请内网通私密我');
    });


    // 轮播图
    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlunbo',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $(".content #slide #slidMain").html(template('slideTemp', data));
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
        }
    });




    // 主体1
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/1',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $(".content #tab1").html(template('mainTemp1', data));
        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/2',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $(".content #tab2").html(template('mainTemp1', data));
        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/3',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $(".content #tab3").html(template('mainTemp1', data));
        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/4',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $(".content #tab4").html(template('mainTemp1', data));
        }
    })



    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlianzai',
        dataType: 'json',
        success: function (data) {
            $("#router3 .content ul").html(template('lzTemp', data));
        }
    })




    $.ajax({
        url: 'http://127.0.0.1:9091/api/gettopics',
        dataType: 'json',
        success: function (data) {
            $("#router4 .content").html(template('ztlbTemp', data));
        }
    })









































})