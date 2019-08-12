export const getDisplayName = (hocName, Component) =>
  `${hocName}${Component.displayName || Component.name || 'Unknow Name'}`;
