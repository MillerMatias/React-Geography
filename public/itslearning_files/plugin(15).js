CKEDITOR.plugins.add('help',
{
    init: function (editor) {
        var pluginName = 'help',
            pluginConfig = editor.config[pluginName];

        editor.ui.addButton(pluginName,
        {
            label: pluginConfig.Text,
            command: 'showHelp'
        });
        editor.addCommand('showHelp', { exec: function (e) { window.open(pluginConfig.DialogSrc); } });
    }
});
