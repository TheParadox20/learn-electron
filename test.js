const os = require('os');

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  let ipAddress;

  Object.keys(interfaces).forEach((ifname) => {
    interfaces[ifname].forEach((iface) => {
      if (iface.family === 'IPv4' && !iface.internal) {
        ipAddress = iface.address;
      }
    });
  });

  return ipAddress;
}

console.log(`Local IP Address: ${getLocalIP()}`);
