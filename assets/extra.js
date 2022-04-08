$(document).ready(function () {
	$(".cstm-search").click(function () {
		console.log("classadded");
		$(".collection-header-container").addClass("fix-filtr");
	});
	$(".srch-cls").click(function () {
		console.log("remove");
		$(".collection-header-container").removeClass("fix-filtr");
	});

	$(".cstm-featured-navigation").hide();
	//       $(".cstm-collections, .cstm-featured-navigation").click(function(){
	//         $('.cstm-featured-navigation').show();
	//       },function(){
	//         $('.cstm-featured-navigation').hide();
	//       });

	//       function select_variant(variant){
	//       	$('.variant-image-media').each(function() {
	//           var imgalt = $(this).attr('data-variant-color');
	//           console.log("ImageAlt=",imgalt);
	//           if(variant != imgalt){
	//             $(this).addClass('selected-variant');
	//     	  }else{
	//             $(this).removeClass('selected-variant');
	//           }
	//   	   });
	//       }

	$(".register-drawer").hide();
	$(".cstm-register").click(function () {
		$(".cstm-login-form").hide();
		$(".register-drawer").show();
	});
	$(".cstm-signin").click(function () {
		$(".cstm-login-form").show();
		$(".register-drawer").hide();
	});
	$(".variant-image-container img").click(function () {
		//console.log($(this).attr('alt'));
		var imgalt = $(this).attr("alt");
		$(".variant-input input").each(function () {
			var variant = $(this).attr("data-handle");
			//console.log("variant-color=",variant);
			if (imgalt == variant) {
				//console.log("match");
				$(this).trigger("click");
				$("html, body").animate({ scrollTop: 0 }, "slow");
				return false;
			}
		});
	});

	$(".variant-input input").click(function () {
		var variant = $(this).attr("data-handle");
		// console.log("variantcolor=", variant);

		$(".variant-image-media").each(function () {
			var imgalt = $(this).attr("data-variant-color");
			// console.log("ImageAlt=", imgalt);
			if (variant != imgalt) {
				$(this).addClass("selected-variant");
			} else {
				$(this).removeClass("selected-variant");
			}
		});
	});
});

let variantFormSelects = document.querySelectorAll(".variant-input input");

variantFormSelects.forEach((vfs) => {
	vfs.addEventListener("click", (e) => {
		let targetTag = e.target.dataset.handle;
		let featuredImages = document.querySelectorAll(".variant-featured-image-container");
		featuredImages.forEach((el) => {
			if (el.dataset.variantAltTag == targetTag) {
				el.classList.remove("selected-variant");
			} else {
				el.classList.add("selected-variant");
			}
		});
	});
});

function filterVariantImages() {
	let activeOption = document.querySelector(".custom-input.active");
	let activeVariantImagesTag = activeOption.dataset.handle;
	var variant = activeVariantImagesTag;
	$(".variant-image-media").each(function () {
		var imgalt = $(this).attr("data-variant-color");
		// console.log("ImageAlt=", imgalt);
		if (variant != imgalt) {
			$(this).addClass("selected-variant");
		} else {
			$(this).removeClass("selected-variant");
		}
	});
}
filterVariantImages();

$(document).ready(function () {
	$(".cstm-collections").click(function () {
		$(".cstm-featured-navigation").toggle("slide");
	});

	$(".cstm-search").click(function () {
		$(".cstm-featured-navigation").hide("slide");
	});
});

$(document).ready(function () {
	$(".texttab li a:not(:first)").addClass("inactive");
	$(".tabcontent").hide();
	$(".tabcontent:first").show();

	$(".texttab li a").click(function () {
		var t = $(this).attr("id");
		if ($(this).hasClass("inactive")) {
			$(".texttab li a").addClass("inactive");
			$(this).removeClass("inactive");

			$(".tabcontent").hide();
			$("#" + t + "C").fadeIn("slow");
		}
	});
});

$(window).resize(function () {
	var $containerWidth = $(window).width();
	console.log($containerWidth);
	if ($containerWidth >= 1002) {
		$(".sidebar-container").css({ display: "none" });
	}
	//       else{
	//         	$('.sidebar-container').css({display: 'block'});
	//         }
});
