import { plugins, themes } from './constants.js';

const params = new URLSearchParams(location.search);
const pluginLink = "https://raw.githubusercontent.com/HypedDomi/BetterDiscordStuff/main/Plugins";
const themeLink = "https://raw.githubusercontent.com/HypedDomi/BetterDiscordStuff/main/Themes";

function downloadFile(downloadUrl) {
    fetch(downloadUrl)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = downloadUrl.split('/').pop();
            link.click();
        });
}

if (params.has('plugin')) {
    const request = params.get('plugin');
    if (plugins.indexOf(request.trim()) > -1) downloadFile(`${pluginLink}/${request}/${request}.plugin.js`);
    else document.getElementById("text").innerHTML = `No Plugin with name ${request} found`;
} else if (params.has('theme')) {
    const request = params.get('theme');
    if (themes.indexOf(request.trim()) > -1) downloadFile(`${themeLink}/${request}/${request}.theme.css`);
    else document.getElementById("text").innerHTML = `No Theme with name ${request} found`;
}
