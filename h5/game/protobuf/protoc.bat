cd /d %~dp0
call pb-egret generate
copy library\protobuf-library.js ..\bin\libs
copy bundles\protobuf-bundles.js  ..\bin\libs
pause