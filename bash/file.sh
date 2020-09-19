
function  scanDirectory {
    msg=$1
    folder=$2
    
    printf "folder=%s,msg=%s\n" "${folder}" "${msg}"
    
    for file in $folder; do
        # printf '%s\n' "$file"

        if [ -f "$file" ]
        then
            
            if [[ ! $file == *"node_modules"* ]] && [[ ! $file == *"python"* ]]; then
                # cb "$file"
                $3 "$file"
                # printf '%s\n' "$file"
            fi
            
        fi
        
        # printf '%s\n' "$file"
    done
}
