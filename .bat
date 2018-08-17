echo Please input the page what you want to bundle!
set/p name=
echo now you are bundling the page:%name%

cmd /k "npm run build"