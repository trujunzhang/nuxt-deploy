#!/bin/bash

CURRENT=`pwd`

projectPath="${CURRENT}"

    echo "                         "
    echo "========================="
    echo "$projectPath"
    echo "========================="
    echo "                         "

function project_update {
    path=$1
    echo "                         "
    echo "========================="
    echo "$path"
    echo "========================="
    echo "                         "

    cd "${path}"

    rm -f "${path}/pubspec.lock"
    flutter pub upgrade --major-versions 

    # rm "${path}/pubspec.lock"
    # flutter packages get
}

project_update  "${projectPath}/plugin/app_config"
project_update  "${projectPath}/plugin/app_language"
project_update  "${projectPath}/plugin/app_sql"
project_update  "${projectPath}/plugin/app_theme"
project_update  "${projectPath}/plugin/GeoFlutterFire"
project_update  "${projectPath}/plugin/getx_firebase"
