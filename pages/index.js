import {useEffect, useState} from 'react';
import io from 'socket.io-client';

export const socket = io('http://localhost:3000/');

export default function Home() {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    socket.on('change-hue-external', data => setHue(data));
  })

  const changeHandler = (evt) => {
    socket.emit('change-hue', evt.target.value);
  }

  return (
    <div>
      <h1 style={{ color: `hsl(${hue}, 100%, 50%)`}}>test</h1>

      <input type="range" name="color" id="color-range" max="360" value={hue} onChange={(evt) => changeHandler(evt)} />
    </div>
  );
}
