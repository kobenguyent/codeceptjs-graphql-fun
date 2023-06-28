import expect from "expect";
const { I } = inject();

Feature('Post');

Scenario('Get all posts successfully', async () => {
  const response = await I.sendQuery(`query (
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
  }`, {
    "options": {
      "paginate": {
        "page": 1,
        "limit": 5
      }
    }
  });

  expect(response.data.data.posts.data.length).toEqual(5);
});

Scenario('Get a post successfully', async () => {
    const response = await I.sendQuery("query {post(id: 1) {id title body}}");

    expect(response.data.data.post.id).toEqual('1');
    expect(response.data.data.post.title).toEqual('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
});

Scenario('Create a post successfully', async () => {
    const response = await I.sendMutation("mutation ($input: CreatePostInput!) { createPost(input: $input) {id title body}}", {
        "input": {
          "title": "A Very Captivating Post Title",
          "body": "Some interesting content."
        }
      });

    expect(response.data.data.createPost.id).toBeDefined();
    expect(response.data.data.createPost.title).toEqual('A Very Captivating Post Title');
});