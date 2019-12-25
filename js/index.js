
$(document).ready(function(){

	// /*start 轮播图片 */
	//  var imgHCarousel = [
	//     'images/HeaderCarousel/1.jpg',
	//     'images/HeaderCarousel/2.jpg',
	//     'images/HeaderCarousel/3.jpg'
	// ];
	// // console.dir(imgs);

	// //当前图片的索引值
	// var imgHCarouselIndex = 0;

	// // 设置一个定时
	//  var timer;

	//  // 切换图片
 //        function show()
 //        {
 //            $('#HCpicture').attr('src') = imgHCarousel[imgHCarouselIndex];
 //        }
 // 

 // 	// 设置一个定时器
 // 	var timer;
 // 	var i;

 // 	// 头部轮播的图片
	// var imgHCarousel = [
	//     'images/HeaderCarousel/1.jpg',
	//     'images/HeaderCarousel/2.jpg',
	//     'images/HeaderCarousel/3.jpg'
	// ];

	// // 轮播函数
	// showTime();

	// // 当鼠标点击点的时候
	// $('dot-item').mousedown(function(){
	// 	i = $(this).index();
	//     Show();
	//     clearInterval(timer);
	// })
	

	// //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
	//   $('.tab').hover(function(){
	//     //获取当前i的值，并显示，同时还要清除定时器
	//     i = $(this).index();
	//     Show();
	//     clearInterval(timer);
	//   },function(){
	//     //
	//     showTime();
	//   });

	 // start();
        
  //       var imgs = [
  //          'images/HeaderCarousel/1.jpg',
	 //    'images/HeaderCarousel/2.jpg',
	 //    'images/HeaderCarousel/3.jpg',
	 //    'images/HeaderCarousel/2.jpg',
  //       ];

  //       // console.dir(imgs);

        
  //       var imgIndex = 0;

  //       var timer;

  //       // 切换图片
  //       function show()
  //       {
  //           $('#HCpicture').attr('src','imgs[imgIndex]')
  //           // .src = imgs[imgIndex];
  //           // console.log( $('#HCpicture'));
  //       }
  //        var _dots =$('.dot-item');


  //       function showDot()
  //       {
           
  //          $('.dot-item').each(function(){
  //          	$('.dot-item').removeClass('active');
  //          })
                
  //            $(this).addClass('active');
  //           console.dir(imgIndex);   
  //       }


  //       function start()
  //       {
  //           timer = setInterval(function(){
  //               // 切换图片
  //               show();

  //               // 切换点
  //               showDot();

  //               // 改变索引
  //               imgIndex++;

  //               // 超过最后一张图则显示第一张
  //               if (imgIndex > imgs.length - 1) {
  //                   imgIndex = 0;
  //               }

  //           }, 1500);
  //       }


  //       function next()
  //       {
  //           imgIndex++;

  //           // 超过最后一张图则显示第一张
  //           if (imgIndex > imgs.length - 1) {
  //               imgIndex = 0;
  //           }

  //           show();

  //           showDot();
  //       }

  //       function prev()
  //       {
  //           imgIndex--;


  //           if (imgIndex < 0) {
  //               imgIndex = imgs.length - 1;
  //           }

  //           show();

  //           showDot();
  //       }


  //       $('#HeaderCarousel').mouseenter (
  //       	function() {
  //           clearInterval(timer);
  //       }) 

  //      $('#HeaderCarousel').mouseenter (
  //      	function() {

  //           imgIndex--;

  //           if (imgIndex < 0) {
  //               imgIndex = imgs.length - 1;
  //           }

  //           start();
  //       }) 

  //     $('.dot-item').click(
  //     	function change(num){

  //           imgIndex = num;
  //           show();
  //           showDot();

  //       }
  //     	) 





 	
 	//头部右边鼠标滑过动画
	$('#headerLine1_1').hover(function(){
		
		$('.LineText1').css('display','inline-block');

	},function(){
		$('.LineText1').css('display','none');

	});


	$('#headerLine1_2').hover(function(){
		
		$('.LineText2').css('display','inline-block');

	},function(){
		$('.LineText2').css('display','none');

	});

	$('#headerLine2_1').hover(function(){
		
		$('.LineText3').css('display','inline-block');

	},function(){
		$('.LineText3').css('display','none');

	});

	$('#headerLine2_2').hover(function(){
		
		$('.LineText4').css('display','inline-block');

	},function(){
		$('.LineText4').css('display','none');

	});


	$('.second_img1').hover(function(){
		
		$('.second_img1').addClass('animated swing');

	},function(){
		$('.second_img1').removeClass('animated swing');

	});

	$('.second_img2').hover(function(){
		
		$('.second_img2').addClass('animated swing');

	},function(){
		$('.second_img2').removeClass('animated swing');

	});

	$('.second_img3').hover(function(){
		
		$('.second_img3').addClass('animated swing');

	},function(){
		$('.second_img3').removeClass('animated swing');

	});














  
});
