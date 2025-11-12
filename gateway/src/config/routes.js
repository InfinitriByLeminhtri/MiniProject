import { createProxyMiddleware } from "http-proxy-middleware";

export const registerProxies = (app) => {
  app.use(
    "/api/auth",
    createProxyMiddleware({ 
      target: process.env.AUTH_SERVICE_URL, 
      changeOrigin: true 
    })
  );

  app.use(
    "/api/quiz",
    createProxyMiddleware({ 
      target: process.env.QUIZ_SERVICE_URL, 
      changeOrigin: true 
    })
  );

  app.use(
    "/api/result",
    createProxyMiddleware({ 
      target: process.env.RESULT_SERVICE_URL, 
      changeOrigin: true 
    })
  );
};
