$(document).ready(function() {
    var debug=false;
    var vpath=window.location.pathname.toLowerCase()
    $("body").removeAttr("oncontextmenu");
    if (vpath=="/jwmis/"||vpath=="/jwmis/default.aspx".toLowerCase()) {

        if (debug) console.log("Index Started!");
        
        $("iframe[name='frmHomeShow']").attr("src","./_data/index_LOGIN.aspx");

        $("span[onclick='ToLink(this)']").click(function(){

            var id=$(this).attr("id");

            var vHref=$("span#"+id).attr("value");
            if(vHref.length<18) return false;

            $("iframe[name='frmHomeShow']").attr("src",vHref);

            event.preventDefault();
        });
        $("span[onclick='ToLink(this)']").removeAttr("onclick");
    }
    else if (vpath=="/jwmis/_data/index_News.xml".toLowerCase()) {
        if (debug) console.log("Index News Started!");

        $("span[onclick='popWinJWDT(this)']").click(function(){

            var theURL='../_data/news/'+ $(this).attr("href");
            var pop,w=660,h=550;
            pop=window.open(theURL,"winDWL","width="+w+",height="+h+",resizable=yes,menubar=no,toolbar=no,location=no,scrollbars=yes,status=no")
            pop.moveTo((screen.width-w)/2,100);

            event.preventDefault();
        });
        $("span[onclick='popWinJWDT(this)']").removeAttr("onclick");
    }
    else if (vpath=="/jwmis/_data/index_Down.xml".toLowerCase()) {
        if (debug) console.log("Index Down Started!");
    
        $("span[onclick='popWinDown(this)']").click(function(){

            var theURL='../_data/down/'+ $(this).attr("href");
            var pop,w=400,h=80;
            pop=window.open(theURL,"winDWL","width="+w+",height="+h+",resizable=yes,menubar=no,toolbar=no,location=no,scrollbars=yes,status=no")
            pop.moveTo((screen.width-w)/2,0);

            event.preventDefault();
        });
        $("span[onclick='popWinDown(this)']").removeAttr("onclick");
    }
    else if (vpath=="/jwmis/_data/index_Rule.xml".toLowerCase()) {
        if (debug) console.log("Index Rule Started!");
    
        $("span[onclick='popWinRule(this)']").click(function(){

            var theURL='../_data/RULE/'+ $(this).attr("href");
            var pop,w=620,h=540;
            pop=window.open(theURL,"winDWL","width="+w+",height="+h+",resizable=yes,menubar=no,toolbar=no,location=no,scrollbars=yes,status=no")
            pop.moveTo((screen.width-w)/2,0);

            event.preventDefault();
        });
        $("span[onclick='popWinRule(this)']").removeAttr("onclick");
    }
    else if (vpath=="/jwmis/_data/index_XKJS.xml".toLowerCase()) {
        if (debug) console.log("Index XKJS Started!");
    
        $("span[onclick='popWinXKJS(this)']").click(function(){

            var theURL='../_data/XKJS/'+ $(this).attr("href");
            var pop,w=620,h=540;
            pop=window.open(theURL,"winDWL","width="+w+",height="+h+",resizable=yes,menubar=no,toolbar=no,location=no,scrollbars=yes,status=no")
            pop.moveTo((screen.width-w)/2,0);

            event.preventDefault();
        });
        $("span[onclick='popWinXKJS(this)']").removeAttr("onclick");
    }
    else if (vpath=="/jwmis/_data/index_LOGIN.aspx".toLowerCase()) {
        if (debug) console.log("Index Login Started!");
        $("#imgCode").removeAttr("onclick").click(function() {
            var dt = new Date();
            this.src="../sys/ValidateCode.aspx?t="+dt.getMilliseconds();
        });
        if (debug) console.log($("#divLogNote").text());
        if ($("#divLogNote").text()=="正在加载权限数据...") window.top.location.href="../MAINFRM.aspx";
    }
    else if (vpath=="/jwmis/_data/index_LoginNote.aspx".toLowerCase()) {
        if (debug) console.log("Logged in!");
        window.top.location.href="../MAINFRM.aspx";
    }
    //alert(window.location.pathname);
});