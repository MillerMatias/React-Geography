function PopupEditor(k){window[k]=this;var a=this,d,g,c,f,e,h;a.initialize=function(){d=a.controls.container;c=a.controls.textField;f=a.controls.content;h="true"===a.settings.isInlineEditMode;d.css("position","relative");g=$("<div></div>").addClass(a.settings.classes.openButtonCssClass).click(a.openPopupEditor).appendTo(d);a.settings.replaceInputId&&(e=$("#"+a.settings.replaceInputId))&&(e.hide(),c.val(e.val()));h||f.html(c.val());a.refreshOpenPopupButton()};a.refreshOpenPopupButton=function(){""===
c.val()?g.text(a.settings.enterValueTerm).removeClass("ccl-ck-link-right-bottom").addClass("ccl-ck-link-center"):g.text("").removeClass("ccl-ck-link-center").addClass("ccl-ck-link-right-bottom")};a.openPopupEditor=function(){window.open(a.settings.popupUrl,"_blank")};a.updateText=function(b){h?(b={text:b,callback:$.proxy(a.setTextAndContent,a)},f.trigger(a.settings.textUpdatedClientEventName,b)):a.setTextAndContent(b)};a.setTextAndContent=function(b,d){c.val(b).trigger("blur");f.html(2<=arguments.length?
d:b);e&&e.val(b);a.refreshOpenPopupButton()};a.getText=function(){return c.val()};return a};