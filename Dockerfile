# 使用基础的Node.js镜像
FROM node:16-alpine as builder
RUN npm install -g pnpm
# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json文件到工作目录
COPY ["package.json", "pnpm-lock.yaml", "./"]
# 安装项目依赖
RUN pnpm i

# 复制项目文件到工作目录
COPY . .

# 构建项目
ENV NODE_ENV production
RUN pnpm build

# 将构建后的代码复制到 nginx 镜像中
FROM nginx:alpine
COPY --from=builder app/dist/ /Users/jinjin/etc/docker/nginx/html

ENV PORT=8080
# 暴露 80 端口
EXPOSE 80

# 启动应用程序
CMD ["nginx"]