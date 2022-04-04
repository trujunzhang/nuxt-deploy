#!/bin/bash

PROJECT_DIR="/Users/djzhang/Documents/Organizations/__CODING/WORKING/flutter-ieatta-lerna/packages/appGetx/lib/app/ui/pages"
#LOG_DIR="$PROJECT_DIR/detail/recipe"
LOG_DIR="$PROJECT_DIR/restaurants"

find "$LOG_DIR" -maxdepth 4 -mindepth 1 -type f | while read filepath; do
    parentPath="$(dirname "$filepath")"
    #    echo "$parentPath"
    #    echo "$filepath"
    if [[ $filepath == *"binding.dart"* ]]; then
        if [ ! -f "${parentPath}/bindings.dart" ]; then
            nextPath="${parentPath}/bindings.dart"
            echo "$nextPath"
            mv "$filepath" "$nextPath"
        fi
    fi
    if [[ $filepath == *"controller.dart"* ]]; then
        if [ ! -f "${parentPath}/controller.dart" ]; then
            nextPath="${parentPath}/controller.dart"
            echo "$nextPath"
            mv "$filepath" "$nextPath"
        fi
    fi
    if [[ $filepath == *"page.dart"* ]]; then
        if [ ! -f "${parentPath}/page.dart" ]; then
            nextPath="${parentPath}/view.dart"
            echo "$nextPath"
            mv "$filepath" "$nextPath"
        fi
    fi
    if [[ $filepath == *"controller.dart"* ]]; then
        if [ ! -f "${parentPath}/state.dart" ]; then
            nextPath="${parentPath}/state.dart"
            echo "$nextPath"
            touch "${nextPath}"
        fi
        if [ ! -f "${parentPath}/index.dart" ]; then
            nextPath="${parentPath}/index.dart"
            echo -e "library category; \n\nexport './bindings.dart'; \nexport './view.dart'; \nexport './state.dart'; \nexport './controller.dart'; \n" > "$nextPath"
        fi
    fi
done
