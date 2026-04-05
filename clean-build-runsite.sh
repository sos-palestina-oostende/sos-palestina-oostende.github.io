#! /usr/bin/env bash

# remove earlier build artifacts
rm -rf public/ assets/css/main.css

# dan met tailwind de main.css bouwen met een Watcher in de ACHTERGROND (&) 
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/main.css
# voor synchrone file-watching terwijl Hugo draait
# opmerking heeft --watch=always en </dev/null nodig om te voorkomen dat Tailwind meteen stopt als zijn stdin opdroogt
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/main.css --watch=always < /dev/null & 

# Sla het Proces-ID van Tailwind op zodat we het naderhand mee kunnen afsluiten
TW_PID=$!
echo "Tailwind watcher gestart met PID: $TW_PID"

# 3. Start Hugo Server
# Hugo ziet nu de main.css verschijnen en zal via LiveReload je browser verversen
hugo server -D

# 4. Cleanup: als je Hugo stopt (Ctrl+C), stopt ook de Tailwind watcher door:
kill $TW_PID