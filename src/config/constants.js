import configJson from '../../config';
const generalConfig = configJson.general;

const modeConfig = __DEV__ ? configJson.development : configJson.production;

export const config = Object.assign({}, generalConfig, modeConfig);
