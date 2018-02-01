FROM node:8.9.3-alpine
EXPOSE 3000
RUN apk add --no-cache tini # this runs when doing docker build
WORKDIR /app
ADD app.js /app/

ENTRYPOINT ["/sbin/tini", "--", "node"] # use tini to run node, and open CMD to run

CMD ["/app/app.js"] # this runs in run-time when doing docker run
