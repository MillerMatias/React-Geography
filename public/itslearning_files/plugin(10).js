function isBrowseExtensions(item) {

	if (typeof (item.isBrowseExtensions) === 'undefined') {
		item.isBrowseExtensions = (item.DialogSrc && item.DialogSrc.toLowerCase().indexOf('browseextensions.aspx') != -1);
	}
	return item.isBrowseExtensions;

}

function sortByText(item1, item2) {

	if (typeof (item1) === 'function') return 1;
	if (typeof (item2) === 'function') return -1;

	if (isBrowseExtensions(item1)) return 1;
	if (isBrowseExtensions(item2)) return -1;

	var x = item1.Text.toLowerCase();
	var y = item2.Text.toLowerCase();
	return ((x < y) ? -1 : ((x > y) ? 1 : 0));

}

CKEDITOR.plugins.add('itslpluginlist', {
	requires: ['iframedialog'],
    update: function (editor, pluginId) {
    	$(editor).trigger('rebuildList', pluginId);
    },
    init: function (editor) {

    	var glogalConfig = editor.config;
	    var path = this.path;
    	var specificConfig = glogalConfig["itslpluginlist"];
    	var menuitems = [];
		var plugincommand;

        // initialize variables
        var menuGroup = 'plugins_group';

        // add menu group (to render a down arrow to the right)
        editor.addMenuGroup(menuGroup);

	    var menuBytton = new CKEDITOR.ui.menuButton({
        	label: specificConfig.LabelText,
        	title: specificConfig.TitleText,
        	toolbar: 'insert,10',
        	onMenu: function () {
        		if (Object.keys(menuitems).length > 1) {
        			return menuitems;
        		} else {
					var firstEditorMenuItem = Object.keys(menuitems)[0];
					if(firstEditorMenuItem != 'itslbrowseextensions') {
						return menuitems;
					}
					
	    			var menuButton = editor.ui.instances["itslpluginlist"];
	    			menuButton._.menu.hide();
	    			if (firstEditorMenuItem) {
	    				openIFrame(firstEditorMenuItem);
	    			}
		        }
        	},
        	modes: {
        		wysiwyg: 1
        	}
        });

	    editor.ui.add('itslpluginlist', CKEDITOR.UI_MENUBUTTON, menuBytton);

	    var rebuildList = CKEDITOR.tools.bind(function (event, pluginId) {
        	toggleMenuButtonLoadingState(true);

        	$.ajax({
        		url: specificConfig.DataSrc,
        		type: 'GET',
        		dataType: 'jsonp',
        		cache: false,
        		crossDomain: true,
        		contentType: "application/json",
        		success: function (data) {
        			menuitems = getMenuItems(data);

        			if (pluginId) {
        				openIFrame('plugin' + pluginId);
        			}

        			toggleMenuButtonLoadingState(false);
        		}
        	});

        }, true);

	    $(editor).on('rebuildList', rebuildList);

	    editor.on("menuShow", function (data) {
	    	var menu = $("#" + data.data[0].element.$.id);
	    	menu.css("max-height", "170px");

			var iframeContents = menu.find("iframe").contents();

	    	iframeContents.find("html")
				.css("overflow", "auto")
				.css("overflow-x", "hidden");

	    	iframeContents.find(".cke_panel_block")
				.css("outline", "none");

	    	iframeContents.find(".cke_menuitem span")
				.css("cursor", "pointer");

	    	iframeContents.find(".cke_menubutton_icon")
				.css("background-color", "transparent");

	    	iframeContents.find(".cke_menubutton_label")
				.css("text-overflow", "ellipsis")
				.css("white-space", "nowrap")
				.css("display", "inline-block")
				.css("padding-bottom", "5px")
				.css("width", "150px")
				.css("overflow-x", "hidden");
	    });

        function getMenuItems(rawMenuItems) {
        	var items = [];
        	if (rawMenuItems && rawMenuItems.length) {
        		rawMenuItems.sort(sortByText);

        		for (var index = 0; index < rawMenuItems.length; index++) {

        			var rawMenuItem = rawMenuItems[index];

        			editor.addCommand(rawMenuItem.Id, {
        				exec: function () {
        					//here is where we tell CKEditor what to do.
        					var currentCommand = this;
        					openIFrame(currentCommand.name);
        				}
        			});
        			items[rawMenuItem.Id.toLowerCase()] = {
        				id: rawMenuItem.Id,
        				label: rawMenuItem.Text,
        				group: menuGroup,
        				icon: rawMenuItem.IconSrc,
        				order: index + 1,
        				command: rawMenuItem.Id,
        				dataItem: rawMenuItem
        			};;
		        }

        		editor.addMenuItems(items);
        	}
        	return items;
        }

        function toggleMenuButtonLoadingState(disable) {
        	var toolbarMenyButton = editor.ui.instances["itslpluginlist"];
        	if (toolbarMenyButton) {
        		var menyButton = $(".cke_button__itslpluginlist_icon");
		        menyButton.css('background-repeat', 'no-repeat').css('background-position', '0 0');
        		if (disable) {
        			menyButton.css('background-image', 'url(' + path + 'icons/itsl-plugin-list-toolbar-loader-16.gif' + ')');
        			toolbarMenyButton.setState(CKEDITOR.TRISTATE_DISABLED);
        		} else {
        			menyButton.css('background-image', 'url(' + path + 'icons/itsl-plugin-list-toolbar-button-16.png' + ')');
        			toolbarMenyButton.setState(CKEDITOR.TRISTATE_OFF);

		        }
	        }
	    };


    	// Function to be run when the iframe has finished loading just for browse extentions 
        var onContentLoadBrowseExtentions = function() {}

    	// Function to be run when the iframe has finished loading ( unfortunately in case of picture plugin it takes some seconds )
        var onContentLoad = TextEditorManager.getOnContentLoadFunctionForIframeDialog();

        var openIFrame = function (id) {
        	// make sure that the function user selected does not remain selected
        	var editorMenuItem = editor.getMenuItem(id);
        	if (editorMenuItem) {
        		var item = editorMenuItem.dataItem;
        		var customDialogDefintion = {

        			onShow: function () {
        				var currentDialog = CKEDITOR.dialog.getCurrent(),
							currentDialogElement = currentDialog._.element;
        				currentDialog.parts.close.hide();  // hide iframe x-button (close)
        				currentDialog.parts.footer.hide(); // hide iframe submit and cancel buttons
        				currentDialog.parts.title.hide();  // hide iframe title
        				if (item.IsEditorDialogTransparent == "1") {
        					currentDialogElement.addClass("hiddenDialog");
        				}
        				if (CKEDITOR.env.ie) {
        					// IE shows dialog scrollbars, but this is not necessary. noScrollbars class adds overflow: hidden that fixes the problem. 
        					currentDialogElement.addClass("noScrollbars");
        				}

        				// When the editor is maximized, the dialog width is broken since all other elements exept CKEditor has width=0, position=static and overflow:visible.
        				// That's why we need to change the width of first child (table container) to the actual width of iframe.
        				var maximizeCommand = currentDialog._.editor.getCommand("maximize"),
							dialogContainerElement = currentDialogElement.getChild(0).$;
        				if (maximizeCommand && maximizeCommand.state == CKEDITOR.TRISTATE_ON) {
        					dialogContainerElement.style.width = item.DialogWidth + "px";
        				} else if (dialogContainerElement.style.width) {
        					dialogContainerElement.style.width = "";
        				}

        				var isiPad = navigator.userAgent.match(/iPad/i) != null;

        				if (isiPad) {
        					// every time we call dialog from this menu, we want collapse frames on iPad.
        					if (typeof (FrameCollapser) == "function") {

        						var collapser = new FrameCollapser();
        						collapser.initialize();
        						collapser.collapseFrames();
        						CKEDITOR.dialog.getCurrent().on('hide', function (e) {
        							collapser.expandFrames();
        						});
        					}
        					// resize is for fixing problem of cover layer for modal dialog 
        					var win = CKEDITOR.document.getWindow();
        					function resize() {
        						var size = win.getViewPaneSize();

        						var coverElement = $(".cke_dialog_background_cover");
        						if (orientation == 0 || orientation == 180) {
        							coverElement.css("width", size.width + 'px');
        							coverElement.css("height", size.height + 'px');
        						}
        						else {
        							coverElement.css("height", size.width + 'px');
        							coverElement.css("width", size.height + 'px');
        						}
        					}
        					resize();

        					top.window.onorientationchange = resize;
        				}
        			}
        		};

        		// If custom command is set, use that
        		if (item.Command && item.Command.length > 0) {
        			// Hack to get webkit browsers to accept insertHtml when user has not given focus to the editor
        			CKEDITOR.instances[editor.name].focus();
        			// replace the editorClientInstanceId with the current editor's clientInstanceId
        			item.Command = item.Command.replace("{editorId}", editor.name);
        			// run the command
        			eval(item.Command);
        		}
        			// If no custom command is set, use dialogSrc and iframe dialog
        		else {
        			if (isBrowseExtensions(item)) {
        				CKEDITOR.dialog.addIframe(id, '', item.DialogSrc, item.DialogWidth, item.DialogHeight, onContentLoadBrowseExtentions, customDialogDefintion);
        			}
        			else {
        				CKEDITOR.dialog.addIframe(id, '', item.DialogSrc, item.DialogWidth, item.DialogHeight, onContentLoad, customDialogDefintion);
        			}
        			plugincommand = editor.addCommand(id, new CKEDITOR.dialogCommand(id));
        			plugincommand.exec();
        		}
        	}
        };
    }
});

CKEDITOR.on("instanceReady", function (event) {
	var editor = event.editor;
	$(editor).trigger('rebuildList');
})