
CKEDITOR.editorConfig = function(config)
{
    config.extraPlugins = "treelink,videostandalone,audiostandalone,filestandalone,imagestandalone,oembed,ckeditor_wiris,itslimageprop,previewmedia,longtouchcontextmenu,itslpluginlist,editextension,collapsetoolbar,fakemedia,dragresize,help";
    config.language = "en-GB";
    config.toolbar = [["Font","FontSize"],
["Bold","Italic","Underline"],
["TextColor","BGColor","SpecialChar","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"],
["Subscript","Superscript","-","Outdent","Indent","-","NumberedList","BulletedList"],
["Anchor","Link","Table","Smiley","treelink","filestandalone","imagestandalone","audiostandalone","videostandalone","ckeditor_wiris_formulaEditor","oembed","itslpluginlist","slideshow"],
["Undo","Redo","-","Cut","Copy","Paste","PasteText","PasteFromWord"],
["Source"],
["help"],
["Maximize"],
["Scayt"],
["collapsetoolbar"]];
    config.forcePasteAsPlainText = 0;
    config.fontSize_sizes = "smaller/smaller;larger/larger;xx-small/xx-small;x-small/x-small;small/small;medium/medium;large/large;x-large/x-large;xx-large/xx-large";
    config.font_names = "Arial;Comic Sans MS;Courier New;Helvetica;Tahoma;Times New Roman;Verdana;Palatino Linotype";
    config.toolbarCanCollapse = 0;
    
    config.smiley_path = '/ui/controls/editor/FCK/editor/images/smiley/itslearning/';
    config.smiley_images = ['regular_smile.gif','sad_smile.gif','wink_smile.gif','teeth_smile.gif','confused_smile.gif','tounge_smile.gif','embaressed_smile.gif','omg_smile.gif','whatchutalkingabout_smile.gif','angry_smile.gif','angel_smile.gif','shades_smile.gif','devil_smile.gif','cry_smile.gif','lightbulb.gif','thumbs_down.gif','thumbs_up.gif','broken_heart.gif','kiss.gif','envelope.gif','airplane.png','alarm.png','apple.png','banana.png','basketball.png','bookmark.png','boxing_gloves_blue.png','boxing_gloves_red.png','bull.png','candle.png','certificate.png','check2.png','chest.png','clock.png','cloud.png','cloud_dark.png','cow.png','delete2.png','die.png','die_gold.png','dog.png','error.png','extinguisher.png','eye.png','fish.png','flashlight.png','flower_blue.png','flower_red.png','flower_white.png','flower_yellow.png','goblet_bronze.png','goblet_gold.png','goblet_silver.png','guitar.png','hand_red_card.png','hand_yellow_card.png','hat_green.png','hat_red.png','heart.png','icecream.png','lemon.png','lifebelt.png','lightbulb.png','magic-wand.png','medal.png','moon.png','palm.png','pig.png','pin_green.png','pin_red.png','pineapple.png','rubberstamp.png','ship2.png','snowflake.png','soccer_ball.png','spider.png','spider2.png','star_blue.png','star_green.png','star_red.png','star_yellow.png','step.png','stop.png','stopwatch.png','sun.png','sun_and_cloud.png','target2.png','target3.png','trafficlight_green.png','trafficlight_red.png','tree.png','view.png','violin.png'];
    config.smiley_descriptions = ['smile','sad','wink','big smile','confused','cheeky','embaressed','surprised','speechless','angry','angel','cool','devil','cry','lightbulb','thumbs down','thumbs up','broken heart','kiss','envelope','airplane','alarm','apple','banana','basketball','bookmark','boxing gloves blue','boxing gloves red','bull','candle','certificate','check','chest','clock','cloud','cloud dark','cow','delete','die','die gold','dog','error','extinguisher','eye','fish','flashlight','flower blue','flower red','flower white','flower yellow','goblet bronze','goblet gold','goblet silver','guitar','hand red card','hand yellow card','hat green','hat red','heart','icecream','lemon','lifebelt','lightbulb','magic-wand','medal','moon','palm','pig','pin green','pin red','pineapple','rubberstamp','ship','snowflake','soccer ball','spider','spider','star blue','star green','star red','star yellow','step','stop','stopwatch','sun','sun and cloud','target','target','trafficlight green','trafficlight red','tree','view','violin'];
    config.smiley_columns = 14;

    config.entities_additional = "";
    config.entities = false;
    config.entities_greek = false;
    config.uiColor = "#ffffff";
    config.allowedContent = true;
    config.title = false;
    config.disableNativeSpellChecker = true;
    config.fullPage = false
    config.removePlugins = "wsc,image,forms,scayt";
    config.pasteFilter = null;
    config["treelink"] = {"DialogSrc":"/Editor/treelink.aspx?LocationID=6172\u0026LocationType=Course","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":320,"DialogWidth":600,"Text":"Tree link","EditText":null,"IconSrc":null,"IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"treelink"};
config["videostandalone"] = {"DialogSrc":"/mediarecorder/video","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":550,"DialogWidth":600,"Text":"New video recording","EditText":null,"IconSrc":"https://statics.itslearning.com/v3.106.0.397/icons/xp/videorecorder16.png","IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"videostandalone"};
config["audiostandalone"] = {"DialogSrc":"/mediarecorder/audio","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":420,"DialogWidth":600,"Text":"New audio recording","EditText":null,"IconSrc":"https://statics.itslearning.com/v3.106.0.397/icons/xp/audiorecorder16.png","IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"audiostandalone"};
config["filestandalone"] = {"DialogSrc":"/FileExplorer/BrowseFiles.aspx?Type=2\u0026Function=2\u0026PopUp=1","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":570,"DialogWidth":750,"Text":"File from \u0027Your web files\u0027","EditText":null,"IconSrc":"https://statics.itslearning.com/v3.106.0.397/icons/xp/element_resource16.png","IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"filestandalone"};
config["imagestandalone"] = {"DialogSrc":"/FileExplorer/ViewFiles.aspx?Function=1","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":670,"DialogWidth":615,"Text":"Image","EditText":null,"IconSrc":"https://statics.itslearning.com/v3.106.0.397/icons/xp/image16.png","IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"imagestandalone"};
config["oembed"] = {"DialogSrc":"/Editor/PluginHandler.aspx?ExtensionId=5013\u0026UseAbsoluteUrls=True\u0026EditorClientInstanceId={editorId}","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":570,"DialogWidth":470,"Text":"Embed","EditText":"Edit embedded content","IconSrc":null,"IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"oembed"};
config["ckeditor_wiris"] = {"DialogSrc":"https://arcada.itslearning.com/RestApi/common/kpi/v1?measureSection=kpiMeasureSection\u0026measurement=kpiMeasurement\u0026measureContext=kpiMeasureContext","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":0,"DialogWidth":0,"Text":"WIRIS Editor","EditText":"Edit equation","IconSrc":null,"IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"ckeditor_wiris"};
config["itslimageprop"] = {"DialogSrc":"/FileExplorer/InsertImageUrl.aspx?Function=1\u0026imageurl={src}\u0026alt={alt}\u0026border={border}\u0026align={align}\u0026className={class}\u0026width={width}\u0026height={height}","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":400,"DialogWidth":400,"Text":"Image properties","EditText":"Image properties","IconSrc":"https://statics.itslearning.com/v3.106.0.397/icons/xp/image16.png","IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"itslimageprop"};
config["previewmedia"] = {"DialogSrc":"/FileExplorer/PreviewMediaFile.aspx?ViewOnly=True\u0026Type=2\u0026File={filePath}\u0026FileName={fileName}\u0026PlayerMediaType={playerMediaType}\u0026FallbackUrl={fallbackUrl}","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":470,"DialogWidth":550,"Text":"Preview","EditText":"Preview","IconSrc":"https://statics.itslearning.com/v3.106.0.397/icons/xp/url_preview16.png","IframeCssClass":null,"Disabled":false,"ExtraSettings":{"mediaContentAttribute":"mediacontent","cssClasses":{"fakeAudio":"cke_fakemedia_audio","fakeVideo":"cke_fakemedia_video"}},"Id":"previewmedia"};
config["longtouchcontextmenu"] = {"Delay":1000,"DistanceThreshold":5,"Id":"longtouchcontextmenu"};
config["itslpluginlist"] = {"DataSrc":"/UI/Controls/editor/ckeditorconfig.ashx?GetInsertPluginConfigOnly=1\u0026LocationID=6172\u0026LocationType=Course","LabelText":"Add plugin content","Id":"itslpluginlist"};
config["editextension"] = {"DialogSrc":null,"Command":"window.open( \u0027https://arcada.itslearning.com/editor/PluginHandler.aspx?ExtensionId=-1\u0026EditorClientInstanceId={editorId}\u0026CourseId=6172\u0027, \u0027__extensionPopup_-1\u0027, \u0027resizable=yes,scrollbars=yes,status=yes\u0027); ","IsEditorDialogTransparent":false,"DialogHeight":0,"DialogWidth":0,"Text":"Replace plug-in","EditText":"Edit plug-in","IconSrc":"https://statics.itslearning.com/v3.106.0.397/icons/xp/tools16.png","IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"editextension"};
config["collapsetoolbar"] = {"DialogSrc":null,"Command":null,"IsEditorDialogTransparent":false,"DialogHeight":0,"DialogWidth":0,"Text":null,"EditText":null,"IconSrc":null,"IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"collapsetoolbar"};
config["fakemedia"] = {"PluginSettings":{"supportedVideoFormats":["mp4","m4v","ogv","webm","webmv","flv"],"mediaContentAttribute":"mediacontent","mediaTypes":{"auto":0,"forceAudio":1,"forceVideo":2},"dataMemberNames":{"mediaType":"mediaType","fileName":"fileName"},"cssClasses":{"audio":"cke_fakemedia_audio","video":"cke_fakemedia_video"}},"Id":"fakemedia"};
config["dragresize"] = {"Id":"dragresize"};
config["help"] = {"DialogSrc":"https://arcada.itslearning.com/help.aspx?CID=1774\u0026LID=1\u0026DefLanguage=1\u0026URL=ApplicationHelp_CSH.htm!1020","Command":null,"IsEditorDialogTransparent":false,"DialogHeight":0,"DialogWidth":0,"Text":"Help","EditText":null,"IconSrc":null,"IframeCssClass":null,"Disabled":false,"ExtraSettings":null,"Id":"help"};

}
$(function()
{
    
    
});
