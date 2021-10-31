import { useSocket } from '../modules/hooks/useSocket';

const SocketProvider: React.FC = ({ children }) => {
  useSocket();
  return <>{children}</>;
};

export { SocketProvider };
