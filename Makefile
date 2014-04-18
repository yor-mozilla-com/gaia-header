MANIFESTS=./manifest.appcache ./manifest.webapp
HTMLS=./index.html ./.html
JAVASCRIPTS=./js/main.js ./custom/js/headers.js
MEDIAS=./images/* ./shared/*
FILES=${MANIFESTS} ${HTMLS} ${JAVASCRIPTS} ${MEDIAS}

zip:
	zip -r header.zip `echo ${FILES}`
