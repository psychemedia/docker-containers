//based on https://github.com/ipython-contrib/IPython-notebook-extensions/blob/master/publishing/nbconvert_button.js
// convert current notebook to html by calling "ipython nbconvert"
"using strict";

var odszip = (function() {  
    do_odszip_extension=function(){
        var kernel = IPython.notebook.kernel;
        var name = IPython.notebook.notebook_name;
        
        //Force the notebook to be saved
        IPython.notebook.save_checkpoint()
        
        var nc=name.split('.ipynb')[0]
        var command = "import os; os.system('ipython3 nbconvert --to html \"" + name + "\"; zip \""+nc+".nbk\"  \""+nc+".ipynb\" \""+nc+".html\"; rm \""+nc+".html\"')"
        kernel.execute(command);
    };

    IPython.toolbar.add_buttons_group([
        {
            id : 'do_odszip_extension',
            label : 'Zip current notebook for ODS',
            icon : 'fa-download',
            callback : do_odszip_extension
        }
    ]);
})();
