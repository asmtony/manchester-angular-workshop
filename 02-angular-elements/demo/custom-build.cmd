cd ..
call ng build --prod --output-hashing=none
cd demo
copy /Y ..\dist\hello-world\*.js *.*
node serve
