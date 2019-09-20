FROM ubuntu:18.04

RUN apt-get update && \
      apt-get -y install sudo \
      && apt-get install curl -y

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

RUN apt-get update \
	&& apt-get install build-essential -y \
    && sudo apt-get install gcc g++ make \
	&& apt-get install -y --no-install-recommends dh-autoreconf \
	&& sudo apt-get install -y nodejs \
	&& npm install -g yarn \
	&& npm install -g rimraf \
	&& npm install -g eslint