import { useState} from 'react';
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

const timelineAnimation = async () => {
  console.log('start timeline');

  await asyncForEach(timelineSegments, async (segment, index) => {
    console.log('foreach segment', segment, index);

    const intervalsSteps = [];
    const intervalsIntervalTimeout = [];
    const intervalsCurrentPos = [];
    const intervals = [];

    await asyncForEach(segment.components, async (component, index) => {
      console.log('foreach component', component, index);

      // todo set interval untill total duration is over
      // calculate the stepsize and stepduration to finish on the desired moment on the desired 'place'

      // intervalsSteps.push((component.change[0].to - component.change[0].from) / segment.duration * millisBetweenFrames);

      intervalsSteps.push(
        (component.change[0].to - component.change[0].from) / 100
      );

      intervalsIntervalTimeout.push(
        segment.duration / 100
      );

      intervalsCurrentPos.push(component.change[0].from);

      console.log(intervalsIntervalTimeout, intervalsSteps, intervalsCurrentPos);

      console.log('setInterval');

      intervals.push(
        setInterval(() => {
          intervalsCurrentPos[index] += Math.round(intervalsSteps[index] * 100) / 100;
          console.log('interval', intervalsCurrentPos[index], index);

          socket.emit(component.name, {
            type: component.change[0].type,
            value: intervalsCurrentPos[index],
          });

        }, intervalsIntervalTimeout[index])
      );

      setTimeout(() => {
        console.log('clearing interval from timeout');

        clearInterval(intervals[index]);
      }, segment.duration);
    });

    console.log('out of foreach for components');

    await timeoutPromise(segment.duration);
    console.log('segment.duration promise resolved');

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
