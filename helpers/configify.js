/**
 * removes undefined config keys, which may cause issues with d3plus
 * and also pollute the "Code" view in Docs
 */
export default function(args) {
  return Object.keys(args).reduce((acc, key) => {
   const _acc = acc;
   if (args[key] !== undefined) _acc[key] = args[key];
   return _acc;
 }, {});
}
