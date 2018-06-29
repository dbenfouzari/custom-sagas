type RequestType = 'REQUEST' | 'SUCCESS' | 'FAILURE';

interface RequestTypeObject {
  [type: string]: string;
}

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const createRequestTypes = (base: string): RequestTypeObject =>
  ([ REQUEST, SUCCESS, FAILURE ] as RequestType[]).reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, ({} as RequestTypeObject));

export function action(type: string, payload = {}) {
  return {type, ...payload}
}

export const actionTypesFor = (entityType: string) => {
  const thing = createRequestTypes(entityType);

  return {
    request: (id: string) => action(thing[REQUEST], { id }),
    failure: (id: string, error: any) => action(thing[FAILURE], { id, error }),
    success: (id: string, response: any) => action(thing[SUCCESS], { id, response })
  }
}
