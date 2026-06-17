I'm starting a work session on i_ckam (https://github.com/dob-0/i_ckam).

i_ckam is a digital face-recognition access control system for events:
- Device: ESP32-CAM (Arduino firmware streams MJPEG video)
- Backend: Python FastAPI server — ingests camera stream, runs face detection, relays via WebRTC
- Frontend: Browser portal — operators see live feed, approve/deny faces, view event log

Key files:
- `firmware/esp32cam/esp32cam.ino` — Arduino sketch for ESP32-CAM
- `server/main.py` — FastAPI server (face detection + WebRTC)
- `server/static/index.html` — operator web portal

Do the following:
1. Fetch https://raw.githubusercontent.com/dob-0/i_ckam/main/server/main.py (first 100 lines)
2. Fetch https://raw.githubusercontent.com/dob-0/i_ckam/main/README.md for any updates

Then report:
**i_ckam — session ready**

Current server status (from main.py): [what endpoints exist, what libraries are used]
Firmware: ESP32-CAM on Arduino — streams MJPEG to FastAPI
Frontend: WebRTC portal at server/static/index.html

Common tasks I can help with:
- Debugging the ESP32 camera stream
- Modifying face detection logic in main.py
- Updating the operator portal UI
- Adding face recognition (beyond detection)
- Multi-camera support

Ask me what I want to work on today.
