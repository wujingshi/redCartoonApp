$(function () {
    console.log("haha");
    // 轮播图
    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlunbo',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $("#slide #slidMain").html(template('slideTemp', data));
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
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
            $("#main #dmMain1").html(template('mainTemp1', data));
        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/2',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $("#main #dmMain2").html(template('mainTemp1', data));
        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/3',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $("#main #dmMain3").html(template('mainTemp1', data));
        }
    })
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gethometab/4',
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $("#main #dmMain4").html(template('mainTemp1', data));
        }
    })



    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlianzai',
        dataType: 'json',
        success: function (data) {
            $("#lzdm ul").html(template('lzTemp', data));
        }
    })




    $.ajax({
        url: 'http://127.0.0.1:9091/api/gettopics',
        dataType: 'json',
        success: function (data) {
            $("#ztlb ul").html(template('ztlbTemp', data));
        }
    })










































})