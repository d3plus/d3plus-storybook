/**
 * removes undefined config keys, which may cause issues with d3plus
 * and also pollute the "Code" view in Docs
 */
import Viz from "../primitives/Viz";

export default function(args, argTypes) {
  const _argTypes = argTypes;
  Object.keys(Viz.argTypes).reduce((acc, key) => {
    if (
      argTypes[key] !== undefined && JSON.stringify(Viz.argTypes[key]) !== JSON.stringify(argTypes[key])
    ) _argTypes[key] = Object.assign(Viz.argTypes[key], argTypes[key], {});
  
    return _argTypes;
  }, {});

  return Object.keys(args).reduce((acc, key) => {
    const _acc = acc;
    if (
      args[key] !== undefined &&
      (_argTypes[key].defaultValue === undefined || JSON.stringify(_argTypes[key].defaultValue) !== JSON.stringify(args[key]))
    ) _acc[key] = args[key];

    return _acc;
  }, {});
}
