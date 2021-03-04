import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }] // 添加src文件夹'@'别名
  },
    server: {
        port: 3000, // 开发服务器端口号
        open: true, // 默认打开
    },
});
