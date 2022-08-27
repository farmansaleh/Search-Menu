
    var allMenu="";
    var listData="";
    $(document).ready(function() {
        //get All menu list
        listData=$("#searchMenuList");
        //get all menu html code
        allMenu=$("#searchMenuList")[0].innerHTML;

        //fire event on key up
        $("#searchMenu").on("keyup", function() 
        {
            var matchCount=0;
            //get menu name which you want to search and convert all character into lowercase
            var menuName = $(this).val().toLowerCase();
            if($.trim(menuName)  != null && $.trim(menuName) != ""){

                $("#searchMenuList li").filter(function() 
                {
                    //first check that menu is in which position locat and get the index position
                    if($(this).toggle($(this).text().toLowerCase().indexOf(menuName) != -1)) {
                        
                        //if menu index position is greater than -1 then it will show otherwise it will remove
                        if($(this).text().toLowerCase().indexOf(menuName) > -1) {
                            $(this).toggle($(this).text().toLowerCase().indexOf(menuName) > -1);
                            $(this).addClass("active");
                            $(this).find("ul").css("display","block");
                            matchCount++;
                        }
                        else {
                            $(this).toggle($(this).text().toLowerCase().indexOf(menuName) > -1);
                        }
                    }
                });
                if(matchCount == 0) {
                    $("#div_menu_id").find(".noMenuFound").show();
                }
                else {
                    $(".noMenuFound").hide();
                }
            }
            else {
                $("#searchMenuList").empty();
                $(".noMenuFound").hide();
                $("#searchMenuList").append(allMenu);
            }
        });
    });