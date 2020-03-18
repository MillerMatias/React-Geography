CKEDITOR.plugins.add('oembed', TextEditorManager.setupIframePlugin("oembed",
{
    dialogName: 'oembed_dialog',
    useBuiltInCloseButton: true,
    emptyIframeOnClose: true,
	dialogSrcReplacementFunction: function (editor, pluginConfig)
    {
        var url = pluginConfig.DialogSrc.replace("{editorId}", editor.name);
        return url;
    },
    dialogContentLoad: function (editor, pluginConfig, dialogiframe)
    {
        var selection = editor.getSelection(),
            editReferenceValue;

        if (editor.EditEmbedMode === true && selection && selection.getSelectedElement() != null)
        {
            // Modify relative url: set editReference value from selected element
            editReferenceValue = selection.getSelectedElement().getAttribute('editReference')

            // Transfer edit reference to the plugins window
            var iframeWindow = dialogiframe[0].contentWindow;
            CommonFunctions.makePostMessageCall(iframeWindow, new CommonWindowMessages.GenericMessageWithData(CommonWindowMessages.MessageNames.editEmbededContent, { editReference: editReferenceValue }));
        }

        // Reset back to insert mode here - toolbar button click event occurs after executing CK plugin
        editor.EditEmbedMode = false;
    },
    beforeInitComplete: function (editor, pluginConfig)
    {
        // Add context menu item
        if (editor.contextMenu)
        {
            // Add contextmenu group
            editor.addMenuGroup('oembed');
            // Add contextmenu element to group we just created
            editor.addMenuItem('oembed',
            {
                label: pluginConfig.EditText,
                command: pluginConfig.Id,
                group: 'oembed'
            });

            // Listen for clicks on images with media attribute
            editor.contextMenu.addListener(function (elem, selection)
            {
                // Use selected element instead of element passed as a parameter.
                // Selection could be range of elements and elem will be only first in the range.
                // For ranges context menu item shouldn't be shown.
                var element = selection ? selection.getSelectedElement() : elem;
                if (element)
                    element = element.getAscendant('img', true);

                if (element && !element.isReadOnly() && !element.data('cke-realelement') && element.getAttribute("id") != null && element.getAttribute("id").indexOf("extension:") == 0)
                {
                    var extensionId = TextEditorManager.getExtensionIdFromIdString(element.getAttribute("id"));
                    // ok - image that is oembed content, return the command
                    if (extensionId == TextEditorManager.commonSettings.constants.oembedExtensionId) {
                        editor.EditEmbedMode = true;
                        return { oembed: CKEDITOR.TRISTATE_OFF };
                    }
                }
                return null;
            });
        }
    }
}));
