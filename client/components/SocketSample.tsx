import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { post } from '../modules/http';

const socket = io();

const SocketSample: React.FC = () => {
  const [message, setMessage] = useState('　');
  const [inputText, setInputText] = useState('');

  const handleInput = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  }, []);

  useEffect(() => {
    socket.on('message', (message: string) => {
      setMessage(message);
    });
    return () => {
      socket.close();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const send = useCallback(() => {
    post('/socket/message', { message: inputText });
    setInputText('');
  }, [inputText]);

  return (
    <div className="flex flex-col justify-center items-center p-4 w-full h-screen">
      <p className="text-2xl font-bold">{message}</p>
      <textarea
        value={inputText}
        onChange={handleInput}
        className="p-2 my-4 w-60 rounded-lg border-2 border-gray-400"
      />
      <button
        className="py-2 w-32 text-sm text-gray-700 bg-white rounded-lg border-[1px] border-blue-600"
        onClick={send}
      >
        送信しよ...
      </button>
    </div>
  );
};

export { SocketSample };
