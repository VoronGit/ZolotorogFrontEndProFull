setInterval(() => messageLog(`ping`), 10000);

const messageLog = (text) => {
    console.log(`runtime ${new Date().toISOString()}: ${text}`)
};