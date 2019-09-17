import {useEffect, useState} from 'react';
import io from 'socket.io-client';

import { timelineSegments } from '../static/timeline';

export const socket = io('http://localhost:3000/');

// This acts like an async delay method
const timeoutPromise = timeout => new Promise((resolve) => {
  setTimeout(resolve, timeout);
});

// Helper function for chaining execution of events
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
}

const millisBetweenFrames = 16;

const timelineAnimation = async () => {
  await asyncForEach(timelineSegments, async (segment, index) => {
    const intervals = [];
    const intervalsSteps = [];
    const intervalsCurrentPos = [];

    await asyncForEach(segment.components, async (component, index) => {
      // todo set interval untill total duration is over
      // calculate the stepsize and stepduration to finish on the desired moment on the desired 'place'
      intervalsSteps.push((component.change[0].to - component.change[0].from) / segment.duration * millisBetweenFrames);
      intervalsCurrentPos.push(component.change[0].from);

      intervals.push(
        setInterval(() => {
          intervalsCurrentPos[index] += intervalsSteps[index];

          socket.emit(component.name, {
            type: component.change[0].type,
            value: intervalsCurrentPos[index],
          });
        }, millisBetweenFrames)
      );
    });

    await timeoutPromise(segment.duration);

    await asyncForEach(intervals, async (interval, index) => {
      clearInterval(interval);
    });

    if (timelineSegments.length - 1 === index) {
      timelineAnimation();
    }
  });
};

timelineAnimation();

export default function Home() {
  const [hue, setHue] = useState(0);

  return (
    <div>
      <h1 style={{ color: `hsl(${hue}, 100%, 50%)`}}>Controller</h1>

      {/* <input type="range" name="color" id="color-range" max="360" value={hue} onChange={(evt) => changeHandler(evt)} /> */}
    </div>
  );
}
