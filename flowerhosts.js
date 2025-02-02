// Script Operator
// 1. backend version(>2.14.88):
$server.name = 'prefix-' + $server.name
$server.ecn = true
$server['test-url'] = 'http://1.0.0.1/generate_204'

// 2. operator function
function operator(proxies, targetPlatform) {
  return proxies.map(proxy => {
    if (proxy.server === "gzdata1.fc-smartglobal.xyz") {
      proxy.server = "202.46.227.9"; // 替换为 IP
    } else if (proxy.server === "shdata1.fc-smartglobal.xyz") {
      proxy.server = "117.186.219.36"; // 替换为 IP
    } else if (proxy.server === "prebjdata1.fc-aliyun.xyz") {
      proxy.server = "117.78.47.20"; // 替换为 IP
    }
    return proxy;
  });
}

// Script Filter
// 1. backend version(>2.14.119):
const port = Number($server.port)
return [80].includes(port)

// 2. filter function
function filter(proxies, targetPlatform) {
  return proxies.map(proxy => {
    // Return true if the current proxy is selected
    return true;
  });
}
