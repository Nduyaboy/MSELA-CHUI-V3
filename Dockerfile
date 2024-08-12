FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/PRINCE-GDS/PRINCE-MD-BOT /root/prince

WORKDIR /root/prince/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
