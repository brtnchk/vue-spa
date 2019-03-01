import { Subject } from 'rxjs';

import { handlers } from "./errorHandlers";

export const errorsSource = new Subject();
export const errorsPipe$ = errorsSource.asObservable();

errorsPipe$.subscribe(({status, payload}) => {
  let handler = handlers[status];
  if (handler) handler(payload);
});
