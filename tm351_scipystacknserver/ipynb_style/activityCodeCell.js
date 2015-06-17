// add button to make codecell activity blue
//based on https://github.com/ipython-contrib/IPython-notebook-extensions/blob/master/usability/read-only.js
"using strict";
 
var activityCodeCell = (function() {
    
    /**
     * Set codecell to activity 
     * 
     *  @param {Object} cell current notebook cell
     */
    setActivity = function (cell) {
    	console.log("Run set activity");
        if (cell instanceof IPython.CodeCell)  {
			var prompt = cell.element.find('div.input_area');
			//var output_area = cell.element.find('div.output_subarea');
			var cp=cell.element.find('div.input').parent()
			if (cell.metadata.activity == 'activity') {
				prompt.css("background-color","#ecf6ff"); 
				cp.css("background-color","#c8ecff");
				//output_area.css("background-color","#f5ffff");
			} else {
				prompt.css("background-color","#f5f5f5");
				cp.css("background-color","#ffffff");
				//output_area.css("background-color","#ffffff");
			}
        } else if (cell instanceof IPython.MarkdownCell)  {
            var prompt = cell.element;
			//var cp=cell.element.find('div.input').parent()
			if (cell.metadata.activity== 'clear') {
				prompt.css("background-color","#ffffff");
				prompt.find('div.inner_cell').css("background-color","#ffffff")
			} else {
				if  (cell.metadata.activity == 'activityAns')  {
				  prompt.css("background-color","#c8ecff") 
				  prompt.find('div.inner_cell').css("background-color","#ecf6ff")
				} else if  (cell.metadata.activity == 'activity')  {
				  prompt.css("background-color","#c8ecff") 
				  prompt.find('div.inner_cell').css("background-color","#c8ecff")
				}
			}  
 		}
    };
    
    function toggleActivity() {
    	console.log("Run toggle activity");
        var cell = IPython.notebook.get_selected_cell();
        if ((cell instanceof IPython.CodeCell)) {
            if (!('activity' in cell.metadata) || (cell.metadata.activity=='clear') )
                cell.metadata.activity = 'activity'; 
            else //if (cell.metadata.activity=='activity')
            	cell.metadata.activity = 'clear'
            setActivity(cell);
        } else if (cell instanceof IPython.MarkdownCell) {
            if (!('activity' in cell.metadata) || (cell.metadata.activity=='clear'))
                cell.metadata.activity = 'activity';
            else if (cell.metadata.activity == 'activity' )
               cell.metadata.activity = 'activityAns'
            else if (cell.metadata.activity == 'activityAns')
               cell.metadata.activity='clear' 
            setActivity(cell);
        }
    };

 
    /**
    * Add run control buttons to toolbar and initialize codecells
    * 
    */
    IPython.toolbar.add_buttons_group([
                {
                    id : 'activity_codecell',
                    label : 'Toggle activity codecell',
                    icon : 'fa-tasks',
                    callback : toggleActivity
                }
          ]);
          
 function oustyle_notebook(){     
 	console.log("Run oustyle_notebook");    
    /* loop through notebook and set style of activity cells defined in metadata */
    var cells = IPython.notebook.get_cells();
    for(var i in cells){
        var cell = cells[i];
        if ((cell instanceof IPython.CodeCell) || (cell instanceof IPython.MarkdownCell) ) {
            if ('activity' in cell.metadata)
                setActivity(cell);
            
        }
          
    };
 }
 
    //$([IPython.events]).on('create.Cell',create_cell);    
    $([IPython.events]).on('notebook_loaded.Notebook',oustyle_notebook());
    
})();