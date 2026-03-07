import { createApp } from "./app";

const PORT = 5000;

(async () => {
  const  app  = await createApp();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})();