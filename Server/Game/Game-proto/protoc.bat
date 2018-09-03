cd /d %~dp0
protoc --proto_path=proto --java_out=..\game-common\src\main\java\ proto\*.proto
protoc --proto_path=proto --java_out=..\game-client\src\main\java\ proto\*.proto
pause