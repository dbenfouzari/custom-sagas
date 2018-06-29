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

function action(type: string, payload = {}) {
  return {type, ...payload}
}
