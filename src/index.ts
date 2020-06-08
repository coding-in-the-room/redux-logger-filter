interface IAction {
  type: unknown;
}

interface IFilterFunction {
  (_: any, action: IAction): boolean;
}

type ActionType = string | Function | IAction;

function makeLogFilter<T extends ActionType>(type: T[]): IFilterFunction;
function makeLogFilter<T extends ActionType>(type: T): IFilterFunction;
function makeLogFilter<T extends ActionType>(...type: T[]): IFilterFunction;
function makeLogFilter<T extends ActionType>(
  type: T,
  ...rest: T[]
): IFilterFunction {
  let actionList: ActionType[];

  if (Array.isArray(type)) {
    actionList = [...type];
  } else if (rest.length) {
    actionList = [type, ...rest];
  } else {
    actionList = [type];
  }

  const logFilter: IFilterFunction = (_: any, action: IAction) =>
    actionList.some((el) => {
      let result = false;
      let target = null;

      if (typeof el === 'function') {
        target = el();
      } else if (typeof el === 'object') {
        target = el;
      } else {
        target = { type: el };
      }

      result = action.type === target.type;
      return result;
    });

  return logFilter;
}

export default makeLogFilter;
