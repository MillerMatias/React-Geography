CKEDITOR.plugins.add("previewmedia",TextEditorManager.setupIframePlugin("previewmedia",{addToolBarButton:!1,dialogName:"previewmedia_dialog",dialogSrcReplacementFunction:function(d,b,a){d=b.ExtraSettings;a=a.getSelection();var c=b.DialogSrc;a&&null!=a.getSelectedElement()&&(b=JSON.parse($(decodeURIComponent(a.getSelectedElement().data("cke-realelement"))).attr(d.mediaContentAttribute)),[{key:"{filePath}",value:b.url},{key:"{fileName}",value:b.fileName},{key:"{playerMediaType}",value:b.mediaType},
{key:"{fallbackUrl}",value:b.fallbackUrl}].forEach(function(a){c=c.replace(a.key,encodeURIComponent(a.value));c=c.replace(new RegExp(encodeURIComponent(a.key),"i"),encodeURIComponent(encodeURIComponent(a.value)))}));return c},beforeInitComplete:function(d,b){d.contextMenu&&(d.addMenuGroup("previewmedia"),d.addMenuItem("previewmedia",{label:b.EditText,command:b.Id,group:"previewmedia"}),d.contextMenu.addListener(function(a,c){(a=c?c.getSelectedElement():a)&&(a=a.getAscendant("img",!0));return a&&!a.isReadOnly()&&
a.data("cke-realelement")&&(a.hasClass(b.ExtraSettings.cssClasses.fakeVideo)||a.hasClass(b.ExtraSettings.cssClasses.fakeAudio))?{previewmedia:CKEDITOR.TRISTATE_OFF}:null}))}}));