import { Subject } from 'rxjs';

let payloadStorage = null;
export const fullscreenSource = new Subject();
export const fullscreenPipe$ = fullscreenSource.asObservable();

export const openFullscreen = (payload) => {
  payloadStorage = payload;
  document.documentElement.requestFullscreen();
};
export const closeFullscreen = () => {
  document.exitFullscreen();
};

const globalHandler = (fullscreen) => {
  if (fullscreen) {
    document.body.classList.add('me-overflow-hidden');
  } else {
    document.body.classList.remove('me-overflow-hidden');
  }
};

document.addEventListener("fullscreenchange", _ => {
  globalHandler(document.fullscreen);
  fullscreenSource.next({state: document.fullscreen, payload: payloadStorage});
});
