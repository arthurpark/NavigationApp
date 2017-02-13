export type Route = {
  screen: Function,
  path: ?string,
};

export type Routes = {
  [key: string]: Route
};
