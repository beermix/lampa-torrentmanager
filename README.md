# Lampa Torrent Manager (Fork)

Форк официального плагина **Torrent Manager** (`lampame/torrentmanager`) для приложения **Lampa** с исправлениями для прямого подключения к **qBittorrent** (включая роутеры OpenWrt, NAS и локальные серверы).

---

## 🛠 Что исправлено в этом форке

1. **Исправлена ошибка CORS `501 Not Implemented`:**
   - В оригинальном плагине при любых запросах к qBittorrent отправлялся заголовок `Authorization: Bearer <key>`.
   - Наличие нестандартного заголовка `Authorization` заставляло браузер / Android WebView отправлять предварительный preflight-запрос `OPTIONS`.
   - Встроенный веб-сервер qBittorrent не поддерживает метод `OPTIONS` и возвращает `HTTP 501 Not Implemented`, из-за чего Lampa выдавала ошибку: **«Действие вернуло ошибку»**.
   - **В форке:** заголовок `Authorization` отправляется **только** при включённом прокси (`useProxy`). При прямом подключении по локальной сети запросы остаются стандартными (CORS simple requests), preflight-запрос не отправляется, и qBittorrent отвечает корректно.

2. **Необязательный API Key:**
   - Оригинальный плагин требовал обязательного заполнения поля `apiKey` даже при работе в доверенной подсети без авторизации (`AuthSubnetWhitelist`), выдавая ошибку валидации.
   - **В форке:** если qBittorrent настроен на работу в локальной сети без пароля, проверка подключения проходит успешно даже с пустым ключом.

3. **Корректная обработка `HTTP 409 Conflict`:**
   - Если торрент уже добавлен в qBittorrent, плагин выводит понятное уведомление **«Торрент уже в списке закачек»** вместо системной ошибки.

---

## 🚀 Установка плагина в Lampa

В приложении Lampa перейдите в:
> **Настройки** → **Расширения (Плагины)** → **Добавить плагин**

Вставьте одну из ссылок:

- **CDN jsDelivr (Рекомендуется):**
  ```text
  https://cdn.jsdelivr.net/gh/beermix/lampa-torrentmanager@main/torrentmanager.js
  ```
- **GitHub Raw:**
  ```text
  https://raw.githubusercontent.com/beermix/lampa-torrentmanager/main/torrentmanager.js
  ```
- **Локально с роутера (если файл скопирован в `/www` OpenWrt):**
  ```text
  http://192.168.1.1/torrentmanager.js
  ```

После добавления перезапустите Lampa.

---

## ⚙️ Настройка qBittorrent

### 1. Настройка в Lampa
Перейдите в **Настройки** → **LME Torrent Manager** → **qBittorrent**:
- **Адрес:** `http://192.168.1.1:8080` *(или IP:порт вашего qBittorrent)*
- **API ключ:** можно оставить пустым (или ввести любой символ)
- Нажмите **«Проверить подключение»** → должно появиться уведомление: **«Авторизация успешна»**.

### 2. Настройка qBittorrent (для работы без пароля в локальной сети)
В файле конфигурации `qBittorrent.conf` (или через WebUI в разделе «Веб-интерфейс»):
```ini
[Preferences]
WebUI\AuthSubnetWhitelist=192.168.1.0/24
WebUI\AuthSubnetWhitelistEnabled=true
WebUI\CSRFProtection=false
WebUI\CustomHTTPHeaders=Access-Control-Allow-Origin:*
```
*(где `192.168.1.0/24` — ваша домашняя подсеть)*
