$(function(){
    dangerNum = Math.floor(Math.random() *3);
    clearNum = 0;
    var clicked_ids = [];

    $('.bt').on('click',function(){
        var id = $(this).attr("id");
        var img=document.getElementById(id);
        
        if(id==dangerNum){
            clearNum = 0;
            clicked_ids = [];
            alert("GAME OVER!");
            location.reload();
        }
        if(id<=3 && !(id in clicked_ids)){
            img.setAttribute('src', './materials/teeth/Teeth_Lw_Wh.piko');
            clicked_ids.push(id);
            clearNum += 1;
        }
        if(clearNum == 2){
            img.setAttribute('src', './materials/teeth/Teeth_Lw_Wh.piko');

            alert("GAME CLEAR!");

            location.reload();
        }

    })

    $("#modal-open-r").click(
        function(){
            $("body").append('<div id="modal-overlay"></div>');
            $("#modal-overlay").fadeIn("slow");
            $("#modal-content-r").fadeIn("slow");
        }
    )

    $("#modal-open-s").click(
        function(){
            $("body").append('<div id="modal-overlay"></div>');
            $("#modal-overlay").fadeIn("slow");
            $("#modal-content-s").fadeIn("slow");
        }
    )

    $("#modal-overlay,#modal-close-s,#modal-close-r").unbind().click(function(){
        $("#modal-content-s,#modal-content-r, #modal-overlay").fadeOut("slow",function(){
            $("#modal-overlay").remove();
        }
    )
      
    });
    $(this).blur();
    if($("#modal-overlay")[0]) return false;
    
    window.onload = function() {
        
        var my_audio = new Audio("./materials/audio/決定、ボタン押下34.mp3");
            //ボタンにクリックイベントを設定
            document.getElementById("modal-open-r").onclick = function() {
                my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
                my_audio.play();  //サウンドを再生
            }
            document.getElementById("modal-open-s").onclick = function() {
                my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
                my_audio.play();  //サウンドを再生
            }
    }

})


