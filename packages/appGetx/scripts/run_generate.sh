CURRENT=`pwd` 

projectPath="${CURRENT}"
if [ ! -f  "${CURRENT}/pubspec.lock" ]; then
    projectPath="$(dirname "${CURRENT}")"
fi    

appLanguagePath="${projectPath}/plugin/app_language"

echo "[current]: ${CURRENT}"
echo "[projectPath]: ${projectPath}"

cd "${appLanguagePath}"
flutter packages get
flutter pub run intl_utils:generate



