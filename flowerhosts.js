if ($server.server.includes("gzdata1.fc-smartglobal.xyz")) {
    $server.server = "202.46.227.9";
    $server.name = "[🌸前海IXP] " + $server.name;
} else if ($server.server.includes("shdata1.fc-smartglobal.xyz")) {
    $server.server = "117.186.219.36";
    $server.name = "[🌸上海移动] " + $server.name;
} else if ($server.server.includes("prebjdata1.fc-aliyun.xyz")) {
    $server.server = "117.78.47.20";
    $server.name = "[🌸北京华为] " + $server.name;
}
