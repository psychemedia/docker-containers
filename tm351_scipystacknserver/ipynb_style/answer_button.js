//based on https://github.com/ipython/ipython/issues/5591
"using strict";
var answer_button = (function() {
 
    function add_buttons(){
        console.log("Add answer reveal button");
        $("div").each( function(){
            if (this.className === 'answer') {
                activityBlock=$(this).parent().parent().parent();
                activityBlock.css("background-color","#c8ecff");
                var button= '<input type="button" value="Answer" onclick="showHide(' + this.id + ')">';
                this.insertAdjacentHTML("beforeBegin",button);
            }
            if (this.className === 'activity') {
            	activityBlock=$(this).parent().parent().parent();
                activityBlock.css("background-color","#c8ecff");
            }
        });
    };
 
$([IPython.events]).on('notebook_loaded.Notebook',add_buttons());
 
    IPython.toolbar.add_buttons_group([
                {
                    id : 'add_buttons',
                    label : 'Add answer buttons',
                    icon : 'fa-cogs',
                    callback : add_buttons
                }
          ]);
          
})();
 
function showHide(e) {
 
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
      e.style["background-color"]="#ecf6ff";
}