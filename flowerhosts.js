// 删除国旗
function addPrefixAfterFlag(name, prefix) {
    return name.replace(
        /^([\uD83C][\uDDE6-\uDDFF]{1}[\uD83C][\uDDE6-\uDDFF]{1}|\p{Emoji_Presentation})\s*/,
        "$1 " + prefix + " "
    );
}

// 处理节点名称
function processServerName(server) {
    let prefix = "";

    // 根据域名添加对应的前缀
    if (server.server.includes("gzdata1.fc-smartglobal.xyz")) {
        prefix = "花云 前海IXP";
        server.server = "202.46.227.9"; // 修改 IP
    } else if (server.server.includes("shdata1.fc-smartglobal.xyz")) {
        prefix = "花云 上海移动";
        server.server = "117.186.219.36"; // 修改 IP
    } else if (server.server.includes("bjdata1.fc-smartglobal.xyz")) {
        prefix = "花云 北京华为";
        server.server = "117.78.47.20"; // 修改 IP
    }

    // 仅当匹配到域名时，才修改名称
    if (prefix) {
        server.name = addPrefixAfterFlag(server.name, prefix);
    }
}

// 处理服务器名称
processServerName($server);
