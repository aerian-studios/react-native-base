/**
 * Startup state actions and action Creators
 * 
 * @flow
 */
import {STARTUP} from './actionTypes'

/* ------------- Types and Action Creators ------------- */
const Creators = {
  startup: startup = () => ({type: STARTUP})
}

export const StartupTypes = STARTUP
export default Creators
