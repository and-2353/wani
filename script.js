$(function(){
    dangerNum = Math.floor(Math.random() *12);
    clearNum = 0
    $('.bt').on('click',function(){
        var id = $(this).attr("id");
        var img=document.getElementById(id);
        if(id==dangerNum){
            clearNum = 0
            alert("GAME OVER!");
            location.reload()
        }
        if(id<=6){
            img.setAttribute('src', './materials/Teeth_Up_Wh.piko');
            clearNum += 1
        }else{
            img.setAttribute('src', './materials/Teeth_Lw_Wh.piko');
            clearNum +=1
        }
        if(clearNum == 11){
            alert("GAME CLEAR!");
            location.reload()
        }

    })

    $("#modal-open").click(
        function(){
            $("body").append('<div id="modal-overlay"></div>');
            $("#modal-overlay").fadeIn("slow");
            $("#modal-content").fadeIn("slow");
        }
    )

    $("#modal-overlay,#modal-close").unbind().click(function(){
        $("#modal-content, #modal-overlay").fadeOut("slow",function(){
            $("#modal-overlay").remove();
        });  
    });

    

    $(this).blur();
    if($("#modal-overlay")[0]) return false;

    

    
})
