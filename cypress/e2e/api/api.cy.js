import ApiPage from '../../pages/ApiPage';

describe('API Tests - JSONPlaceholder', () => {
  const apiPage = new ApiPage();

  describe('GET Requests', () => {
    it('should get all posts', () => {
      cy.request('GET', apiPage.getPostsUrl()).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
      });
    });

    it('should get a single post by id', () => {
      const { existingPostId } = apiPage.data;
      cy.request('GET', apiPage.getPostByIdUrl(existingPostId)).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', existingPostId);
        expect(response.body).to.have.property('title');
        expect(response.body).to.have.property('body');
        expect(response.body).to.have.property('userId');
      });
    });

    it('should return 404 for non-existing post', () => {
      cy.request({
        method: 'GET',
        url: apiPage.getPostByIdUrl(9999),
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });

  describe('POST Requests', () => {
    it('should create a new post', () => {
      const { newPost } = apiPage.data;
      cy.request('POST', apiPage.getPostsUrl(), newPost).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('title', newPost.title);
        expect(response.body).to.have.property('body', newPost.body);
        expect(response.body).to.have.property('userId', newPost.userId);
        expect(response.body).to.have.property('id');
      });
    });

    it('should create a post and verify response structure', () => {
      const { newPost } = apiPage.data;
      cy.request('POST', apiPage.getPostsUrl(), newPost).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.headers).to.have.property('content-type');
        expect(response.duration).to.be.lessThan(5000);
      });
    });
  });
});
