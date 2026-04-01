import * as vscode from 'vscode';
import { version } from '../package.json';

export function activate(context: vscode.ExtensionContext) {
    const currentVersion = version || '0.0.0';
    const previousVersion = context.globalState.get<string>('kidsThemeVersion');

    if (currentVersion !== previousVersion) {
        const config = vscode.workspace.getConfiguration();
        const target = vscode.ConfigurationTarget.Global;

        try {
            // 尝试安装 Material Icon Theme（可选）
            try {
                const extensions = vscode.extensions.all.map(ext => ext.id);
                if (!extensions.includes('PKief.material-icon-theme')) {
                    vscode.commands.executeCommand(
                        'workbench.extensions.installExtension',
                        'PKief.material-icon-theme'
                    );
                }
                config.update('workbench.iconTheme', 'material-icon-theme', target);
            } catch {
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
            if (liveServerConfig?.globalValue !== undefined) {
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
        } catch (error) {
            console.error("Erro ao aplicar configurações recomendadas:", error);
        }

        context.globalState.update('kidsThemeVersion', currentVersion);
    }
}
