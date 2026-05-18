class ApiPage {
  baseUrl = Cypress.env('apiBaseUrl');

  endpoints = {
    posts: '/posts',
    postById: '/posts/{id}',
  };

  data = {
    newPost: {
      title: 'Test Post Title',
      body: 'This is the body of the test post',
      userId: 1,
    },
    existingPostId: 1,
  };

  getPostsUrl() {
    return this.baseUrl + this.endpoints.posts;
  }

  getPostByIdUrl(id) {
    return this.baseUrl + this.endpoints.postById.replace('{id}', id);
  }
}

export default ApiPage;
