FROM nginx:1.14-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY build/index.html /usr/share/nginx/dist/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]