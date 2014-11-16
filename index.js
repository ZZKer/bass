
/**
 * @module bass
 * @author ZZKer
 * @desc Bass Sound
 */
 
import { sin } from 'opendsp/osc';
 
/**
 * Gives a muddy, bassy sound.
 */
export function bass(t, f) {
  return (sin(t,f*5/8)+sin(t,f*3/4)+sin(t,f/2));
}
