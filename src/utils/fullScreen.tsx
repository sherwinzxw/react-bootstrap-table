interface DocumentWithFullscreen extends HTMLDocument {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

interface DocumentElementWithFullscreen extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

export function isFullScreen(): any | null {
  const doc = document as DocumentWithFullscreen;
  return !!(
    doc.fullscreenElement ||
    doc.mozFullScreenElement ||
    doc.webkitFullscreenElement ||
    doc.msFullscreenElement
  );
}

export function requestFullScreen(element: DocumentElementWithFullscreen) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
}

export function exitFullScreen(doc: DocumentWithFullscreen) {
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen();
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  }
}

export function tooglePageToFullScreen(): void {
  if (isFullScreen()) {
    requestFullScreen(document.documentElement);
  } else {
    exitFullScreen(document);
  }
}

export function toggleElementToFullScreen(targetElementId: string): boolean {
  const element = document.getElementById(targetElementId) as any;
  if (!isFullScreen()) {
    requestFullScreen(element);
    return true;
  } else {
    exitFullScreen(document);
    return false;
  }
}
