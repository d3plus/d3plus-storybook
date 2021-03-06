/**
 * removes undefined config keys, which may cause issues with d3plus
 * and also pollute the "Code" view in Docs
 */
export default function(args, argTypes) {
  return Object.keys(args).reduce((acc, key) => {
   const _acc = acc;
   if (
     args[key] !== undefined &&
     (argTypes[key].defaultValue === undefined || JSON.stringify(argTypes[key].defaultValue) !== JSON.stringify(args[key]))
   ) _acc[key] = args[key];
   return _acc;
 }, {});
}
