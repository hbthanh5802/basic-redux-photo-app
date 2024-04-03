# Build reactjs vite app with production mode
npm run build

# Move to build folder
cd dist

# Clone index.html into 200.html
cp index.html 200.html

# Start deploying via Surge
surge . redux-photo-app-thank.surge.sh
