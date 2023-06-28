[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

# Introduction

This project demonstrates how to use CodeceptJS with GraphQL helper.

## How to use

This is done using CodeceptJS <https://codecept.io/>

### Tech

This test uses a number of open source projects to work properly:

* <https://nodejs.org/en/> - evented I/O for the backend
* <https://codecept.io/> - CodeceptJS
* <https://graphqlzero.almansi.me/api> - Endpoints that are used in this project

### Installation

This requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies.

```sh
cd codeceptjs-graphql-fun
npm i
```

### How to trigger API tests

To run all tests just simply type

```sh
npm test
```

Example output

```sh
> codeceptjs-graphql-fun@1.0.0 test
> codeceptjs run

CodeceptJS v3.4.1 #StandWithUkraine
Using test root "/Users/thanh.nguyen/Desktop/codeceptjs-graphql-fun"

Post --
  ✔ Get all posts successfully in 617ms
  ✔ Get a post successfully in 374ms
  ✔ Create a post successfully in 461ms

  OK  | 3 passed   // 1s
```

With verbose mode

```sh
CodeceptJS v3.4.1 #StandWithUkraine
Using test root "/Users/thanh.nguyen/Desktop/codeceptjs-graphql-fun"
Helpers: GraphQL
Plugins: screenshotOnFail

Post --
    [1]  Starting recording promises
    Timeouts: 
  Get all posts successfully
    I send query "query (
    $options: PageQueryOptions
  ) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }", {"options":{"paginate":{"page":1,"limit":5}}}
    › [Request] {"baseURL":"https://graphqlzero.almansi.me/api","method":"POST","data":{"query":"query (\n    $options: PageQueryOptions\n  ) {\n    posts(options: $options) {\n      data {\n        id\n        title\n      }\n      meta {\n        totalCount\n      }\n    }\n  }","variables":{"options":{"paginate":{"page":1,"limit":5}}}},"headers":{"Content-Type":"application/json"}}
    › [Response] {"data":{"posts":{"data":[{"id":"1","title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"},{"id":"2","title":"qui est esse"},{"id":"3","title":"ea molestias quasi exercitationem repellat qui ipsa sit aut"},{"id":"4","title":"eum et est occaecati"},{"id":"5","title":"nesciunt quas odio"}],"meta":{"totalCount":100}}}}
  ✔ OK in 625ms

  Get a post successfully
    I send query "query {post(id: 1) {id title body}}"
    › [Request] {"baseURL":"https://graphqlzero.almansi.me/api","method":"POST","data":{"query":"query {post(id: 1) {id title body}}"},"headers":{"Content-Type":"application/json"}}
    › [Response] {"data":{"post":{"id":"1","title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}}}
  ✔ OK in 516ms

  Create a post successfully
    I send mutation "mutation ($input: CreatePostInput!) { createPost(input: $input) {id title body}}", {"input":{"title":"A Very Captivating Post Title","body":"Some interesting content."}}
    › [Request] {"baseURL":"https://graphqlzero.almansi.me/api","method":"POST","data":{"query":"mutation ($input: CreatePostInput!) { createPost(input: $input) {id title body}}","variables":{"input":{"title":"A Very Captivating Post Title","body":"Some interesting content."}}},"headers":{"Content-Type":"application/json"}}
    › [Response] {"data":{"createPost":{"id":"101","title":"A Very Captivating Post Title","body":"Some interesting content."}}}
  ✔ OK in 586ms


  OK  | 3 passed   // 2s
```