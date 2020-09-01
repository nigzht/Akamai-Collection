/*
[GLOBAL PROPERTIES]
*/

interface Window {
  XMLHttpRequest: XMLHttpRequest;
  XDomainRequest: any;
  ActiveXObject: ActiveXObject;
  emit: any;
  spawn: any;
  chrome: any;
  Buffer: any;
  callPhantom: any;
  _phantom: any;
  webdriver: any;
  domAutomation: any;
  mozRTCPeerConnection: any;
  opera: any;
  mozInnerScreenY: any;
  InstallTrigger: any;
}

interface ChildNode extends Node {
  offsetHeight: number;
  offsetWidth: number;
}

interface Navigator {
  getBattery: any;
  vibrate: (pattern: number | number[]) => boolean;
  appMinorVersion: any;
  mozAlarms: any;
  getStorageUpdates: any;
  bluetooth: any;
  webkitTemporaryStorage: any;
  webkitGetGamepads: any;
  requestWakeLock: any;
  mozPhoneNumberService: any;
  mozIsLocallyAvailable: any;
  plugins: any;
  mozConnection: any;
  brave: {
    isBrave: Function;
  };
}

interface Document {
  documentMode: any;
  XPathResult: any;
  attachEvent: any;
  mozHidden?: boolean;
  msHidden?: boolean;
  webkitHidden?: boolean;
}

interface WindowProps {
  devicePixelRatio: number | null;
  indexedDB: boolean;
  XPathResult: string | undefined;
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
  addEventListener: boolean;
  XMLHttpRequest: boolean;
  XDomainRequest: boolean;
  emit: boolean;
  DeviceOrientationEvent: boolean;
  DeviceMotionEvent: boolean;
  TouchEvent: boolean;
  spawn: boolean;
  chrome: { isPresent: boolean; webstore: any } | undefined;
  Buffer: boolean;
  PointerEvent: boolean;
  _phantom: boolean;
  webdriver: any | undefined;
  domAutomation: boolean;
  callPhantom: boolean;
  ActiveXObject: boolean;
  opera: boolean;
  HTMLElement: boolean | undefined;
  RTCPeerConnection: string;
  mozRTCPeerConnection: string;
  webkitRTCPeerConnection: string;
  mozInnerScreenY: number | undefined;
  FileReader: boolean;
  event: boolean;
  sessionStorage: boolean;
  localStorage: boolean;
  installTrigger: boolean;
  speechSynthesis: VoicesInfo[] | undefined;
  screen: {
    availWidth: number;
    availHeight: number;
    width: number;
    height: number;
  };
}

interface DocumentProps {
  documentMode: string;
  body:
    | { clientWidth: number | undefined; clientHeight: number | undefined }
    | undefined;
  documentElement:
    | { clientWidth: number | undefined; clientHeight: number | undefined }
    | undefined;
  outerWidth: number | undefined;
  XPathResult: string | undefined;
  attachEvent: boolean;
  hidden: boolean | undefined;
  mozHidden: boolean | undefined;
  msHidden: boolean | undefined;
  webkitHidden: boolean | undefined;
  addEventListener: boolean;
  cookie: boolean;
}

interface NavigatorProps {
  plugins: NavigatorPluginNames[] | [];
  permissions: PermissionInfo[] | undefined;
  cookieEnabled: boolean;
  javaEnabled: boolean;
  doNotTrack: string | null;
  userAgent: string;
  productSub: string;
  language: string;
  product: string;
  onLine: boolean;
  vibrate: string;
  getBattery: string;
  credentials: boolean;
  appMinorVersion: boolean;
  bluetooth: boolean;
  storage: boolean;
  getGamepads: boolean;
  getStorageUpdates: boolean;
  hardwareConcurrency: boolean;
  mediaDevices: boolean;
  mozConnection: boolean;
  mozAlarms: boolean;
  mozIsLocallyAvailable: boolean;
  mozPhoneNumberService: boolean;
  msManipulationViewsEnabled: boolean;
  registerProtocolHandler: boolean;
  requestMediaKeySystemAccess: boolean;
  requestWakeLock: boolean;
  sendBeacon: boolean;
  serviceWorker: boolean;
  storeWebWideTrackingException: boolean;
  webkitGetGamepads: boolean;
  webkitTemporaryStorage: boolean;
  webdriver: any | undefined;
  appVersion: string;
  brave:
    | {
        isBrave: boolean;
      }
    | undefined;
}

interface ScreenProps {
  colorDepth: number;
  pixelDepth: number;
}

interface MathProps {
  hypot: boolean;
  imul: boolean;
  numParseInt: boolean;
  abs: boolean;
  acos: boolean;
  asin: boolean;
  atanh: boolean;
  cbrt: boolean;
  exp: boolean;
  random: boolean;
  round: boolean;
  sqrt: boolean;
  isFinite: boolean;
  isNaN: boolean;
  parseFloat: boolean;
  parseInt: boolean;
  parse: boolean;
}

/*
    [METHODS]
    */
interface NavigatorPluginNames {
  name: string;
}

interface PermissionInfo {
  state?: string;
  name: string;
  message?: string;
}

interface VoicesInfo {
  lang: string;
  voiceURI: string;
}

interface CanvasData {
  primary: string;
  secondary: string;
  rVal: string;
}

/*
    [HTMLELEMENTS]
    */

interface InputElementInfo {
  defaultValueLength: number | null;
  valueLength: number | null;
  name: string | null;
  id: string | null;
  required: string | null;
  type: string | null;
  autocomplete: string | null;
}

interface WebGLInfo {
  supportedExtensions: string[] | null;
  vendorGLParam: any;
  rendererGLParam: any;
}

/*
    [EVENTS]
    we need to handle target and element because they are executed later on.
    also currentTarget...
    and srcElement...
    */
interface MouseEvents {
  button: number;
  clientX: number;
  clientY: number;
  isTrusted: boolean;
  pageX: number;
  pageY: number;
  target: { name: any | null; id: string | null } | null;
  type: string;
  which: number;
  toElement: { name: any | null; id: string | null } | null;
}

interface VisibilityEvents {
  bubbles: boolean;
  cancelBubble: boolean;
  cancelable: boolean;
  composed: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  timeStamp: number;
  type: string;
}

interface PointerEvents {
  clientX: number;
  clientY: number;
  isTrusted: boolean;
  pageX: number;
  pageY: number;
  pointerType: string;
}

interface KeyEvents {
  altKey: boolean;
  charCode: number;
  ctrlKey: boolean;
  isTrusted: boolean;
  keyCode: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  activeElement: { type: any | null } | null;
}

class Harvester {
  window: WindowProps | {};
  document: DocumentProps | {};
  navigator: NavigatorProps | {};
  screen: ScreenProps | {};
  math: MathProps | {};
  rVal: string;
  permissionsToQuery: string[];
  primaryFontTypes: string[];
  otherFontTypes: string[];
  visibilityEvents: VisibilityEvents[];
  pointerEvents: PointerEvents[];
  keyEvents: KeyEvents[];
  mouseEvents: MouseEvents[];
  fonts: string;
  secondaryFonts: string;
  otherFonts: string;
  performanceInfo: string;
  webGLInfo: Partial<WebGLInfo> | null | undefined;
  formInfo: InputElementInfo[] | [];
  permissionInfo: PermissionInfo[] | undefined;
  firstCanvas: CanvasData | undefined;
  secondCanvas: CanvasData | undefined;
  constructor() {
    this.window = {};
    this.document = {};
    this.navigator = {};
    this.screen = {};
    this.math = {};

    this.rVal = Math.floor(1e3 * Math.random()).toString();

    this.fonts = "";
    this.secondaryFonts = "";
    this.otherFonts = "";

    this.performanceInfo = "";

    this.firstCanvas = undefined;
    this.secondCanvas = undefined;

    this.permissionInfo = [];
    this.formInfo = [];
    this.webGLInfo;

    this.mouseEvents = [];
    this.visibilityEvents = [];
    this.pointerEvents = [];
    this.keyEvents = [];

    this.permissionsToQuery = [
      "geolocation",
      "notifications",
      "push",
      "midi",
      "camera",
      "microphone",
      "speaker",
      "device-info",
      "background-sync",
      "bluetooth",
      "persistent-storage",
      "ambient-light-sensor",
      "accelerometer",
      "gyroscope",
      "magnetometer",
      "clipboard",
      "accessibility-events",
      "clipboard-read",
      "clipboard-write",
      "payment-handler",
    ];

    this.primaryFontTypes = [
      "Geneva",
      "Lobster",
      "New York",
      "Century",
      "Apple Gothic",
      "Minion Pro",
      "Apple LiGothic",
      "Century Gothic",
      "Monaco",
      "Lato",
      "Fantasque Sans Mono",
      "Adobe Braille",
      "Cambria",
      "Futura",
      "Bell MT",
      "Courier",
      "Courier New",
      "Calibri",
      "Avenir Next",
      "Birch Std",
      "Palatino",
      "Ubuntu Regular",
      "Oswald",
      "Batang",
      "Ubuntu Medium",
      "Cantarell",
      "Droid Serif",
      "Roboto",
      "Helvetica Neue",
      "Corsiva Hebrew",
      "Adobe Hebrew",
      "TI-Nspire",
      "Comic Neue",
      "Noto",
      "AlNile",
      "Palatino-Bold",
      "ArialHebrew-Light",
      "Avenir",
      "Papyrus",
      "Open Sans",
      "Times",
      "Quicksand",
      "Source Sans Pro",
      "Damascus",
      "Microsoft Sans Serif",
    ];

    this.otherFontTypes = [
      "Monospace",
      "Wingdings 2",
      "ITC Bodoni 72 Bold",
      "Menlo",
      "Gill Sans MT",
      "Lucida Sans",
      "Bodoni 72",
      "Serif",
      "Shree Devanagari 714",
      "Microsoft Tai Le",
      "Nimbus Roman No 9 L",
      "Candara",
      "Press Start 2P",
      "Waseem",
    ];
  }

  /*
    [GLOBAL PROPERTY HELPERS]
    */
  getNavigatorPlugins = (): NavigatorPluginNames[] | [] => {
    let navigatorPlugins = [];

    for (let i = 0; i < navigator.plugins.length; i++) {
      navigatorPlugins.push(navigator.plugins[i].name);
    }

    return navigatorPlugins;
  };

  getVoices = async (): Promise<VoicesInfo[]> => {
    return await new Promise((resolve) => {
      window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        const trimmedVoices = voices.map((voice) => {
          return { voiceURI: voice.voiceURI, lang: voice.lang };
        });
        resolve(trimmedVoices);
      };
    });
  };

  getBrave = async () => {
    let result;
    try {
      result = await navigator.brave.isBrave();
      return result;
    } catch (e) {
      result = "error";
      return result;
    }
  };

  /*
    [GLOBAL PROPERTIES]
    */
  getWindow = async (): Promise<WindowProps> => ({
    devicePixelRatio: window.devicePixelRatio,
    indexedDB: !!window.indexedDB,
    XPathResult: window.XPathResult && typeof window.XPathResult,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    addEventListener: !!window.addEventListener,
    XMLHttpRequest: !!window.XMLHttpRequest,
    XDomainRequest: !!window.XDomainRequest,
    emit: !!window.emit,
    DeviceOrientationEvent: !!window.DeviceOrientationEvent,
    DeviceMotionEvent: !!window.DeviceMotionEvent,
    TouchEvent: !!window.TouchEvent,
    spawn: !!window.spawn,
    chrome: window.chrome && {
      isPresent: true,
      webstore: window.chrome.webstore,
    },
    Buffer: !!window.Buffer,
    PointerEvent: !!window.PointerEvent,
    _phantom: !!window._phantom,
    webdriver: window.webdriver,
    domAutomation: !!window.domAutomation,
    callPhantom: !!window.callPhantom,
    ActiveXObject: !!window.ActiveXObject,
    opera: !!window.opera,
    HTMLElement:
      window.HTMLElement &&
      Object.prototype.toString
        .call(window.HTMLElement)
        .indexOf("Constructor") > 0,
    RTCPeerConnection: typeof window.RTCPeerConnection,
    mozRTCPeerConnection: typeof window.mozRTCPeerConnection,
    webkitRTCPeerConnection: typeof window.webkitRTCPeerConnection,
    mozInnerScreenY: window.mozInnerScreenY,
    FileReader: !!window.FileReader,
    event: !!window.event,
    sessionStorage: !!window.sessionStorage,
    localStorage: !!window.localStorage,
    installTrigger: !!window.InstallTrigger,
    speechSynthesis: window.speechSynthesis && (await this.getVoices()),
    screen: {
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
      width: window.screen.width,
      height: window.screen.height,
    },
  });
  getDocument = (): DocumentProps => ({
    documentMode: typeof document.documentMode,
    body: document.body && {
      clientWidth: document.body.clientWidth,
      clientHeight: document.body.clientHeight,
    },
    documentElement: document.documentElement && {
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
    },
    outerWidth: (document.body as any)?.outerWidth,
    XPathResult: document.XPathResult && typeof document.XPathResult,
    attachEvent: !!document.attachEvent,
    hidden: document.hidden && document.hidden,
    mozHidden: document.mozHidden && document.mozHidden,
    msHidden: document.msHidden && document.msHidden,
    webkitHidden: document.webkitHidden && document.webkitHidden,
    addEventListener: !!document.addEventListener,
    cookie: !!document.cookie,
  });
  getNavigator = async (): Promise<NavigatorProps> => ({
    plugins: this.getNavigatorPlugins(),
    permissions:
      navigator.permissions &&
      (await this.getPermissionInfo(this.permissionsToQuery)),
    cookieEnabled: navigator.cookieEnabled,
    javaEnabled: navigator.javaEnabled(),
    doNotTrack: navigator.doNotTrack,
    userAgent: navigator.userAgent,
    productSub: navigator.productSub,
    language: navigator.language,
    product: navigator.product,
    onLine: !!navigator.onLine,
    vibrate: typeof navigator.vibrate,
    getBattery: typeof navigator.getBattery,
    credentials: !!navigator.credentials,
    appMinorVersion: !!navigator.appMinorVersion,
    bluetooth: !!navigator.bluetooth,
    storage: !!navigator.storage,
    getGamepads: !!navigator.getGamepads,
    getStorageUpdates: !!navigator.getStorageUpdates,
    hardwareConcurrency: !!navigator.hardwareConcurrency,
    mediaDevices: !!navigator.mediaDevices,
    mozConnection: !!navigator.mozConnection,
    mozAlarms: !!navigator.mozAlarms,
    mozIsLocallyAvailable: !!navigator.mozIsLocallyAvailable,
    mozPhoneNumberService: !!navigator.mozPhoneNumberService,
    msManipulationViewsEnabled: !!navigator.msManipulationViewsEnabled,
    registerProtocolHandler: !!navigator.registerProtocolHandler,
    requestMediaKeySystemAccess: !!navigator.requestMediaKeySystemAccess,
    requestWakeLock: !!navigator.requestWakeLock,
    sendBeacon: !!navigator.sendBeacon,
    serviceWorker: !!navigator.serviceWorker,
    storeWebWideTrackingException: !!navigator.storeWebWideTrackingException,
    webkitGetGamepads: !!navigator.webkitGetGamepads,
    webkitTemporaryStorage: !!navigator.webkitTemporaryStorage,
    webdriver: navigator.webdriver,
    appVersion: navigator.appVersion,
    brave: navigator.brave && { isBrave: await this.getBrave() },
  });
  getScreen = (): ScreenProps => ({
    colorDepth: screen.colorDepth,
    pixelDepth: screen.pixelDepth,
  });
  getMath = (): MathProps => ({
    hypot: !!Math.hypot,
    imul: !!Math.imul,
    numParseInt: !!Number.parseInt,
    abs: !!Math.abs,
    acos: !!Math.acos,
    asin: !!Math.asin,
    atanh: !!Math.atanh,
    cbrt: !!Math.cbrt,
    exp: !!Math.exp,
    random: !!Math.random,
    round: !!Math.round,
    sqrt: !!Math.sqrt,
    isFinite: !!isFinite,
    isNaN: !!isNaN,
    parseFloat: !!parseFloat,
    parseInt: !!parseInt,
    parse: !!JSON.parse,
  });

  /*
    [METHODS]
    */
  getPermissionInfo = async (
    permissions: string[]
  ): Promise<PermissionInfo[]> => {
    const permissionInfo: PermissionInfo[] = [];
    const promisifiedPerms = permissions.map((name) =>
      navigator.permissions
        .query({ name: name as PermissionName })
        .then((result) => permissionInfo.push({ state: result.state, name }))
        .catch((e) => permissionInfo.push({ message: e.message, name }))
    );
    await Promise.all(promisifiedPerms);
    return permissionInfo;
  };

  /*
    [HTMLELEMENTS]
    */

  getFormInfo = (): InputElementInfo[] | [] => {
    const inputElements = document.getElementsByTagName("input");

    let inputAttributes: InputElementInfo[] | [] = [];
    for (let i = 0; i < inputElements.length; i++) {
      let element = inputElements[i];
      let defaultValueLength = element.defaultValue.length ? 1 : 0;
      let valueLength = element.value.length ? 1 : 0;
      let name = element.getAttribute("name");
      let id = element.getAttribute("id");
      let required = element.getAttribute("required");
      let type = element.getAttribute("type");
      let autocomplete = element.getAttribute("autocomplete");
      const info: InputElementInfo = {
        defaultValueLength,
        valueLength,
        name,
        id,
        required,
        type,
        autocomplete,
      };
      inputAttributes.push(info as never);
    }

    return inputAttributes;
  };

  getWebGLInfo = (): Partial<WebGLInfo> | null | undefined => {
    try {
      const canvas = document.createElement("canvas");
      const webgl = canvas.getContext("webgl");
      if (webgl) {
        const supportedExtensions = (webgl as WebGLRenderingContext).getSupportedExtensions();
        if (supportedExtensions) {
          const getExtension = (webgl as WebGLRenderingContext).getExtension(
            "WEBGL_debug_renderer_info"
          );

          const vendorGL = (getExtension as any).UNMASKED_VENDOR_WEBGL;
          const rendererGL = (getExtension as any).UNMASKED_RENDERER_WEBGL;
          const vendorGLParam = (webgl as WebGLRenderingContext).getParameter(
            vendorGL
          );
          const rendererGLParam = (webgl as WebGLRenderingContext).getParameter(
            rendererGL
          );
          return {
            supportedExtensions,
            vendorGLParam,
            rendererGLParam,
          };
        } else {
          return { supportedExtensions };
        }
      } else {
        return null;
      }
    } catch (e) {
      return undefined;
    }
  };

  getInfos = (): void => {
    this.formInfo = this.getFormInfo();
    this.webGLInfo = this.getWebGLInfo();
  };

  primaryFontData = (): string => {
    let t: number[] = [];
    const options = ["serif", "sans-serif", "monospace"];
    let n = [0, 0, 0];
    let o = [0, 0, 0];

    const m = document.createElement("span");
    m.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.";
    m.style.fontSize = "90px";

    let r;
    for (r = 0; r < options.length; r++) {
      m.style.fontFamily = options[r];
      document.body.appendChild(m);
      n[r] = m.offsetWidth;
      o[r] = m.offsetHeight;
      document.body.removeChild(m);
    }

    let c = [];
    for (let b = 0; b < this.primaryFontTypes.length; b++) {
      let d = !1;
      for (r = 0; r < options.length; r++) {
        if (
          ((m.style.fontFamily = this.primaryFontTypes[b] + "," + options[r]),
          document.body.appendChild(m),
          (m.offsetWidth === n[r] && m.offsetHeight === o[r]) || (d = !0),
          document.body.removeChild(m),
          d)
        ) {
          c.push(b);
          break;
        }
      }
      t = c.sort();
    }
    return t.join(",");
  };

  secondaryFontData = (): string => {
    let t = 200;
    let e = Date.now();
    let n = [];
    let o = ["sans-serif", "monospace"];
    let m = [0, 0];
    let r = [0, 0];
    let i = document.createElement("div");
    i.style.cssText =
      "position: relative; left: -9999px; visibility: hidden; display: block !important";

    var c;
    for (c = 0; c < o.length; c++) {
      var b: any = document.createElement("span");
      (b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-."),
        (b.style.fontSize = "90px"),
        (b.style.fontFamily = o[c]),
        i.appendChild(b);
    }
    for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++)
      (b = i.childNodes[c]), (m[c] = b.offsetWidth), (r[c] = b.offsetHeight);

    if ((document.body.removeChild(i), Date.now() - e > t)) return "";

    let k = document.createElement("div");
    k.style.cssText =
      "position: relative; left: -9999px; visibility: hidden; display: block !important";

    let s = [];
    for (let l = 0; l < this.primaryFontTypes.length; l++) {
      let u = document.createElement("div");
      for (c = 0; c < o.length; c++) {
        let b = document.createElement("span");
        (b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-."),
          (b.style.fontSize = "90px"),
          (b.style.fontFamily = this.primaryFontTypes[l] + "," + o[c]),
          u.appendChild(b);
      }
      k.appendChild(u);
    }

    if (Date.now() - e > t) return "";

    document.body.appendChild(k);
    for (let l = 0; l < k.childNodes.length; l++) {
      let _ = !1;
      let u = k.childNodes[l];
      for (c = 0; c < u.childNodes.length; c++) {
        let b = u.childNodes[c];
        if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
          _ = !0;
          break;
        }
      }
      if ((_ && s.push(l), Date.now() - e > t)) break;
    }
    document.body.removeChild(k), (n = s.sort());
    return n.join(",");
  };

  otherFontData = (): string => {
    let span = document.createElement("span");
    span.innerHTML = "mmmmmmmmlli";
    span.style.fontSize = "192px";

    const bodyIndex = document.getElementsByTagName("body")[0];

    let widths = "";
    if (bodyIndex) {
      this.otherFontTypes.forEach((font: string) => {
        span.style.fontFamily = font;
        bodyIndex.appendChild(span);
        widths += font + ":" + span.offsetWidth + "," + span.offsetHeight + ";";
        bodyIndex.removeChild(span);
      });
    } else {
      widths = "";
    }

    return widths;
  };

  getPerformances = (): void => {
    try {
      if (
        "undefined" == typeof performance ||
        void 0 === performance.now ||
        "undefined" == typeof JSON
      )
        this.performanceInfo = "undef";
      for (
        var a = "",
          t = 1e3,
          e = [
            Math.abs,
            Math.acos,
            Math.asin,
            Math.atanh,
            Math.cbrt,
            Math.exp,
            Math.random,
            Math.round,
            Math.sqrt,
            isFinite,
            isNaN,
            parseFloat,
            parseInt,
            JSON.parse,
          ],
          n = 0;
        n < e.length;
        n++
      ) {
        var o = [],
          m = 0,
          r = performance.now(),
          i = 0,
          c = 0;
        if (void 0 !== e[n]) {
          for (i = 0; i < t && m < 0.6; i++) {
            for (var b = performance.now(), d = 0; d < 4e3; d++)
              e[n](3.14 as never);
            var k = performance.now();
            o.push(Math.round(1e3 * (k - b))), (m = k - r);
          }
          var s = o.sort();
          c = s[Math.floor(s.length / 2)] / 5;
        }
        a = a + c + ",";
      }
      this.performanceInfo = a;
    } catch (a) {
      this.performanceInfo = "exception";
    }
  };

  getCanvas = (a: string): CanvasData | undefined => {
    var e: string | number = -1;
    var n = document.createElement("canvas");
    let rVal;
    if (
      ((n.width = 280),
      (n.height = 60),
      (n.style.display = "none"),
      "function" == typeof n.getContext)
    ) {
      var o = n.getContext("2d");
      ((o as CanvasRenderingContext2D).fillStyle = "rgb(102, 204, 0)"),
        (o as CanvasRenderingContext2D).fillRect(100, 5, 80, 50),
        ((o as CanvasRenderingContext2D).fillStyle = "#f60"),
        ((o as CanvasRenderingContext2D).font = "16pt Arial"),
        (o as CanvasRenderingContext2D).fillText(a, 10, 40),
        ((o as CanvasRenderingContext2D).strokeStyle = "rgb(120, 186, 176)"),
        (o as CanvasRenderingContext2D).arc(80, 10, 20, 0, Math.PI, !1),
        (o as CanvasRenderingContext2D).stroke();
      var m = n.toDataURL();
      e = 0;
      for (var r = 0; r < m.length; r++) {
        (e = (e << 5) - e + m.charCodeAt(r)), (e &= e);
      }
      e = e.toString();
      var i = document.createElement("canvas");
      (i.width = 16), (i.height = 16);
      var c = i.getContext("2d");
      ((c as CanvasRenderingContext2D).font = "6pt Arial"),
        (rVal = Math.floor(1e3 * Math.random()).toString()),
        (c as CanvasRenderingContext2D).fillText(rVal, 1, 12);
      for (var b = i.toDataURL(), d = 0, k = 0; k < b.length; k++) {
        (d = (d << 5) - d + b.charCodeAt(k)), (d &= d);
      }
      return { primary: d.toString(), secondary: e, rVal };
    }

    return undefined;
  };

  /*
    [LISTENERS]
    */

  mouseCb = (evt: any): void => {
    const mouseEvt: MouseEvents = {
      button: evt.button,
      clientX: evt.clientX,
      clientY: evt.clientY,
      isTrusted: evt.isTrusted,
      pageX: evt.pageX,
      pageY: evt.pageY,
      target: evt.target && {
        name: evt.target.getAttribute("name"),
        id: evt.target.getAttribute("id"),
      },
      type: evt.type,
      which: evt.which,
      toElement: evt.toElement && {
        name: evt.toElement.getAttribute("name"),
        id: evt.toElement.getAttribute("id"),
      },
    };

    this.mouseEvents.length < 100 && this.mouseEvents.push(mouseEvt);
  };

  keyCb = (evt: any): void => {
    const keyEvt: KeyEvents = {
      altKey: evt.altKey,
      charCode: evt.charCode,
      ctrlKey: evt.ctrlKey,
      isTrusted: evt.isTrusted,
      keyCode: evt.keyCode,
      metaKey: evt.metaKey,
      shiftKey: evt.shiftKey,
      activeElement: document.activeElement && {
        type: evt.target.getAttribute("type"),
      },
    };

    this.keyEvents.length < 150 && this.keyEvents.push(keyEvt);
  };

  pointerCb = (evt: any): void => {
    const pointerEvt: PointerEvents = {
      clientX: evt.clientX,
      clientY: evt.clientY,
      isTrusted: evt.isTrusted,
      pageX: evt.pageX,
      pageY: evt.pageY,
      pointerType: evt.pointerType,
    };

    this.pointerEvents.length < 25 && this.pointerEvents.push(pointerEvt);
  };

  visiblityCb = (evt: any): void => {
    const visiblityEvt: VisibilityEvents = {
      bubbles: evt.bubbles,
      cancelBubble: evt.cancelBubble,
      cancelable: evt.cancelable,
      composed: evt.composed,
      defaultPrevented: evt.defaultPrevented,
      eventPhase: evt.eventPhase,
      isTrusted: evt.isTrusted,
      timeStamp: evt.timeStamp,
      type: evt.type,
    };

    this.visibilityEvents.length < 100 &&
      this.visibilityEvents.push(visiblityEvt);
  };

  listenForDesktopEvents = (): void => {
    document.addEventListener("mousemove", this.mouseCb, true);
    document.addEventListener("click", this.mouseCb, true);
    document.addEventListener("mousedown", this.mouseCb, true);
    document.addEventListener("mouseup", this.mouseCb, true);
    document.addEventListener("onmousemove", this.mouseCb, true);
  };

  listenForKeyEvents = (): void => {
    document.addEventListener("keydown", this.keyCb, true);
    document.addEventListener("keyup", this.keyCb, true);
    document.addEventListener("keypress", this.keyCb, true);
  };

  listenForPointerEvents = (): void => {
    document.addEventListener("pointerdown", this.pointerCb, true);
    document.addEventListener("pointerup", this.pointerCb, true);
  };

  listenForVisibilityEvents = (): void => {
    document.addEventListener("visibilitychange", this.visiblityCb, true);
    document.addEventListener("mozvisibilitychange", this.visiblityCb, true);
    document.addEventListener("msvisibilitychange", this.visiblityCb, true);
    document.addEventListener("webkitvisibilitychange", this.visiblityCb, true);
  };

  /*
    [STATE CALLS]
    */

  getFontData = (): void => {
    this.fonts = this.primaryFontData();
    this.secondaryFonts = this.secondaryFontData();
    this.otherFonts = this.otherFontData();
  };

  getCanvasData = () => {
    this.firstCanvas = this.getCanvas("<@nv45. F1n63r,Pr1n71n6!");
    this.secondCanvas = this.getCanvas("m,Ev!xV67BaU> eh2m<f3AG3@");
  };

  listenForEvents = (): void => {
    this.listenForDesktopEvents();
    this.listenForKeyEvents();
    this.listenForPointerEvents();
    this.listenForVisibilityEvents();
  };

  constructFingerprintData = async (): Promise<void> => {
    this.navigator = await this.getNavigator();
    this.window = await this.getWindow();
    this.document = this.getDocument();
    this.screen = this.getScreen();
    this.math = this.getMath();
  };

  /*
    [UTILS]
    */

  mobileCheck = (): boolean => {
    const property = window.navigator.userAgent || window.navigator.vendor;
    const isMobile =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        property
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        property.substr(0, 4)
      );
    return isMobile;
  };

  harvest = async () => {
    this.listenForEvents();
    await this.constructFingerprintData();
    this.getInfos();
    this.getFontData();
    this.getCanvasData();
    this.getPerformances();
  };

  submit = () => ({
    version: "1.63",
    window: this.window,
    document: this.document,
    navigator: this.navigator,
    screen: this.screen,
    math: this.math,
    fonts: this.fonts,
    secondaryFonts: this.secondaryFonts,
    otherFonts: this.otherFonts,
    firstCanvas: this.firstCanvas,
    secondaryCanvas: this.secondCanvas,
    webGLInfo: this.webGLInfo,
    formInfo: this.formInfo,
    performanceInfo: this.performanceInfo,
    mouseEvents: this.mouseEvents,
    visibilityEvents: this.visibilityEvents,
    pointerEvents: this.pointerEvents,
    keyEvents: this.keyEvents,
  });
}

const collect = async () => {
  const harvester = new Harvester();
  const isMobile = harvester.mobileCheck();
  if (!isMobile) {
    await harvester.harvest();
    setTimeout(() => {
      let submitted = harvester.submit();
      console.log(submitted);
    }, 5000);
  }
};

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    collect();
  }
};
