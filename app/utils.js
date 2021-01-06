export function getStateComponentName(state) {
  switch (typeof state.value) {
    case 'string':
      return state.value;
    case 'object':
      return `${[Object.keys(state.value)]}-${[Object.values(state.value)]}`;
    default:
      throw new Error('Could determine matching component name for state');
  }
}
