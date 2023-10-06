const request = require("supertest");
const { app, server } = require("../app.js");

describe("Security Headers and CORS Tests", () => {
  describe("Helmet Security Headers", () => {
    it("should contain X-Frame-Options set to DENY", async () => {
      const response = await request(app).get("/");
      expect(response.headers["x-frame-options"]).toBe("DENY");
    });

    it("should contain security headers", async () => {
      const response = await request(app).get("/");
      expect(response.headers).toHaveProperty("content-security-policy");
      expect(response.headers["x-dns-prefetch-control"]).toBe("off");
      expect(response.headers).toHaveProperty("strict-transport-security");
      expect(response.headers["x-download-options"]).toBe("noopen");
      expect(response.headers["x-content-type-options"]).toBe("nosniff");
    });
  });

  describe("CORS", () => {
    it("should allow CORS for whitelisted domain w-15-clientx.netlify.app", async () => {
      const response = await request(app)
        .get("/sample")
        .set("Origin", "https://w-15-clientx.netlify.app");
      expect(response.headers["access-control-allow-origin"]).toBe(
        "https://w-15-clientx.netlify.app"
      );
    });

    it("should allow CORS for whitelisted domain w-15-clienty.netlify.app", async () => {
      const response = await request(app)
        .get("/sample")
        .set("Origin", "https://w-15-clienty.netlify.app");
      expect(response.headers["access-control-allow-origin"]).toBe(
        "https://w-15-clienty.netlify.app"
      );
    });

    it("should not allow CORS for non-whitelisted domains", async () => {
      const response = await request(app)
        .get("/sample")
        .set("Origin", "https://random-domain.com");
      expect(response.headers).not.toHaveProperty(
        "access-control-allow-origin"
      );
    });

    it("should allow only GET and POST for w-15-clientx.netlify.app", async () => {
      const response = await request(app)
        .options("/sample")
        .set("Origin", "https://w-15-clientx.netlify.app")
        .set("Access-Control-Request-Method", "DELETE");
      expect(response.status).toBe(204);
      expect(response.headers["access-control-allow-methods"]).not.toContain(
        "DELETE"
      );
    });
  });

  afterAll((done) => {
    server.close(done);
  });
});
