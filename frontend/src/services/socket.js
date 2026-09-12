import { io } from 'socket.io-client';

let socketInstance = null;

export const getSocket = () => {
  if (!socketInstance) {
    // If backend port is 5001 and frontend is 5173, point directly or use proxy
    const isDevelopment = import.meta.env.DEV;
    const backendUrl = import.meta.env.VITE_BACKEND_URL || (isDevelopment 
      ? `http://${window.location.hostname}:5001`
      : window.location.origin);

    socketInstance = io(backendUrl, {
      autoConnect: true,
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      timeout: 10000,
    });

    socketInstance.on('connect', () => {
      console.log('⚡ Socket connected successfully:', socketInstance.id);
    });

    socketInstance.on('connect_error', (err) => {
      console.warn('⚠️ Socket connection error:', err.message);
    });

    socketInstance.on('disconnect', (reason) => {
      console.log('🔌 Socket disconnected:', reason);
    });
  }

  return socketInstance;
};

export const disconnectSocket = () => {
  if (socketInstance) {
    socketInstance.disconnect();
    socketInstance = null;
  }
};
