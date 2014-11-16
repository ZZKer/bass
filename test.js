
/**
 * test
 */

import { bass } from './index.js';
import envelope from 'opendsp/envelope';

//frequency
var f = 300;

//volume
var v = 0.3;

export function dsp(t) {
  return v * (
    bass(t,f) * envelope(t,1/4,8,8)
  + bass(t,f-20) * envelope(t+1/4,1/8,8,8)
  );
}
