module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Ganache GUI port (default: 8545 for CLI)
      network_id: "*",       // Any network (default: none)
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",    // Specify the compiler version
    },
  },
};
