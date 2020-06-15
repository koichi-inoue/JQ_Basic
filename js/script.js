$(document).ready( function(){

	$(".fade").fadeTo(0,0.2); // 初期状態 20%

	$(".fade").hover(
		function(){
			$(this).fadeTo("slow", 1.0); // マウスが載ったら100%までフェードする
		},
		function(){
			$(this).fadeTo("slow", 0.2); // マウスが離れたら20%に戻す
		}
	);
});
