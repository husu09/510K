cd /d %~dp0
protoc --proto_path=proto --java_out=..\game-common\src\main\java\ proto\*.proto
protoc --proto_path=proto --java_out=..\game-client\src\main\java\ proto\*.proto
::protoc --proto_path=proto --js_out=import_style=commonjs,binary:.\js-proto\ .\proto\*.proto
::"protogen 2.3.16\net462\protogen" --proto_path=.\\proto\\ *.proto --csharp_out=csharp-proto +langver=3
pause