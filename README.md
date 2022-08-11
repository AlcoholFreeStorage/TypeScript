- npm i option
1. -D 옵션을 추가한 경우 devDependencies에 패키지들이 추가된다.
이 경우, --production 옵션을 추가하여 배포할 프로젝트를 빌드할 때, devDependencies에 있는 패키지들은 포함되지 않는다.
2. -g 옵션을 추가한 경우, 해당 패키지를 전역으로 설치한다. 시스템상에 있는 모든 node_modules 디렉터리에 해당하는 패키지를 설치한다는 것을 뜻한다. 즉, 이미 세팅되어져 있는 다른 프로젝트에서 해당 패키지를 사용할 수 있게된다.
3. -S 는 모르겠습니다 .아시는 분 코멘트좀...
 
```
npm init --y
npm i -D typescript ts-node @types/node
```

디렉토리를 생성하고 삭제하는 기능을 구현하기 위해서는 다음 두 패키지를 설치 해야합니다.
```
npm i -S mkdirp rimraf 
npm i -D @types/mkdirp @tpyes/rimraf
```

CSV파일 포맷으로 배열을 저장합니다. 
chance 패키지를 이용해서 가짜 더미 데이터를 만듬니다.
```
npm i -S chance
npm i -D @types/chance
```

```
mkdir -p src/fileApi
mkdir src/fake
mkdir src/csv
mkdir src/utils
mkdir src/test
```
---
JSON파일은 시스템 메모리를 많이 사용하므로 CSV(공공데이터 Api에서 많이 보임)을 사용합니다 
CSV (comma seperated values)
ex ) name,email, ip,phone 와 같은 ,(콤마)를 통해서 구분지어 집니다.

CSV의 가장큰 장점은 맨 첫줄의 헤더 정보를 ,로 구분해 놓으면 다음 줄부터는 알아서 구분해줍니다.
또한 CSV파일은 전체의 데이터를 한번에 읽지 않고 한줄씩 읽습니다. 

6장에서 설명한 생성기를 사용하면 시스템 자원을 매우 적게 사용하면서 엄청난 분량의 데이터를 처리할 수 있게 합니다. 

CSV -> 타입스크립트의 객체  -> yield문으로 for ..of을 이용합니다.
---

SQL에 적절한 작업이라... -> mongoDB는 noSQL인데 그럼 적합하지 않나요?


--- 

```
ts-node src/test/processArgs-test.ts data/fake.csv 10000
```

# TypeScript
