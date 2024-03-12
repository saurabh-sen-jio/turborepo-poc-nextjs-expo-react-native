import {useEffect, useState} from 'react';
import {appendMessage, isMessage} from "../slice/chatSlice";
import {useDispatch} from "react-redux";
import {localUserId} from "../constants";

const useWebSocket = (url: string) => {
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch()

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            console.log('WebSocket connected');
            setWs(socket);
        };

        socket.onmessage = (event) => {
            try {
                console.log('WebSocket message received:', event.data);
                if (isMessage(JSON.parse(event.data))) {
                    dispatch(appendMessage(JSON.parse(event.data)));
                }
            }
            catch (e){
                console.error(e)
            }
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
            setError(error.type);
        };

        socket.onclose = () => {
            console.log('WebSocket disconnected');
        };

        return () => {
            console.log('WebSocket cleanup');
            socket.close();
        };
    }, [url]);

    const sendMessage = (data: any) => {
        if (ws) {
            ws.send(JSON.stringify({userId: localUserId ,message: data}));
            console.log('WebSocket message sent:', data);
            dispatch(appendMessage({userId: localUserId ,message: data}));
        }
    };

    return { error,sendMessage };
};

export default useWebSocket;
