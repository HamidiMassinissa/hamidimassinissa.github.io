# pull official base image
FROM node:10.21.0-jessie

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
RUN yarn --version
RUN yarn install
# RUN npm install react-scripts@3.4.1 -g --silent

COPY scripts/gulp.js ./
COPY gulpfile.js ./
COPY webpack.config.js ./
# RUN yarn build
RUN ls ./
RUN node --version
RUN node gulp.js build

# add app
COPY . ./

# start app
# CMD ["npm", "start"]
CMD ["yarn", "start"]
