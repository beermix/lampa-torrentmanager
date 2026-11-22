(function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = !1,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = !0, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      r ? i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, _regeneratorDefine(e, r, n, t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapRegExp() {
    _wrapRegExp = function (e, r) {
      return new BabelRegExp(e, void 0, r);
    };
    var e = RegExp.prototype,
      r = new WeakMap();
    function BabelRegExp(e, t, p) {
      var o = RegExp(e, t);
      return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
    }
    function buildGroups(e, t) {
      var p = r.get(t);
      return Object.keys(p).reduce(function (r, t) {
        var o = p[t];
        if ("number" == typeof o) r[t] = e[o];else {
          for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
          r[t] = e[o[i]];
        }
        return r;
      }, Object.create(null));
    }
    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
      var t = e.exec.call(this, r);
      if (t) {
        t.groups = buildGroups(t, this);
        var p = t.indices;
        p && (p.groups = buildGroups(p, this));
      }
      return t;
    }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
      if ("string" == typeof p) {
        var o = r.get(this);
        return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
          if ("" === t) return e;
          var p = o[r];
          return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
        }));
      }
      if ("function" == typeof p) {
        var i = this;
        return e[Symbol.replace].call(this, t, function () {
          var e = arguments;
          return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
        });
      }
      return e[Symbol.replace].call(this, t, p);
    }, _wrapRegExp.apply(this, arguments);
  }

  function Component$1() {
    Lampa.Lang.add({
      clientChoose: {
        ru: "Выбор клиента",
        en: "Select client",
        uk: "Вибір клієnta",
        zh: "选择客户端",
        ro: "Selectați clientul"
      },
      pathMovie: {
        "ru": "Путь сохранения фильмов",
        "en": "Path to save movies",
        "uk": "Шлях збереження фільмів",
        "ro": "Calea de salvare a filmelor"
      },
      pathTV: {
        "ru": "Путь сохранения сериалов",
        "en": "Path to save TV shows",
        "uk": "Шлях збереження серіалів",
        "ro": "Calea de salvare a serialelor"
      },
      pathMovieQbit: {
        "ru": "Категория/Метка для фильмов",
        "en": "Category/Label for movies",
        "uk": "Категорія/Мітка фільмів",
        "ro": "Categorie/Etichetă filme"
      },
      pathTVQbit: {
        "ru": "Категория/Метка для сериалов",
        "en": "Category/Label for TV shows",
        "uk": "Категорія/Мітка серіалів",
        "ro": "Categorie/Etichetă seriale"
      },
      universalAction: {
        ru: "Действие",
        en: "Action",
        uk: "Дія",
        zh: "行动",
        ro: "Acțiune"
      },
      openUniversal: {
        ru: "Открывать в клиенте",
        en: "Open in external client",
        uk: "Відкрити у застосунку",
        zh: "在外部客户端打开",
        ro: "Deschide în client extern"
      },
      copyUniversal: {
        ru: "Копировать ссылку",
        en: "Copy link",
        uk: "Скопіювати посилання",
        zh: "复制到缓冲区",
        ro: "Copiază link-ul"
      },
      openAndroid: {
        ru: "Открыть через Android (выбор приложения)",
        en: "Open via Android (app chooser)",
        uk: "Відкрити через Android (вибір додатку)",
        zh: "通过 Android 打开（应用选择器）",
        ro: "Deschide prin Android (selector aplicații)"
      },
      tweak: {
        ru: "Tweak",
        en: "Tweak",
        uk: "Tweak",
        zh: "高级设置",
        ro: "Optimizare (Tweak)"
      },
      LMEProxy: {
        ru: "Прокси",
        en: "Proxy",
        uk: "Проксі",
        zh: "Proxy",
        ro: "Proxy"
      },
      LMEProxyDescription: {
        en: "The proxy service from the LME project can help when connecting through external addresses. For example, Keenetic or Synology DNS",
        ru: "Прокси сервис от проекта LME, может помочь при подключении через внешние адреса. Например Keenetic или Synology DNS",
        uk: "Проксі-сервіс від проєкту LME може допомогти при підключенні через зовнішні адреси. Наприклад, Keenetic або Synology DNS",
        ro: "Serviciul proxy din proiectul LME poate ajuta la conectarea prin adrese externe. De exemplu, Keenetic sau Synology DNS"
      },
      TransmissionRPCRoute: {
        ru: "RPC Path",
        en: "RPC Path",
        uk: "RPC Path",
        zh: "RPC 路径",
        ro: "Cale RPC"
      },
      TransmissionRPCRouteDescription: {
        ru: "Изменение пути API. Не трогать без необходимости, если используете KeenDNS указать /app/transmission/rpc",
        en: "Change api route. Do not change without need, if you use KeenDNS, specify /app/transmission/rpc",
        uk: "Змінити маршрут API. Не чіпати без нагальної потреби, якщо ви використовуєте KeenDNS, вкажіть /app/transmission/rpc",
        zh: "更改API路径。如无必要，请勿更改, 如使用 KeenDNS，请指定 /app/transmission/rpc",
        ro: "Modifică ruta API. Nu schimbați fără necesitate, dacă folosiți KeenDNS, specificați /app/transmission/rpc"
      },
      //Auth
      AuthSuccess: {
        en: "Authentication successful",
        ru: "Аутентификация успешна",
        uk: "Аутентифікація успішна",
        ro: "Autentificare reușită"
      },
      AuthDenied: {
        en: "Authentication denied",
        ru: "Аутентификация отклонена",
        uk: "Аутентифікацію відхилено",
        ro: "Autentificare respinsă"
      },
      torrentmanager_auth_mode: {
        en: "Auth mode",
        ru: "Режим авторизации",
        uk: "Режим авторизації",
        ro: "Mod autentificare"
      },
      torrentmanager_auth_mode_session: {
        en: "Session (qB <= 5.1)",
        ru: "Сессия (qB <= 5.1)",
        uk: "Сесія (qB <= 5.1)",
        ro: "Sesiune (qB <= 5.1)"
      },
      torrentmanager_auth_mode_apikey: {
        en: "API key (qB >= 5.2 beta)",
        ru: "API key (qB >= 5.2 beta)",
        uk: "API key (qB >= 5.2 beta)",
        ro: "Cheie API (qB >= 5.2 beta)"
      },
      torrentmanager_api_key: {
        en: "API key",
        ru: "API key",
        uk: "API key",
        ro: "Cheie API"
      },
      torrentmanager_test_connection: {
        en: "Test connection",
        ru: "Проверить подключение",
        uk: "Перевірити підключення",
        ro: "Testează conexiunea"
      },
      torrentmanager_reauth_now: {
        en: "Re-auth now",
        ru: "Переавторизоваться",
        uk: "Переавторизуватись",
        ro: "Re-autentificare acum"
      },
      torrentmanager_retry: {
        en: "Retry",
        ru: "Повторить",
        uk: "Повторити",
        ro: "Reîncearcă"
      },
      torrentmanager_open_settings: {
        en: "Open settings",
        ru: "Открыть настройки",
        uk: "Відкрити налаштування",
        ro: "Deschide setările"
      },
      torrentmanager_state_loading: {
        en: "Loading torrents",
        ru: "Загрузка торрентов",
        uk: "Завантаження торрентів",
        ro: "Se încarcă torrentele"
      },
      torrentmanager_state_empty_title: {
        en: "No torrents found",
        ru: "Торренты не найдены",
        uk: "Торрентів не знайдено",
        ro: "Nu s-au găsit torrente"
      },
      torrentmanager_state_empty_description: {
        en: "The list is empty right now",
        ru: "Список сейчас пуст",
        uk: "Список зараз порожній",
        ro: "Lista este goală în acest moment"
      },
      torrentmanager_state_auth_title: {
        en: "Authorization required",
        ru: "Требуется авторизация",
        uk: "Потрібна авторизація",
        ro: "Necesită autentificare"
      },
      torrentmanager_state_auth_description: {
        en: "Check credentials and reconnect to the torrent client",
        ru: "Проверьте учетные данные и повторите подключение к торрент-клиенту",
        uk: "Перевірте облікові дані та повторіть підключення до торрент-клієнта",
        ro: "Verifică datele de acces și reconectează-te la clientul torrent"
      },
      torrentmanager_state_network_title: {
        en: "Connection error",
        ru: "Ошибка соединения",
        uk: "Помилка з'єднання",
        ro: "Eroare de conexiune"
      },
      torrentmanager_state_network_description: {
        en: "Cannot reach torrent client. Check address, proxy, and network",
        ru: "Не удалось подключиться к торрент-клиенту. Проверьте адрес, прокси и сеть",
        uk: "Не вдалося підключитися до торрент-клієнта. Перевірте адресу, проксі та мережу",
        ro: "Clientul torrent nu poate fi accesat. Verifică adresa, proxy-ul și rețeaua"
      },
      torrentmanager_connection_error: {
        en: "Connection error: server unreachable",
        ru: "Ошибка соединения: сервер недоступен",
        uk: "Помилка з'єднання: сервер недоступний",
        ro: "Eroare de conexiune: serverul nu răspunde"
      },
      torrentmanager_server_error: {
        en: "Server error",
        ru: "Ошибка сервера",
        uk: "Помилка сервера",
        ro: "Eroare de server"
      },
      torrentmanager_url_requires_protocol: {
        en: "Address must start with http:// or https://",
        ru: "Адрес должен начинаться с http:// или https://",
        uk: "Адреса має починатися з http:// або https://",
        ro: "Adresa trebuie să înceapă cu http:// sau https://"
      },
      torrentmanager_state_server_title: {
        en: "Server unavailable",
        ru: "Сервер недоступен",
        uk: "Сервер недоступний",
        ro: "Server indisponibil"
      },
      torrentmanager_state_server_description: {
        en: "Torrent client returned a server error",
        ru: "Торрент-клиент вернул серверную ошибку",
        uk: "Торрент-клієнт повернув серверну помилку",
        ro: "Clientul torrent a raportat o eroare de server"
      },
      torrentmanager_secret_set: {
        en: "saved",
        ru: "сохранен",
        uk: "збережено",
        ro: "salvat"
      },
      torrentmanager_secret_not_set: {
        en: "not set",
        ru: "не задан",
        uk: "не задано",
        ro: "nesetat"
      },
      torrentmanager_secret_saved: {
        en: "Secret updated",
        ru: "Секрет обновлен",
        uk: "Секрет оновлено",
        ro: "Secret actualizat"
      },
      //Panel
      clientNotClient: {
        en: "Either the client is not configured or the server is not responding, check the console, you might find the answer there",
        ru: "Или клиент не настроен или сервер не отвечает, узри консоль, возможно там найдешь ответ",
        uk: "Або клієнт не налаштований, або сервер не відповідає, перевір консоль, можливо там знайдеш відповідь",
        ro: "Clientul nu este configurat sau serverul nu răspunde, verifică consola pentru detalii"
      },
      somethingWentWrong: {
        en: "Something went wrong",
        ru: "Что-то пошло не так",
        uk: "Щось пішло не так",
        ro: "Ceva nu a mers bine"
      },
      //Panel action
      actionWithTorrent: {
        en: "Action with torrent",
        ru: "Действие с торрентом",
        uk: "Дія з торрентом",
        ro: "Acțiune cu torrentul"
      },
      resume: {
        en: "Resume",
        ru: "Возобновить",
        uk: "Відновити",
        ro: "Reia"
      },
      pause: {
        en: "Pause",
        ru: "Пауза",
        uk: "Пауза",
        ro: "Pauză"
      },
      "delete": {
        en: "Delete",
        ru: "Удалить",
        uk: "Видалити",
        ro: "Șterge"
      },
      fullDelete: {
        en: "Full delete",
        ru: "Полное удаление",
        uk: "Повне видалення",
        ro: "Ștergere completă"
      },
      actionSentSuccessfully: {
        "en": "Action sent successfully",
        "ru": "Действие успешно отправлено",
        "uk": "Дію успішно надіслано",
        "ro": "Acțiune trimisă cu succes"
      },
      actionReturnedError: {
        en: "Action returned an error",
        ru: "Действие вернуло ошибку",
        uk: "Дія повернула помилку",
        ro: "Acțiunea a returnat o eroare"
      },
      torrent_select_file: {
        en: "Select file to play",
        ru: "Выберите файл для воспроизведения",
        uk: "Виберіть файл для відтворення",
        ro: "Selectați fișierul pentru redare"
      },
      sort_by_name: {
        en: "Sort by name",
        ru: "Сортировать по имени",
        uk: "Сортувати за назвою",
        ro: "Sortare după nume"
      },
      sort_by_size: {
        en: "Sort by size",
        ru: "Сортировать по размеру",
        uk: "Сортувати за розміром",
        ro: "Sortare după mărime"
      },
      sort_by_progress: {
        en: "Sort by progress",
        ru: "Сортировать по прогрессу",
        uk: "Сортувати за прогресом",
        ro: "Sortare după progres"
      },
      openCard: {
        en: "Open",
        ru: "Открыть",
        uk: "Відкрити",
        ro: "Deschide"
      },
      add_metadata: {
        en: "Add metadata",
        ru: "Добавить метаданные",
        uk: "Додати метадані",
        ro: "Adaugă metadate"
      },
      torrentmanager_nothing_found: {
        en: "Nothing found",
        ru: "Ничего не найдено",
        uk: "Нічого не знайдено",
        ro: "Nu s-a găsit nimic"
      },
      torrentmanager_metadata_updated: {
        en: "Metadata updated",
        ru: "Метаданные обновлены",
        uk: "Метадані оновлено",
        ro: "Metadate actualizate"
      },
      torrentmanager_metadata_error: {
        en: "Metadata error",
        ru: "Ошибка метаданных",
        uk: "Помилка метаданів",
        ro: "Eroare metadate"
      },
      torrentmanager_metadata_updated_all: {
        en: "Metadata updated",
        ru: "Метаданные обновлены",
        uk: "Метадані оновлено",
        ro: "Metadate actualizate"
      },
      torrentmanager_metadata_added: {
        en: "Metadata added",
        ru: "Метаданные добавлены",
        uk: "Метадані додано",
        ro: "Metadate adăugate"
      },
      add_metadata_all: {
        en: "Parse all",
        ru: "Парсить все",
        uk: "Парсити все",
        ro: "Procesează tot"
      },
      torrentmanager_settings_thanks: {
        en: "Thanks",
        ru: "Благодарность",
        uk: "Подяка",
        ro: "Mulțumesc"
      },
      torrentmanager_settings_thanks_description: {
        en: "Support for Torrent Manager development is voluntary. Thank you for your contribution.",
        ru: "Поддержка развития Torrent Manager добровольная. Спасибо за вклад.",
        uk: "Підтримка розвитку Torrent Manager добровільна. Дякуємо за внесок.",
        ro: "Susținerea dezvoltării Torrent Manager este voluntară. Vă mulțumim pentru contribuție."
      },
      selectResult: {
        en: "Select result",
        ru: "Выберите результат",
        uk: "Виберіть результат",
        ro: "Selectați rezultatul"
      },
      // Section titles for status-based grouping
      torrentmanager_section_downloading: {
        en: "Downloading",
        ru: "Загрузка",
        uk: "Завантаження",
        zh: "下载中",
        ro: "Se descarcă"
      },
      torrentmanager_section_seeding: {
        en: "Seeding",
        ru: "Раздача",
        uk: "Роздача",
        zh: "做种中",
        ro: "Seederi"
      },
      torrentmanager_section_paused: {
        en: "Paused",
        ru: "Приостановлено",
        uk: "Призупинено",
        zh: "已暂停",
        ro: "Pauză"
      },
      torrentmanager_section_checking: {
        en: "Checking",
        ru: "Проверка",
        uk: "Перевірка",
        zh: "检查中",
        ro: "Verificare"
      },
      torrentmanager_section_errored: {
        en: "Errors",
        ru: "Ошибки",
        uk: "Помилки",
        zh: "错误",
        ro: "Erori"
      },
      torrentmanager_section_completed: {
        en: "Completed",
        ru: "Завершено",
        uk: "Завершено",
        zh: "已完成",
        ro: "Finalizat"
      }
    });
  }

  /**
   * Torrent state classification into section groups.
   * Maps raw client state strings to unified section keys.
   */

  /**
   * Classify a torrent state string into a section key.
   * @param {string} state - Raw torrent state from client API
   * @returns {'downloading'|'seeding'|'completed'|'paused'|'checking'|'errored'}
   */
  function classifyState$1(state) {
    var normalized = (state || '').toLowerCase().trim();

    // Downloading — actively downloading
    // qB: Downloading, MetaDL, ForcedDL, StalledDL, ForcedMetaDL, Downloading metadata
    // S:  Downloading
    // T:  Downloading
    if (/^(downloading|metadl|forceddl|stalleddl|forcedmetadl|downloading metadata)$/i.test(normalized)) {
      return 'downloading';
    }

    // Seeding — actively uploading
    // qB: Uploading, ForcedUP, StalledUP
    // T:  Seeding
    if (/^(uploading|forcedup|stalledup|seeding)$/i.test(normalized)) {
      return 'seeding';
    }

    // Completed — finished but not actively seeding (Synology)
    // S:  Finished (when completed >= 1, normalizeTaskState returns 'Finished')
    if (/^(finished)$/i.test(normalized)) {
      return 'completed';
    }

    // Paused / Stopped — manually stopped
    // qB: PausedDL, PausedUP, StoppedDL, StoppedUP
    // S:  Paused
    // T:  Stopped, Paused
    if (/^(pauseddl|pausedup|stoppeddl|stoppedup|stopped|paused)$/i.test(normalized)) {
      return 'paused';
    }

    // Checking / Queued / Waiting — in verification or waiting
    // qB: CheckingUP, CheckingDL, QueuedUP, QueuedDL, CheckingResumeData, Checking, Queued, Allocating, Moving
    // S:  Queued, Waiting, Extracting
    // T:  Queued to verify local data, Verifying local data, Queued to download, Queued to seed
    if (/^(checkingup|checkingdl|queuedup|queueddl|checking|queued|allocating|moving|waiting|verifying|extracting)/i.test(normalized) || normalized.indexOf('queued to') >= 0 || normalized.indexOf('verify') >= 0) {
      return 'checking';
    }

    // Errored — has errors
    // qB: MissingFiles, Error, Unknown
    // S:  Error, ErrorStatus
    if (/^(missingfiles|error|unknown|errorstatus)$/i.test(normalized)) {
      return 'errored';
    }

    // Fallback: unknown states
    return 'errored';
  }

  /**
   * Ordered section definitions with metadata.
   * Order determines render and navigation priority.
   */
  var SECTION_DEFINITIONS = [{
    key: 'downloading',
    langKey: 'torrentmanager_section_downloading',
    priority: 0
  }, {
    key: 'seeding',
    langKey: 'torrentmanager_section_seeding',
    priority: 1
  }, {
    key: 'completed',
    langKey: 'torrentmanager_section_completed',
    priority: 2
  }, {
    key: 'paused',
    langKey: 'torrentmanager_section_paused',
    priority: 3
  }, {
    key: 'checking',
    langKey: 'torrentmanager_section_checking',
    priority: 4
  }, {
    key: 'errored',
    langKey: 'torrentmanager_section_errored',
    priority: 5
  }];

  /**
   * Get the standardized, translated display name for a raw torrent state.
   * @param {string} state - Raw torrent state from client API
   * @returns {string} Translated standardized state name
   */
  function getStandardizedStateName(state) {
    var sectionKey = classifyState$1(state);
    for (var i = 0; i < SECTION_DEFINITIONS.length; i++) {
      if (SECTION_DEFINITIONS[i].key === sectionKey) {
        return Lampa.Lang.translate(SECTION_DEFINITIONS[i].langKey);
      }
    }
    return state || ''; // Fallback to raw state if section not found
  }

  /**
   * Group an array of torrents by their classified status.
   * @param {Array} torrents - Array of torrent objects with .state property
   * @returns {Object} Grouped object with keys: downloading, seeding, completed, paused, checking, errored
   */
  function groupTorrentsByStatus(torrents) {
    var groups = {
      downloading: [],
      seeding: [],
      completed: [],
      paused: [],
      checking: [],
      errored: []
    };
    if (!Array.isArray(torrents)) {
      return groups;
    }
    torrents.forEach(function (torrent) {
      var key = classifyState$1(torrent.state);
      if (groups[key]) {
        groups[key].push(torrent);
      } else {
        groups.errored.push(torrent);
      }
    });
    return groups;
  }

  var regexp2$1 = /(?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv/;
  function getProgressClass$1(progress) {
    if (progress >= 100) {
      return 'is-high';
    }
    if (progress >= 50) {
      return 'is-mid';
    }
    return 'is-low';
  }
  function Item(data) {
    this.id = data.id; // зберігаємо ідентифікатор торренту
    var initialProgress = Number((data.completed * 100).toFixed(2));
    var itemN = Lampa.Template.get('lmetorrent_item__card', {
      title: data.name,
      size: Lampa.Utils.bytesToSize(data.size, 0),
      state: getStandardizedStateName(data.state),
      "data-completed": initialProgress,
      completed: initialProgress + "%",
      image: data.image,
      image_src: '',
      quality: data.name.match(regexp2$1) ? data.name.match(regexp2$1).toString().replace(/[ .()]/g, '') : ''
    });
    itemN.find('.lmetorrent_card__completed').addClass(getProgressClass$1(initialProgress));
    this.render = function () {
      return itemN;
    };

    // Метод для оновлення статусу та прогресу
    this.update = function (newData) {
      // Припускається, що відповідні елементи мають класи для статусу та прогресу
      itemN.find('.lmetorrent_card__state').text(getStandardizedStateName(newData.state));
      var progress = Number((newData.completed * 100).toFixed(2));
      itemN.attr("data-completed", progress);
      itemN.find('.lmetorrent_card__completed').removeClass('is-low is-mid is-high').addClass(getProgressClass$1(progress)).text(progress + "%");
    };
    this.destroy = function () {
      itemN.remove();
    };
  }

  /**
   * A single section in the torrent panel.
   * Wraps items_line template with horizontal scroll and PanelItem children.
   * @param {Object} config
   * @param {string} config.key - Section key (downloading/seeding/etc.)
   * @param {string} config.title - Section display title
   * @param {string} config.icon - Section icon character
   * @param {Array} config.items - Array of torrent data objects
   */
  function PanelSection(config) {
    var self = this;
    this.key = config.key;
    this.title = config.title;
    this.icon = config.icon || '';
    this.items = [];
    this.last = null; // Last focused DOM element (vinyl pattern)
    this.lastFocusedIndex = -1; // Last focused index for scroll tracking
    this.torrentDataMap = {}; // id -> latest torrent data object

    var sectionId = 'lmetorrent_section_' + config.key;
    this.onDown = null;
    this.onUp = null;
    this.onBack = null;
    this.onLeft = null;
    this.onMore = null; // Callback for "more" button (section-level)
    this.itemsLimit = 11; // Max items shown before "more" card

    // Build DOM from items_line template
    this.html = Lampa.Template.get('items_line', {
      title: config.title
    });
    this.html.addClass('lmetorrent-section');
    this.html.attr('data-section-key', config.key);
    var titleEl = this.html.find('.items-line__title');

    // Prepend icon and append count to title
    if (this.icon) {
      titleEl.prepend('<span class="lmetorrent-section__icon">' + this.icon + '</span>');
    }
    titleEl.append('<span class="lmetorrent-section__count">(' + config.items.length + ')</span>');
    var bodyEl = this.html.find('.items-line__body');

    // Create horizontal scroll
    this.scroll = new Lampa.Scroll({
      horizontal: true,
      step: 300
    });

    /**
     * Create the section: render items, append scroll to body.
     * Limits visible items to itemsLimit and adds "more" card when count exceeds limit.
     * Follows vinyl/lib/line.js pattern for pagination.
     */
    this.create = function () {
      self.scroll.render().find('.scroll__body').addClass('items-cards');
      self.scroll.render().find('.scroll__body').addClass('mapping--line');
      var displayLimit = self.itemsLimit || 11;
      var items = config.items || [];
      var displayItems = items.slice(0, displayLimit);
      var hasMore = items.length > displayLimit && typeof self.onMore === 'function';

      // Add "more" button in section header when onMore is provided
      if (hasMore) {
        var headMore = $('<div class="items-line__more selector">' + Lampa.Lang.translate('more') + '</div>');
        headMore.on('hover:enter', function () {
          if (self.onMore) self.onMore();
        });
        self.html.find('.items-line__head').append(headMore);
      }
      displayItems.forEach(function (torrentData) {
        self.appendItem(torrentData);
      });

      // Add native card-more at end of scroll
      if (hasMore) {
        var nativeMore = $('<div class="card-more selector">' + '<div class="card-more__box">' + '<div class="card-more__title">' + Lampa.Lang.translate('more') + '</div>' + '</div>' + '</div>');
        nativeMore.on('hover:focus', function () {
          self.last = nativeMore[0];
          self.scroll.update(nativeMore, true);
        }).on('hover:enter', function () {
          if (self.onMore) self.onMore();
        });
        self.scroll.append(nativeMore);
      }
      bodyEl.append(self.scroll.render());
      return this.render();
    };

    /**
     * Create a PanelItem for torrentData and append to scroll.
     * Stores torrent data in torrentDataMap for closure-safe retrieval on hover:enter.
     * @param {Object} torrentData
     */
    this.appendItem = function (torrentData) {
      var data = torrentData;
      var id = String(data.id);
      self.torrentDataMap[id] = data;
      var item = new Item(data);
      item.render().on('hover:focus', function () {
        self.last = item.render()[0]; // Track DOM element (vinyl pattern)
        self.lastFocusedIndex = self.items.indexOf(item);
        if (self.lastFocusedIndex >= 0) {
          self.scroll.update(self.items[self.lastFocusedIndex].render(), true);
        }
      });
      item.render().on('hover:enter', function () {
        if (self.onItemEnter) {
          self.onItemEnter(self.torrentDataMap[id]);
        }
      });
      self.scroll.append(item.render());
      self.items.push(item);
    };

    /**
     * Return the jQuery element representing this section.
     */
    this.render = function () {
      return this.html;
    };

    /**
     * Update section with new items. Uses diff approach — preserves existing
     * DOM elements and updates them in place when possible, avoiding flicker
     * from destroy-and-rebuild on every poll cycle.
     * @param {Array} newItems - Array of new torrent data objects
     */
    this.update = function (newItems) {
      var limit = self.itemsLimit || 11;
      var items = Array.isArray(newItems) ? newItems : [];
      var displayItems = items.slice(0, limit);
      var hasMore = items.length > limit && typeof self.onMore === 'function';

      // Build existing item map by id
      var existingMap = {};
      this.items.forEach(function (item) {
        existingMap[String(item.id)] = item;
      });
      var newIds = {};
      var remaining = [];

      // Process items within display limit
      displayItems.forEach(function (torrentData) {
        var id = String(torrentData.id);
        newIds[id] = true;
        self.torrentDataMap[id] = torrentData;
        if (existingMap[id]) {
          // Update existing item in place — NO DOM removal
          existingMap[id].update(torrentData);
          remaining.push(existingMap[id]);
        } else {
          // Create new PanelItem inline (mirrors appendItem logic)
          var item = new Item(torrentData);
          item.render().on('hover:focus', function () {
            self.last = item.render()[0];
            var idx = remaining.indexOf(item);
            if (idx >= 0) {
              self.lastFocusedIndex = idx;
              self.scroll.update(item.render(), true);
            }
          });
          item.render().on('hover:enter', function () {
            if (self.onItemEnter) {
              self.onItemEnter(self.torrentDataMap[id]);
            }
          });
          self.scroll.append(item.render());
          remaining.push(item);
        }
      });

      // Destroy items no longer in display set
      this.items.forEach(function (item) {
        var id = String(item.id);
        if (!newIds[id]) {
          delete self.torrentDataMap[id];
          item.destroy();
        }
      });
      this.items = remaining;

      // Handle more button in header
      var moreBtnEl = self.html.find('.items-line__more');
      if (hasMore && !moreBtnEl.length) {
        var headMore = $('<div class="items-line__more selector">' + Lampa.Lang.translate('more') + '</div>');
        headMore.on('hover:enter', function () {
          if (self.onMore) self.onMore();
        });
        self.html.find('.items-line__head').append(headMore);
      } else if (!hasMore && moreBtnEl.length) {
        moreBtnEl.remove();
      }

      // Handle native card-more in scroll
      var cardMoreEl = self.scroll.render().find('.card-more');
      if (hasMore && !cardMoreEl.length) {
        var nativeMore = $('<div class="card-more selector">' + '<div class="card-more__box">' + '<div class="card-more__title">' + Lampa.Lang.translate('more') + '</div>' + '</div>' + '</div>');
        nativeMore.on('hover:focus', function () {
          self.last = nativeMore[0];
          self.scroll.update(nativeMore, true);
        }).on('hover:enter', function () {
          if (self.onMore) self.onMore();
        });
        self.scroll.append(nativeMore);
      } else if (!hasMore && cardMoreEl.length) {
        cardMoreEl.remove();
      }

      // Reset last focused index if out of bounds
      if (this.lastFocusedIndex >= this.items.length) {
        this.lastFocusedIndex = this.items.length - 1;
      }

      // Update count badge
      var countEl = self.html.find('.lmetorrent-section__count');
      countEl.text('(' + items.length + ')');
    };

    /**
     * Focus this section's first or last-focused card.
     * Sets the Lampa.Controller collection to this section's scroll.
     */
    this.focus = function () {
      if (this.items.length === 0) return;
      var targetIndex = this.lastFocusedIndex >= 0 && this.lastFocusedIndex < this.items.length ? this.lastFocusedIndex : 0;
      Lampa.Controller.collectionSet(this.scroll.render());
      Lampa.Controller.collectionFocus(this.items[targetIndex].render()[0] || false, this.scroll.render());
    };

    /**
     * Save current focused index for later restoration.
     * Focus index is tracked automatically via hover:focus handler.
     */
    this.saveFocus = function () {
      // lastFocusedIndex is updated on hover:focus, so already tracked
    };

    /**
     * Get the last focused DOM element, or false if none.
     * @returns {HTMLElement|false}
     */
    this.getLastFocused = function () {
      return self.last || false;
    };

    /**
     * Toggle this section's own controller.
     * Registers a Lampa.Controller for this section and activates it.
     * Uses Navigator.move for left/right within the section, following the exact
     * vinyl pattern (line/Line module) for horizontal scroll navigation.
     */
    this.toggle = function () {
      Lampa.Controller.add(sectionId, {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(self.scroll.render());
          Lampa.Controller.collectionFocus(self.last || false, self.scroll.render());
        },
        right: function right() {
          Navigator.move('right');
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else if (self.onLeft) self.onLeft();else Lampa.Controller.toggle('menu');
        },
        down: function down() {
          if (self.onDown) self.onDown();
        },
        up: function up() {
          if (self.onUp) self.onUp();
        },
        gone: function gone() {},
        back: function back() {
          if (self.onBack) self.onBack();
        }
      });
      Lampa.Controller.toggle(sectionId);
    };

    /**
     * Navigate left within the section.
     */
    this.scrollLeft = function () {
      if (Navigator.canmove('left')) {
        Navigator.move('left');
      }
    };

    /**
     * Navigate right within the section.
     */
    this.scrollRight = function () {
      if (Navigator.canmove('right')) {
        Navigator.move('right');
      }
    };

    /**
     * Check if section has no items.
     * @returns {boolean}
     */
    this.isEmpty = function () {
      return this.items.length === 0;
    };

    /**
     * Get number of items in this section.
     * @returns {number}
     */
    this.getItemCount = function () {
      return this.items.length;
    };

    /**
     * Destroy the section: scroll, items, DOM removal.
     */
    this.destroy = function () {
      this.last = null;
      Lampa.Arrays.destroy(this.items);
      this.items = [];
      this.torrentDataMap = {};
      if (this.scroll && typeof this.scroll.destroy === 'function') {
        this.scroll.destroy();
      }
      this.scroll = null;
      this.html.remove();
      this.html = null;
    };
  }

  function Header(data) {
    var item = Lampa.Template.get("lmetorrent_header", {
      space: Lampa.Utils.bytesToSize(data.space, 0)
    });
    this.render = function () {
      return item;
    };
    this.destroy = function () {
      item.remove();
    };
  }

  function buildTmdbImageUrl(path) {
    var posterSize = Lampa.Storage.field('poster_size') || 'w200';
    return Lampa.Api.img(path, posterSize);
  }
  function buildTmdbImagesApiUrl(label) {
    var tmdbLang = Lampa.Storage.field('tmdb_lang') || Lampa.Storage.get('language') || 'en';
    return Lampa.TMDB.api("".concat(label, "/images?api_key=").concat(Lampa.TMDB.key(), "&language=").concat(tmdbLang));
  }
  function fetchPosterFromSource(method, id) {
    var source = Lampa.Storage.get('source', 'tmdb');
    if (!source || source === 'tmdb') return Promise.resolve('');
    return new Promise(function (resolve) {
      Lampa.Api.full({
        id: id,
        method: method,
        source: source
      }, function (data) {
        var movie = data.movie || data;
        var poster = movie.poster || movie.img || '';
        if (poster) return resolve(poster);
        var path = movie.poster_path || movie.backdrop_path || movie.profile_path || '';
        if (path) return resolve(buildTmdbImageUrl(path));
        resolve('');
      }, function () {
        return resolve('');
      });
    });
  }
  function getPosterFromLabels(_x) {
    return _getPosterFromLabels.apply(this, arguments);
  }
  function _getPosterFromLabels() {
    _getPosterFromLabels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(labels) {
      var labelArray, label, _label$split, _label$split2, method, id, sourcePoster, response, poster, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            // Ищем лейблы, которые начинаются на tv или movie и содержат цифры после косой
            labelArray = Array.isArray(labels) ? labels : labels.split(','); // Find label matching tv/movie pattern
            label = labelArray.find(function (label) {
              return /^(tv|movie)\/\d+$/.test(label);
            });
            if (label) {
              _context.n = 1;
              break;
            }
            return _context.a(2, './img/img_load.svg');
          case 1:
            _label$split = label.split('/'), _label$split2 = _slicedToArray(_label$split, 2), method = _label$split2[0], id = _label$split2[1];
            _context.n = 2;
            return fetchPosterFromSource(method, id);
          case 2:
            sourcePoster = _context.v;
            if (!sourcePoster) {
              _context.n = 3;
              break;
            }
            return _context.a(2, sourcePoster);
          case 3:
            _context.p = 3;
            _context.n = 4;
            return new Promise(function (resolve, reject) {
              Lampa.Network.silent(buildTmdbImagesApiUrl(label), resolve, reject);
            });
          case 4:
            response = _context.v;
            poster = response && response.posters && response.posters[0];
            if (!(poster && poster.file_path)) {
              _context.n = 5;
              break;
            }
            return _context.a(2, buildTmdbImageUrl(poster.file_path));
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.log('TDM', 'getPosterFromLabels: images API failed', _t);
          case 7:
            return _context.a(2, './img/img_load.svg');
        }
      }, _callee, null, [[3, 6]]);
    }));
    return _getPosterFromLabels.apply(this, arguments);
  }

  var LME_PROXY_URL = "https://apx.lme.isroot.in/destination/";
  var LME_SIMKL_URL = "https://apx.lme.isroot.in/simkl/";

  var HTTP_URL_PATTERN = /^https?:\/\/[^/\s?#]+(?:[/?#]|$)/i;
  var INVALID_STRING_VALUES = {
    undefined: true,
    "null": true
  };
  function sanitizeConfigString(value) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var normalized = typeof value === "string" ? value.trim() : value === null || typeof value === "undefined" ? "" : String(value).trim();
    if (!normalized) {
      return fallback;
    }
    if (INVALID_STRING_VALUES[normalized.toLowerCase()]) {
      return fallback;
    }
    return normalized;
  }
  function normalizeBaseUrl(rawUrl) {
    var normalized = sanitizeConfigString(rawUrl);
    if (!normalized) {
      return "";
    }
    return normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized;
  }
  function normalizeApiPath(rawPath) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var normalizedFallback = sanitizeConfigString(fallback);
    var normalizedPath = sanitizeConfigString(rawPath, normalizedFallback);
    if (!normalizedPath) {
      return "";
    }
    return normalizedPath.charAt(0) === "/" ? normalizedPath : "/".concat(normalizedPath);
  }
  function createConfigError(message) {
    var error = new Error(message);
    error.name = "TorrentClientConfigError";
    error.isConfigError = true;
    return error;
  }
  function RequestClass() {
    var Cls = typeof Lampa !== "undefined" && (Lampa.Reguest || Lampa.Request);
    if (Cls) {
      return new Cls();
    }
    throw new Error("Lampa Request class is not available");
  }
  function isLocalUrl(url) {
    if (!url) return false;
    return /^(https?:\/\/)?(127\.|192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.|localhost)/i.test(url);
  }
  function isHttpUrl(url) {
    return HTTP_URL_PATTERN.test(url);
  }
  function isRelativeUrl(url) {
    return url.charAt(0) === "/";
  }
  function normalizeProxyUrl(rawProxyUrl) {
    var normalized = sanitizeConfigString(rawProxyUrl, LME_PROXY_URL);
    return normalized.endsWith("/") ? normalized : "".concat(normalized, "/");
  }
  function resolveClientBaseUrl() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var clientName = options.clientName || "Torrent client";
    var normalizedUrl = normalizeBaseUrl(config.url);
    if (!normalizedUrl) {
      throw createConfigError("".concat(clientName, " URL is not configured"));
    }
    if (config.useProxy && !isLocalUrl(normalizedUrl)) {
      if (!isHttpUrl(normalizedUrl)) {
        throw createConfigError("".concat(clientName, " URL must include http:// or https:// when proxy is enabled"));
      }
      return "".concat(normalizeProxyUrl(config.proxy)).concat(normalizedUrl);
    }
    if (!isHttpUrl(normalizedUrl) && !isRelativeUrl(normalizedUrl)) {
      throw createConfigError("".concat(clientName, " URL has invalid format"));
    }
    return normalizedUrl;
  }

  var CONFIG_PREFIX$1 = "lmetorrentqBittorent";
  function getConfig$1() {
    var rawApiKey = Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "ApiKey"));
    var rawUrl = sanitizeConfigString(Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Url")));
    var useProxy = Lampa.Storage.field("".concat(CONFIG_PREFIX$1, "Proxy")) === true;
    if (isLocalUrl(rawUrl)) {
      useProxy = false;
    }
    return {
      url: rawUrl,
      useProxy: useProxy,
      proxy: LME_PROXY_URL,
      apiKey: rawApiKey && rawApiKey !== "undefined" && rawApiKey !== "null" ? rawApiKey : ""
    };
  }
  function getApiBase$1() {
    return resolveClientBaseUrl(getConfig$1(), {
      clientName: "qBittorrent"
    });
  }
  function getHeaders$1(contentType) {
    var config = getConfig$1();
    var headers = {};
    if (contentType) {
      headers["Content-Type"] = contentType;
    }
    if (config.useProxy && !isLocalUrl(config.url)) {
      headers["x-requested-with"] = "lme-plugins";
      if (config.apiKey) {
        headers.Authorization = "Bearer ".concat(config.apiKey);
      }
    }
    return headers;
  }
  function normalizeError(error, fallback) {
    var message = error && (error.responseText || error.statusText || error.message) || fallback;
    var normalized = new Error(message);
    if (error && typeof error.status !== "undefined") {
      normalized.status = error.status;
    }
    return normalized;
  }
  function ajaxRequest(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    getConfig$1();
    var method = (options.method || "GET").toUpperCase();
    var targetUrl = "".concat(getApiBase$1()).concat(path);
    var timeout = typeof options.timeout === "number" ? options.timeout : 10000;
    var headers = getHeaders$1(options.contentType);

    if (typeof Lampa !== "undefined" && (Lampa.Reguest || Lampa.Request)) {
      return new Promise(function (resolve, reject) {
        var network = new RequestClass();
        network.timeout(timeout);
        var postData = options.data || null;
        if (postData && typeof postData === "object" && !(postData instanceof FormData) && typeof postData !== "string") {
          if (typeof $ !== "undefined" && $.param) {
            postData = $.param(postData);
          } else {
            postData = Object.keys(postData).map(function (k) {
              return encodeURIComponent(k) + "=" + encodeURIComponent(postData[k]);
            }).join("&");
          }
        }
        network.quiet(targetUrl, function (res) {
          if (typeof res === "string") {
            try {
              res = JSON.parse(res);
            } catch (e) {}
          }
          resolve(res);
        }, function (err) {
          reject(err);
        }, postData, {
          headers: headers,
          type: method,
          dataType: "text"
        });
      });
    }

    var settings = {
      url: targetUrl,
      method: method,
      timeout: timeout,
      crossDomain: true,
      headers: headers
    };
    if (options.data) {
      settings.data = options.data;
    }
    return $.ajax(settings);
  }
  function makeRequest(_x) {
    return _makeRequest.apply(this, arguments);
  }
  function _makeRequest() {
    _makeRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(path) {
      var options,
        config,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            config = getConfig$1();
            if (config.url) {
              _context.n = 1;
              break;
            }
            throw new Error("qBittorrent URL is not configured");
          case 1:
            _context.p = 1;
            _context.n = 2;
            return ajaxRequest(path, options);
          case 2:
            return _context.a(2, _context.v);
          case 3:
            _context.p = 3;
            _t = _context.v;
            throw normalizeError(_t, "qBittorrent request failed");
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _makeRequest.apply(this, arguments);
  }
  function auth$1() {
    return _auth$1.apply(this, arguments);
  }
  function _auth$1() {
    _auth$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var showNotification,
        config,
        _args2 = arguments,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            showNotification = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : true;
            config = getConfig$1();
            if (config.url) {
              _context2.n = 1;
              break;
            }
            if (showNotification) {
              var errDetail = _t2 ? " [" + (_t2.status || _t2.statusText || _t2.message || "err") + "]" : "";
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthDenied") + errDetail
              });
            }
            throw new Error("qBittorrent URL is not configured");
          case 1:
            _context2.n = 2;
            break;
          case 2:
            _context2.p = 2;
            _context2.n = 3;
            return ajaxRequest("/api/v2/app/version", {
              method: "GET"
            });
          case 3:
            if (showNotification) {
              var ver = _context2.v ? " (" + String(_context2.v).trim() + ")" : "";
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthSuccess") + ver
              });
            }
            return _context2.a(2, true);
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.log("TDM", "qBittorrent auth error:", _t2);
            if (showNotification) {
              var errDetail = _t2 ? " [" + (_t2.status || _t2.statusText || _t2.message || "err") + "]" : "";
              Lampa.Bell.push({
                text: Lampa.Lang.translate("AuthDenied") + errDetail
              });
            }
            throw normalizeError(_t2, "qBittorrent auth failed");
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
    }));
    return _auth$1.apply(this, arguments);
  }
  function GetData$1() {
    return _GetData$1.apply(this, arguments);
  }
  function _GetData$1() {
    _GetData$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var response, torrents, _t0;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return makeRequest("/api/v2/sync/maindata", {
              method: "GET"
            });
          case 1:
            response = _context4.v;
            if (!(!response || !response.torrents)) {
              _context4.n = 2;
              break;
            }
            return _context4.a(2, []);
          case 2:
            torrents = Object.values(response.torrents);
            return _context4.a(2, Promise.all(torrents.map(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrent) {
                var _t3, _t4, _t5, _t6, _t7, _t8, _t9;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      _t3 = torrent.name;
                      _t4 = torrent.infohash_v1 || torrent.hash;
                      _t5 = torrent.size;
                      _t6 = torrent.state ? torrent.state.charAt(0).toUpperCase() + torrent.state.slice(1) : "";
                      _t7 = torrent.tags;
                      _context3.n = 1;
                      return getPosterFromLabels(torrent.tags);
                    case 1:
                      _t8 = _context3.v;
                      _t9 = Number(torrent.progress) || 0;
                      return _context3.a(2, {
                        name: _t3,
                        id: _t4,
                        size: _t5,
                        state: _t6,
                        labels: _t7,
                        image: _t8,
                        completed: _t9
                      });
                  }
                }, _callee3);
              }));
              return function (_x9) {
                return _ref.apply(this, arguments);
              };
            }())));
          case 3:
            _context4.p = 3;
            _t0 = _context4.v;
            console.log("TDM", "qBittorrent GetData error:", _t0);
            throw _t0;
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return _GetData$1.apply(this, arguments);
  }
  function GetInfo$1() {
    return _GetInfo$1.apply(this, arguments);
  }
  function _GetInfo$1() {
    _GetInfo$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var response;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return makeRequest("/api/v2/sync/maindata", {
              method: "GET"
            });
          case 1:
            response = _context5.v;
            return _context5.a(2, {
              space: response && response.server_state ? response.server_state.free_space_on_disk : 0
            });
        }
      }, _callee5);
    }));
    return _GetInfo$1.apply(this, arguments);
  }
  function normalizeActionByVersion(action, versionString) {
    var match = String(versionString || "").match(/^v?(\d+)(?:\.\d+)?/i);
    var major = match ? Number(match[1]) : 0;
    var normalized = _objectSpread2({}, action);
    if (major >= 5) {
      if (normalized.action === "resume") normalized.action = "start";
      if (normalized.action === "pause") normalized.action = "stop";
    }
    return normalized;
  }
  function SendCommand$1(_x2, _x3) {
    return _SendCommand$1.apply(this, arguments);
  }
  function _SendCommand$1() {
    _SendCommand$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(action, torrentData) {
      var version, normalizedAction, commandPath, requestData, _t1;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return makeRequest("/api/v2/app/version", {
              method: "GET"
            });
          case 1:
            version = _context6.v;
            normalizedAction = normalizeActionByVersion(action, version);
            commandPath = "/api/v2/torrents/".concat(normalizedAction.action);
            requestData = {
              hashes: torrentData.id
            };
            if (normalizedAction.action === "delete") {
              requestData.deleteFiles = normalizedAction.deleteFiles ? "true" : "false";
            }
            _context6.n = 2;
            return makeRequest(commandPath, {
              method: "POST",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              data: requestData
            });
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionSentSuccessfully")
            });
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t1 = _context6.v;
            console.log("TDM", "qBittorrent SendCommand error:", _t1);
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionReturnedError")
            });
            throw _t1;
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    return _SendCommand$1.apply(this, arguments);
  }
  function SendTask$1(_x4, _x5, _x6) {
    return _SendTask$1.apply(this, arguments);
  }
  function _SendTask$1() {
    _SendTask$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(selectedTorrent, labels, dtype) {
      var _t10;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (selectedTorrent) {
              _context7.n = 1;
              break;
            }
            throw new Error("No torrent selected");
          case 1:
            _context7.p = 1;
            _context7.n = 2;
            return makeRequest("/api/v2/torrents/add", {
              method: "POST",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              data: {
                tags: labels || "",
                urls: selectedTorrent.MagnetUri || selectedTorrent.Link,
                category: Lampa.Storage.get("lmetorrentqBittorent".concat(dtype)) || "",
                firstLastPiecePrio: Lampa.Storage.field("lmetorrentqBittorentfirstLastPiecePrio") ? "true" : "false",
                sequentialDownload: Lampa.Storage.field("lmetorrentqBittorentSequentialDownload") ? "true" : "false"
              }
            });
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionSentSuccessfully")
            });
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t10 = _context7.v;
            if (_t10 && (_t10.status === 409 || (_t10.responseText && String(_t10.responseText).indexOf("Conflict") !== -1))) {
              Lampa.Bell.push({
                text: "Торрент уже в списке закачек"
              });
              return _context7.a(2);
            }
            console.log("TDM", "qBittorrent SendTask error:", _t10);
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionReturnedError")
            });
            throw _t10;
          case 4:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 3]]);
    }));
    return _SendTask$1.apply(this, arguments);
  }
  function setTags(_x7, _x8) {
    return _setTags.apply(this, arguments);
  }
  function _setTags() {
    _setTags = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(torrentId, tags) {
      var tagValue;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            tagValue = Array.isArray(tags) ? tags.join(",") : tags;
            return _context8.a(2, makeRequest("/api/v2/torrents/addTags", {
              method: "POST",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              data: {
                hashes: torrentId,
                tags: tagValue
              }
            }));
        }
      }, _callee8);
    }));
    return _setTags.apply(this, arguments);
  }
  var Qbittorent = {
    auth: auth$1,
    GetData: GetData$1,
    GetInfo: GetInfo$1,
    SendCommand: SendCommand$1,
    SendTask: SendTask$1,
    setTags: setTags
  };

  /**
   * Torrent Parser Utility
   * 
   * This module provides functionality to parse torrent names and
   * fetch corresponding metadata from TMDB.
   */

  /**
   * Clean torrent name by removing quality, year, and other technical information
   * 
   * @param {string} name - Original torrent name
   * @returns {string} - Cleaned name suitable for metadata search
   */
  function cleanName(name) {
    if (!name) return {
      query: '',
      year: null
    };

    // Regular expression to extract the main title from torrent name
    // Removes season/episode markers, year, quality indicators, etc.
    var regex = /*#__PURE__*/_wrapRegExp(/^(.+?)(?:[.\s(](19\d{2}|20\d{2})[.\s)]|S\d{1,2}(?:E\d{1,2})?|[.\s](?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv)/i, {
      title: 1,
      year: 2
    });
    var match = name.match(regex);

    // If we have a match with a title group, use it
    if (match && match.groups && match.groups.title) {
      // Replace dots between words with spaces
      return {
        query: match.groups.title.replace(/\./g, ' ').trim(),
        year: match.groups.year || null
      };
    }

    // Fallback: just replace dots with spaces
    return {
      query: name.replace(/\./g, ' ').trim(),
      year: null
    };
  }

  /**
   * Search for media metadata on TMDB
   * 
   * @param {string} query - Search query
   * @returns {Promise<Object>} - Promise resolving to TMDB response
   */
  function searchTMDB(_x) {
    return _searchTMDB.apply(this, arguments);
  }
  /**
   * Handle case when multiple results are found
   * 
   * @param {Array} results - Array of TMDB results
   * @returns {Promise<Object>} - Promise resolving to selected media info
   */
  function _searchTMDB() {
    _searchTMDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
      var tmdbLang, url, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            tmdbLang = Lampa.Storage.field('tmdb_lang') || Lampa.Storage.get('language') || 'en';
            url = Lampa.TMDB.api("search/multi?include_adult=true&query=".concat(encodeURIComponent(query), "&api_key=").concat(Lampa.TMDB.key(), "&language=").concat(tmdbLang));
            _context.p = 1;
            _context.n = 2;
            return new Promise(function (resolve, reject) {
              Lampa.Network.silent(url, resolve, reject, null, {
                timeout: 10000
              });
            });
          case 2:
            return _context.a(2, _context.v);
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error('TMDB', 'search error:', _t);
            throw new Error("Failed to fetch data from TMDB: ".concat(_t.statusText || _t.message));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _searchTMDB.apply(this, arguments);
  }
  function handleMultipleResults(results) {
    return new Promise(function (resolve, reject) {
      var enabled = Lampa.Controller.enabled().name;

      // Format menu items with title and date information
      var menuItems = results.map(function (result) {
        return {
          title: "".concat(result.title || result.name, " (").concat(result.media_type, ")") + (result.media_type === 'tv' && result.first_air_date ? " - ".concat(result.first_air_date) : '') + (result.media_type === 'movie' && result.release_date ? " - ".concat(result.release_date) : ''),
          media_type: result.media_type,
          id: result.id
        };
      });

      // Show selection menu
      Lampa.Select.show({
        title: Lampa.Lang.translate('selectResult'),
        items: menuItems,
        onBack: function onBack() {
          // Повертаємось до попереднього контролера, якщо він існує
          var currentController = Lampa.Controller.enabled();
          if (currentController && currentController.name !== enabled) {
            Lampa.Controller.toggle(enabled);
          } else {
            // Якщо контролер не змінився, просто вимикаємо меню
            Lampa.Controller.toggle('menu');
          }
          reject(new Error('Selection canceled by user'));
        },
        onSelect: function onSelect(selected) {
          resolve({
            media_type: selected.media_type,
            id: selected.id
          });
        }
      });
    });
  }

  /**
   * Process torrents to find metadata
   * 
   * @param {Object|Array} torrentData - Torrent data to process
   * @returns {Promise<Array>} - Promise resolving to array of media info
   */
  function processTorrents$1(_x2) {
    return _processTorrents.apply(this, arguments);
  }
  function _processTorrents() {
    _processTorrents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrentData) {
      var torrents, results, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            // Ensure we're working with an array
            torrents = Array.isArray(torrentData) ? torrentData : [torrentData];
            _context3.p = 1;
            _context3.n = 2;
            return Promise.all(torrents.map(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrent) {
                var name, cleanedNameInfo, response, strictMatches, _t2;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.p = _context2.n) {
                    case 0:
                      _context2.p = 0;
                      // Clean the torrent name
                      name = torrent.name || torrent;
                      cleanedNameInfo = cleanName(name);
                      if (cleanedNameInfo.query) {
                        _context2.n = 1;
                        break;
                      }
                      console.warn('TDM', 'Empty torrent name after cleaning');
                      return _context2.a(2, null);
                    case 1:
                      _context2.n = 2;
                      return searchTMDB(cleanedNameInfo.query);
                    case 2:
                      response = _context2.v;
                      if (!(!response.results || response.results.length === 0)) {
                        _context2.n = 3;
                        break;
                      }
                      return _context2.a(2, null);
                    case 3:
                      if (!(response.results.length === 1)) {
                        _context2.n = 4;
                        break;
                      }
                      return _context2.a(2, response.results[0]);
                    case 4:
                      if (!cleanedNameInfo.year) {
                        _context2.n = 5;
                        break;
                      }
                      strictMatches = response.results.filter(function (r) {
                        var rYear = (r.release_date || r.first_air_date || '').slice(0, 4);
                        return rYear === cleanedNameInfo.year;
                      });
                      if (!(strictMatches.length === 1)) {
                        _context2.n = 5;
                        break;
                      }
                      return _context2.a(2, strictMatches[0]);
                    case 5:
                      _context2.n = 6;
                      return handleMultipleResults(response.results);
                    case 6:
                      return _context2.a(2, _context2.v);
                    case 7:
                      _context2.p = 7;
                      _t2 = _context2.v;
                      console.error('TDM', 'torrent processing error:', _t2);
                      return _context2.a(2, null);
                  }
                }, _callee2, null, [[0, 7]]);
              }));
              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }()));
          case 2:
            results = _context3.v;
            return _context3.a(2, results.filter(function (result) {
              return result !== null;
            }));
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            console.error('TDM', 'torrent processing overall error:', _t3);
            throw _t3;
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return _processTorrents.apply(this, arguments);
  }

  var DEFAULT_RPC_PATH = "/transmission/rpc";
  var DEFAULT_STATUS_MAP = {
    0: "Stopped",
    1: "Queued to verify local data",
    2: "Verifying local data",
    3: "Queued to download",
    4: "Downloading",
    5: "Queued to seed",
    6: "Seeding"
  };
  var CLIENTS = {
    qBittorent: Qbittorent,
    qbittorrent: Qbittorent
  };
  var authInFlight = {};
  var pollingCircuitState = {};
  var POLLING_METHODS = {
    GetData: true,
    GetInfo: true
  };
  var BACKOFF_AFTER_FAILURES = 3;
  var BACKOFF_STEPS_MS = [30000, 60000, 120000, 300000];
  var BACKOFF_JITTER_RATIO = 0.15;
  function getStatusCode(error) {
    if (!error || typeof error.status === "undefined") {
      return null;
    }
    var status = Number(error.status);
    return Number.isNaN(status) ? null : status;
  }
  function isPollingMethod(methodName) {
    return POLLING_METHODS[methodName] === true;
  }
  function getPollingKey(clientName, methodName) {
    return "".concat(clientName, ":").concat(methodName);
  }
  function getPollingState(clientName, methodName) {
    var key = getPollingKey(clientName, methodName);
    if (!pollingCircuitState[key]) {
      pollingCircuitState[key] = {
        consecutiveFailures: 0,
        blockedUntil: 0,
        hardBlocked: false,
        lastStatus: null,
        lastMessage: "",
        lastErrorAt: 0
      };
    }
    return pollingCircuitState[key];
  }
  function resetPollingState(clientName, methodName) {
    var state = getPollingState(clientName, methodName);
    state.consecutiveFailures = 0;
    state.blockedUntil = 0;
    state.hardBlocked = false;
    state.lastStatus = null;
    state.lastMessage = "";
    state.lastErrorAt = 0;
  }
  function isHardClientStatus(status) {
    return status >= 400 && status < 500 && status !== 401 && status !== 403 && status !== 408 && status !== 409 && status !== 429;
  }
  function isBackoffCandidate(error) {
    var status = getStatusCode(error);
    if (status === null) {
      var message = String(error && error.message || "").toLowerCase();
      return message.indexOf("timeout") >= 0 || message.indexOf("network") >= 0 || message.indexOf("cors") >= 0;
    }
    if (status === 0 || status === 401 || status === 403 || status === 408 || status === 429) {
      return true;
    }
    return status >= 500 && status < 600;
  }
  function createPollingBlockedError(clientName, methodName, state) {
    var statusSuffix = state.lastStatus !== null ? " (HTTP ".concat(state.lastStatus, ")") : "";
    if (state.hardBlocked) {
      var hardError = new Error("".concat(clientName, " ").concat(methodName, " polling blocked after repeated client errors").concat(statusSuffix));
      hardError.status = state.lastStatus;
      hardError.client = clientName;
      hardError.method = methodName;
      hardError.isBackoffError = true;
      hardError.isCircuitOpen = true;
      hardError.isHardBlocked = true;
      return hardError;
    }
    var retryAfterMs = Math.max(0, state.blockedUntil - Date.now());
    var retryAfterSec = Math.ceil(retryAfterMs / 1000);
    var softError = new Error("".concat(clientName, " ").concat(methodName, " polling paused for ").concat(retryAfterSec, "s").concat(statusSuffix));
    softError.status = state.lastStatus;
    softError.client = clientName;
    softError.method = methodName;
    softError.retryAfterMs = retryAfterMs;
    softError.isBackoffError = true;
    softError.isCircuitOpen = true;
    softError.isHardBlocked = false;
    return softError;
  }
  function getPollingBlockedError(clientName, methodName) {
    var state = getPollingState(clientName, methodName);
    if (state.hardBlocked) {
      return createPollingBlockedError(clientName, methodName, state);
    }
    if (state.blockedUntil > Date.now()) {
      return createPollingBlockedError(clientName, methodName, state);
    }
    if (state.blockedUntil > 0) {
      state.blockedUntil = 0;
    }
    return null;
  }
  function registerPollingFailure(clientName, methodName, error) {
    var state = getPollingState(clientName, methodName);
    var status = getStatusCode(error);
    state.consecutiveFailures += 1;
    state.lastStatus = status;
    state.lastMessage = String(error && error.message || "");
    state.lastErrorAt = Date.now();
    if (status !== null && isHardClientStatus(status) && state.consecutiveFailures >= BACKOFF_AFTER_FAILURES) {
      state.hardBlocked = true;
      state.blockedUntil = 0;
      return;
    }
    if (!isBackoffCandidate(error) || state.consecutiveFailures < BACKOFF_AFTER_FAILURES) {
      return;
    }
    var rawStep = state.consecutiveFailures - BACKOFF_AFTER_FAILURES;
    var stepIndex = Math.min(rawStep, BACKOFF_STEPS_MS.length - 1);
    var delayMs = BACKOFF_STEPS_MS[stepIndex];
    var jitterMs = Math.round(delayMs * BACKOFF_JITTER_RATIO * Math.random());
    state.blockedUntil = Date.now() + delayMs + jitterMs;
  }
  function getClient(clientName) {
    return CLIENTS[clientName] || null;
  }
  function hasClient(clientName) {
    return Boolean(getClient(clientName));
  }
  function getActiveClientName() {
    return "qBittorent";
  }
  function getErrorCode(error) {
    if (!error) {
      return null;
    }
    if (typeof error.code === "number" && !Number.isNaN(error.code)) {
      return error.code;
    }
    if (error.responseJSON && error.responseJSON.error && typeof error.responseJSON.error.code !== "undefined") {
      var parsed = Number(error.responseJSON.error.code);
      return Number.isNaN(parsed) ? null : parsed;
    }
    return null;
  }
  function isAuthError(clientName, error) {
    var status = Number(error && error.status);
    var code = getErrorCode(error);
    if (status === 401 || status === 403) {
      return true;
    }
    if (clientName === "synology" && code === 105) {
      return true;
    }
    return false;
  }
  function normalizeClientError(clientName, methodName, error) {
    var normalized = error instanceof Error ? error : new Error(String(error || "Client request failed"));
    if (error && typeof error.status !== "undefined") {
      normalized.status = error.status;
    }
    var code = getErrorCode(error);
    if (code !== null) {
      normalized.code = code;
    }
    normalized.client = clientName;
    normalized.method = methodName;
    normalized.isAuthError = isAuthError(clientName, error);
    return normalized;
  }
  function authenticateClient(_x) {
    return _authenticateClient.apply(this, arguments);
  }
  function _authenticateClient() {
    _authenticateClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(clientName) {
      var silent,
        client,
        _args = arguments;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            silent = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
            client = getClient(clientName);
            if (!(!client || typeof client.auth !== "function")) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!authInFlight[clientName]) {
              _context.n = 2;
              break;
            }
            return _context.a(2, authInFlight[clientName]);
          case 2:
            authInFlight[clientName] = Promise.resolve().then(function () {
              return client.auth(!silent);
            })["finally"](function () {
              authInFlight[clientName] = null;
            });
            return _context.a(2, authInFlight[clientName]);
        }
      }, _callee);
    }));
    return _authenticateClient.apply(this, arguments);
  }
  function executeClientMethod(_x2, _x3) {
    return _executeClientMethod.apply(this, arguments);
  }
  function _executeClientMethod() {
    _executeClientMethod = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(clientName, methodName) {
      var args,
        options,
        client,
        retryAuth,
        silentAuth,
        usePollingGuard,
        blockedError,
        result,
        normalized,
        retryResult,
        normalizedRetryError,
        _args2 = arguments,
        _t,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            args = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : [];
            options = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
            client = getClient(clientName);
            if (client) {
              _context2.n = 1;
              break;
            }
            throw new Error("Unknown client type: ".concat(clientName));
          case 1:
            if (!(typeof client[methodName] !== "function")) {
              _context2.n = 2;
              break;
            }
            throw new Error("Unknown method '".concat(methodName, "' for client '").concat(clientName, "'"));
          case 2:
            retryAuth = options.retryAuth !== false;
            silentAuth = options.silentAuth !== false;
            usePollingGuard = options.backgroundPolling === true && isPollingMethod(methodName);
            if (!usePollingGuard) {
              _context2.n = 3;
              break;
            }
            blockedError = getPollingBlockedError(clientName, methodName);
            if (!blockedError) {
              _context2.n = 3;
              break;
            }
            throw blockedError;
          case 3:
            _context2.p = 3;
            _context2.n = 4;
            return client[methodName].apply(client, _toConsumableArray(args));
          case 4:
            result = _context2.v;
            if (isPollingMethod(methodName)) {
              resetPollingState(clientName, methodName);
            }
            return _context2.a(2, result);
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            normalized = normalizeClientError(clientName, methodName, _t);
            if (!(retryAuth && normalized.isAuthError && typeof client.auth === "function")) {
              _context2.n = 10;
              break;
            }
            _context2.p = 6;
            _context2.n = 7;
            return authenticateClient(clientName, silentAuth);
          case 7:
            _context2.n = 8;
            return client[methodName].apply(client, _toConsumableArray(args));
          case 8:
            retryResult = _context2.v;
            if (isPollingMethod(methodName)) {
              resetPollingState(clientName, methodName);
            }
            return _context2.a(2, retryResult);
          case 9:
            _context2.p = 9;
            _t2 = _context2.v;
            normalizedRetryError = normalizeClientError(clientName, methodName, _t2);
            if (usePollingGuard) {
              registerPollingFailure(clientName, methodName, normalizedRetryError);
            }
            throw normalizedRetryError;
          case 10:
            if (usePollingGuard) {
              registerPollingFailure(clientName, methodName, normalized);
            }
            throw normalized;
          case 11:
            return _context2.a(2);
        }
      }, _callee2, null, [[6, 9], [3, 5]]);
    }));
    return _executeClientMethod.apply(this, arguments);
  }

  /**
   * Оновлення метаданих для одного торента.
   * Викликається з torrent_actions.js
   *
   * @param {Object} torrent - об'єкт торента (як у твоєму списку)
   * @param {Object} client  - інформація про клієнта (тип + налаштування)
   */
  function updateMetadataForTorrent(_x, _x2) {
    return _updateMetadataForTorrent.apply(this, arguments);
  }
  /**
   * Простий TMDB-флоу для пошуку медіа інформації
   *
   * @param {Object} torrent - об'єкт торента
   * @returns {Promise<Object|null>} - нормалізований результат TMDB або null
   */
  function _updateMetadataForTorrent() {
    _updateMetadataForTorrent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(torrent, client) {
      var mediaInfo, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return findMediaInfoViaTMDB(torrent);
          case 1:
            mediaInfo = _context.v;
            if (mediaInfo) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            _t = client.type;
            _context.n = _t === 'transmission' ? 3 : _t === 'keenetic' ? 3 : _t === 'qbittorrent' ? 5 : _t === 'synology' ? 7 : 9;
            break;
          case 3:
            _context.n = 4;
            return updateTransmissionLikeMetadata(torrent, client, mediaInfo);
          case 4:
            return _context.a(3, 10);
          case 5:
            _context.n = 6;
            return updateQbittorrentMetadata(torrent, client, mediaInfo);
          case 6:
            return _context.a(3, 10);
          case 7:
            _context.n = 8;
            return updateSynologyMetadata(torrent, client, mediaInfo);
          case 8:
            return _context.a(3, 10);
          case 9:
            console.log('TDM', 'Unknown client type for metadata:', client.type);
          case 10:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _updateMetadataForTorrent.apply(this, arguments);
  }
  function findMediaInfoViaTMDB(_x3) {
    return _findMediaInfoViaTMDB.apply(this, arguments);
  }
  /**
   * Пошук в TMDB з використанням існуючого парсера
   *
   * @param {Object} torrent - торент для пошуку 
   * @returns {Promise<Array>} - результати пошуку
   */
  function _findMediaInfoViaTMDB() {
    _findMediaInfoViaTMDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrent) {
      var results;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return tmdbSearch(torrent);
          case 1:
            results = _context2.v;
            if (!(!results || !results.length)) {
              _context2.n = 2;
              break;
            }
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_nothing_found') //'Нічого не знайдено для ' + torrent.name
            });
            return _context2.a(2, null);
          case 2:
            return _context2.a(2, normalizeTmdbResult(results[0]));
        }
      }, _callee2);
    }));
    return _findMediaInfoViaTMDB.apply(this, arguments);
  }
  function tmdbSearch(_x4) {
    return _tmdbSearch.apply(this, arguments);
  }
  /**
   * Показ модального вікна для вибору результату TMDB
   *
   * @param {Array} results - масив результатів пошуку
   * @returns {Promise<Object|null>} - обраний результат або null
   */
  function _tmdbSearch() {
    _tmdbSearch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrent) {
      var results, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return processTorrents$1([torrent]);
          case 1:
            results = _context3.v;
            return _context3.a(2, results || []);
          case 2:
            _context3.p = 2;
            _t2 = _context3.v;
            console.error('TDM', 'TMDB search error:', _t2);
            return _context3.a(2, []);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return _tmdbSearch.apply(this, arguments);
  }

  /**
   * Нормалізація результату TMDB до простого об'єкта
   *
   * @param {Object} item - результат з TMDB
   * @returns {Object} - нормалізований об'єкт
   */
  function normalizeTmdbResult(item) {
    return {
      id: item.id,
      media_type: item.media_type || 'movie',
      // або за твоїми правилами
      title: item.title || item.name,
      year: (item.release_date || item.first_air_date || '').slice(0, 4) || null
    };
  }

  /**
   * Форматування тегу для метаданих
   *
   * @param {Object} mediaInfo - інформація про медіа
   * @returns {string} - відформатований тег
   */
  function buildMetadataTag(mediaInfo) {
    // ПОВИННО відповідати поточному формату тегу в плагіні!
    // приклад, якщо так уже є:
    return mediaInfo.media_type + '/' + mediaInfo.id;
  }

  /**
   * Оновлення метаданих для Transmission/Keenetic
   *
   * @param {Object} torrent - об'єкт торента
   * @param {Object} client - інформація про клієнта
   * @param {Object} mediaInfo - інформація про медіа з TMDB
   */
  function updateTransmissionLikeMetadata(_x5, _x6, _x7) {
    return _updateTransmissionLikeMetadata.apply(this, arguments);
  }
  /**
   * Оновлення метаданих для qBittorrent
   *
   * @param {Object} torrent - об'єкт торента
   * @param {Object} client - інформація про клієнта
   * @param {Object} mediaInfo - інформація про медіа з TMDB
   */
  function _updateTransmissionLikeMetadata() {
    _updateTransmissionLikeMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(torrent, client, mediaInfo) {
      var label, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            label = buildMetadataTag(mediaInfo);
            _context4.p = 1;
            if (!(client.type === 'transmission')) {
              _context4.n = 3;
              break;
            }
            _context4.n = 2;
            return Transmission.setLabels(torrent.id, label);
          case 2:
            _context4.n = 4;
            break;
          case 3:
            _context4.n = 4;
            return Keenetic.setLabels(torrent.id, label);
          case 4:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
            });
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t3 = _context4.v;
            console.error('TDM', 'updateTransmissionLikeMetadata error:', _t3);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
            });
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 5]]);
    }));
    return _updateTransmissionLikeMetadata.apply(this, arguments);
  }
  function updateQbittorrentMetadata(_x8, _x9, _x0) {
    return _updateQbittorrentMetadata.apply(this, arguments);
  }
  /**
   * Оновлення метаданих для Synology
   *
   * @param {Object} torrent - об'єкт торента
   * @param {Object} client - інформація про клієнта
   * @param {Object} mediaInfo - інформація про медіа з TMDB
   */
  function _updateQbittorrentMetadata() {
    _updateQbittorrentMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(torrent, client, mediaInfo) {
      var tagValue, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            tagValue = buildMetadataTag(mediaInfo); // той самий формат, що й при додаванні
            _context5.p = 1;
            _context5.n = 2;
            return Qbittorent.setTags(torrent.id, tagValue);
          case 2:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
            });
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t4 = _context5.v;
            console.error('TDM', 'updateQbittorrentMetadata error:', _t4);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
            });
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return _updateQbittorrentMetadata.apply(this, arguments);
  }
  function updateSynologyMetadata(_x1, _x10, _x11) {
    return _updateSynologyMetadata.apply(this, arguments);
  }
  /**
   * Масове оновлення метаданих для всіх торентів
   *
   * @param {Array} torrents - масив торентів
   * @param {Object} client - інформація про клієнта
   */
  function _updateSynologyMetadata() {
    _updateSynologyMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(torrent, client, mediaInfo) {
      var key, metadataTag, poster, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            key = String(torrent && torrent.id || "");
            if (key) {
              _context6.n = 1;
              break;
            }
            throw new Error("Synology metadata update: empty torrent id");
          case 1:
            metadataTag = buildMetadataTag(mediaInfo);
            _context6.n = 2;
            return getPosterFromLabels(metadataTag);
          case 2:
            poster = _context6.v;
            _context6.n = 3;
            return saveMetadata(key, {
              tmdb_id: mediaInfo.id,
              media_type: mediaInfo.media_type,
              poster: poster && poster !== './img/img_load.svg' ? poster : '',
              updated_at: Date.now()
            });
          case 3:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
            });
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t5 = _context6.v;
            console.error('TDM', 'updateSynologyMetadata error:', _t5);
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
            });
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 4]]);
    }));
    return _updateSynologyMetadata.apply(this, arguments);
  }
  function updateAllMetadata(_x12, _x13) {
    return _updateAllMetadata.apply(this, arguments);
  }
  function _updateAllMetadata() {
    _updateAllMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(torrents, client) {
      var _iterator, _step, torrent, _t6;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _iterator = _createForOfIteratorHelper(torrents);
            _context7.p = 1;
            _iterator.s();
          case 2:
            if ((_step = _iterator.n()).done) {
              _context7.n = 5;
              break;
            }
            torrent = _step.value;
            _context7.n = 3;
            return updateMetadataForTorrent(torrent, client);
          case 3:
            _context7.n = 4;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 500);
            });
          case 4:
            _context7.n = 2;
            break;
          case 5:
            _context7.n = 7;
            break;
          case 6:
            _context7.p = 6;
            _t6 = _context7.v;
            _iterator.e(_t6);
          case 7:
            _context7.p = 7;
            _iterator.f();
            return _context7.f(7);
          case 8:
            Lampa.Bell.push({
              text: Lampa.Lang.translate('torrentmanager_metadata_updated_all') //'Оновлення метаданих завершено'
            });
          case 9:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 6, 7, 8]]);
    }));
    return _updateAllMetadata.apply(this, arguments);
  }

  var METADATA_CLIENTS = {
    qBittorent: {
      type: "qbittorrent",
      prefix: "lmetorrentqBittorent",
      withCredentials: false
    },
    transmission: {
      type: "transmission",
      prefix: "lmetorrenttransmission",
      withCredentials: true
    },
    keenetic: {
      type: "keenetic",
      prefix: "lmetorrentkeenetic",
      withCredentials: true
    },
    synology: {
      type: "synology",
      prefix: "lmetorrentsynology",
      withCredentials: true
    }
  };
  function buildMetadataClientConfig(clientName) {
    var client = METADATA_CLIENTS[clientName];
    if (!client) {
      return null;
    }
    var config = {
      type: client.type,
      url: Lampa.Storage.field("".concat(client.prefix, "Url")),
      useProxy: Lampa.Storage.field("".concat(client.prefix, "Proxy")) === true
    };
    if (client.withCredentials) {
      config.user = Lampa.Storage.field("".concat(client.prefix, "User"));
      config.pass = Lampa.Storage.field("".concat(client.prefix, "Pass"));
    }
    return config;
  }
  function isMetadataAction(actionType) {
    return actionType === "parse" || actionType === "parse-all";
  }
  function openTorrentCard(torrentData) {
    var cardInfo = null;
    if (torrentData.tmdb_id && torrentData.media_type) {
      cardInfo = {
        tID: torrentData.tmdb_id,
        method: torrentData.media_type
      };
    } else {
      cardInfo = parseLabels(torrentData.labels);
    }
    if (!cardInfo) {
      Lampa.Bell.push({
        text: "No metadata available for this torrent"
      });
      return;
    }
    Lampa.Activity.push({
      url: "",
      component: "full",
      id: cardInfo.tID,
      method: cardInfo.method,
      source: Lampa.Storage.field("source") || "tmdb"
    });
  }
  function handleMetadataAction(_x, _x2, _x3, _x4) {
    return _handleMetadataAction.apply(this, arguments);
  }
  function _handleMetadataAction() {
    _handleMetadataAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(actionType, torrentData, torrentList, clientName) {
      var clientConfig;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            clientConfig = buildMetadataClientConfig(clientName);
            if (clientConfig) {
              _context.n = 1;
              break;
            }
            Lampa.Bell.push({
              text: "Unknown client type"
            });
            return _context.a(2);
          case 1:
            if (!(actionType === "parse")) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return updateMetadataForTorrent(torrentData, clientConfig);
          case 2:
            return _context.a(2);
          case 3:
            _context.n = 4;
            return updateAllMetadata(torrentList, clientConfig);
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _handleMetadataAction.apply(this, arguments);
  }
  function parseLabels(labels) {
    if (!labels) {
      return null;
    }
    var labelArray = Array.isArray(labels) ? labels : labels.split(",");
    var matchedLabel = labelArray.find(function (label) {
      return /^(tv|movie)\/\d+$/.test(label);
    });
    if (!matchedLabel) {
      return null;
    }
    var _matchedLabel$split = matchedLabel.split("/"),
      _matchedLabel$split2 = _slicedToArray(_matchedLabel$split, 2),
      method = _matchedLabel$split2[0],
      tID = _matchedLabel$split2[1];
    return {
      method: method,
      tID: tID
    };
  }
  function showTorrentMenu(torrentData) {
    var allTorrents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var client = Lampa.Storage.field("lmetorrentSelect");
    var enabled = Lampa.Controller.enabled().name;
    var hasMetadata = torrentData.tmdb_id && torrentData.media_type || parseLabels(torrentData.labels);
    var torrentList = Array.isArray(allTorrents) ? allTorrents : [];
    var menuItems = [{
      title: Lampa.Lang.translate("resume"),
      action: "resume"
    }, {
      title: Lampa.Lang.translate("pause"),
      action: "pause"
    }, {
      title: Lampa.Lang.translate("delete"),
      action: "delete"
    }].concat(_toConsumableArray(hasMetadata ? [{
      title: Lampa.Lang.translate("openCard"),
      action: "card"
    }] : []), [{
      title: Lampa.Lang.translate("add_metadata"),
      action: "parse"
    }]);
    if (torrentList.length > 1) {
      menuItems.push({
        title: Lampa.Lang.translate("add_metadata_all"),
        action: "parse-all"
      });
    }
    if (client === "keenetic") {
      menuItems.push({
        title: "Play",
        action: "play"
      });
    }
    if (client !== "synology") {
      menuItems.push({
        title: Lampa.Lang.translate("fullDelete"),
        action: "delete",
        deleteFiles: true
      });
    }
    Lampa.Select.show({
      title: torrentData.name,
      items: menuItems,
      onBack: function onBack() {
        var currentController = Lampa.Controller.enabled();
        if (currentController && currentController.name !== enabled) {
          Lampa.Controller.toggle(enabled);
        } else {
          Lampa.Controller.toggle("menu");
        }
      },
      onSelect: function onSelect(action) {
        handleTorrentAction(action, torrentData, torrentList);
      }
    });
  }
  function handleTorrentAction(_x5, _x6) {
    return _handleTorrentAction.apply(this, arguments);
  }
  function _handleTorrentAction() {
    _handleTorrentAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(action, torrentData) {
      var allTorrents,
        client,
        torrentList,
        actionType,
        _args2 = arguments,
        _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            allTorrents = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : [];
            client = Lampa.Storage.field("lmetorrentSelect");
            torrentList = Array.isArray(allTorrents) ? allTorrents : [];
            actionType = action && action.action;
            if (!(actionType === "card")) {
              _context2.n = 1;
              break;
            }
            openTorrentCard(torrentData);
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            if (!isMetadataAction(actionType)) {
              _context2.n = 3;
              break;
            }
            _context2.n = 2;
            return handleMetadataAction(actionType, torrentData, torrentList, client);
          case 2:
            return _context2.a(2);
          case 3:
            _context2.n = 4;
            return executeClientMethod(client, "SendCommand", [action, torrentData], {
              silentAuth: true
            });
          case 4:
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            console.error("TDM", "Error handling action:", _t);
            Lampa.Bell.push({
              text: Lampa.Lang.translate("actionReturnedError")
            });
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 5]]);
    }));
    return _handleTorrentAction.apply(this, arguments);
  }

  var TorrentStateManager = /*#__PURE__*/function () {
    function TorrentStateManager() {
      _classCallCheck(this, TorrentStateManager);
      this.torrents = [];
      this.timer = null;
      this.listener = Lampa.Listener;
      this.updateInProgress = false;
    }
    return _createClass(TorrentStateManager, [{
      key: "start",
      value: function start() {
        if (this.timer) {
          return;
        }

        // Call update immediately on start to populate torrents right away
        this.update();
        this.timer = this.update.bind(this);
        Lampa.Timer.add(15000, this.timer, true);
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.timer) {
          Lampa.Timer.remove(this.timer);
          this.timer = null;
        }
      }
    }, {
      key: "update",
      value: function () {
        var _update = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var client_name, isUniversal, new_torrents, has_active_downloads_before, has_active_downloads_after, _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.p = _context.n) {
              case 0:
                if (!this.updateInProgress) {
                  _context.n = 1;
                  break;
                }
                return _context.a(2);
              case 1:
                this.updateInProgress = true;
                _context.p = 2;
                client_name = Lampa.Storage.get('lmetorrentSelect');
                isUniversal = false;
                if (!(isUniversal || !hasClient(client_name))) {
                  _context.n = 3;
                  break;
                }
                return _context.a(2);
              case 3:
                _context.n = 4;
                return executeClientMethod(client_name, 'GetData', [], {
                  silentAuth: true,
                  backgroundPolling: true
                });
              case 4:
                new_torrents = _context.v;
                if (new_torrents) {
                  has_active_downloads_before = this.hasActiveDownloads();
                  this.torrents = new_torrents;
                  has_active_downloads_after = this.hasActiveDownloads();
                  this.listener.send('torrents:updated', {
                    torrents: this.torrents
                  });
                  if (has_active_downloads_before !== has_active_downloads_after) {
                    this.listener.send('torrents:status_changed', {
                      active: has_active_downloads_after
                    });
                  }
                }
                _context.n = 6;
                break;
              case 5:
                _context.p = 5;
                _t = _context.v;
                console.error('TDM', 'TorrentStateManager.update error:', _t);
              case 6:
                _context.p = 6;
                this.updateInProgress = false;
                return _context.f(6);
              case 7:
                return _context.a(2);
            }
          }, _callee, this, [[2, 5, 6, 7]]);
        }));
        function update() {
          return _update.apply(this, arguments);
        }
        return update;
      }()
    }, {
      key: "hasActiveDownloads",
      value: function hasActiveDownloads() {
        return this.torrents.some(function (torrent) {
          var state = String(torrent && torrent.state || '').toLowerCase();
          return state.indexOf('download') >= 0 || state.indexOf('check') >= 0;
        });
      }
    }, {
      key: "on",
      value: function on(event, callback) {
        this.listener.follow(event, callback);
      }
    }]);
  }();
  var TorrentStateManager$1 = new TorrentStateManager();

  var UPDATE_INTERVAL_MS = 15000;
  var ERROR_KIND = {
    AUTH: "auth",
    NETWORK: "network",
    SERVER: "server",
    UNKNOWN: "unknown"
  };
  function Component() {
    var self = this;
    var client = Lampa.Storage.field("lmetorrentSelect");
    var network = new RequestClass();
    var updateTick = null;
    var updateInProgress = false;
    var sections = []; // Array of PanelSection instances
    var headerItem = null;
    var allTorrents = []; // Full list of all torrents (for context menu)
    var activeSectionIndex = 0;
    var isHeaderFocused = false;
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true,
      step: 250
    });
    var html = $("<div class='lmetorrent-module'></div>");
    var head = $("<div class='lmetorrent-head'></div>");
    var body = $('<div class="lmetorrent-sections"></div>');
    scroll.append(head);
    scroll.append(body);
    html.append(scroll.render());
    function reloadPanel() {
      Lampa.Activity.replace({
        url: "",
        title: (client || "").toUpperCase() + " Manager",
        component: "lmetorrentPanel",
        page: 1
      });
    }
    function openSettings() {
      if (Lampa.Controller) Lampa.Controller.toggle('settings');
      setTimeout(function () {
        if (Lampa.Settings && typeof Lampa.Settings.create === 'function') {
          Lampa.Settings.create('lmetorrent');
        }
      }, 10);
    }
    function stopAutoUpdate() {
      if (updateTick) {
        Lampa.Timer.remove(updateTick);
        updateTick = null;
      }
    }
    function pauseHeaderPolling() {
      TorrentStateManager$1.stop();
    }
    function resumeHeaderPolling() {
      TorrentStateManager$1.start();
    }
    function focusHeader() {
      if (!headerItem) return;
      Lampa.Controller.collectionSet(scroll.render());
      Lampa.Controller.collectionFocus(headerItem.render()[0] || false, scroll.render());
      scroll.update(headerItem.render(), true);
    }
    function destroyAllSections() {
      Lampa.Arrays.destroy(sections);
      sections = [];
      activeSectionIndex = 0;
      isHeaderFocused = false;
      allTorrents = [];
    }
    function renderState(title, description) {
      var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (options.resetHeader) {
        head.empty();
        destroyAllSections();
      }
      body.empty().removeClass("lmetorrent-sections").addClass("lmetorrent-catalog--state");
      var container = $('<div class="lmetorrent-state"></div>');
      container.append("<div class=\"lmetorrent-state__title\">".concat(title, "</div>"));
      if (description) {
        container.append("<div class=\"lmetorrent-state__description\">".concat(description, "</div>"));
      }
      if (actions.length) {
        var actionList = $('<div class="lmetorrent-state__actions"></div>');
        actions.forEach(function (action) {
          var button = $("<div class=\"simple-button selector\">".concat(action.title, "</div>"));
          button.on("hover:enter", action.onEnter);
          button.on("hover:focus", function () {
            scroll.update(button, true);
          });
          actionList.append(button);
        });
        container.append(actionList);
      }
      body.append(container);
    }
    function classifyError(error) {
      if (!error) {
        return ERROR_KIND.UNKNOWN;
      }
      if (error.isAuthError) {
        return ERROR_KIND.AUTH;
      }
      var status = Number(error.status);
      if (status === 401 || status === 403) {
        return ERROR_KIND.AUTH;
      }
      if (status >= 500) {
        return ERROR_KIND.SERVER;
      }
      var message = String(error.message || "").toLowerCase();
      if (status === 0 || message.indexOf("timeout") >= 0 || message.indexOf("network") >= 0 || message.indexOf("cors") >= 0) {
        return ERROR_KIND.NETWORK;
      }
      return ERROR_KIND.UNKNOWN;
    }
    function fetchClientData(_x) {
      return _fetchClientData.apply(this, arguments);
    }
    function _fetchClientData() {
      _fetchClientData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(clientType) {
        var _yield$Promise$all, _yield$Promise$all2, data, info;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (hasClient(clientType)) {
                _context2.n = 1;
                break;
              }
              throw new Error("Unknown client type");
            case 1:
              _context2.n = 2;
              return Promise.all([executeClientMethod(clientType, "GetData", [], {
                silentAuth: true
              }), executeClientMethod(clientType, "GetInfo", [], {
                silentAuth: true
              })]);
            case 2:
              _yield$Promise$all = _context2.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              data = _yield$Promise$all2[0];
              info = _yield$Promise$all2[1];
              return _context2.a(2, {
                data: data,
                info: info
              });
          }
        }, _callee2);
      }));
      return _fetchClientData.apply(this, arguments);
    }
    this.renderLoadingState = function () {
      renderState(Lampa.Lang.translate("torrentmanager_state_loading"), "", [], {
        resetHeader: true
      });
    };
    this.renderEmptyState = function () {
      renderState(Lampa.Lang.translate("torrentmanager_state_empty_title"), Lampa.Lang.translate("torrentmanager_state_empty_description"), [{
        title: Lampa.Lang.translate("torrentmanager_retry"),
        onEnter: reloadPanel
      }]);
    };
    this.renderErrorState = function (error) {
      console.error("TDM", "Panel load error:", error);
      var kind = classifyError(error);
      var actions = [{
        title: Lampa.Lang.translate("torrentmanager_retry"),
        onEnter: reloadPanel
      }, {
        title: Lampa.Lang.translate("torrentmanager_open_settings"),
        onEnter: openSettings
      }];
      if (kind === ERROR_KIND.AUTH) {
        renderState(Lampa.Lang.translate("torrentmanager_state_auth_title"), Lampa.Lang.translate("torrentmanager_state_auth_description"), actions, {
          resetHeader: true
        });
        return;
      }
      if (kind === ERROR_KIND.NETWORK) {
        renderState(Lampa.Lang.translate("torrentmanager_state_network_title"), Lampa.Lang.translate("torrentmanager_state_network_description"), actions, {
          resetHeader: true
        });
        return;
      }
      if (kind === ERROR_KIND.SERVER) {
        renderState(Lampa.Lang.translate("torrentmanager_state_server_title"), Lampa.Lang.translate("torrentmanager_state_server_description"), actions, {
          resetHeader: true
        });
        return;
      }
      renderState(Lampa.Lang.translate("somethingWentWrong"), Lampa.Lang.translate("clientNotClient"), actions, {
        resetHeader: true
      });
    };
    this.create = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            pauseHeaderPolling();
            stopAutoUpdate();
            this.activity.loader(true);
            self.renderLoadingState();
            _context.p = 1;
            _context.n = 2;
            return fetchClientData(client);
          case 2:
            result = _context.v;
            self.build(result);
            startAutoUpdate();
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            self.renderErrorState(_t);
          case 4:
            this.activity.loader(false);
            this.activity.toggle();
            return _context.a(2, this.render());
        }
      }, _callee, this, [[1, 3]]);
    }));
    this.build = function (result) {
      scroll.minus();
      head.empty();
      body.empty().removeClass("lmetorrent-catalog--state").addClass("lmetorrent-sections");
      destroyAllSections();
      if (result && result.info) {
        self.renderHeader(result.info);
      }
      var torrents = Array.isArray(result && result.data) ? result.data : [];
      if (!torrents.length) {
        self.renderEmptyState();
        return;
      }
      allTorrents = torrents;

      // Group into sections by status
      var grouped = groupTorrentsByStatus(torrents);
      self.buildSections(grouped);

      // Initial focus on header, not first section
      if (sections.length > 0) {
        isHeaderFocused = true;
      }
    };
    this.buildSections = function (grouped) {
      var fragment = $(document.createDocumentFragment());
      SECTION_DEFINITIONS.forEach(function (def) {
        var groupItems = grouped[def.key];
        if (!groupItems || groupItems.length === 0) return;
        var section = new PanelSection({
          key: def.key,
          title: Lampa.Lang.translate(def.langKey),
          icon: def.icon,
          items: groupItems
        });

        // Wire up item enter handler with access to full torrent list
        section.onItemEnter = function (torrentData) {
          showTorrentMenu(torrentData, allTorrents);
        };

        // Wire up section navigation callbacks (vinyl pattern)
        section.onDown = self.down.bind(self);
        section.onUp = self.up.bind(self);
        section.onBack = self.back.bind(self);
        section.onMore = function (key) {
          return function () {
            Lampa.Activity.push({
              url: '',
              title: Lampa.Lang.translate('torrentmanager_section_' + key) + " \u2014 " + (Lampa.Storage.field("lmetorrentSelect") || '').toUpperCase() + ' Manager',
              component: 'lmetorrentSectionView',
              page: 1,
              filterSection: key
            });
          };
        }(def.key);
        section.create();
        fragment.append(section.render());
        sections.push(section);
      });
      body.append(fragment);
    };
    this.renderHeader = function (data) {
      headerItem = new Header(data);
      headerItem.render().on("hover:enter", reloadPanel);
      headerItem.render().on("hover:focus", function () {
        isHeaderFocused = true;
        scroll.update(headerItem.render(), true);
      });
      head.append(headerItem.render());
    };
    function refreshTorrents() {
      return _refreshTorrents.apply(this, arguments);
    }
    function _refreshTorrents() {
      _refreshTorrents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var torrents, grouped, newSections, existingSectionElements, existingKeys, bodyFragment, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (!updateInProgress) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              updateInProgress = true;
              _context3.p = 2;
              _context3.n = 3;
              return executeClientMethod(client, "GetData", [], {
                silentAuth: true,
                backgroundPolling: true
              });
            case 3:
              torrents = _context3.v;
              if (Array.isArray(torrents)) {
                _context3.n = 4;
                break;
              }
              return _context3.a(2);
            case 4:
              if (torrents.length) {
                _context3.n = 5;
                break;
              }
              if (!body.hasClass("lmetorrent-catalog--state") || sections.length > 0) {
                self.renderEmptyState();
              }
              return _context3.a(2);
            case 5:
              allTorrents = torrents;

              // Classify and diff sections
              grouped = groupTorrentsByStatus(torrents);
              newSections = [];
              SECTION_DEFINITIONS.forEach(function (def) {
                var groupItems = grouped[def.key];
                var existing = null;

                // Find existing section by key
                for (var i = 0; i < sections.length; i++) {
                  if (sections[i].key === def.key) {
                    existing = sections[i];
                    break;
                  }
                }
                if (groupItems && groupItems.length > 0) {
                  if (existing) {
                    // Update existing section
                    existing.update(groupItems);
                    newSections.push(existing);
                  } else {
                    // Create new section
                    var section = new PanelSection({
                      key: def.key,
                      title: Lampa.Lang.translate(def.langKey),
                      icon: def.icon,
                      items: groupItems
                    });
                    section.onItemEnter = function (torrentData) {
                      showTorrentMenu(torrentData, allTorrents);
                    };

                    // Wire up section navigation callbacks (vinyl pattern)
                    section.onDown = self.down.bind(self);
                    section.onUp = self.up.bind(self);
                    section.onBack = self.back.bind(self);
                    section.onMore = function (key) {
                      return function () {
                        Lampa.Activity.push({
                          url: '',
                          title: Lampa.Lang.translate('torrentmanager_section_' + key) + " \u2014 " + (Lampa.Storage.field("lmetorrentSelect") || '').toUpperCase() + ' Manager',
                          component: 'lmetorrentSectionView',
                          page: 1,
                          filterSection: key
                        });
                      };
                    }(def.key);
                    section.create();
                    newSections.push(section);
                  }
                } else {
                  // Section has no items — destroy if exists
                  if (existing) {
                    existing.destroy();
                  }
                }
              });

              // Diff body DOM — preserve existing section elements, remove
              // stale, add new, reorder. Avoids flicker from body.empty().
              existingSectionElements = body.children('.lmetorrent-section');
              existingKeys = {};
              existingSectionElements.each(function () {
                existingKeys[$(this).attr('data-section-key')] = $(this);
              });
              bodyFragment = $(document.createDocumentFragment());
              newSections.forEach(function (section) {
                var key = section.key;
                if (existingKeys[key]) {
                  // Section exists — reuse DOM element (avoids flicker)
                  bodyFragment.append(existingKeys[key]);
                  delete existingKeys[key];
                } else {
                  // New section — append fresh
                  bodyFragment.append(section.render());
                }
              });

              // Remove sections that are no longer present
              Object.keys(existingKeys).forEach(function (key) {
                existingKeys[key].remove();
              });

              // Replace body content atomically
              body.empty().append(bodyFragment);
              sections = newSections;

              // Adjust active index if needed
              if (activeSectionIndex >= sections.length) {
                activeSectionIndex = sections.length - 1;
              }
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t2 = _context3.v;
              if (!_t2 || !_t2.isBackoffError) {
                console.error("TDM", "Auto update error:", _t2);
              }
            case 7:
              _context3.p = 7;
              updateInProgress = false;
              return _context3.f(7);
            case 8:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 6, 7, 8]]);
      }));
      return _refreshTorrents.apply(this, arguments);
    }
    function startAutoUpdate() {
      if (!hasClient(client) || updateTick) {
        return;
      }
      updateTick = refreshTorrents;
      Lampa.Timer.add(UPDATE_INTERVAL_MS, updateTick);
    }
    this.down = function () {
      if (isHeaderFocused) {
        // From header, go to first section
        isHeaderFocused = false;
        if (sections.length > 0) {
          activeSectionIndex = 0;
          sections[0].toggle();
          scroll.update(sections[0].render());
        }
      } else if (activeSectionIndex < sections.length - 1) {
        activeSectionIndex++;
        sections[activeSectionIndex].toggle();
        scroll.update(sections[activeSectionIndex].render());
      }
    };
    this.up = function () {
      if (isHeaderFocused) {
        // At header, go to system head
        Lampa.Controller.toggle('head');
      } else if (activeSectionIndex <= 0) {
        // At first section, go to header
        isHeaderFocused = true;
        focusHeader();
      } else {
        activeSectionIndex--;
        sections[activeSectionIndex].toggle();
        scroll.update(sections[activeSectionIndex].render());
      }
    };
    this.back = function () {
      Lampa.Activity.backward();
    };
    this.background = function () {
      Lampa.Background.immediately("");
    };
    this.start = function () {
      if (Lampa.Activity.active().activity !== this.activity) return;
      this.background();
      Lampa.Controller.add("content", {
        toggle: function toggle() {
          if (isHeaderFocused && headerItem) {
            focusHeader();
          } else if (sections.length) {
            sections[activeSectionIndex].toggle();
          }
        },
        up: function up() {
          self.up();
        },
        down: function down() {
          self.down();
        },
        left: function left() {
          Lampa.Controller.toggle('menu');
        },
        back: self.back
      });
      Lampa.Controller.toggle("content");
    };
    this.pause = function () {
      stopAutoUpdate();
      resumeHeaderPolling();
    };
    this.stop = function () {
      stopAutoUpdate();
      resumeHeaderPolling();
    };
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      stopAutoUpdate();
      resumeHeaderPolling();
      network.clear();
      destroyAllSections();
      if (headerItem && typeof headerItem.destroy === 'function') {
        headerItem.destroy();
        headerItem = null;
      }
      scroll.destroy();
      html.remove();
      sections = null;
      allTorrents = null;
      network = null;
    };
  }

  // plugins/torrentmanager/utils/panel/sectionView.js — Standalone grid component
  function SectionView(object) {
    var network = new RequestClass();
    var scroll = new Lampa.Scroll({
      mask: true,
      over: true
    });
    var html = $('<div class="lmetorrent-section-view"></div>');
    var grid = $('<div class="lmetorrent-section-view__grid"></div>');
    var items = [];
    var last = null;

    // Lifecycle
    this.create = function () {
      this.activity.loader(true);
      var filterSection = object.filterSection;
      if (!filterSection) {
        this.empty();
        return this.render();
      }

      // Find section definition for title
      var sectionDef = null;
      for (var i = 0; i < SECTION_DEFINITIONS.length; i++) {
        if (SECTION_DEFINITIONS[i].key === filterSection) {
          sectionDef = SECTION_DEFINITIONS[i];
          break;
        }
      }
      var title = sectionDef ? Lampa.Lang.translate(sectionDef.langKey) : filterSection;

      // Update activity title
      var client = Lampa.Storage.field("lmetorrentSelect") || '';
      this.activity.title = title + " \u2014 " + client.toUpperCase() + ' Manager';
      scroll.minus();
      scroll.append(grid);
      html.append(scroll.render());
      this.load();
      return this.render();
    };
    this.load = function () {
      var filterSection = object.filterSection;
      var client = Lampa.Storage.field("lmetorrentSelect");
      if (!hasClient(client)) {
        this.empty();
        return;
      }
      var self = this;
      executeClientMethod(client, "GetData", [], {
        silentAuth: true
      }).then(function (torrents) {
        if (!Array.isArray(torrents) || !torrents.length) {
          self.activity.loader(false);
          self.empty();
          return;
        }

        // Filter by section
        var filtered = torrents.filter(function (t) {
          return classifyState$1(t.state) === filterSection;
        });
        if (!filtered.length) {
          self.activity.loader(false);
          self.empty();
          return;
        }

        // Render cards
        filtered.forEach(function (torrentData) {
          var item = new Item(torrentData);
          item.render().on('hover:focus', function () {
            last = item.render()[0];
            scroll.update(item.render(), true);
          });
          item.render().on('hover:enter', function () {
            showTorrentMenu(torrentData, filtered);
          });
          grid.append(item.render());
          items.push(item);
        });
        self.activity.loader(false);
        self.activity.toggle();
      })["catch"](function (error) {
        console.error("TDM", "Section view load error:", error);
        self.activity.loader(false);
        self.empty();
      });
    };
    this.empty = function () {
      var emptyEl = $('<div class="lmetorrent-state"><div class="lmetorrent-state__title">' + Lampa.Lang.translate("torrentmanager_state_empty_title") + '</div></div>');
      grid.append(emptyEl);
      this.activity.loader(false);
      this.activity.toggle();
    };
    this.start = function () {
      if (Lampa.Activity.active() && Lampa.Activity.active().activity !== this.activity) return;
      Lampa.Controller.add("content", {
        toggle: function toggle() {
          Lampa.Controller.collectionSet(scroll.render());
          Lampa.Controller.collectionFocus(last || false, scroll.render());
        },
        right: function right() {
          Navigator.move('right');
        },
        left: function left() {
          if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
        },
        down: function down() {
          Navigator.move('down');
        },
        up: function up() {
          if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
        },
        back: function back() {
          Lampa.Activity.backward();
        }
      });
      Lampa.Controller.toggle("content");
    };
    this.pause = function () {};
    this.stop = function () {};
    this.render = function () {
      return html;
    };
    this.destroy = function () {
      network.clear();
      if (items) {
        items.forEach(function (item) {
          item.destroy();
        });
      }
      if (scroll) scroll.destroy();
      html.remove();
      items = null;
      grid = null;
      scroll = null;
      network = null;
    };
  }

  var UKRAINIAN_THANKS_URL = 'https://lampame.donatik.me/';
  var DEFAULT_THANKS_URL = 'https://t.me/tribute/app?startapp=d5WS';
  function getCurrentLanguage() {
    return String(Lampa.Storage.get('language', 'ru') || 'ru').toLowerCase();
  }
  function getThanksUrlByLanguage() {
    return getCurrentLanguage() === 'uk' ? UKRAINIAN_THANKS_URL : DEFAULT_THANKS_URL;
  }
  function openThanksModal() {
    var thanksUrl = getThanksUrlByLanguage();
    var html = Lampa.Template.get('modal_qr', {
      title: Lampa.Lang.translate('torrentmanager_settings_thanks'),
      text: Lampa.Lang.translate('torrentmanager_settings_thanks_description'),
      qr_text: "<a href=\"".concat(thanksUrl, "\">").concat(thanksUrl, "</a>")
    });
    var qrElement = html.find('.account-modal-split__qr-code');
    var enabledController = Lampa.Controller.enabled().name;
    Lampa.Utils.qrcode(thanksUrl, qrElement, function (error) {
      console.error('TDM', 'Unable to generate thanks QR code', error);
      qrElement.text(thanksUrl);
    });
    Lampa.Modal.open({
      title: '',
      html: html,
      size: 'medium',
      onBack: function onBack() {
        Lampa.Modal.close();
        Lampa.Controller.toggle(enabledController);
      }
    });
  }

  function Main$1(manifest) {
    //Создание пункта меню
    Lampa.SettingsApi.addComponent({
      component: manifest.component,
      name: manifest.name,
      icon: manifest.icon
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + 'Thanks',
        type: 'button'
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_settings_thanks')
      },
      onChange: function onChange() {
        openThanksModal();
      }
    });
    function hasSecretValue(value) {
      return Boolean(String(value || "").trim());
    }
    function updateSecretLabel(item, label, storageKey) {
      var status = hasSecretValue(Lampa.Storage.field(storageKey)) ? Lampa.Lang.translate('torrentmanager_secret_set') : Lampa.Lang.translate('torrentmanager_secret_not_set');
      item.find('.settings-param__name').text("".concat(label, " (").concat(status, ")"));
    }
    function openSecretEditor(storageKey, title) {
      Lampa.Input.edit({
        title: title,
        value: Lampa.Storage.field(storageKey) || "",
        free: true,
        nosave: true,
        password: true
      }, function (newValue) {
        Lampa.Storage.set(storageKey, String(newValue || ""));
        Lampa.Bell.push({
          text: Lampa.Lang.translate('torrentmanager_secret_saved')
        });
        Lampa.Settings.update();
      });
    }
    function runClientAuth(clientName, clearSession) {
      var client = null;
      var sessionKey = "";
      if (clientName === "qBittorent") {
        client = Qbittorent;
      } else if (clientName === "transmission") {
        client = Transmission;
        sessionKey = "".concat(manifest.component, "transmissionKey");
      } else if (clientName === "synology") {
        client = Synology;
        sessionKey = "".concat(manifest.component, "synologyKey");
      } else if (clientName === "keenetic") {
        client = Keenetic;
        sessionKey = "".concat(manifest.component, "keeneticKey");
      }
      if (!client || typeof client.auth !== "function") {
        return;
      }
      if (clearSession && sessionKey) {
        Lampa.Storage.set(sessionKey, "");
      }
      Promise.resolve().then(function () {
        return client.auth(true);
      })["catch"](function () {});
    }
    function normalizeInputValue(value) {
      if (typeof value === "string") {
        return value.trim();
      }
      if (value === null || typeof value === "undefined") {
        return "";
      }
      return String(value).trim();
    }
    function isAddressWithProtocol(value) {
      return /^https?:\/\/\S+$/i.test(value);
    }
    function createAddressValidationHandler(storageKey) {
      var lastValidValue = "";
      var storedValue = normalizeInputValue(Lampa.Storage.field(storageKey));
      if (isAddressWithProtocol(storedValue)) {
        lastValidValue = storedValue;
      }
      return function (newValue) {
        var normalizedValue = normalizeInputValue(newValue);
        if (!normalizedValue) {
          lastValidValue = "";
          Lampa.Storage.set(storageKey, "");
          Lampa.Settings.update();
          return;
        }
        if (!isAddressWithProtocol(normalizedValue)) {
          Lampa.Storage.set(storageKey, lastValidValue);
          Lampa.Bell.push({
            text: Lampa.Lang.translate('torrentmanager_url_requires_protocol')
          });
          Lampa.Settings.update();
          return;
        }
        lastValidValue = normalizedValue;
        if (newValue !== normalizedValue) {
          Lampa.Storage.set(storageKey, normalizedValue);
        }
        Lampa.Settings.update();
      };
    }

    //qBittorent
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentUrl",
        type: "input",
        //доступно select,input,trigger,title,static
        //values: `${Lampa.Storage.get("qBittorentUrl") || ""}`,
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: "Address"
      },
      onRender: function onRender(item) {
        item.show();
      },
      onChange: createAddressValidationHandler(manifest.component + "qBittorentUrl")
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentApiKey",
        type: "button"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_api_key')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent") {
          updateSecretLabel(item, Lampa.Lang.translate('torrentmanager_api_key'), manifest.component + "qBittorentApiKey");
          item.show();
        } else item.hide();
      },
      onChange: function onChange() {
        openSecretEditor(manifest.component + "qBittorentApiKey", 'qBittorrent API key');
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "qBittorentTestConnection"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_test_connection')
      },
      onRender: function onRender(item) {
        item.show();
      },
      onChange: function onChange() {
        runClientAuth("qBittorent", false);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "button",
        name: manifest.component + "qBittorentReauth"
      },
      field: {
        name: Lampa.Lang.translate('torrentmanager_reauth_now')
      },
      onRender: function onRender(item) {
        item.show();
      },
      onChange: function onChange() {
        runClientAuth("qBittorent", true);
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false,
        name: manifest.component + "qBittorentTweak"
      },
      field: {
        name: Lampa.Lang.translate('tweak')
      },
      onRender: function onRender(item) {
        item.show();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    // qBittorent Tweak part
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentSequentialDownload",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: 'Sequential Download'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentfirstLastPiecePrio",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: 'Prioritize download first last piece'
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentProxy",
        type: "trigger",
        //доступно select,input,trigger,title,static
        "default": false
      },
      field: {
        name: Lampa.Lang.translate('LMEProxy'),
        description: Lampa.Lang.translate('LMEProxyDescription')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(value) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentMovies",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('pathMovieQbit')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
    Lampa.SettingsApi.addParam({
      component: manifest.component,
      param: {
        name: manifest.component + "qBittorentTV",
        type: "input",
        //доступно select,input,trigger,title,static
        placeholder: '',
        values: '',
        "default": ''
      },
      field: {
        name: Lampa.Lang.translate('pathTVQbit')
      },
      onRender: function onRender(item) {
        if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
          item.show();
        } else item.hide();
      },
      onChange: function onChange(item) {
        Lampa.Settings.update();
      }
    });
  }

  function Main(selectedTorrent) {
    var uri = selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link;
    var action = Lampa.Storage.field("lmetorrentUniversalAction");
    if (action === "openAndroid" && typeof AndroidJS !== 'undefined' && typeof AndroidJS.openTorrentLink !== 'undefined') {
      AndroidJS.openTorrentLink(uri, "{}");
    } else if (action === "open") {
      window.location.assign(uri);
    } else {
      Lampa.Utils.copyTextToClipboard(uri, function () {
        Lampa.Bell.push({
          text: Lampa.Lang.translate('copy_secuses')
        });
      }, function () {
        Lampa.Bell.push({
          text: Lampa.Lang.translate('copy_error')
        });
      });
    }
  }

  var DOWNLOAD_ICON$1 = "<svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path><path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path></g></svg>";
  var CLIENT_MENU$1 = {
    qBittorent: {
      title: "qBittorrent",
      type: "client",
      clientName: "qBittorent"
    }
  };
  function sendToClient$1(clientName, selectedTorrent, labels, dtype) {
    executeClientMethod(clientName, "SendTask", [selectedTorrent, labels, dtype], {
      silentAuth: true
    })["catch"](function () {});
  }
  function sendToUniversal$1(selectedTorrent) {
    Main(selectedTorrent);
  }
  function buildButtonTitle$1(label) {
    return "<div class=\"btnTDdownload wait\">".concat(DOWNLOAD_ICON$1).concat(label, "</div>");
  }
  function resolveTorrentLabels$1(movie) {
    var type = movie && movie.first_air_date ? "tv" : "movie";
    return "".concat(type, "/").concat(movie && movie.id);
  }
  function resolveDestinationType$1(movie) {
    return movie && movie.first_air_date ? "TV" : "Movies";
  }
  function Send() {
    Lampa.Listener.follow("torrent", function (e) {
      if (e.type !== "onlong") {
        return;
      }
      var selectedTorrent = e.element;
      var activeMovie = Lampa.Activity.active().movie;
      var labels = resolveTorrentLabels$1(activeMovie);
      var dtype = resolveDestinationType$1(activeMovie);
      var selectedClient = Lampa.Storage.field("lmetorrentSelect");
      var menuConfig = CLIENT_MENU$1[selectedClient];
      if (!menuConfig) {
        return;
      }
      e.menu.push({
        title: buildButtonTitle$1(menuConfig.title),
        onSelect: function onSelect() {
          if (menuConfig.type === "universal") {
            sendToUniversal$1(selectedTorrent);
            return;
          }
          sendToClient$1(menuConfig.clientName, selectedTorrent, labels, dtype);
        }
      });
    });
  }

  var DOWNLOAD_ICON = "<svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"><path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path><path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path></g></svg>";
  var CLIENT_MENU = {
    qBittorent: {
      title: "qBittorrent",
      type: "client",
      clientName: "qBittorent"
    }
  };
  function sendToClient(clientName, selectedTorrent, labels, dtype) {
    executeClientMethod(clientName, "SendTask", [selectedTorrent, labels, dtype], {
      silentAuth: true
    })["catch"](function () {});
  }
  function sendToUniversal(selectedTorrent) {
    Main(selectedTorrent);
  }
  function buildButtonTitle(label) {
    return "<div class=\"btnTDdownload wait\">".concat(DOWNLOAD_ICON).concat(label, "</div>");
  }
  function resolveTorrentLabels(movie) {
    var type = movie && movie.first_air_date ? "tv" : "movie";
    return "".concat(type, "/").concat(movie && movie.id);
  }
  function resolveDestinationType(movie) {
    return movie && movie.first_air_date ? "TV" : "Movies";
  }
  function buildMagnetUri(hash, title) {
    return "magnet:?xt=urn:btih:".concat(hash, "&dn=").concat(encodeURIComponent(title));
  }
  function MyTorrents() {
    Lampa.Listener.follow("mytorrents", function (e) {
      if (e.type !== "onlong") {
        return;
      }
      var item = e.object;
      var hash = item && item.hash;
      var title = item && item.title;
      var movie = item && item.data && item.data.movie;
      if (!hash) {
        return;
      }
      var magnetUri = buildMagnetUri(hash, title);
      var selectedTorrent = {
        MagnetUri: magnetUri
      };
      var labels = resolveTorrentLabels(movie);
      var dtype = resolveDestinationType(movie);
      var selectedClient = Lampa.Storage.field("lmetorrentSelect");
      var menuConfig = CLIENT_MENU[selectedClient];
      if (!menuConfig) {
        return;
      }
      e.menu.push({
        title: buildButtonTitle(menuConfig.title),
        onSelect: function onSelect() {
          if (menuConfig.type === "universal") {
            sendToUniversal(selectedTorrent);
            return;
          }
          sendToClient(menuConfig.clientName, selectedTorrent, labels, dtype);
        }
      });
    });
  }

  /**
   * Sonarr/Radarr API Module for Torrent Manager
   *
   * Provides external API search as a fallback when label-based matching fails.
   * Results are cached in-memory with a 12-hour TTL and persisted to Lampa.Storage.
   * Pattern from MovieEnhancer/utils/wm_quality.js.
   * Used by cardIntegration.js and full.js to resolve TMDB IDs for clients
   * that do not support labels (e.g. Synology).
   */

  /*
   * In-memory cache with LRU eviction — persisted to Lampa.Storage.
   */
  var CACHE_STORAGE_KEY = 'lme_torrentmanager_api_cache';
  var CACHE_TTL = 12 * 60 * 60 * 1000; // 12 hours
  var CACHE_SIZE = 500;
  var memoryCache = {};
  var cacheInitialized = false;
  function initCache() {
    if (cacheInitialized) return;
    memoryCache = Lampa.Storage.get(CACHE_STORAGE_KEY, {});
    cacheInitialized = true;
  }
  function getCached(key) {
    initCache();
    var entry = memoryCache[key];
    if (!entry) return null;
    if (Date.now() - entry.timestamp > CACHE_TTL) {
      delete memoryCache[key];
      return null;
    }
    return entry.value;
  }
  function setCached(key, value) {
    initCache();
    // LRU eviction if cache is full
    var size = Object.keys(memoryCache).length;
    if (size >= CACHE_SIZE) {
      var oldest = null;
      var oldestTime = Infinity;
      for (var k in memoryCache) {
        if (memoryCache[k].timestamp < oldestTime) {
          oldestTime = memoryCache[k].timestamp;
          oldest = k;
        }
      }
      if (oldest) delete memoryCache[oldest];
    }
    memoryCache[key] = {
      timestamp: Date.now(),
      value: value
    };
    saveCache();
  }
  var saveTimeout = null;
  function saveCache() {
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(function () {
      Lampa.Storage.set(CACHE_STORAGE_KEY, memoryCache);
    }, 500);
  }

  /*
   * Inflight map — prevents duplicate concurrent requests for the same key.
   * Pattern from MovieEnhancer/utils/wm_quality.js (inflight = {}).
   */
  var inflight$1 = {};

  /*
   * CORS proxy helper — wraps a URL through cors.io to avoid browser CORS blocks.
   * cors.io returns { url, status, headers, body: "..." } — parseResponse handles this.
   */
  var CORS_PROXY = 'https://cors.io/?url=';
  function proxyUrl(url) {
    return CORS_PROXY + encodeURIComponent(url);
  }

  /**
   * Normalize response data — handles cors.io wrapped format and raw responses.
   * cors.io returns: { url, status, headers, body: "<json string>" }
   * Lampa.Network.silent may also return a string or a pre-parsed object.
   *
   * @param {*} response - Raw response from Lampa.Network.silent
   * @returns {Object|Array|null} Parsed data or null
   */
  function parseResponse(response) {
    if (!response) return null;

    // cors.io wraps response: { url, status, headers, body: "..." }
    if (response.url && response.body) {
      try {
        return JSON.parse(response.body);
      } catch (e) {
        return null;
      }
    }

    // Direct JSON string
    if (typeof response === 'string') {
      try {
        return JSON.parse(response);
      } catch (e) {
        return null;
      }
    }

    // Already-parsed object
    if (_typeof(response) !== 'object') return null;
    return response;
  }

  /**
   * Build a cache key from query string to avoid special character collisions.
   * @param {string} prefix - 'sonarr' or 'radarr'
   * @param {string} query - Raw search query
   * @returns {string} Sanitized cache key
   */
  function buildCacheKey(prefix, query) {
    return prefix + '_' + String(query).replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  }

  /**
   * Search Sonarr Skyhook for TV series by title or IMDB ID.
   * Uses GET https://skyhook.sonarr.tv/v1/tvdb/search/en/?term={query}
   * For IMDB search, use term=imdb:{id} for exact match.
   *
   * @param {string} titleOrImdb - Series title or "imdb:{id}"
   * @returns {Promise<{tmdb_id: number|null, imdb_id: string|null, title: string|null, year: string|null, matched_via: string}|null>}
   */
  function searchSonarr(_x) {
    return _searchSonarr.apply(this, arguments);
  }

  /**
   * Search Radarr Video API for movies by title.
   * Uses GET https://api.radarr.video/v1/search?q={query}
   *
   * @param {string} title - Movie title
   * @returns {Promise<{tmdb_id: number|null, imdb_id: string|null, title: string|null, year: string|null, matched_via: string}|null>}
   */
  function _searchSonarr() {
    _searchSonarr = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(titleOrImdb) {
      var cacheKey, cached, url, data, result, normalized, status, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (titleOrImdb) {
              _context.n = 1;
              break;
            }
            return _context.a(2, null);
          case 1:
            cacheKey = buildCacheKey('sonarr', titleOrImdb); // Check in-memory cache FIRST
            cached = getCached(cacheKey);
            if (!cached) {
              _context.n = 2;
              break;
            }
            return _context.a(2, cached);
          case 2:
            if (!inflight$1[cacheKey]) {
              _context.n = 3;
              break;
            }
            return _context.a(2, null);
          case 3:
            inflight$1[cacheKey] = true;
            url = proxyUrl('https://skyhook.sonarr.tv/v1/tvdb/search/en/?term=' + encodeURIComponent(titleOrImdb));
            _context.p = 4;
            _context.n = 5;
            return new Promise(function (resolve, reject) {
              Lampa.Network.silent(url, resolve, function (jqXHR) {
                reject(jqXHR);
              }, null, {
                timeout: 10000
              });
            });
          case 5:
            data = _context.v;
            data = parseResponse(data);
            if (!(!data || !data.length)) {
              _context.n = 6;
              break;
            }
            return _context.a(2, null);
          case 6:
            result = data[0];
            normalized = {
              tmdb_id: result.tmdbId || null,
              imdb_id: result.imdbId || null,
              title: result.title || null,
              year: result.firstAired ? result.firstAired.slice(0, 4) : null,
              matched_via: 'sonarr',
              updated_at: Date.now()
            };
            if (normalized.tmdb_id) {
              setCached(cacheKey, normalized);
            }
            return _context.a(2, normalized);
          case 7:
            _context.p = 7;
            _t = _context.v;
            status = _t && _t.status ? _t.status : 'unknown';
            console.warn('TDM', 'Sonarr search failed (HTTP ' + status + ')');
            console.error('TDM', 'Sonarr error details:', _t);
            return _context.a(2, null);
          case 8:
            _context.p = 8;
            delete inflight$1[cacheKey];
            return _context.f(8);
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[4, 7, 8, 9]]);
    }));
    return _searchSonarr.apply(this, arguments);
  }
  function searchRadarr(_x2) {
    return _searchRadarr.apply(this, arguments);
  }
  function _searchRadarr() {
    _searchRadarr = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(title) {
      var cacheKey, cached, url, data, result, normalized, status, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (title) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, null);
          case 1:
            cacheKey = buildCacheKey('radarr', title); // Check in-memory cache FIRST
            cached = getCached(cacheKey);
            if (!cached) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, cached);
          case 2:
            if (!inflight$1[cacheKey]) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2, null);
          case 3:
            inflight$1[cacheKey] = true;
            url = proxyUrl('https://api.radarr.video/v1/search?q=' + encodeURIComponent(title));
            _context2.p = 4;
            _context2.n = 5;
            return new Promise(function (resolve, reject) {
              Lampa.Network.silent(url, resolve, function (jqXHR) {
                reject(jqXHR);
              }, null, {
                timeout: 10000
              });
            });
          case 5:
            data = _context2.v;
            data = parseResponse(data);
            if (!(!data || !data.length)) {
              _context2.n = 6;
              break;
            }
            return _context2.a(2, null);
          case 6:
            result = data[0];
            normalized = {
              tmdb_id: result.TmdbId || null,
              imdb_id: result.ImdbId || null,
              title: result.Title || null,
              year: result.Year ? String(result.Year) : null,
              matched_via: 'radarr',
              updated_at: Date.now()
            };
            if (normalized.tmdb_id) {
              setCached(cacheKey, normalized);
            }
            return _context2.a(2, normalized);
          case 7:
            _context2.p = 7;
            _t2 = _context2.v;
            status = _t2 && _t2.status ? _t2.status : 'unknown';
            console.warn('TDM', 'Radarr search failed (HTTP ' + status + ')');
            console.error('TDM', 'Radarr error details:', _t2);
            return _context2.a(2, null);
          case 8:
            _context2.p = 8;
            delete inflight$1[cacheKey];
            return _context2.f(8);
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[4, 7, 8, 9]]);
    }));
    return _searchRadarr.apply(this, arguments);
  }

  function startClient(_x) {
    return _startClient.apply(this, arguments);
  }
  function _startClient() {
    _startClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(client) {
      var data, info, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            if (hasClient(client)) {
              _context2.n = 1;
              break;
            }
            throw new Error('Unknown client type');
          case 1:
            _context2.n = 2;
            return executeClientMethod(client, 'GetData', [], {
              silentAuth: true
            });
          case 2:
            data = _context2.v;
            info = null;
            _context2.p = 3;
            _context2.n = 4;
            return executeClientMethod(client, 'GetInfo', [], {
              silentAuth: true
            });
          case 4:
            info = _context2.v;
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            info = null;
          case 6:
            result = {
              data: data,
              info: info
            };
            return _context2.a(2, result);
          case 7:
            _context2.p = 7;
            _t2 = _context2.v;
            console.error('TDM', 'Error fetching client data:', _t2);
            throw _t2;
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 5], [0, 7]]);
    }));
    return _startClient.apply(this, arguments);
  }
  function torrentInfo() {
    Lampa.Listener.follow('full', function (e) {
      if (e.type === 'complite') {
        setTimeout(function () {
          function findTorrent(data, method, id) {
            var searchLabel = "".concat(method, "/").concat(id);
            return data.find(function (item) {
              return item.labels && item.labels.includes(searchLabel);
            });
          }
          var activeClient = getActiveClientName();
          if (!hasClient(activeClient)) {
            return;
          }
          startClient(activeClient).then(function (r) {
            if (r && r.data) {
              var torrent = findTorrent(r.data, e.object.method, e.object.id);
              if (torrent) {
                // Create button element
                var $button = $("<div class=\"full-start__button selector button--lme_torrent\">\n                                <svg fill=\"currentColor\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 588.601 588.6\" xml:space=\"preserve\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g> <path d=\"M168.405,288.048c-3.019,0.084-4.936,0.419-5.864,0.728v20.174l5.632-0.059c6.463-0.078,10.558-4.35,10.558-10.768 C178.73,291.017,174.636,287.869,168.405,288.048z\"></path> <path d=\"M82.324,290.445c-8.177,0.227-12.49,10.278-12.49,22.491c0,12.045,4.588,21.674,12.49,21.737 c8.089,0.079,12.701-9.761,12.701-22.412C95.018,300.86,90.688,290.213,82.324,290.445z\"></path> <path d=\"M125.722,289.235c-2.813,0.082-4.617,0.396-5.484,0.696v19.515l5.276-0.059c6.03-0.074,9.858-4.203,9.858-10.404 C135.372,292.117,131.544,289.074,125.722,289.235z\"></path> <path d=\"M539.568,49.201h-178.2c-0.786,0-1.561,0.074-2.347,0.124V0L11.228,46.419v494.562L359.032,588.6v-50.814 c0.78,0.053,1.55,0.115,2.341,0.115h178.2c20.852,0,37.8-16.959,37.8-37.8v-413.1C577.368,66.161,560.425,49.201,539.568,49.201z M361.368,70.801h178.2c8.928,0,16.2,7.267,16.2,16.2v271.329c-23.272-58.704-70.2-90.393-132.864-99.347 c-18.879-2.705-21.79,0.886-19.687,19.517c1.482,13.252,11.786,9.158,18.747,10.022c56.574,7.085,103.982,49.642,115.288,104.147 c7.267,34.974-1.266,71.872-21.305,101.05h-14.08c36.64-49.116,38.834-102.389,2.964-149.575 c-33.307-43.802-99.62-61.505-145.8-42.604V71.043C359.797,70.93,360.572,70.801,361.368,70.801z M359.032,333.687 c2.226-0.891,4.25-1.703,6.265-2.479c45.752-17.649,97.817-0.606,122.096,39.946c23.757,39.726,14.223,90.034-22.892,122.565 h-14.122c3.912-2.942,7.73-6.181,11.411-9.734c26.314-25.376,35.374-56.162,24.01-90.925 c-11.527-35.258-37.446-55.244-74.007-60.592c-18.114-2.647-36.956,1.244-52.761,9.661V333.687z M359.032,378.891 c0.169-0.163,0.327-0.354,0.506-0.517c22.939-22.17,62.259-21.479,84.555,1.397c22.687,23.277,22.887,60.307-2.479,81.949 c-13.11,11.175-29.995,20.408-46.659,24.49c-11.935,2.921-23.905,4.777-35.923,6.021V378.891z M296.331,275.25l49.401-1.7v11.156 l-19.232,0.514v61.077l-11.938-0.19v-60.57l-18.236,0.493V275.25H296.331z M60.247,292.37l-12.49,0.332v49.265l-7.771-0.11v-48.953 l-11.929,0.321V284.5l32.189-1.113V292.37z M81.857,343.459c-12.677-0.211-20.545-12.983-20.545-30.26 c0-18.077,8.521-31.118,21.209-31.572c13.458-0.466,21.526,12.714,21.526,30.085C104.048,332.153,94.521,343.67,81.857,343.459z M136.836,343.343c-0.738-1.867-1.917-6.982-3.31-14.776c-1.395-8.147-3.73-10.721-8.819-10.895l-4.47,0.025v25.393l-8.701-0.138 v-60.515c3.267-0.828,8.208-1.55,13.324-1.73c7.056-0.242,11.907,1.071,15.238,4.504c2.745,2.797,4.316,7.148,4.316,12.469 c0,8.137-4.398,13.685-9.042,15.868v0.284c3.533,1.641,5.688,6.012,6.951,12.056c1.572,7.857,2.911,15.161,3.963,17.607 L136.836,343.343z M180.312,344.023c-0.788-1.935-2.059-7.229-3.554-15.298c-1.484-8.427-3.995-11.096-9.429-11.264l-4.788,0.021 v26.262l-9.305-0.143v-62.574c3.488-0.865,8.754-1.608,14.241-1.798c7.549-0.274,12.738,1.086,16.313,4.627 c2.942,2.896,4.617,7.394,4.617,12.906c0,8.412-4.704,14.16-9.682,16.428v0.295c3.783,1.688,6.096,6.207,7.446,12.477 c1.68,8.127,3.119,15.684,4.237,18.22L180.312,344.023z M231.742,344.82l-33.874-0.533v-65.646l32.598-1.118v10.083l-22.539,0.609 v17.075l21.266-0.306v9.978l-21.266,0.137v19.438l23.815,0.189V344.82z M241.052,277.151l12.234-0.422l15.515,29.141 c4.061,7.668,7.604,15.688,10.434,23.235h0.19c-0.73-9.313-1.004-18.299-1.004-28.94v-24.301l10.491-0.366v70.208l-11.675-0.18 l-15.881-30.47c-3.828-7.515-7.791-15.884-10.702-23.535l-0.264,0.105c0.43,8.812,0.517,17.819,0.517,29.072v24.421l-9.848-0.152 v-67.816H241.052z M539.568,516.301h-4.915c8.644-11.56,15.746-23.467,21.115-35.743v19.543 C555.769,509.035,548.507,516.301,539.568,516.301z\"></path> </g> </g></svg>\n                                <span>".concat(torrent.completed > 0 ? "".concat(getStandardizedStateName(torrent.state), " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : getStandardizedStateName(torrent.state), "</span>\n                            </div>"));

                // Attach event handlers
                $button.on("hover:enter", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                  var enabled, menu;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        enabled = Lampa.Controller.enabled().name;
                        menu = [];
                        menu.push({
                          title: Lampa.Lang.translate('resume'),
                          action: 'resume'
                        }, {
                          title: Lampa.Lang.translate('pause'),
                          action: 'pause'
                        }, {
                          title: Lampa.Lang.translate('delete'),
                          action: 'delete'
                        });

                        // Add play option for Keenetic client
                        if (activeClient === 'keenetic') {
                          menu.push({
                            title: Lampa.Lang.translate('play'),
                            action: 'play'
                          });
                        }

                        // Add full delete option for clients that support it
                        if (activeClient !== 'synology') menu.push({
                          title: Lampa.Lang.translate('fullDelete'),
                          action: 'delete',
                          deleteFiles: true
                        });

                        // Set menu
                        Lampa.Select.show({
                          title: torrent.completed > 0 ? "".concat(getStandardizedStateName(torrent.state), " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : getStandardizedStateName(torrent.state),
                          items: menu,
                          onBack: function onBack() {
                            // Повертаємось до попереднього контролера, якщо він існує
                            var currentController = Lampa.Controller.enabled();
                            if (currentController && currentController.name !== enabled) {
                              Lampa.Controller.toggle(enabled);
                            } else {
                              // Якщо контролер не змінився, просто вимикаємо меню
                              Lampa.Controller.toggle('menu');
                            }
                          },
                          onSelect: function onSelect(a) {
                            return executeClientMethod(activeClient, 'SendCommand', [a, torrent], {
                              silentAuth: true
                            });
                          }
                        });
                      case 1:
                        return _context.a(2);
                    }
                  }, _callee);
                })));

                // Remove existing torrent button before adding new one
                e.object.activity.render().find('.full-start-new__buttons').find('.button--lme_torrent').remove();

                // Append new button to container
                e.object.activity.render().find('.full-start-new__buttons').append($button);

                // Manually bind hover events that Lampa normally binds via .selector in full/start.js
                $button.on('hover:focus', function () {
                  $(this).addClass('focus');
                }).on('hover:blur', function () {
                  $(this).removeClass('focus');
                }).on('hover:hover', function () {
                  // hover state is handled by CSS class .selector
                }).on('hover:touch', function () {
                  // touch state
                });

                // Add button to Controller collection for spatial navigation
                Lampa.Controller.collectionAppend($button);
              } else {
                // Fallback: try Sonarr/Radarr for clients without labels (Synology, etc.)
                performFallbackLookup(e.object, r.data);
              }
            } else {
              console.error('TDM', 'Failed to get torrent client data');
            }
          });
        }, 100);
      }
    });
  }

  /**
   * Fallback lookup when label-based matching fails.
   * Attempts to resolve the TMDB ID via Sonarr/Radarr external API,
   * then re-checks the torrent list. Results are cached in IndexedDB.
   * Non-blocking — always resolves silently on errors.
   *
   * @param {Object} movieData - Movie data from the 'full' event (e.object)
   * @param {Array} torrentData - Array of torrent objects from GetData
   * @param {string} activeClient - Active torrent client name
   */
  function performFallbackLookup(movieData, torrentData, activeClient) {
    // Extract movie info from event object
    var movie = movieData.data && movieData.data.movie ? movieData.data.movie : movieData;
    var method = movieData.method || (movie.first_air_date ? 'tv' : 'movie');
    var id = movieData.id || movie.id;
    var title = movie.title || movie.original_title || movie.name || '';
    var imdbId = movie.imdb_id || movieData.imdb_id;
    if (!id || !title) return;

    // Determine search strategy
    var searchPromise = null;
    if (method === 'tv' && imdbId) {
      searchPromise = searchSonarr('imdb:' + imdbId);
    } else if (method === 'tv') {
      searchPromise = searchSonarr(title);
    } else {
      searchPromise = searchRadarr(title);
    }
    if (!searchPromise) return;
    searchPromise.then(function (meta) {
      if (!meta || !meta.tmdb_id) return;

      // Re-check torrents with resolved TMDB ID
      var resolvedLabel = method + '/' + meta.tmdb_id;
      var resolvedTorrent = null;
      for (var i = 0; i < torrentData.length; i++) {
        var labels = torrentData[i].labels || [];
        if (labels.indexOf(resolvedLabel) !== -1) {
          resolvedTorrent = torrentData[i];
          break;
        }
      }
      if (resolvedTorrent) {
        // Cache the result so subsequent visits use IndexedDB directly
        saveMetadata(String(resolvedTorrent.id), {
          tmdb_id: meta.tmdb_id,
          media_type: method,
          torrent_id: resolvedTorrent.id,
          matched_via: meta.matched_via || 'external',
          updated_at: Date.now()
        })["catch"](function () {});
      }
    })["catch"](function () {
      // Silent fallback — never block UI on network errors
    });
  }

  /**
   * Utility functions for Torrent Manager plugin
   */

  /**
   * Create a panel navigation item for Lampa.Select.show
   * @returns {Function} Function that calls Lampa.Activity.push
   */
  function createPanelNavigationItem() {
    return function () {
      Lampa.Activity.push({
        url: '',
        title: String(Lampa.Storage.get('lmetorrentSelect') || '').toUpperCase() + " Manager",
        component: 'lmetorrentPanel',
        page: 1
      });
    };
  }

  var HeaderIconController = /*#__PURE__*/function () {
    function HeaderIconController(element) {
      _classCallCheck(this, HeaderIconController);
      this.element = $(element);
      this.bind();
      this.listen();
    }
    return _createClass(HeaderIconController, [{
      key: "bind",
      value: function bind() {
        this.element.on('hover:enter', this.showSidebar.bind(this));
      }
    }, {
      key: "listen",
      value: function listen() {
        TorrentStateManager$1.on('torrents:status_changed', this.updateColor.bind(this));
      }
    }, {
      key: "showSidebar",
      value: function showSidebar() {
        var torrents = TorrentStateManager$1.torrents.filter(function (torrent) {
          var state = String(torrent && torrent.state || '').toLowerCase();
          var isCompleted = Number(torrent && torrent.completed) >= 1;
          return !isCompleted && state.indexOf('finish') < 0;
        });
        var sortedTorrents = this.sortTorrents(torrents);
        var activeDownloads = torrents.filter(function (torrent) {
          var state = String(torrent && torrent.state || '').toLowerCase();
          return state.indexOf('download') >= 0 || state.indexOf('check') >= 0;
        }).length;
        // Create items for Lampa.Select.show
        var items = [
        // Panel navigation item
        //createPanelNavigationItem(),
        {
          title: String(Lampa.Storage.get('lmetorrentSelect') || '').toUpperCase() + " Manager",
          action: 'panel',
          onSelect: function onSelect() {
            createPanelNavigationItem()();
          }
        }].concat(_toConsumableArray(sortedTorrents.map(function (torrent) {
          return {
            title: "".concat(torrent.name, " (").concat(Math.round((torrent.completed || 0) * 100), "%)"),
            action: 'torrent',
            torrent: torrent
          };
        })));
        Lampa.Select.show({
          title: "Torrents (".concat(activeDownloads, "/").concat(TorrentStateManager$1.torrents.length, ")"),
          items: items,
          onBack: function onBack() {
            Lampa.Controller.toggle('content');
          },
          onSelect: function onSelect(item) {
            if (item.action === 'torrent') {
              showTorrentMenu(item.torrent, TorrentStateManager$1.torrents);
            } else if (item.action === 'panel') {
              item.onSelect();
            }
            // For summary item, we could show a general menu or just do nothing
          }
        });
      }
    }, {
      key: "sortTorrents",
      value: function sortTorrents(torrents) {
        return torrents.sort(function (a, b) {
          var aState = String(a && a.state || '').toLowerCase();
          var bState = String(b && b.state || '').toLowerCase();
          var aDownloading = aState.indexOf('download') >= 0;
          var bDownloading = bState.indexOf('download') >= 0;
          if (aDownloading && !bDownloading) return -1;
          if (!aDownloading && bDownloading) return 1;
          return String(b && b.id || '').localeCompare(String(a && a.id || ''));
        });
      }
    }, {
      key: "updateColor",
      value: function updateColor(event) {
        if (event.active) {
          this.element.css('color', 'yellow');
        } else {
          this.element.css('color', 'limegreen');
        }
      }
    }]);
  }();

  var TORRENT_ICON = "\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M12 4L12 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M16 10L12 14L8 10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n        <path d=\"M4 18H20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    </svg>\n";
  var DomInjector = /*#__PURE__*/function () {
    function DomInjector() {
      _classCallCheck(this, DomInjector);
    }
    return _createClass(DomInjector, [{
      key: "inject",
      value: function inject() {
        var iconElement = Lampa.Head.addIcon(TORRENT_ICON);
        iconElement.addClass('torrent-manager-icon');
        return new HeaderIconController(iconElement);
      }
    }]);
  }();
  var DomInjector$1 = new DomInjector();

  /**
   * Home Row integration for Torrent Manager.
   * Registers a Lampa.ContentRows line on the main screen showing
   * active torrents (downloading + seeding) with a "More" button
   * that navigates to the full lmetorrentPanel component.
   */

  // Quality detection regex matching panelItem.js for lmetorrent_item__card template
  var regexp2 = /(?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv/;

  /**
   * Build a CSS class string based on completion progress.
   * Copies getProgressClass from panelItem.js.
   * @param {number} progress - 0–100
   * @returns {string} CSS class name
   */
  function getProgressClass(progress) {
    if (progress >= 100) return 'is-high';
    if (progress >= 50) return 'is-mid';
    return 'is-low';
  }

  /**
   * Card class for rendering a single torrent item on the home screen row.
   * Implements the cardClass interface required by Lampa.ContentRows.
   * Adapts the lmetorrent_item__card template following main_channel.js pattern.
   */
  function HomeTorrentCard(torrentData, playlist) {
    var self = this;
    this.data = torrentData;
    this.playlist = playlist;
    this.card = null;
    this.create = function () {
      var progress = Number((self.data.completed * 100).toFixed(2));
      self.card = Lampa.Template.get('lmetorrent_item__card', {
        title: self.data.name,
        size: Lampa.Utils.bytesToSize(self.data.size, 0),
        state: getStandardizedStateName(self.data.state),
        'data-completed': progress,
        completed: progress + '%',
        image: self.data.image || '',
        image_src: '',
        quality: self.data.name && self.data.name.match(regexp2) ? self.data.name.match(regexp2).toString().replace(/[ .()]/g, '') : ''
      });
      self.card.find('.lmetorrent_card__completed').addClass(getProgressClass(progress));
      self.card.on('hover:enter', function () {
        showTorrentMenu(self.data, self.playlist);
      });
      self.card.on('hover:focus', function () {
        // Scroll tracking handled by the Lampa row system
      });
    };
    this.render = function (js) {
      return js ? self.card[0] : self.card;
    };
    this.destroy = function () {
      if (self.card) {
        self.card.remove();
        self.card = null;
      }
      self.data = null;
      self.playlist = null;
    };
    this.emit = function () {};
    this.use = function () {};
  }

  /**
   * Card class for the "More" button rendered as the last item in the home row.
   * Renders immediately with other cards (no IntersectionObserver delay).
   * Navigates to lmetorrentPanel on hover:enter.
   */
  function HomeMoreCard() {
    var self = this;
    this.card = null;
    this.create = function () {
      self.card = $('<div class="card-more selector">' + '<div class="card-more__box">' + '<div class="card-more__title">' + Lampa.Lang.translate('more') + '</div>' + '</div>' + '</div>');
      self.card.on('hover:enter', function () {
        Lampa.Activity.push({
          url: '',
          title: 'qBittorrent Manager',
          component: 'lmetorrentPanel',
          page: 1
        });
      });
    };
    this.render = function (js) {
      return js ? self.card[0] : self.card;
    };
    this.destroy = function () {
      if (self.card) {
        self.card.remove();
        self.card = null;
      }
    };
    this.emit = function () {};
    this.use = function () {};
  }

  /**
   * Process torrent list, filter to active ones, prepare callback data.
   * @param {Array} torrents - Array of torrent data objects
   * @param {Function} callback - ContentRows callback
   */
  function processTorrents(torrents, callback) {
    // Filter: only downloading and seeding torrents
    var activeTorrents = [];
    for (var i = 0; i < torrents.length; i++) {
      var state = classifyState$1(torrents[i].state);
      if (state === 'downloading' || state === 'seeding') {
        activeTorrents.push(torrents[i]);
      }
    }
    if (!activeTorrents.length) {
      callback(null);
      return;
    }

    // Limit to 6 cards max
    var displayItems = activeTorrents.slice(0, 6);

    // Set createInstance on each item for the cardClass interface
    Lampa.Utils.extendItemsParams(displayItems, {
      createInstance: function createInstance(item) {
        return new HomeTorrentCard(item, activeTorrents);
      }
    });

    // Add "More" card as the last item — rendered immediately with other cards
    // instead of relying on total_pages onVisible (IntersectionObserver delay).
    var moreItem = {
      params: {
        createInstance: function createInstance() {
          return new HomeMoreCard();
        }
      }
    };
    displayItems.push(moreItem);
    callback({
      title: 'Torrents',
      results: displayItems
    });
  }

  /**
   * Register the home screen content row for Torrent Manager.
   * Only shows on screen: ['main'], index 0 (first position).
   * Displays max 6 active torrents (downloading + seeding).
   * Navigates to lmetorrentPanel on "More" button.
   */
  function init$1() {
    if (!Lampa || !Lampa.ContentRows || typeof Lampa.ContentRows.add !== 'function') return;
    Lampa.ContentRows.add({
      name: 'lmetorrent_home',
      title: 'Torrents',
      index: 0,
      screen: ['main'],
      call: function call(params, screen) {
        return function (callback) {
          // Primary data source: TorrentStateManager.torrents (updated every 15s)
          var torrents = TorrentStateManager$1.torrents;

          // If state manager has no data yet, try direct API call
          if (!torrents || !torrents.length) {
            var client = Lampa.Storage.field('lmetorrentSelect');
            if (hasClient(client)) {
              executeClientMethod(client, 'GetData', [], {
                silentAuth: true
              }).then(function (data) {
                if (Array.isArray(data) && data.length) {
                  processTorrents(data, callback);
                } else {
                  callback(null);
                }
              })["catch"](function () {
                callback(null);
              });
              return;
            }
            callback(null);
            return;
          }
          processTorrents(torrents, callback);
        };
      }
    });
  }
  var HomeRow = {
    init: init$1
  };

  /**
   * Card Integration Module for Torrent Manager
   *
   * Adds torrent status indicators to catalog card icons.
   * Follows the exact pattern from MovieEnhancer/utils/wm_quality.js:
   *   - Hooks into Lampa.Maker.map('Card').Card.onVisible
   *   - Preserves original method via apply(self)
   *   - Uses inflight map to avoid duplicate API requests
   *   - Silent fallback on errors — never blocks UI
   *
   * Lookup chain:
   *   A. Direct label match in TorrentStateManager.torrents
   *   B. IndexedDB cache via db.getMetadataByTmdbId()
   *   C. External API (Sonarr/Radarr) for clients without labels
   */

  // Inflight map to prevent duplicate concurrent API requests for the same card
  var inflight = {};

  /**
   * Map raw torrent state string to a CSS-friendly status category.
   * Mirrors classifyState from panel/statusClassifier.js for consistency.
   *
   * @param {string} state - Raw torrent state string
   * @returns {string} Normalized status: downloading|seeding|completed|paused|checking|errored
   */
  function classifyState(state) {
    var n = (state || '').toLowerCase().trim();
    if (/^(downloading|metadl|forceddl|stalleddl|forcedmetadl|downloading metadata)$/.test(n)) return 'downloading';
    if (/^(uploading|forcedup|stalledup|seeding)$/.test(n)) return 'seeding';
    if (/^(finished)$/.test(n)) return 'completed';
    if (/^(pauseddl|pausedup|stoppeddl|stoppedup|stopped|paused)$/.test(n)) return 'paused';
    if (/^(checkingup|checkingdl|queuedup|queueddl|checking|queued|allocating|moving|waiting|verifying|extracting)/.test(n) || n.indexOf('queued to') >= 0 || n.indexOf('verify') >= 0) return 'checking';
    if (/^(missingfiles|error|unknown|errorstatus)$/.test(n)) return 'errored';
    return 'errored';
  }

  /**
   * Build SVG icon HTML for a given torrent status.
   * Icons are inline SVGs placed inside .card__icons-inner.
   *
   * @param {string} state - Normalized torrent status
   * @returns {string} SVG HTML string or empty string
   */
  function iconHtml(state) {
    var svgs = {
      downloading: '<svg class="card__torrent-icon card__torrent-icon--downloading" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M13 5v8h3l-4 5-4-5h3V5h2zm-9 12v2h16v-2H4z"/></svg>',
      seeding: '<svg class="card__torrent-icon card__torrent-icon--seeding" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M13 5v5h3l-4 5-4-5h3V5h2zm-9 10v4h16v-4H4z"/></svg>',
      completed: '<svg class="card__torrent-icon card__torrent-icon--complete" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>',
      paused: '<svg class="card__torrent-icon card__torrent-icon--paused" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>',
      checking: '<svg class="card__torrent-icon card__torrent-icon--checking" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
      errored: '<svg class="card__torrent-icon card__torrent-icon--errored" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
    };
    return svgs[state] || '';
  }

  /**
   * Find a torrent by label matching (mediaType/id) in the TorrentStateManager data.
   *
   * @param {Array} torrents - Array of torrent objects from TorrentStateManager
   * @param {string} mediaType - 'movie' or 'tv'
   * @param {number|string} id - TMDB ID
   * @returns {Object|null} Matching torrent or null
   */
  function findTorrentByLabels(torrents, mediaType, id) {
    var label = mediaType + '/' + id;
    for (var i = 0; i < torrents.length; i++) {
      var labels = torrents[i].labels || [];
      if (labels.indexOf(label) !== -1) return torrents[i];
    }
    return null;
  }

  /**
   * Render torrent status indicator on a card element.
   * Adds CSS classes and an SVG icon inside .card__icons-inner.
   *
   * @param {jQuery} $card - Card jQuery element (self.html from onVisible)
   * @param {Object} torrent - Matched torrent object
   */
  function renderStatus($card, torrent) {
    if (!$card || !$card.length) return;
    var state = classifyState(torrent.state);

    // Update CSS classes on the card
    $card.removeClass('card--torrent-active card--torrent-downloading card--torrent-seeding ' + 'card--torrent-complete card--torrent-paused');
    $card.addClass('card--torrent-active card--torrent-' + state);

    // Inject SVG icon into the icons container
    var $icons = $card.find('.card__icons-inner');
    if ($icons.length) {
      $icons.find('.card__torrent-icon').remove();
      $icons.append(iconHtml(state));
    }
  }

  /**
   * Initialize card integration.
   * Must be called once after Lampa is ready (from initializePlugin).
   * Hooks Card.onVisible to add torrent status icons on card render.
   */
  function init() {
    if (!Lampa.Maker) {
      console.error('TDM', 'Lampa.Maker is not defined!');
      return;
    }
    var card = Lampa.Maker.map('Card');
    if (!card || !card.Card) {
      console.error('TDM', 'card.Card is not defined!');
      return;
    }
    var onVisible = card.Card.onVisible;
    card.Card.onVisible = function () {
      var self = this;
      onVisible.apply(self); // Call original method first

      // Guard: card must have data
      if (!self.data) return;

      // Access movie info — data may be nested under .movie or at root
      var movie = self.data.movie || self.data;
      if (!movie || !movie.id) return;
      var id = movie.id;

      // Guard: skip non-numeric IDs (music cards, etc.)
      if (typeof id !== 'number' && !/^\d+$/.test(id)) {
        return;
      }
      var mediaType = movie.first_air_date ? 'tv' : 'movie';
      var title = movie.title || movie.original_title || movie.name || '';
      var imdbId = movie.imdb_id;

      // Wrap self.html in jQuery once for use in renderStatus calls
      var $card = $(self.html);

      // Step A: Direct label match in TorrentStateManager (fastest path)
      var torrents = TorrentStateManager$1.torrents;
      var torrent = null;
      if (torrents && torrents.length) {
        torrent = findTorrentByLabels(torrents, mediaType, id);
      }
      if (torrent) {
        // Store card data for live update lookup via torrents:updated
        self.html.dataset.torrentCardData = JSON.stringify({
          id: id,
          mediaType: mediaType
        });
        renderStatus($card, torrent);
        return;
      }

      // Prevent duplicate async lookups for the same card
      var inflightKey = String(id) + '_' + mediaType;
      if (inflight[inflightKey]) return;
      inflight[inflightKey] = true;

      // Step B: Check IndexedDB cache for previously resolved metadata
      getMetadataByTmdbId(id).then(function (cachedMeta) {
        if (cachedMeta && cachedMeta.torrent_id && torrents && torrents.length) {
          // Found cached match — verify torrent still exists in state manager
          for (var i = 0; i < torrents.length; i++) {
            if (torrents[i].id === cachedMeta.torrent_id) {
              self.html.dataset.torrentCardData = JSON.stringify({
                id: id,
                mediaType: mediaType
              });
              renderStatus($card, torrents[i]);
              delete inflight[inflightKey];
              return;
            }
          }
        }

        // Step C: External API search (Sonarr/Radarr) — only for visible cards
        var searchPromise = null;
        if (mediaType === 'tv' && imdbId) {
          // Prefer IMDB ID search for precise match
          searchPromise = searchSonarr('imdb:' + imdbId);
        } else if (mediaType === 'tv' && title) {
          searchPromise = searchSonarr(title);
        } else if (mediaType === 'movie' && title) {
          searchPromise = searchRadarr(title);
        }
        if (searchPromise) {
          searchPromise.then(function (meta) {
            if (meta && meta.tmdb_id) {
              // Check if a torrent exists for the resolved TMDB ID
              var resolvedTorrent = findTorrentByLabels(torrents, mediaType, meta.tmdb_id);
              if (resolvedTorrent) {
                self.html.dataset.torrentCardData = JSON.stringify({
                  id: id,
                  mediaType: mediaType
                });
                renderStatus($card, resolvedTorrent);

                // Cache the resolved mapping for future lookups
                saveMetadata(String(resolvedTorrent.id), {
                  tmdb_id: meta.tmdb_id,
                  media_type: mediaType,
                  torrent_id: resolvedTorrent.id,
                  matched_via: meta.matched_via || 'external',
                  updated_at: Date.now()
                });
              }
            }
          })["catch"](function () {
            // Silent fallback — never block UI on network errors
          }).then(function () {
            delete inflight[inflightKey];
          });
        } else {
          delete inflight[inflightKey];
        }
      })["catch"](function () {
        delete inflight[inflightKey];
      });
    };

    // Subscribe to live torrent updates to refresh visible card icons
    Lampa.Listener.follow('torrents:updated', function () {
      var torrents = TorrentStateManager$1.torrents;
      if (!torrents || !torrents.length) return;

      // Only update cards that already have torrent indicators
      $('.card--torrent-active').each(function () {
        var $card = $(this);
        var cardDataStr = this.dataset.torrentCardData;
        if (!cardDataStr) return;
        var cardData;
        try {
          cardData = JSON.parse(cardDataStr);
        } catch (e) {
          return;
        }
        var updatedTorrent = findTorrentByLabels(torrents, cardData.mediaType, cardData.id);
        if (updatedTorrent) {
          renderStatus($card, updatedTorrent);
        } else {
          // Torrent no longer exists — remove indicators
          $card.removeClass('card--torrent-active card--torrent-downloading card--torrent-seeding ' + 'card--torrent-complete card--torrent-paused');
          $card.find('.card__torrent-icon').remove();
        }
      });
    });
  }
  var CardIntegration = {
    init: init
  };

  /** 
   * Plugin manifest information
   */
  var MANIFEST = {
    type: 'other',
    version: '3.5.0-fork',
    author: '@beermix',
    name: 'qBittorrent Manager',
    description: 'qBittorrent Manager for Lampa',
    component: 'lmetorrent',
    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1024\" height=\"1024\" viewBox=\"0 0 1024 1024\"><defs><linearGradient x1=\"34.012%\" y1=\"0%\" x2=\"76.373%\" y2=\"76.805%\" id=\"qbt-grad\"><stop stop-color=\"#72B4F5\" offset=\"0%\"/><stop stop-color=\"#356EBF\" offset=\"100%\"/></linearGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><circle stroke=\"#DAEFFF\" stroke-width=\"32\" fill=\"url(#qbt-grad)\" cx=\"512\" cy=\"512\" r=\"496\"/><path d=\"M712.898 332.399q66.657 0 103.38 45.671 37.03 45.364 37.03 128.684t-37.34 129.61q-37.03 45.98-103.07 45.98-33.02 0-60.484-12.035-27.156-12.344-45.672-37.649h-3.703l-10.8 43.512h-36.724V196h51.227v116.65q0 39.191-2.469 70.359h2.47q35.796-50.61 106.155-50.61zm-7.406 42.894q-52.46 0-75.605 30.242-23.145 29.934-23.145 101.219t23.762 102.145q23.761 30.55 76.222 30.55 47.215 0 70.36-34.254 23.144-34.562 23.144-99.058 0-66.04-23.144-98.442-23.145-32.402-71.594-32.402z\" fill=\"#fff\"/><path d=\"M317.273 639.45q51.227 0 74.68-27.466 23.453-27.464 24.996-92.578v-11.418q0-70.976-24.07-102.144-24.07-31.168-76.223-31.168-45.055 0-69.125 35.18-23.762 34.87-23.762 98.75 0 63.879 23.454 97.515 23.761 33.328 70.05 33.328zm-7.715 42.894q-65.421 0-102.144-45.98-36.723-45.981-36.723-128.376 0-83.011 37.032-129.609 37.03-46.598 103.07-46.598 69.433 0 106.773 52.461h2.778l7.406-46.289h40.426V828h-51.227V683.27q0-30.86 3.395-52.461h-4.012q-35.488 51.535-106.774 51.535z\" fill=\"#c8e8ff\"/></g></svg>"
  };
  var SELECT_KEY = "".concat(MANIFEST.component, "Select");
  var SYNOLOGY_KEY = "lmetorrentsynologyKey";

  /**
   * Register all UI templates with Lampa
   */
  function registerTemplates() {
    // CSS styles
    Lampa.Template.add('lmemStyle', "\n        <style>\n            @charset 'UTF-8';.btnTDdownload{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}svg.btnTDdownload{width:36px;height:36px;margin-right:5%}.lmetorrent-error_body{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.lmetorrent-error_body .lmetorrent-error_result{margin-top:2em}.lmetorrent-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 2% 0 2%;margin:0 2% 2% 2%}.lmetorrent-header__update{white-space:nowrap}.lmetorrent-header__space{margin-left:auto}.lmetorrent-catalog--list.category-full{margin-left:0;padding:0 2.5%}.lmetorrent-catalog--state{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-height:45vh;padding:0 2%}.lmetorrent-state{max-width:46em;width:100%;text-align:center}.lmetorrent-state__title{font-size:1.35em;font-weight:600}.lmetorrent-state__description{margin-top:.8em;opacity:.85;line-height:1.4}.lmetorrent-state__actions{margin-top:1.3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:.7em}.lmetorrent-catalog--list.category-full .card.card--category .card__view{margin-bottom:.72em}.lmetorrent_card__completed{position:absolute;right:0;bottom:0;font-size:.8em;-webkit-border-radius:.3em;-moz-border-radius:.3em;padding:.4em .4em;border-radius:.3em;text-align:center;font-weight:bold;background-color:var(--background-color);color:var(--text-color)}.lmetorrent_card__completed.is-low{--background-color:#fcc;--text-color:#900}.lmetorrent_card__completed.is-mid{--background-color:#ffc;--text-color:#990}.lmetorrent_card__completed.is-high{--background-color:#cfc;--text-color:#090}.lmetorrent_card__state{left:0;top:0}.lmetorrent_card__size{left:0;bottom:0}.lmetorrent_card__size,.lmetorrent_card__state{position:absolute;padding:.4em .4em;background:#fff;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}@media screen and (max-width:900px){.lmetorrent-head{margin:0 2% 3% 2%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;row-gap:.6em}.lmetorrent-header__space{margin-left:0;width:100%;font-size:.95em;opacity:.85}.lmetorrent-catalog--list.category-full{margin-left:0;padding:0 1%}}@media screen and (max-width:767px){.lmetorrent-head{margin:0 2% 2.4% 2%;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;gap:.8em}.lmetorrent-header__update{font-size:1.12em}.lmetorrent-header__space{margin-left:auto;width:auto;font-size:1.08em;opacity:.98;white-space:nowrap}.lmetorrent-catalog--list.category-full{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0}.lmetorrent-catalog--list.category-full .card.card--category{width:33.3333% !important;min-width:0;padding-left:.22em;padding-right:.22em}}@media screen and (max-width:560px){.lmetorrent-head{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.lmetorrent-catalog--list.category-full{padding:0}.lmetorrent-catalog--list.category-full .card.card--category .card__view{margin-bottom:.5em}.lmetorrent_card__size,.lmetorrent_card__state,.lmetorrent_card__completed{font-size:.68em}}@media screen and (max-width:420px){.lmetorrent-head{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;row-gap:.55em}.lmetorrent-header__space{width:100%;margin-left:0}}.lmetorrent-item{margin-left:.5em;margin-right:.5em;margin-bottom:1em;width:-webkit-calc(14.2857142857% - 1em);width:calc(14.2857142857% - 1em);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:solid .01em #fff;-webkit-border-radius:.8em;border-radius:.8em}.lmetorrent-item.focus{border:solid .26em #fff}.lmetorrent-item__data{margin-bottom:.4em}.lmetorrent-item__state{top:.5em;left:.5em;padding:.1em .3em;font-weight:bold;-webkit-border-radius:.25em;border-radius:.25em;color:#292d32;background-color:#eee}.lmetorrent-item__badge>svg{width:1em;height:1em;vertical-align:bottom}.lmetorrent-item__name{font-size:1.1em;margin-top:.8em;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}@media screen and (max-width:580px){.lmetorrent-item{width:21%}}@media screen and (max-width:385px){.lmetorrent-item__name{display:none}}.torrent-manager-icon{--icon-status-color:limegreen;color:var(--icon-status-color)}.torrent-manager-sidebar{position:fixed;top:0;right:-350px;width:350px;height:100%;background-color:rgba(0,0,0,0.85);z-index:1000;-webkit-transition:right .3s;-o-transition:right .3s;transition:right .3s;color:white;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.torrent-manager-sidebar.visible{right:0}.torrent-manager-sidebar__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;font-weight:bold;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.torrent-manager-sidebar__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:10px;overflow-y:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px;background-color:rgba(255,255,255,0.1);-webkit-border-radius:5px;border-radius:5px;cursor:pointer;gap:10px}.torrent-manager-sidebar__item:hover{background-color:rgba(255,255,255,0.2)}.torrent-manager-sidebar__item-name{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item-percent{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmetorrent-section{padding-bottom:1.5em}.lmetorrent-section__icon{margin-right:.4em}.lmetorrent-section__count{margin-left:.5em;opacity:.6;font-size:.85em}.lmetorrent-section .mapping--line .card--category{width:12em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.lmetorrent-section-view{width:100%;min-height:45vh}.lmetorrent-section-view__grid{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 2%}.lmetorrent-section-view .card--category{width:14.5%;margin:0 .5% 1em}@media screen and (max-width:767px){.lmetorrent-section-view .card--category{width:30%}}.lmetorrent-section .card-more{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:12.75em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:18em}.lmetorrent-section .card-more .card-more__box{-webkit-transition:border-color .2s,-webkit-transform .3s;transition:border-color .2s,-webkit-transform .3s;-o-transition:transform .3s,border-color .2s;transition:transform .3s,border-color .2s;transition:transform .3s,border-color .2s,-webkit-transform .3s;background:rgba(0,0,0,0.3);-webkit-border-radius:1em;border-radius:1em;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative}.lmetorrent-section .card-more .card-more__title{position:absolute;top:50%;left:0;right:0;text-align:center;font-size:1.8em;font-weight:300;margin-top:-0.7em}.lmetorrent-section .card-more.focus .card-more__box::after{content:'';position:absolute;top:-0.5em;left:-0.5em;right:-0.5em;bottom:-0.5em;border:.3em solid #fff;-webkit-border-radius:1.4em;border-radius:1.4em;z-index:-1}.lmetorrent-section .card-more--fixed-size{display:block}@media screen and (min-width:64em){body.size--bigger .lmetorrent-section .card-more{font-size:1.14em}}\n        </style>\n    ");

    // Header template
    Lampa.Template.add('lmetorrent_header', "<div class=\"lmetorrent-header__data lmetorrent-header__update simple-button selector\">Update</div>\n          <div class=\"lmetorrent-header__data lmetorrent-header__space\">Free space: {space}</div>\n        ");

    // List item template
    Lampa.Template.add('lmetorrent_item', "<div class=\"card selector lmetorrent-item\">\n            <div class=\"lmetorrent-item__data lmetorrent-item__name\">{name}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__state\">{state}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__progress\">{size} / {completed}</div>\n        </div>");

    // Card item template
    Lampa.Template.add('lmetorrent_item__card', "<div class=\"card card--category selector layer--visible layer--render\">\n            <div class=\"card__view\">\n                <img src=\"{image}\" data-src=\"{image_src}\" alt=\"{title}\" class=\"card__img\">\n                <div class=\"card__icons\">\n                    <div class=\"card__icons-inner\">\n                    </div>\n                </div>\n                <div class=\"lmetorrent_card__state\">{state}</div>\n                <div class=\"lmetorrent_card__size\">{size}</div>\n                <div class=\"lmetorrent_card__completed\" data-completed=\"{data-completed}\">{completed}</div>\n            </div>\n        </div>");
  }

  /**
   * Check if a session key date is older than 5 days
   * 
   * @param {number} keyDate - Timestamp of the key creation date
   * @returns {boolean} - True if the key is old or doesn't exist
   */
  function isKeyDateOld(keyDate) {
    if (!keyDate) {
      return true;
    }
    var currentTimestamp = Math.floor(Date.now() / 1000);
    var fiveDaysInSeconds = 5 * 24 * 60 * 60;
    var timestampFiveDaysAgo = currentTimestamp - fiveDaysInSeconds;
    return keyDate < timestampFiveDaysAgo;
  }

  /**
   * Create and add menu button for the plugin
   * 
   * @returns {JQuery} - The created button element
   */
  function createMenuButton() {
    return Lampa.Menu.addButton(MANIFEST.icon, MANIFEST.name, createPanelNavigationItem());
  }

  /**
   * Initialize client authentication based on selected client
   */
  function initializeClientAuth() {
    var selectedClient = "qBittorent";
    var clientAuthHandlers = {
      qBittorent: function qBittorent() {
        return Qbittorent.auth(false)["catch"](function () {});
      }
    };
    var authHandler = clientAuthHandlers[selectedClient];
    if (authHandler) {
      authHandler();
    }
  }

  /**
   * Main plugin initialization function
   */
  function initializePlugin() {
    try {
      // Initialize language support
      Component$1();

      // Register UI templates
      registerTemplates();

      // Register panel component
      Lampa.Component.add('lmetorrentPanel', Component);

      // Register section view component for "more" navigation
      Lampa.Component.add('lmetorrentSectionView', SectionView);

      // Register plugin in manifest
      Lampa.Manifest.plugins = MANIFEST;

      // Add menu button
      torrentInfo();
      createMenuButton();

      // Add CSS styles
      $('body').append(Lampa.Template.get('lmemStyle', {}, true));

      // Initialize configuration
      Main$1(MANIFEST);

      // Initialize downloader
      Send();

      // Initialize mytorrents integration
      MyTorrents();

      // Initialize client authentication
      initializeClientAuth();

      // Initialize new header feature
      DomInjector$1.inject();
      TorrentStateManager$1.start();
      HomeRow.init();

      // Initialize card integration for torrent status indicators
      try {
        CardIntegration.init();
      } catch (error) {
        console.error('TDM', 'Error initializing CardIntegration:', error);
      }
    } catch (error) {
      console.error('TDM', 'Error initializing Torrent Manager plugin:', error);
    }
  }

  /**
   * Start the plugin when Lampa is ready
   */
  function startPlugin() {
    window.plugin_lmetorrent_ready = true;
    if (window.appready) {
      initializePlugin();
    } else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') {
          initializePlugin();
        }
      });
    }
  }

  // Initialize the plugin if not already initialized
  if (!window.plugin_lmetorrent_ready) {
    startPlugin();
  }

})();
