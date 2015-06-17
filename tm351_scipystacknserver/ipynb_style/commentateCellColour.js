// add button to make codecell commentate red
//based on https://github.com/ipython-contrib/IPython-notebook-extensions/blob/master/usability/read-only.js
"using strict";
 
var commentateCodeCell = (function() {
    
    /**
     * Set codecell to commentate 
     * 
     *  @param {Object} cell current notebook cell
     */

    
 setcommentate = function (cell) {
 		console.log("Run setcommentate");
        if (cell instanceof IPython.CodeCell)  {
			var prompt = cell.element.find('div.input_area');
			//var output_area = cell.element.find('div.output_subarea');
			var cp=cell.element.find('div.input').parent()
			if (cell.metadata.commentate == true) {
				cp.css("background-color","#eda7c3"); 
				prompt.css("background-color","#f4cadb");
				//output_area.css("background-color","#f5ffff");
			} else {
				prompt.css("background-color","#f5f5f5");
				cp.css("background-color","#ffffff");
				//output_area.css("background-color","#ffffff");
			}
        } else if (cell instanceof IPython.MarkdownCell)  {
            var prompt = cell.element;
			//var cp=cell.element.find('div.input').parent()
			if (cell.metadata.commentate==true) {
				prompt.css("background-color","#f4cadb");
				prompt.find('div.inner_cell').css("background-color","#f4cadb")
			} else {
				  prompt.css("background-color","#ffffff") 
				  prompt.find('div.inner_cell').css("background-color","#ffffff")
			}  
 		}
 	}
    
 
    function togglecommentate() {
    	console.log("Run togglecommentate");
        var cell = IPython.notebook.get_selected_cell();
        if ((cell instanceof IPython.CodeCell) || (cell instanceof IPython.MarkdownCell)) {
            if (!('commentate' in cell.metadata))
                cell.metadata.commentate = true; 
            else cell.metadata.commentate = !cell.metadata.commentate
            setcommentate(cell);
        }
    };
 
 
    /**
    * Add run control buttons to toolbar and initialize codecells
    * 
    */
    IPython.toolbar.add_buttons_group([
                {
                    id : 'commentate_codecell',
                    label : 'Toggle cell comment',
                    icon : 'fa-exclamation-circle',
                    callback : togglecommentate
                }
          ]);
          
 function oustyle_notebook_commentate(){
 	console.log("Run oustyle_notebook_commentate");
    /* loop through notebook and set style of commentate cell defined in metadata */
    var cells = IPython.notebook.get_cells();
    for(var i in cells){
        var cell = cells[i];
        if ((cell instanceof IPython.CodeCell) || (cell instanceof IPython.MarkdownCell)) {
            if ('commentate' in cell.metadata) {
                setcommentate(cell);
            } 
        }
          
    };
 }
 
    //$([IPython.events]).on('create.Cell',create_cell);    
    $([IPython.events]).on('notebook_loaded.Notebook',oustyle_notebook_commentate());
    
})();