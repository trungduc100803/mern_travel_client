import { io } from 'socket.io-client'

const ENDPOINT = 'http://localhost:4000'
const socket = io(ENDPOINT, { autoConnect: false });

export default socket;