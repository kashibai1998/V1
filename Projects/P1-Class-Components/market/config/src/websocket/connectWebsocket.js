export const connectWebsocket = (command) => {
    fetch('http://18.213.238.136:8125/websocketClient/alexa/websocket/client',
    {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        },
        body: command
}
  );
};