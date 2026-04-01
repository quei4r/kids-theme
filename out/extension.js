"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = __importStar(require("vscode"));
const package_json_1 = require("../package.json");
function activate(context) {
    const currentVersion = package_json_1.version || '0.0.0';
    const previousVersion = context.globalState.get('kidsThemeVersion');
    if (currentVersion !== previousVersion) {
        const config = vscode.workspace.getConfiguration();
        const target = vscode.ConfigurationTarget.Global;
        try {
            // 尝试安装 Material Icon Theme（可选）
            try {
                const extensions = vscode.extensions.all.map(ext => ext.id);
                if (!extensions.includes('PKief.material-icon-theme')) {
                    vscode.commands.executeCommand('workbench.extensions.installExtension', 'PKief.material-icon-theme');
                }
                config.update('workbench.iconTheme', 'material-icon-theme', target);
            }
            catch (_a) {
                // 安装失败则跳过，不影响其他设置
            }
            config.update('workbench.startupEditor', 'none', target);
            config.update('editor.fontSize', 17, target);
            config.update('editor.lineNumbers', 'on', target);
            config.update('editor.wordWrap', 'on', target);
            config.update('explorer.compactFolders', false, target);
            config.update('code-runner.runInTerminal', true, target);
            config.update('code-runner.clearPreviousOutput', true, target);
            config.update('code-runner.executorMap', { "python": "cls ; python -u" }, target);
            config.update('code-runner.ignoreSelection', true, target);
            config.update('security.workspace.trust.untrustedFiles', 'open', target);
            config.update('workbench.editorAssociations', {
                "*.exe": "default",
                "*.pf": "default"
            }, target);
            const liveServerConfig = config.inspect('liveServer.settings.donotShowInfoMsg');
            if ((liveServerConfig === null || liveServerConfig === void 0 ? void 0 : liveServerConfig.globalValue) !== undefined) {
                config.update('liveServer.settings.donotShowInfoMsg', true, target);
            }
            config.update('git.autofetch', true, target);
            config.update('files.autoSave', 'afterDelay', target);
            config.update('files.associations', {
                "*.cfg": "cpp"
            }, target);
            config.update('workbench.colorTheme', 'KIDS THEME', target);
            config.update('terminal.integrated.defaultProfile.windows', 'PowerShell', target);
            config.update('editor.semanticHighlighting.enabled', true, target);
            config.update('python.analysis.semanticHighlighting', true, target);
        }
        catch (error) {
            console.error("Erro ao aplicar configurações recomendadas:", error);
        }
        context.globalState.update('kidsThemeVersion', currentVersion);
    }
}
